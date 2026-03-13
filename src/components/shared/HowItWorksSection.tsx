"use client";

import { useRef } from "react";
import { MousePointerClick, MessageCircle, FileCheck, CarFront, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLElement>(null);

  const steps = [
    {
      id: "01",
      title: "Pilih Mobil",
      description: "Jelajahi armada kami dan temukan mobil yang paling sesuai.",
      icon: <MousePointerClick className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: "02",
      title: "Hubungi Admin",
      description: "Klik tombol WhatsApp untuk konfirmasi ketersediaan dan harga.",
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: "03",
      title: "Kirim Persyaratan",
      description: "Lengkapi dokumen sewa dan lakukan pembayaran uang muka (DP).",
      icon: <FileCheck className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: "04",
      title: "Mobil Siap",
      description: "Ambil mobil di garasi atau gunakan layanan antar-jemput.",
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  useGSAP(() => {
    // 1. TIMELINE UTAMA (Sangat ringan, tidak membebani HP)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",
        scrub: 1, // Tetap smooth mengikuti scroll
      },
    });

    // Mengisi garis kuning
    tl.to(".progress-line", { height: "100%", ease: "none" }, 0);
    // Menggerakkan mobil lurus ke bawah
    tl.to(".car-indicator", { top: "100%", ease: "none" }, 0);

    // 2. KARTU MUNCUL
    const cards = gsap.utils.toArray(".step-card");
    const dots = gsap.utils.toArray(".step-dot");

    cards.forEach((card: any, i) => {
      // Kartu muncul perlahan
      gsap.from(card, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });

      // Titik di jalanan menyala saat mobil lewat
      gsap.to(dots[i] as HTMLElement, {
        backgroundColor: "#f59e0b",
        scale: 1.5,
        scrollTrigger: {
          trigger: card,
          start: "top 55%",
          end: "top 45%",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-20">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
            Alur Pemesanan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Cara Mudah Pesan Mobil
          </h2>
          <div className="w-16 md:w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* CONTAINER JALAN (Responsif: Kiri di HP, Tengah di Desktop) */}
        <div className="timeline-container relative w-full pb-10">
          
          {/* Garis Dasar Putus-putus */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-300 -translate-x-1/2 z-0"></div>
          
          {/* Garis Kuning (Diisi oleh GSAP) */}
          <div className="progress-line absolute left-6 md:left-1/2 top-0 w-1 bg-amber-500 -translate-x-1/2 z-10" style={{ height: "0%" }}></div>

          {/* Mobil yang berjalan turun */}
          <div className="car-indicator absolute left-6 md:left-1/2 top-0 z-50 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2">
            <CarFront className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
          </div>

          {/* LIST KARTU */}
          <div className="flex flex-col gap-12 md:gap-16 pt-4">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`step-card relative w-full flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Titik Singgah di Jalur */}
                  <div className="step-dot absolute left-6 md:left-1/2 w-3 h-3 bg-slate-300 border-2 border-white rounded-full -translate-x-1/2 z-20 transition-colors"></div>

                  {/* Spacer untuk Desktop (Membagi layarnya 50:50) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Kartu Konten */}
                  <div className="w-full pl-16 md:pl-0 md:w-1/2">
                    <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-5 md:p-8 hover:shadow-lg hover:border-amber-400 transition-all duration-300 relative overflow-hidden ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      
                      {/* Watermark Angka */}
                      <div className="absolute -top-3 -right-2 text-6xl font-black text-slate-50 pointer-events-none">
                        {step.id}
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 mb-3 relative z-10">
                        <div className="p-2 md:p-3 bg-amber-50 rounded-xl text-amber-500">
                          {step.icon}
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}