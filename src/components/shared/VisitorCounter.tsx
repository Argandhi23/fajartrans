"use client";

import { useEffect, useState } from "react";
import { Users, CalendarDays, CalendarRange, CalendarClock, Globe, Activity } from "lucide-react";

interface VisitorStats {
  today: number;
  week: number;
  month: number;
  year: number;
  total: number;
  updatedAt?: string;
}

// Guard terhadap React StrictMode double-mount pada saat render awal yang sama (<1.5 detik)
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
        // Gunakan POST saat hit baru (atau GET sebagai fallback) dengan cache: no-store & keepalive
        // agar 100% terpicu dari in-app browser Instagram, TikTok, WhatsApp, Chrome, maupun Safari.
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
          // Fallback ke GET ?hit=1 apabila WebView membatasi method POST
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
            // Abaikan jika mode private/incognito memblokir localStorage
          }
          return;
        }
      } catch {
        // Fallback ke data terakhir di localStorage jika koneksi pengguna terputus sementara
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

    // Tangani kasus halaman dibuka ulang dari Back-Forward Cache (bfcache) di browser HP / Instagram WebView
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
    {
      label: "Hari Ini",
      value: stats?.today,
      icon: CalendarClock,
      highlight: false,
    },
    {
      label: "Minggu Ini",
      value: stats?.week,
      icon: CalendarDays,
      highlight: false,
    },
    {
      label: "Bulan Ini",
      value: stats?.month,
      icon: CalendarRange,
      highlight: false,
    },
    {
      label: "Tahun Ini",
      value: stats?.year,
      icon: Users,
      highlight: false,
    },
    {
      label: "Semua",
      value: stats?.total,
      icon: Globe,
      highlight: true,
    },
  ];

  return (
    <div className="mb-12 pt-8 border-t border-white/10">
      <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 md:p-8 relative overflow-hidden">
        {/* Glow halus di sudut */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Statistik Pengunjung */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-white tracking-tight">
                Statistik Pengunjung Website
              </h4>
              <p className="text-xs text-slate-400">
                Jumlah kunjungan terhitung otomatis secara real-time
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide">
               Pengunjung Aktif Tercatat
            </span>
          </div>
        </div>

        {/* Grid 5 Periode: Hari Ini, Minggu Ini, Bulan Ini, Tahun Ini, Semua */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {counterItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className={`group rounded-2xl p-4 transition-all duration-300 border ${
                  item.highlight
                    ? "col-span-2 sm:col-span-1 bg-amber-500/10 border-amber-500/30 hover:border-amber-500/60"
                    : "bg-white/[0.03] border-white/10 hover:border-amber-500/30 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      item.highlight ? "text-amber-400" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {item.label}
                  </span>
                  <IconComponent
                    className={`w-4 h-4 ${
                      item.highlight
                        ? "text-amber-400"
                        : "text-slate-500 group-hover:text-amber-500"
                    } transition-colors`}
                  />
                </div>

                {isLoading ? (
                  <div className="h-8 w-20 bg-white/10 rounded-lg animate-pulse mt-1"></div>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-2xl md:text-3xl font-black tracking-tight ${
                        item.highlight ? "text-amber-400" : "text-white"
                      }`}
                    >
                      {formatNumber(item.value)}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      kunjungan
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
