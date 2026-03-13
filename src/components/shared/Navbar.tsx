"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu, Home, Car, Info, Phone, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk mendeteksi scroll dan mengubah tampilan Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/", icon: <Home className="w-[18px] h-[18px]" /> },
    { name: "Armada", path: "/armada", icon: <Car className="w-[18px] h-[18px]" /> },
    { name: "Tentang", path: "/tentang-kami", icon: <Info className="w-[18px] h-[18px]" /> },
    { name: "Kontak", path: "/kontak", icon: <Phone className="w-[18px] h-[18px]" /> },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out
        ${scrolled 
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-5" // Lebih tebal dan transparan saat di paling atas
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">

        {/* --- LOGO KIRI --- */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 transition-transform duration-500 group-hover:scale-105">
            <Image src="/logo.png" alt="Fajar Trans Logo" fill className="object-contain" priority />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white transition-colors duration-300">
            Fajar<span className="text-amber-500 font-extrabold">Trans</span>
          </span>
        </Link>

        {/* --- MENU NAVIGASI (DESKTOP) --- */}
        <div className="hidden lg:flex gap-1 items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className="relative px-5 py-2 text-[13px] font-medium text-slate-300 hover:text-amber-400 transition-colors group rounded-full hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- BAGIAN KANAN: CTA & MOBILE MENU --- */}
        <div className="flex items-center gap-4">

          {/* Tombol CTA Desktop (Lebih ramping) */}
          <Button 
            asChild 
            className="hidden md:inline-flex rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 h-10 text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </Button>

          {/* --- MOBILE MENU (HAMBURGER & SHEET) --- */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-slate-300 hover:text-white hover:bg-white/10 rounded-full w-10 h-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-[350px] bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 text-white p-0">
              
              {/* Header Mobile Menu */}
              <SheetHeader className="p-6 border-b border-white/5 text-left flex flex-row items-center gap-3 space-y-0">
                <div className="relative w-10 h-10 shrink-0">
                  <Image src="/logo.png" alt="Fajar Trans Logo" fill className="object-contain" />
                </div>
                <SheetTitle className="text-xl font-bold tracking-tight text-white m-0">
                  Fajar<span className="text-amber-500 font-extrabold">Trans</span>
                </SheetTitle>
              </SheetHeader>

              {/* List Menu Mobile */}
              <div className="flex flex-col p-4 space-y-2 mt-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group p-4 rounded-2xl hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                        {link.icon}
                      </div>
                      <span className="text-base font-medium text-slate-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
                
              {/* Bottom CTA Mobile */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-slate-950 to-transparent">
                <Button asChild className="w-full rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold h-14 text-base shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)]">
                  <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    Hubungi via WhatsApp
                  </a>
                </Button>
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}