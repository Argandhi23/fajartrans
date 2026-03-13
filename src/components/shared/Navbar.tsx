import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Armada", path: "/armada" },
    { name: "Tentang Kami", path: "/tentang-kami" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    // PERBAIKAN: Menggunakan backdrop-blur agar transparan elegan dan border bawah warna kuning sangat tipis
    <nav className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-amber-500/10 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
            <Image src="/logo.png" alt="Fajar Trans Logo" fill className="object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold uppercase tracking-widest text-white group-hover:text-amber-400 transition-colors duration-300">
            Fajar<span className="text-amber-500">Trans</span>
          </span>
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="relative text-sm font-semibold text-slate-300 hover:text-white transition-colors group py-2 tracking-wide">
              {link.name}
              {/* Garis bawah animasi tetap dipertahankan */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Bagian Kanan: Tombol CTA & Mobile Menu */}
        <div className="flex items-center gap-2">

          <Button asChild className="hidden md:inline-flex rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 transition-all duration-300 hover:-translate-y-0.5">
            <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </Button>

          {/* Mobile Menu (Hamburger) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-amber-500 hover:bg-white/10 rounded-full">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-75 sm:w-100 bg-slate-950 border-l border-white/10 text-white">
              <SheetTitle className="text-left mb-8 flex items-center gap-3 mt-4">
                <div className="relative w-12 h-12">
                  <Image src="/logo.png" alt="Fajar Trans Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-extrabold uppercase tracking-widest text-white">
                  Fajar<span className="text-amber-500">Trans</span>
                </span>
              </SheetTitle>

              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.path} className="text-lg font-medium text-slate-300 hover:text-amber-500 hover:translate-x-2 transition-all duration-300">
                    {link.name}
                  </Link>
                ))}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button asChild className="w-full rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold h-12">
                    <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp Kami
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}