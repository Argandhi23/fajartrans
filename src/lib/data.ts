import { Car, CompanyInfo } from "@/types";

export const companyInfo: CompanyInfo = {
  name: "Fajar Trans Madiun",
  email: "Fajartric@gmail.com",
  whatsapp: "628977312135", // Gunakan 62 untuk link WA nanti
  tiktok: "Fajar Trans Madiun",
  services: ["Paket wisata", "Jemput bandara", "Ziaroh wali"],
};

export const carList: Car[] = [
  // --- KELAS CITY CAR & HATCHBACK ---
  { id: "brio-mt", name: "Brio MT", price: 300000, duration: "24 Jam", imageUrl: "/images/cars/brio-mt.png" },
  { id: "brio-at", name: "Brio AT", price: 300000, duration: "24 Jam", imageUrl: "/images/cars/at.png" },
  { id: "new-agya", name: "New Agya", price: 275000, duration: "24 Jam", imageUrl: "/images/cars/agya.png" },
  { id: "new-ayla", name: "New Ayla", price: 275000, duration: "24 Jam", imageUrl: "/images/cars/new-ayla.png" },
  
  // --- KELAS MPV (Keluarga) ---
  { id: "all-new-avanza", name: "All New Avanza", price: 350000, duration: "24 Jam", imageUrl: "/images/cars/all-new-avanza.png" },
  { id: "xenia-all-new", name: "All New Xenia", price: 350000, duration: "24 Jam", imageUrl: "/images/cars/xenia-all-new.png" },
  { id: "new-ertiga", name: "New Ertiga", price: 350000, duration: "24 Jam", imageUrl: "/images/cars/new-ertiga.png" },
  { id: "innova-reborn", name: "Innova Reborn", price: 600000, duration: "Per Day", imageUrl: "/images/cars/innova-reborn.png" },
  
  // --- KELAS MINIBUS / ROMBONGAN (Dengan Supir) ---
  { id: "hiace-commuter", name: "Hiace Commuter", price: 1200000, duration: "Day + Driver", imageUrl: "/images/cars/commuter.png" },
  { id: "elf-long-giga", name: "Elf Long Giga", price: 1400000, duration: "Day + Driver", imageUrl: "/images/cars/elf-long.png" },
  { id: "hiace-premio", name: "Hiace Premio", price: 1500000, duration: "Day + Driver", imageUrl: "/images/cars/premio.png" },
];

// Fungsi pembantu untuk memformat Rupiah
export const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

