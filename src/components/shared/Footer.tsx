import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { Mail, Phone, ChevronRight, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-white/5 overflow-hidden">
      
      {/* Efek Ambient Glow di bagian bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-200 h-75 bg-amber-500/5 rounded-[100%] blur-[80px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Info Brand & Sosial Media */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                <Image src="/logo.png" alt="Fajar Trans Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-extrabold uppercase tracking-widest text-white group-hover:text-amber-400 transition-colors duration-300">
                Fajar<span className="text-amber-500">Trans</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
              Solusi transportasi premium di Madiun dan sekitarnya. Melayani rental mobil, paket wisata, jemput bandara, hingga ziarah wali dengan armada terbaik, aman, dan terpercaya.
            </p>
            
            {/* Jejeran Sosial Media yang Elegan */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/fajar.c?igsh=MW04M2hyYTF1NTVuaw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-linear-to-tr hover:from-amber-600 hover:to-amber-400 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="Instagram Fajar Trans"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* TikTok (Menggunakan SVG Presisi) */}
              <a 
                href="https://www.tiktok.com/@fajartc?_r=1&_t=ZS-94eBc92QA6y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                aria-label="TikTok Fajar Trans"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              Eksplorasi
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Beranda", path: "/" },
                { name: "Daftar Armada", path: "/armada" },
                { name: "Tentang Kami", path: "/tentang-kami" },
                { name: "Kontak", path: "/kontak" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak (Tampilan List Interaktif) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
              Kontak
            </h4>
            <ul className="space-y-5">
              <li>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">WhatsApp</span>
                    <span className="font-medium text-slate-300 group-hover:text-amber-500 transition-colors">+{companyInfo.whatsapp}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="group flex items-start gap-4 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">Email</span>
                    <span className="font-medium text-slate-300 group-hover:text-amber-500 transition-colors">{companyInfo.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-4 text-sm text-slate-400">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">Lokasi</span>
                    <span className="font-medium text-slate-300 leading-relaxed">Madiun, Jawa Timur<br/>Indonesia</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {currentYear} <span className="text-slate-300">{companyInfo.name}</span>. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dirancang dengan <span className="text-amber-500 text-sm animate-pulse">♥</span> untuk Perjalanan Terbaik
          </p>
        </div>
      </div>
    </footer>
  );
}