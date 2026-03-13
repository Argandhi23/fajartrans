"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import { carList } from "@/lib/data";
import CarCard from "@/components/shared/CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturedCarsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // REVISI: Filter spesifik untuk Innova, Avanza, Xenia, Hiace
  // Gunakan useMemo agar tidak re-render ulang filter tiap kali komponen dipanggil
  const featuredCars = useMemo(() => {
    const keywords = ["innova", "avanza", "xenia", "hiace"];
    // Cari mobil yang namanya mengandung keyword di atas
    const filtered = carList.filter((car) => 
      keywords.some(keyword => car.name.toLowerCase().includes(keyword))
    );
    // Pastikan maksimal hanya 4 yang tampil (jika ada lebih dari 1 jenis innova misalnya)
    return filtered.slice(0, 4);
  }, []);

  useGSAP(() => {
    // 1. Animasi Teks Judul
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", 
        toggleActions: "play none none reverse"
      }
    });

    // 2. Animasi Cards Muncul Bertahap (Stagger)
    const cards = gsap.utils.toArray(".car-card-wrapper");
    gsap.from(cards, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // 3. Efek Parallax Halus saat di-scroll
    gsap.to(gridRef.current, {
      y: -50,  
      ease: "none", 
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", 
        end: "bottom top",  
        scrub: 1.5, 
      }
    });
    
  }, { scope: sectionRef });

  return (
    // Background diubah ke slate-950 agar senada dengan Hero, ditambah border tipis di atas
    <section ref={sectionRef} className="relative py-28 bg-slate-950 px-4 md:px-8 overflow-hidden z-10 border-t border-white/5">
      
      {/* Efek Ambient Glow Kuning di Background */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/2 -translate-y-1/4"></div>
      {/* Tambahan Glow di kiri bawah agar balance */}
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-1/2 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 md:gap-0">
          <div>
            {/* Label Subtitle disesuaikan */}
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">
              Koleksi Premium
            </span>
            {/* Font diubah ke extrabold agar serasi dengan judul sebelumnya */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Pilihan Armada <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-600">Terbaik</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
          </div>
          
          {/* Tombol Desktop dengan Animasi Arrow */}
          <Link 
            href="/armada" 
            className="hidden md:flex items-center gap-2 text-amber-500 hover:text-white font-bold text-base transition-all duration-300 group bg-amber-500/10 px-6 py-3 rounded-full hover:bg-amber-500 border border-amber-500/20 hover:border-amber-500"
          >
            Lihat Semua Armada 
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid Armada dengan Parallax dan efek staggered layout */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredCars.length > 0 ? (
            featuredCars.map((car, index) => (
              // Efek Staggered (naik turun selang-seling) hanya di layar besar agar estetik
              <div 
                key={car.id} 
                className={`car-card-wrapper h-full ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                <CarCard car={car} />
              </div>
            ))
          ) : (
            // Fallback jika nama mobil di lib/data.ts tidak sesuai dengan filter
            <div className="col-span-full text-center text-slate-400 py-10">
              Menunggu data armada... (Pastikan nama mobil mengandung "innova", "avanza", dll di file data).
            </div>
          )}
        </div>
        
        {/* Tombol Mobile */}
        <div className="mt-20 text-center md:hidden relative z-20">
           <Button asChild className="w-full rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold h-14 shadow-[0_4px_20px_0_rgba(245,158,11,0.3)] transition-all hover:-translate-y-1">
            <Link href="/armada">Lihat Semua Armada</Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
}