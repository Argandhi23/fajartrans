"use client";

import { useRef } from "react";
import { Star, Quote, MessageCircleHeart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Data ulasan
  const testimonials = [
    {
      id: 1,
      name: "Ayu Fernanda",
      text: "Mantapp pelayanan ramahh, unit terawat dan dalemnya bersihh, recommended bgtttt lain kali bisa repeat sewa disini lagii 👍👍",
      initial: "AF",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Avi Saputro",
      text: "unit sangat nyaman, pelayanan ramah . mantap pokonya ,",
      initial: "AS",
      color: "from-red-400 to-red-600",
    },
    {
      id: 3,
      name: "Bayu Lemu",
      text: "bersih nyaman",
      initial: "BL",
      color: "from-amber-400 to-amber-600",
    }
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray(".testi-card");

    // Animasi Header
    gsap.from(".testi-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Animasi Kartu Testimoni dengan Scale
    gsap.fromTo(cards, 
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 px-4 md:px-8 relative overflow-hidden">
      
      {/* Ornamen Latar Belakang - Glow Halus di Kiri Atas */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="testi-header text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
             <MessageCircleHeart className="w-5 h-5 text-amber-500" />
             <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">
              Ulasan Pelanggan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Apa Kata Mereka?
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
        </div>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((review) => (
            <div 
              key={review.id} 
              className="testi-card group relative p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              {/* Efek Gradient Hover di Background Kartu */}
              <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Ikon Quote (Kutip) Besar Transparan di belakang */}
              <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-50 group-hover:text-amber-50/60 rotate-12 group-hover:rotate-0 transition-all duration-500 z-0" />

              <div className="relative z-10 grow flex flex-col">
                
                {/* Profil Pengguna */}
                <div className="flex items-center gap-4 mb-6">
                  {/* REVISI: Menggunakan background gradient untuk inisial agar lebih hidup */}
                  <div className={`w-14 h-14 rounded-full bg-linear-to-br ${review.color} text-white flex items-center justify-center font-extrabold text-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors duration-300">
                      {review.name}
                    </h4>
                    {/* Bintang dipindah ke bawah nama agar layout lebih rapi */}
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500 drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Teks Ulasan */}
                <p className="text-slate-600 leading-relaxed italic text-base grow">
                  "{review.text}"
                </p>
                
                {/* Badge Google */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                    {/* SVG sederhana huruf 'G' untuk merepresentasikan Google */}
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-slate-600" fill="currentColor">
                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Review via <span className="text-slate-700 font-bold">Google Maps</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}