"use client";

import { useRef } from "react";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { ShieldCheck, ThumbsUp, Clock, Wrench } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TentangKamiPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    // Animasi Ambient Glow (Bernapas / Yoyo)
    gsap.to(".ambient-glow", {
      scale: 1.1,
      opacity: 0.6,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // 2. Animasi Profil (Gambar dari kiri, Teks dari kanan)
    gsap.from(".profile-img", {
      x: -60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: profileRef.current,
        start: "top 80%",
      }
    });

    // Memecah paragraf teks menjadi stagger agar munculnya lebih dinamis
    const textElements = gsap.utils.toArray(".profile-text-item");
    gsap.from(textElements, {
      x: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: profileRef.current,
        start: "top 80%",
      }
    });

    // 3. Animasi Fitur Keunggulan (Stagger dari bawah dengan scale)
    const features = gsap.utils.toArray(".feature-card");
    gsap.fromTo(features, 
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        }
      }
    );
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
            Tentang <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-600">Fajar Trans</span>
          </h1>
          
          <div className="header-element w-24 h-1.5 bg-amber-500 rounded-full mb-8 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          
          <p className="header-element text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Mitra perjalanan terpercaya Anda di Madiun. Kami berkomitmen menghadirkan layanan transportasi premium yang aman, nyaman, dan mengutamakan kepuasan pelanggan.
          </p>
        </div>
      </section>

      {/* PROFIL PERUSAHAAN (Overlap Layout) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-24 mb-32">
        <div ref={profileRef} className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Kiri: Gambar Landscape */}
          <div className="profile-img w-full lg:w-1/2 relative">
            {/* Ornamen Latar Belakang Gambar */}
            <div className="absolute -inset-4 bg-linear-to-br from-amber-500/20 to-amber-500/5 rounded-[2.5rem] transform -rotate-3 z-0 hidden md:block transition-transform hover:rotate-0 duration-500"></div>
            
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-10 group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <Image 
                src="/garansi.jpeg" 
                alt="Garasi Fajar Trans" 
                fill 
                className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>
          
          {/* Kanan: Teks */}
          <div className="w-full lg:w-1/2">
            <h2 className="profile-text-item text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Lebih Dari Sekadar <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-600">Rental Mobil</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p className="profile-text-item">
                <strong className="text-slate-900">{companyInfo.name}</strong> adalah penyedia layanan transportasi terpercaya yang berpusat di Kota Madiun. Kami tidak hanya menyewakan kendaraan, tetapi juga merancang pengalaman perjalanan yang aman, nyaman, dan berkesan bagi setiap pelanggan kami.
              </p>
              <p className="profile-text-item">
                Berbekal pengalaman bertahun-tahun melayani berbagai rute dan kebutuhan—mulai dari sewa mobil harian, liburan keluarga, perjalanan dinas korporat, hingga ziarah wali—kami terus berinovasi dan berkomitmen untuk selalu menghadirkan armada terbaik dengan pelayanan prima.
              </p>
              <p className="profile-text-item">
                Bagi kami, setiap perjalanan Anda adalah prioritas. Tim kami, mulai dari <em>customer service</em> hingga pengemudi, dilatih untuk memberikan standar keramahan dan profesionalisme tertinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENGAPA MEMILIH KAMI SECTION */}
      <section ref={featuresRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Terpercaya",
              desc: "Legalitas jelas dan dipercaya oleh ratusan pelanggan di Madiun & sekitarnya."
            },
            {
              icon: Wrench,
              title: "Armada Prima",
              desc: "Mobil diservis rutin, bersih luar dalam, dan wangi sebelum diserahkan."
            },
            {
              icon: Clock,
              title: "Tepat Waktu",
              desc: "Layanan antar-jemput bandara dan drop-off yang sangat menghargai waktu Anda."
            },
            {
              icon: ThumbsUp,
              title: "Harga Jujur",
              desc: "Harga sewa transparan dan kompetitif tanpa adanya biaya tersembunyi."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center relative overflow-hidden"
            >
              {/* Efek kilauan saat di hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

              <div className="relative z-10 w-16 h-16 bg-slate-50 group-hover:bg-amber-500 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transform group-hover:-rotate-6 group-hover:scale-110">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {feature.title}
              </h3>
              <p className="relative z-10 text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}