"use client";

import { useRef } from "react";
import { carList } from "@/lib/data";
import CarCard from "@/components/shared/CarCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ArmadaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi Header (Masuk berurutan dengan scale & fade)
    gsap.from(".header-element", {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.1
    });

    // 2. Animasi Ambient Glow (Bernapas / Yoyo)
    gsap.to(".ambient-glow", {
      scale: 1.1,
      opacity: 0.6,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // 3. Animasi Kartu Armada (Stagger masuk dari bawah dengan mulus)
    const cards = gsap.utils.toArray(".car-item");
    gsap.fromTo(cards, 
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1, // Muncul satu per satu
        ease: "power4.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%", 
        }
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen pb-32">
      
      {/* HEADER SECTION (Gelap/Dark Mode) */}
      <section className="relative bg-slate-950 pt-40 pb-44 px-4 md:px-8 overflow-hidden border-b border-white/5">
        
        {/* Latar Belakang Dekoratif */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none"></div>
        <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-amber-500/15 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          {/* REVISI: Ukuran font diperkecil ke 3xl, 4xl, dan maksimal 5xl */}
          <h1 className="header-element text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Katalog Armada <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-600">Terbaik Kami</span>
          </h1>
          
          <div className="header-element w-24 h-1.5 bg-amber-500 rounded-full mb-8 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          
          <p className="header-element text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Pilih mobil yang sesuai dengan kebutuhan perjalanan Anda. Kami menjamin semua armada dalam kondisi prima, wangi, terawat, dan siap jalan kapan pun Anda butuhkan.
          </p>
        </div>
      </section>

      {/* GRID KARTU SECTION (Terang/Light Mode) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-24 sm:-mt-28">
        {/* Tambahan bayangan halus di belakang grid agar lebih memisahkan area gelap dan terang */}
        <div className="absolute inset-0 bg-slate-900/5 blur-3xl -z-10 rounded-[3rem] translate-y-10"></div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {carList.map((car) => (
            <div key={car.id} className="car-item h-full">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}