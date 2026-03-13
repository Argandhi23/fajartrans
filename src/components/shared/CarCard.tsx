import Image from "next/image";
import { Car } from "@/types";
import { formatRupiah, companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Clock, UserCheck, KeySquare } from "lucide-react"; 

export default function CarCard({ car }: { car: Car }) {
  // Pesan WhatsApp Otomatis
  const waMessage = `Halo Fajar Trans, saya ingin bertanya tentang ketersediaan sewa mobil ${car.name}.`;
  const waLink = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  // Menentukan jenis layanan (Driver vs Lepas Kunci) untuk ikon spesifikasi
  const isWithDriver = car.duration.toLowerCase().includes("driver");

  return (
    <div className="group relative bg-white rounded-[2rem] border border-slate-100/80 overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] transition-all duration-500 ease-out flex flex-col h-full hover:-translate-y-2">
      
      {/* Efek Ambient Glow Halus di Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

      {/* --- 1. BAGIAN ATAS: SHOWROOM GAMBAR --- */}
      <div className="relative w-full h-56 md:h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-white flex items-center justify-center p-8 overflow-hidden z-10">
        
        {/* Glow Kuning saat hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-400/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-150 z-0"></div>

        {/* Gambar Mobil (Animasi Zoom & Bergeser) */}
        <div className="relative w-full h-full z-10 transform group-hover:scale-110 group-hover:-translate-x-3 transition-all duration-700 ease-out drop-shadow-xl group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]">
          <Image 
            src={car.imageUrl} 
            alt={car.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain" 
          />
        </div>
      </div>

      {/* --- 2. BAGIAN BAWAH: INFORMASI & AKSI --- */}
      <div className="p-5 md:p-8 flex flex-col grow relative z-10 bg-white">
        
        {/* Header: Nama Mobil */}
        <div className="mb-5">
          <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1 tracking-tight">
            {car.name}
          </h3>
          <div className="w-12 h-1 bg-amber-500 rounded-full mt-3 transform origin-left transition-all duration-300 group-hover:w-20"></div>
        </div>

        {/* --- SPESIFIKASI MINI --- */}
        <div className="grid grid-cols-2 items-center mb-6 bg-slate-50 p-2 md:p-2.5 rounded-2xl border border-slate-100/80 divide-x divide-slate-200">
          
          {/* Info Durasi Murni (Menampilkan data apa adanya) */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 px-1 text-slate-600 text-xs md:text-sm font-semibold">
            <div className="p-1.5 bg-white rounded-md shadow-sm border border-slate-100 text-amber-500 shrink-0">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
            {/* PERBAIKAN: Menampilkan car.duration langsung tanpa di-split atau ditambah string lain */}
            <span className="text-center whitespace-normal leading-tight">
              {car.duration}
            </span>
          </div>

          {/* Info Supir/Lepas Kunci */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 px-1 text-slate-600 text-xs md:text-sm font-semibold">
            <div className={`p-1.5 rounded-md shadow-sm border shrink-0 ${
              isWithDriver ? "bg-amber-50 border-amber-100 text-amber-600" : "bg-white border-slate-100 text-slate-500"
            }`}>
              {isWithDriver ? <UserCheck className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <KeySquare className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            </div>
            <span className="text-center whitespace-normal leading-tight">
              {isWithDriver ? "Dengan Supir" : "Lepas Kunci"}
            </span>
          </div>

        </div>

        {/* Area Harga & Tombol */}
        <div className="mt-auto flex flex-col gap-6">
          
          {/* Harga */}
          <div className="w-full">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Harga Sewa</p>
            <div className="flex items-end gap-1.5">
              <span className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-amber-500 transition-colors duration-300">
                {formatRupiah(car.price)}
              </span>
              <span className="text-sm font-semibold text-slate-500 mb-1">/hari</span>
            </div>
          </div>

          {/* Tombol Sewa */}
          <Button asChild className="w-full rounded-xl bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-bold h-14 shadow-lg shadow-slate-900/10 transition-all duration-300 group/btn overflow-hidden border border-slate-900 hover:border-amber-400">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6 w-full relative z-10">
              
              <span className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-110" />
                <span className="text-base tracking-wide">Pesan Sekarang</span>
              </span>
              
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover/btn:bg-white flex items-center justify-center transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-amber-500 transition-colors duration-300" />
              </div>
            
            </a>
          </Button>
          
        </div>
      </div>
      
    </div>
  );
}