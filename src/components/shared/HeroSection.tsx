"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Tambahkan import icon dari lucide-react
import { Car, Clock, ShieldCheck } from "lucide-react"; 

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

    gsap.set(leftContentRef.current, { y: 50, opacity: 0 });
    gsap.set(rightImageRef.current, { x: 100, opacity: 0, scale: 0.9 });

    tl.to(leftContentRef.current, { y: 0, opacity: 1, delay: 0.2 })
      // Animasi tambahan untuk Trust Badges (muncul bergantian)
      .from(".trust-badge", { y: 20, opacity: 0, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)" }, "-=0.8")
      .to(rightImageRef.current, { x: 0, opacity: 1, scale: 1, ease: "back.out(1.5)" }, "-=0.8")
      // Efek mengambang (floating) terus-menerus pada mobil
      .to(rightImageRef.current, {
        y: -15,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-950 pt-32 md:pt-40 pb-16"
    >
      {/* Efek Cahaya (Glow) Kuning di latar belakang agar modern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        
        <div ref={leftContentRef} className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans text-white mb-6 tracking-tight leading-[1.2]">
            Perjalanan Nyaman, <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-600">
              Aman & Terpercaya
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            Solusi transportasi premium di Madiun. Melayani sewa mobil lepas kunci, paket wisata, hingga perjalanan dinas dengan armada terbaru dan terawat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <Button asChild size="lg" className="rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold h-14 px-8 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-1">
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Pesan Sekarang
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent hover:bg-white/5 text-white border-white/20 h-14 px-8 transition-all hover:-translate-y-1">
              <Link href="/armada">Lihat Armada</Link>
            </Button>
          </div>

          {/* PERBAIKAN: Trust Badges untuk mengisi ruang kosong */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-lg border-t border-white/10 pt-8">
            <div className="trust-badge flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Car className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-sm font-semibold text-slate-300">Armada<br/>Terawat</span>
            </div>
            
            <div className="trust-badge flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-sm font-semibold text-slate-300">Harga<br/>Jujur</span>
            </div>

            <div className="trust-badge flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-sm font-semibold text-slate-300">Layanan<br/>24 Jam</span>
            </div>
          </div>

        </div>

        <div ref={rightImageRef} className="relative w-full h-75 md:h-112.5 lg:h-137.5 order-1 lg:order-2 flex items-center justify-center">
           <Image 
             src="/flet.png"
             alt="Armada Fajar Trans" 
             fill 
             className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
             priority
           />
        </div>

      </div>
    </section>
  );
}