"use client";

import { useRef } from "react";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquareText } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function KontakPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi Header (Masuk berurutan dengan scale)
    gsap.from(".header-element", {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.1
    });

    // Animasi Ambient Glow (Bernapas / Yoyo)
    gsap.to(".ambient-glow", {
      scale: 1.1,
      opacity: 0.6,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // 2. Animasi Kartu Kontak Utama (Muncul dari bawah membesar)
    gsap.from(contactCardRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: contactCardRef.current,
        start: "top 80%",
      }
    });

    // 3. Animasi Item Kontak (Stagger dari kiri)
    const items = gsap.utils.toArray(".contact-item");
    gsap.from(items, {
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: contactCardRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen pb-32">
      
      {/* HEADER SECTION (Dark Mode) */}
      <section className="relative bg-slate-950 pt-40 pb-48 px-4 md:px-8 overflow-hidden border-b border-white/5">
        
        {/* Latar Belakang Dekoratif & Glow */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none"></div>
        <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-amber-500/15 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          <h1 className="header-element text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Hubungi <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-600">Kami</span>
          </h1>
          
          <div className="header-element w-24 h-1.5 bg-amber-500 rounded-full mb-8 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          
          <p className="header-element text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Punya pertanyaan seputar ketersediaan armada atau ingin berdiskusi soal paket wisata? Jangan ragu untuk menghubungi tim kami kapan saja.
          </p>
        </div>
      </section>

      {/* KONTAK CARD SECTION (Overlap Layout) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-24">
        <div 
          ref={contactCardRef} 
          className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row gap-12 lg:gap-16"
        >
          
          {/* Info Kontak (Kiri) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Mari Berbicara</h2>
              <p className="text-slate-500 mb-10 text-lg">Kami siap membantu menyukseskan perjalanan Anda.</p>
              
              <div className="space-y-8">
                {/* Item: Telepon/WA */}
                <div className="contact-item flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-slate-100 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transform group-hover:-translate-y-1">
                    <Phone className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">WhatsApp / Telepon</p>
                    <p className="text-slate-500 mt-1">{companyInfo.whatsapp}</p>
                  </div>
                </div>

                {/* Item: Email */}
                <div className="contact-item flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-slate-100 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transform group-hover:-translate-y-1">
                    <Mail className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">Email</p>
                    <p className="text-slate-500 mt-1">{companyInfo.email}</p>
                  </div>
                </div>

                {/* Item: Jam Operasional */}
                <div className="contact-item flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-slate-100 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transform group-hover:-translate-y-1">
                    <Clock className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">Jam Operasional</p>
                    <p className="text-slate-500 mt-1">Buka 24 Jam (Layanan Online & Darurat)</p>
                  </div>
                </div>

                {/* Item: Alamat Lengkap */}
                <div className="contact-item flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 shadow-sm border border-slate-100 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transform group-hover:-translate-y-1">
                    <MapPin className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">Garasi Utama</p>
                    <p className="text-slate-500 mt-1 leading-relaxed">
                      Jl. Cemp. Sari, Nongkobener, Tempursari<br/>
                      Kec. Wungu, Kabupaten Madiun<br/>
                      Jawa Timur 63181
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol CTA WA */}
            <div className="contact-item mt-12 pt-8 border-t border-slate-100">
              <Button asChild className="w-full sm:w-auto bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-bold h-14 px-8 text-lg rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 group/btn flex items-center justify-center gap-3">
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageSquareText className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  Chat Admin via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Google Maps Embed (Kanan) */}
          <div className="w-full lg:w-7/12 h-112.5 lg:h-auto min-h-125 bg-slate-100 rounded-[2rem] overflow-hidden relative border-4 border-white shadow-lg group">
            <iframe 
              src="https://maps.google.com/maps?q=9HG3%2BM5%20Tempursari%2C%20Kabupaten%20Madiun%2C%20Jawa%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-50 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </section>

    </main>
  );
}