"use client";

import { useRef } from "react";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { ShieldCheck, ThumbsUp, Clock, Wrench, Users, Map, Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TentangKamiPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null); // PERBAIKAN: Menambahkan ref khusus

  useGSAP(() => {
    // 1. Header Animasi Masuk
    gsap.from(".header-content > *", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    // Header Parallax Efek
    gsap.to(".header-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".header-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // 2. Bento Grid Animasi Masuk
    const bentoItems = gsap.utils.toArray(".bento-item");
    gsap.fromTo(bentoItems, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-section",
          start: "top 75%",
        }
      }
    );

    // 3. Animasi Statistik (Counter)
    const statNumbers = gsap.utils.toArray(".stat-number");
    statNumbers.forEach((el: any) => {
      const targetValue = parseInt(el.getAttribute("data-target") || "0");
      gsap.to(el, {
        innerHTML: targetValue,
        duration: 2.5,
        snap: { innerHTML: 1 },
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        onUpdate: function() {
           el.innerHTML = Math.round(Number(this.targets()[0].innerHTML));
        }
      });
    });

    // 4. PERBAIKAN: Fitur Keunggulan Animasi menggunakan fromTo dan featuresRef
    const featureCards = gsap.utils.toArray(".feature-card");
    gsap.fromTo(featureCards, 
      { y: 50, opacity: 0, scale: 0.95 }, // Kondisi awal (Menghilang di bawah)
      {
        y: 0,
        opacity: 1,
        scale: 1, // Kondisi akhir (Muncul sempurna)
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: featuresRef.current, // Menggunakan ref agar akurat
          start: "top 80%",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen pb-32 overflow-hidden">
      
      {/* --- 1. HEADER SECTION --- */}
      <section className="header-section relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="header-bg absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="header-content relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-sm font-medium text-amber-500 tracking-wider uppercase">Cerita Kami</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Mendefinisikan Ulang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Perjalanan Anda
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Lebih dari sekadar penyedia kendaraan, kami adalah arsitek di balik setiap momen perjalanan Anda yang aman dan nyaman.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      </section>

      {/* --- 2. BENTO GRID TENTANG KAMI --- */}
      <section className="bento-section max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="bento-item md:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-bl-[100%] z-0 transition-transform duration-700 group-hover:scale-110"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Filosofi <span className="text-amber-500">Fajar Trans</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-slate-900">{companyInfo.name}</strong> lahir dari pemahaman bahwa setiap perjalanan memiliki tujuan berharganya masing-masing. Di Madiun, kami berkomitmen menjadi jembatan penghubung antara Anda dan tujuan tersebut.
                </p>
                <p>
                  Kami merawat setiap armada seperti milik sendiri dan melatih setiap pengemudi untuk menjadi rekan perjalanan yang dapat diandalkan. Ini bukan sekadar bisnis sewa, ini tentang mengantarkan senyum hingga tujuan.
                </p>
              </div>
            </div>
          </div>

          <div className="bento-item md:col-span-4 rounded-[2.5rem] overflow-hidden relative min-h-[300px] shadow-lg">
            <Image 
              src="/garansi.jpeg" 
              alt="Armada Fajar Trans" 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-lg leading-tight">Armada terawat, siap untuk setiap medan.</p>
            </div>
          </div>

          <div className="bento-item md:col-span-4 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/40 transition-colors duration-500"></div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Visi Kami</h3>
            <p className="text-slate-300 leading-relaxed">
              Menjadi ikon penyedia layanan transportasi terdepan di Jawa Timur yang diidentikkan dengan keamanan tanpa kompromi dan kenyamanan absolut.
            </p>
          </div>

          <div className="bento-item md:col-span-8 bg-amber-500 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden text-slate-900 group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Misi Kami</h3>
            <ul className="space-y-3 font-medium relative z-10">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                Menyediakan armada yang selalu dalam kondisi prima melalui perawatan berkala yang ketat.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                Menghadirkan sumber daya manusia (SDM) yang ramah, beretika, dan responsif.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                Memberikan skema harga yang transparan, kompetitif, dan berorientasi pada nilai.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 3. SOCIAL PROOF --- */}
      <section ref={statsRef} className="py-20 bg-white border-y border-slate-100 relative mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/50 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Dipercaya oleh Banyak Perjalanan</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-200">
            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                <span className="stat-number" data-target="850">0</span>+
              </div>
              <p className="text-slate-500 font-medium text-sm md:text-base">Pelanggan Puas</p>
            </div>
            
            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                <Map className="w-5 h-5" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                <span className="stat-number" data-target="1200">0</span>+
              </div>
              <p className="text-slate-500 font-medium text-sm md:text-base">Perjalanan Selesai</p>
            </div>

            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                <Star className="w-5 h-5" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 flex items-baseline justify-center">
                <span className="stat-number" data-target="4">0</span>.
                <span className="stat-number" data-target="9">0</span>
              </div>
              <p className="text-slate-500 font-medium text-sm md:text-base">Rating Rata-rata</p>
            </div>

            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                100%
              </div>
              <p className="text-slate-500 font-medium text-sm md:text-base">Legal & Terpercaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. KEUNGGULAN SECTION --- */}
      {/* PERBAIKAN: Memasukkan ref ke elemen section ini */}
      <section ref={featuresRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">
            Standar Kualitas Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Alasan Memilih Fajar Trans
          </h2>
          <div className="w-16 h-1.5 bg-amber-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Aman Terpercaya",
              desc: "Legalitas perusahaan jelas, memberikan rasa tenang dalam setiap transaksi penyewaan."
            },
            {
              icon: Wrench,
              title: "Armada Prima",
              desc: "Pengecekan mesin berkala dan pembersihan interior ketat sebelum mobil diserahkan."
            },
            {
              icon: Clock,
              title: "Ketepatan Waktu",
              desc: "Penjemputan bandara atau stasiun selalu on-time, menghargai setiap detik waktu Anda."
            },
            {
              icon: ThumbsUp,
              title: "Layanan 24/7",
              desc: "Dukungan pelanggan responsif, siap membantu kendala perjalanan kapan saja."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] hover:border-amber-200 transition-all duration-500 flex flex-col items-start relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

              <div className="relative z-10 w-14 h-14 bg-slate-50 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:text-white transition-colors duration-300 border border-slate-100 group-hover:border-transparent">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="relative z-10 text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}