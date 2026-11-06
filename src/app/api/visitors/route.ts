import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const COUNTER_NAMESPACE = "fajartrans-madiun-official";
const ABACUS_BASE_URL = "https://abacus.jasoncameron.dev";

export interface VisitorStats {
  today: number;
  week: number;
  month: number;
  year: number;
  total: number;
  updatedAt: string;
}

interface LocalStoreData {
  total: number;
  buckets: Record<string, number>;
}

// Fallback in-memory + /tmp store in case external counter service is unreachable
const globalForVisitors = globalThis as unknown as {
  __fajarVisitorStore?: LocalStoreData;
};

const TMP_FILE_PATH = path.join(os.tmpdir(), "fajartrans-visitors-store.json");

function readLocalStore(): LocalStoreData {
  if (globalForVisitors.__fajarVisitorStore) {
    return globalForVisitors.__fajarVisitorStore;
  }
  try {
    if (fs.existsSync(TMP_FILE_PATH)) {
      const raw = fs.readFileSync(TMP_FILE_PATH, "utf-8");
      const parsed = JSON.parse(raw) as LocalStoreData;
      globalForVisitors.__fajarVisitorStore = parsed;
      return parsed;
    }
  } catch {
    // Ignore file read errors in restricted environments
  }
  const initial: LocalStoreData = { total: 0, buckets: {} };
  globalForVisitors.__fajarVisitorStore = initial;
  return initial;
}

function writeLocalStore(data: LocalStoreData) {
  globalForVisitors.__fajarVisitorStore = data;
  try {
    fs.writeFileSync(TMP_FILE_PATH, JSON.stringify(data), "utf-8");
  } catch {
    // Ignore file write errors
  }
}

/**
 * Menghitung key tanggal berdasarkan zona waktu WIB (Asia/Jakarta, UTC+7)
 * untuk Hari Ini, Minggu Ini (ISO Week), Bulan Ini, Tahun Ini, dan Semua.
 */
function getWibBucketKeys(now = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(now);
  const yearStr = parts.find((p) => p.type === "year")?.value || String(now.getUTCFullYear());
  const monthStr = parts.find((p) => p.type === "month")?.value || String(now.getUTCMonth() + 1).padStart(2, "0");
  const dayStr = parts.find((p) => p.type === "day")?.value || String(now.getUTCDate()).padStart(2, "0");

  const yearNum = parseInt(yearStr, 10);
  const monthNum = parseInt(monthStr, 10);
  const dayNum = parseInt(dayStr, 10);

  // Hitung ISO Week (Senin sebagai awal minggu)
  const utcDate = new Date(Date.UTC(yearNum, monthNum - 1, dayNum));
  const dayOfWeek = utcDate.getUTCDay() || 7; // 1 (Senin) - 7 (Minggu)
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayOfWeek);
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((utcDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  const weekStr = String(weekNo).padStart(2, "0");

  return {
    dayKey: `day-${yearStr}-${monthStr}-${dayStr}`,
    weekKey: `week-${utcDate.getUTCFullYear()}-W${weekStr}`,
    monthKey: `month-${yearStr}-${monthStr}`,
    yearKey: `year-${yearStr}`,
    totalKey: "total-all-time",
  };
}

async function fetchAbacusKey(action: "hit" | "get", key: string): Promise<number | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);
  try {
    const res = await fetch(`${ABACUS_BASE_URL}/${action}/${COUNTER_NAMESPACE}/${key}`, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });
    if (res.status === 404 && action === "get") {
      return 0;
    }
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as { value?: number };
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function handleVisitorCount(shouldIncrement: boolean): Promise<VisitorStats> {
  const { dayKey, weekKey, monthKey, yearKey, totalKey } = getWibBucketKeys();
  const action = shouldIncrement ? "hit" : "get";

  // Update local fallback store as well
  const local = readLocalStore();
  if (shouldIncrement) {
    local.total = (local.total || 0) + 1;
    local.buckets[dayKey] = (local.buckets[dayKey] || 0) + 1;
    local.buckets[weekKey] = (local.buckets[weekKey] || 0) + 1;
    local.buckets[monthKey] = (local.buckets[monthKey] || 0) + 1;
    local.buckets[yearKey] = (local.buckets[yearKey] || 0) + 1;
    writeLocalStore(local);
  }

  // Query/increment all 5 persistent cloud buckets in parallel
  const [remoteDay, remoteWeek, remoteMonth, remoteYear, remoteTotal] = await Promise.all([
    fetchAbacusKey(action, dayKey),
    fetchAbacusKey(action, weekKey),
    fetchAbacusKey(action, monthKey),
    fetchAbacusKey(action, yearKey),
    fetchAbacusKey(action, totalKey),
  ]);

  const rawToday = remoteDay ?? local.buckets[dayKey] ?? (shouldIncrement ? 1 : 0);
  const rawWeek = remoteWeek ?? local.buckets[weekKey] ?? rawToday;
  const rawMonth = remoteMonth ?? local.buckets[monthKey] ?? rawWeek;
  const rawYear = remoteYear ?? local.buckets[yearKey] ?? rawMonth;
  const rawTotal = remoteTotal ?? local.total ?? rawYear;

  // Pastikan konsistensi logis: Hari Ini <= Minggu Ini <= Bulan Ini <= Tahun Ini <= Total Semua
  const today = Math.max(0, rawToday);
  const week = Math.max(today, rawWeek);
  const month = Math.max(week, rawMonth);
  const year = Math.max(month, rawYear);
  const total = Math.max(year, rawTotal);

  // Sinkronkan kembali ke local store
  local.total = Math.max(local.total, total);
  local.buckets[dayKey] = Math.max(local.buckets[dayKey] || 0, today);
  local.buckets[weekKey] = Math.max(local.buckets[weekKey] || 0, week);
  local.buckets[monthKey] = Math.max(local.buckets[monthKey] || 0, month);
  local.buckets[yearKey] = Math.max(local.buckets[yearKey] || 0, year);
  writeLocalStore(local);

  return {
    today,
    week,
    month,
    year,
    total,
    updatedAt: new Date().toISOString(),
  };
}

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

export async function POST() {
  const stats = await handleVisitorCount(true);
  return NextResponse.json(stats, { status: 200, headers: NO_CACHE_HEADERS });
}

export async function GET(request: NextRequest) {
  const hitParam = request.nextUrl.searchParams.get("hit");
  const shouldIncrement = hitParam === "1" || hitParam === "true";
  const stats = await handleVisitorCount(shouldIncrement);
  return NextResponse.json(stats, { status: 200, headers: NO_CACHE_HEADERS });
}
