import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { Mail, Phone, Instagram, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-20 pb-8 border-t border-white/5 overflow-hidden">
      
      {/* Efek Ambient Glow (Menyilang agar lebih estetik) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none z-0 translate-y-1/4 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* --- AREA CTA BESAR (Pre-Footer) --- */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-16 mb-16 border-b border-white/10 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Siap Memulai <span className="text-amber-500">Perjalanan?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Percayakan kebutuhan transportasi Anda kepada Fajar Trans. Aman, nyaman, dan selalu bisa diandalkan.
            </p>
          </div>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-950 font-extrabold rounded-full hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-1 shrink-0 w-full lg:w-auto text-lg"
          >
            Hubungi Sekarang
            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Info Brand & Sosial Media */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-2.5 group mb-6 inline-flex">
              <div className="relative w-11 h-11 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-500">
                <Image src="/logo.png" alt="Fajar Trans Logo" fill className="object-contain" />
              </div>
              {/* PERBAIKAN: Tipografi FajarTrans sekarang sama persis dengan Navbar */}
              <span className="text-2xl font-bold tracking-tight text-white transition-colors duration-300">
                Fajar<span className="text-amber-500 font-extrabold">Trans</span>
              </span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              Solusi transportasi premium di Madiun. Melayani rental mobil, paket wisata, jemput bandara, hingga ziarah wali dengan armada terbaik dan supir profesional.
            </p>
            
            {/* Jejeran Sosial Media */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/fajar.c?igsh=MW04M2hyYTF1NTVuaw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-slate-950 hover:bg-amber-500 hover:border-amber-500 hover:-translate-y-1.5 transition-all duration-300"
                aria-label="Instagram Fajar Trans"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@fajartc?_r=1&_t=ZS-94eBc92QA6y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-slate-950 hover:bg-amber-500 hover:border-amber-500 hover:-translate-y-1.5 transition-all duration-300"
                aria-label="TikTok Fajar Trans"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { name: "Beranda", path: "/" },
                { name: "Daftar Armada", path: "/armada" },
                { name: "Tentang Kami", path: "/tentang-kami" },
                { name: "Hubungi Kami", path: "/kontak" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center text-base font-medium text-slate-400 hover:text-amber-500 transition-colors w-fit">
                    <span className="w-0 h-px bg-amber-500 mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold text-white mb-6">Informasi Kontak</h4>
            <ul className="space-y-6">
              <li>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-all duration-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">WhatsApp</span>
                    <span className="font-semibold text-slate-300 group-hover:text-amber-500 transition-colors text-base">+{companyInfo.whatsapp}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="group flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-all duration-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Email</span>
                    <span className="font-semibold text-slate-300 group-hover:text-amber-500 transition-colors text-base">{companyInfo.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Lokasi</span>
                    <span className="font-medium text-slate-300 leading-relaxed text-base">Madiun, Jawa Timur<br/>Indonesia</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        {/* --- COPYRIGHT SECTION --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">
            &copy; {currentYear} <span className="text-slate-300">{companyInfo.name}</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm font-medium text-slate-500">
            Dirancang dengan <span className="text-amber-500 animate-pulse">♥</span> untuk Perjalanan Terbaik
          </p>
        </div>
      </div>
    </footer>
  );
}