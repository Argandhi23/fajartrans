"use client";

import { useRef } from "react";
import { MapPin, Plane, Car, Users } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(".service-box");

    // REVISI: Animasi lebih dinamis dengan scale dan ease yang lebih mulus
    gsap.fromTo(boxes, 
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", 
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 px-4 md:px-8 relative overflow-hidden">
      
      {/* Elemen Dekoratif Latar Belakang */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* REVISI: Tipografi Judul disesuaikan */}
        <span className="text-amber-500 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
          Apa yang kami tawarkan
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
          Layanan Unggulan Kami
        </h2>
        <div className="w-20 h-1.5 bg-amber-500 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          
          {/* KARTU 1 */}
          <div className="service-box p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* REVISI: Animasi ikon saat di-hover (scale & rotate) */}
            <div className="relative z-10 w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Car className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Rental Mobil</h3>
            <p className="relative z-10 text-slate-500 text-sm leading-relaxed">Sewa mobil harian lepas kunci atau include driver profesional dan ramah.</p>
          </div>

          {/* KARTU 2 */}
          <div className="service-box p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <MapPin className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Paket Wisata</h3>
            <p className="relative z-10 text-slate-500 text-sm leading-relaxed">Liburan menyenangkan tanpa repot mengatur rute dan akomodasi perjalanan.</p>
          </div>

          {/* KARTU 3 */}
          <div className="service-box p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:-translate-y-2 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Plane className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Jemput Bandara</h3>
            <p className="relative z-10 text-slate-500 text-sm leading-relaxed">Layanan drop-off dan pick-up bandara yang dijamin aman dan tepat waktu.</p>
          </div>

          {/* KARTU 4 */}
          <div className="service-box p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Users className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Ziarah Wali</h3>
            <p className="relative z-10 text-slate-500 text-sm leading-relaxed">Tersedia armada Hiace & Elf berkapasitas besar untuk rombongan perjalanan religi.</p>
          </div>

        </div>
      </div>
    </section>
  );
}