import Image from "next/image";
import { Car } from "@/types";
import { formatRupiah, companyInfo } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react"; // Tambahkan ArrowRight

export default function CarCard({ car }: { car: Car }) {
  // Bikin pesan otomatis untuk WA
  const waMessage = `Halo Fajar Trans, saya ingin bertanya tentang sewa mobil ${car.name}.`;
  const waLink = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  // Menentukan warna badge berdasarkan jenis layanan (Driver vs Lepas Kunci)
  const isWithDriver = car.duration.toLowerCase().includes("driver");

  return (
    // Card Utama: Ditambah efek angkat (translate-y) dan bayangan glow kuning saat di-hover
    <div className="group relative bg-white rounded-[2rem] border border-slate-100/80 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] transition-all duration-500 ease-out flex flex-col h-full hover:-translate-y-2">
      
      {/* Efek Ambient Background (Aceternity Vibe) - Muncul pelan saat hover */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

      {/* 1. Bagian Atas: Gambar Mobil & Badge */}
      <div className="relative w-full h-60 bg-slate-50/50 flex items-center justify-center p-6 overflow-hidden z-10">
        
        {/* Ornamen Lingkaran Glow di belakang mobil yang membesar saat hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-150 z-0"></div>

        {/* Label Badge di pojok kiri atas */}
        <div className="absolute top-5 left-5 z-20">
          <Badge 
            className={`px-3 py-1.5 text-[11px] font-bold tracking-wide rounded-full shadow-sm backdrop-blur-md border ${
              isWithDriver 
                ? "bg-amber-500/90 text-slate-950 border-amber-400 hover:bg-amber-500" 
                : "bg-slate-900/90 text-white border-slate-700 hover:bg-slate-900"
            }`}
          >
            {car.duration}
          </Badge>
        </div>
        
        {/* Gambar Mobil: Efek "Maju" (Scale & Translate-X) membuat mobil seolah berjalan */}
        <div className="relative w-full h-full z-10 transform group-hover:scale-[1.15] group-hover:-translate-x-2 transition-all duration-500 ease-out drop-shadow-xl group-hover:drop-shadow-2xl">
          <Image 
            src={car.imageUrl} 
            alt={car.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain" 
          />
        </div>
      </div>

      {/* 2. Bagian Bawah: Informasi Mobil */}
      <div className="p-6 md:p-8 flex flex-col grow relative z-10 bg-white">
        
        {/* Nama Mobil */}
        <div className="mb-2">
          <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
            {car.name}
          </h3>
        </div>

        {/* Garis Aksen Bawah Judul yang memanjang saat di-hover */}
        <div className="w-10 h-1 bg-amber-500 rounded-full mb-6 transform origin-left transition-all duration-300 group-hover:w-16"></div>

        {/* Harga */}
        <div className="w-full mb-8 grow flex flex-col">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Mulai dari</p>
          <div className="flex items-baseline gap-1">
            {/* Harga ikut membesar sedikit saat di-hover */}
            <span className="text-3xl font-black text-slate-900 tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
              {formatRupiah(car.price)}
            </span>
            <span className="text-sm font-medium text-slate-500">/hari</span>
          </div>
        </div>

        {/* Tombol Sewa (WhatsApp) */}
        <div className="mt-auto">
          <Button asChild className="w-full rounded-2xl bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-bold h-14 shadow-lg shadow-slate-900/10 transition-all duration-300 group/btn overflow-hidden border border-transparent hover:border-amber-400">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full relative z-10">
              
              {/* Teks & Icon bergeser ke kiri, memberi ruang untuk panah */}
              <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/btn:-translate-x-3">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-12" />
                Sewa Sekarang
              </span>
              
              {/* Panah masuk dari kanan saat tombol di-hover */}
              <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
            
            </a>
          </Button>
        </div>
      </div>
      
    </div>
  );
}