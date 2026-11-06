"use client";

import { useEffect, useState } from "react";

interface VisitorStats {
  today: number;
  week: number;
  month: number;
  year: number;
  total: number;
  updatedAt?: string;
}

// Guard terhadap React StrictMode double-mount pada render awal yang sama (<1.5 detik)
// Namun tetap menghitung +1 setiap kali halaman di-reload atau dibuka ulang dari IG / Chrome / browser lain
let lastRecordedVisitTime = 0;

export default function VisitorCounter() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const recordAndFetchVisitors = async (forceHit = false) => {
      const now = Date.now();
      const shouldHit = forceHit || now - lastRecordedVisitTime > 1500;
      if (shouldHit) {
        lastRecordedVisitTime = now;
      }

      const query = shouldHit ? `?hit=1&t=${now}` : `?t=${now}`;
      const url = `/api/visitors${query}`;

      try {
        let res = await fetch(url, {
          method: shouldHit ? "POST" : "GET",
          cache: "no-store",
          keepalive: true,
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
          },
        });

        if (!res.ok && shouldHit) {
          res = await fetch(url, {
            method: "GET",
            cache: "no-store",
            keepalive: true,
          });
        }

        if (res.ok) {
          const data: VisitorStats = await res.json();
          if (isMounted) {
            setStats(data);
            setIsLoading(false);
          }
          try {
            localStorage.setItem("fajartrans_last_visitor_stats", JSON.stringify(data));
          } catch {
            // Abaikan jika mode private memblokir localStorage
          }
          return;
        }
      } catch {
        try {
          const cached = localStorage.getItem("fajartrans_last_visitor_stats");
          if (cached && isMounted) {
            setStats(JSON.parse(cached));
          }
        } catch {
          // Ignore
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    recordAndFetchVisitors(false);

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        recordAndFetchVisitors(true);
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      isMounted = false;
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const formatNumber = (num: number | undefined) => {
    if (typeof num !== "number") return "0";
    return new Intl.NumberFormat("id-ID").format(num);
  };

  const counterItems = [
    { label: "Hari Ini", value: stats?.today },
    { label: "Minggu Ini", value: stats?.week },
    { label: "Bulan Ini", value: stats?.month },
    { label: "Tahun Ini", value: stats?.year },
    { label: "Semua", value: stats?.total },
  ];

  return (
    <div className="py-5 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm">
      <span className="text-slate-400 font-medium">Pengunjung Website</span>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {counterItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className="text-slate-500">{item.label}:</span>
            <span className="font-semibold text-slate-300 tabular-nums">
              {isLoading ? "..." : formatNumber(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
