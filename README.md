<div align="center">
  <img src="./public/logo.png" alt="Fajar Trans Madiun Logo" width="120" height="120" />

  # 🚗 Fajar Trans Madiun — Official Website
  **Solusi Transportasi & Rental Mobil Premium, Aman, dan Terpercaya di Madiun**

  [![Live Website](https://img.shields.io/badge/Live_Demo-fajartrans.vercel.app-f59e0b?style=for-the-badge&logo=vercel&logoColor=black)](https://fajartrans.vercel.app)
  [![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
</div>

---

## 📋 Daftar Isi

1. [Tentang Proyek](#-tentang-proyek)
2. [Fitur Utama Website](#-fitur-utama-website)
3. [Katalog Armada & Tarif](#-katalog-armada--tarif)
4. [Teknologi yang Digunakan (Tech Stack)](#-teknologi-yang-digunakan-tech-stack)
5. [Struktur Direktori Proyek](#-struktur-direktori-proyek)
6. [Dokumentasi Fitur Visitor Counter (Real-Time)](#-dokumentasi-fitur-visitor-counter-real-time)
7. [Panduan Instalasi & Menjalankan di Lokal](#-panduan-instalasi--menjalankan-di-lokal)
8. [Panduan Kustomisasi Data](#-panduan-kustomisasi-data)
9. [Deployment](#-deployment)
10. [Kontak Resmi Fajar Trans Madiun](#-kontak-resmi-fajar-trans-madiun)

---

## 🌟 Tentang Proyek

**Fajar Trans Madiun (`fajartrans-web`)** adalah platform web profil perusahaan dan katalog pemesanan kendaraan resmi milik **Fajar Trans Madiun**, penyedia layanan transportasi yang berlokasi di Kabupaten Madiun, Jawa Timur.

Website ini dirancang dengan pendekatan antarmuka modern bernuansa **Dark Slate & Amber Gold**, dilengkapi animasi interaktif berbasis **GSAP (GreenSock Animation Platform) & ScrollTrigger**, sistem pemesanan instan terintegrasi ke **WhatsApp**, serta fitur **Statistik Pengunjung Real-Time** di bagian footer untuk memantau trafik kunjungan harian, mingguan, bulanan, tahunan, dan total keseluruhan.

### Layanan Utama Fajar Trans:
- 🚘 **Rental Mobil** — Sewa mobil harian lepas kunci maupun dengan pengemudi (*driver*) profesional.
- 🏖️ **Paket Wisata** — Layanan perjalanan liburan keluarga dan rombongan ke berbagai destinasi wisata.
- ✈️ **Jemput Bandara** — Layanan *pick-up* dan *drop-off* bandara/stasiun secara tepat waktu (*on-time*).
- 🕌 **Ziarah Wali** — Perjalanan religi rombongan dengan dukungan minibus berkapasitas besar (Toyota Hiace & Isuzu Elf Long).

---

## ✨ Fitur Utama Website

### 1. 🏠 Halaman Beranda Interaktif (`/`)
- **Hero Section Dinamis**: Dilengkapi animasi timeline GSAP, efek *floating car* berkelanjutan, serta *Trust Badges* (Armada Terawat, Harga Jujur, Layanan 24 Jam).
- **Layanan Unggulan (`ServicesSection`)**: Empat pilar layanan utama dengan efek mikro-interaksi saat kursor diarahkan (*hover*).
- **Alur Pemesanan Interaktif (`HowItWorksSection`)**: Visualisasi 4 langkah pemesanan dengan garis jalan raya progresif dan indikator mobil yang bergerak turun mengikuti posisi *scroll* layar pengguna (`ScrollTrigger scrub`).
- **Koleksi Armada Pilihan (`FeaturedCarsSection`)**: Menampilkan 4 unit unggulan (*Innova Reborn, All New Avanza, All New Xenia, Hiace Commuter*) dengan tata letak *staggered* dan efek *parallax*.
- **Ulasan Pelanggan (`TestimonialSection`)**: Menampilkan testimoni asli pelanggan dari Google Maps dengan rating bintang 5.

### 2. 🚙 Katalog Armada Lengkap (`/armada`)
- Menampilkan seluruh unit kendaraan yang tersedia dengan kartu interaktif (`CarCard`).
- **Deteksi Spesifikasi Otomatis**: Komponen secara cerdas mendeteksi apakah unit disewakan **Lepas Kunci** atau **Dengan Supir** berdasarkan skema durasi.
- **Direct WhatsApp Booking**: Setiap tombol *"Pesan Sekarang"* pada kartu armada langsung mengarahkan pengguna ke WhatsApp Admin dengan teks pesan otomatis sesuai nama mobil yang dipilih:
  > *"Halo Fajar Trans, saya ingin bertanya tentang ketersediaan sewa mobil [Nama Mobil]."*

### 3. 📖 Halaman Tentang Kami (`/tentang-kami`)
- **Bento Grid Layout**: Menyajikan Filosofi Fajar Trans, foto garansi armada, Visi, dan Misi perusahaan dalam tata letak Bento modern.
- **Animated Counter Statistics**: Angka pencapaian perusahaan (`850+ Pelanggan Puas`, `1200+ Perjalanan Selesai`, `4.9 Rating Rata-rata`, `100% Legal & Terpercaya`) yang menghitung naik secara otomatis saat masuk ke area pandang layar.
- **Standar Kualitas**: Penjelasan 4 keunggulan utama Fajar Trans Madiun.

### 4. 📍 Halaman Kontak & Peta Lokasi (`/kontak`)
- Menyajikan informasi lengkap WhatsApp/Telepon, Email, Jam Operasional 24 Jam, serta alamat lengkap Garasi Utama.
- **Embedded Google Maps**: Peta interaktif lokasi garasi utama Fajar Trans di Tempursari, Kec. Wungu, Kabupaten Madiun.

### 5. 📊 Statistik Pengunjung Real-Time di Footer (`VisitorCounter`)
- Terletak di bagian `Footer` sehingga tampil di seluruh halaman website.
- Menampilkan 5 metrik kunjungan secara *real-time*:
  - **Hari Ini** (Reset otomatis setiap pergantian hari pukul 00:00 WIB)
  - **Minggu Ini** (Mengikuti kalender minggu berjalan WIB)
  - **Bulan Ini** (Mengikuti bulan berjalan WIB)
  - **Tahun Ini** (Mengikuti tahun berjalan WIB)
  - **Semua** (Akumulasi total seluruh kunjungan sejak website aktif)
- **Kompatibilitas Lintas Platform (Instagram, TikTok, Chrome, Safari, dll.)**: Dirancang menggunakan endpoint internal Next.js (`/api/visitors`) dengan *cache-busting* dan *bfcache listener* agar setiap klik tautan dari bio **Instagram**, **TikTok**, **WhatsApp**, maupun browser reguler (**Chrome**, **Safari**, **Edge**, **Firefox**) terhitung +1 secara akurat.

### 6. 🎨 Custom Favicon & Brand Identity
- Seluruh ikon tab browser (`favicon.ico`, `icon.png`, `apple-icon.png`) dan metadata OpenGraph menggunakan logo resmi **Fajar Trans Madiun** (bukan ikon bawaan Vercel/Next.js).

---

## 🚘 Katalog Armada & Tarif

Berikut adalah daftar armada yang terdaftar di dalam sistem (`src/lib/data.ts`):

| No | Nama Armada | Kategori | Durasi | Layanan | Harga Sewa |
|:--:|:---|:---|:---:|:---:|---:|
| 1 | **New Agya** | City Car / Hatchback | 24 Jam | Lepas Kunci | Rp 275.000 /hari |
| 2 | **New Ayla** | City Car / Hatchback | 24 Jam | Lepas Kunci | Rp 275.000 /hari |
| 3 | **Brio MT** | City Car / Hatchback | 24 Jam | Lepas Kunci | Rp 300.000 /hari |
| 4 | **Brio AT** | City Car / Hatchback | 24 Jam | Lepas Kunci | Rp 300.000 /hari |
| 5 | **All New Avanza** | MPV Keluarga | 24 Jam | Lepas Kunci | Rp 350.000 /hari |
| 6 | **All New Xenia** | MPV Keluarga | 24 Jam | Lepas Kunci | Rp 350.000 /hari |
| 7 | **New Ertiga** | MPV Keluarga | 24 Jam | Lepas Kunci | Rp 350.000 /hari |
| 8 | **Innova Reborn** | MPV Premium | Per Day | Lepas Kunci | Rp 600.000 /hari |
| 9 | **Hiace Commuter** | Minibus / Rombongan | Day + Driver | Dengan Supir | Rp 1.200.000 /hari |
| 10 | **Elf Long Giga** | Minibus / Rombongan | Day + Driver | Dengan Supir | Rp 1.400.000 /hari |
| 11 | **Hiace Premio** | Minibus Luxury | Day + Driver | Dengan Supir | Rp 1.500.000 /hari |

---

## 🛠 Teknologi yang Digunakan (Tech Stack)

| Kategori | Teknologi | Versi | Kegunaan |
|:---|:---|:---:|:---|
| **Framework Utama** | [Next.js (App Router)](https://nextjs.org/) | `16.1.6` | Server & Client Rendering, Routing, API Route Handler, dan Optimasi Gambar/Font |
| **UI Library** | [React](https://react.dev/) | `19.2.3` | Komponen antarmuka pengguna modern & reaktif |
| **Bahasa Pemrograman** | [TypeScript](https://www.typescriptlang.org/) | `^5.0` | *Static typing* untuk keamanan tipe data (`Car`, `CompanyInfo`, `VisitorStats`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `^4.0` | *Utility-first CSS framework* untuk desain responsif & tema gelap/terang |
| **Komponen UI** | [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) | `^4.0.5` | Komponen aksesibel (`Button`, `Sheet` menu mobile, `Card`, `Badge`) |
| **Animasi** | [GSAP](https://gsap.com/) & `@gsap/react` | `^3.14.2` | Animasi timeline, *ScrollTrigger*, *parallax*, dan *number counter* |
| **Ikonografi** | [Lucide React](https://lucide.dev/) | `^0.577.0` | Ikon vektor konsisten & ringan |
| **Tipografi** | Google Fonts (`Poppins`) | `next/font` | Font utama dengan ketebalan `300` hingga `900` |
| **Deployment** | [Vercel](https://vercel.com/) | Production | Hosting aplikasi & *Serverless Functions* |

---

## 📂 Struktur Direktori Proyek

```text
fajartrans-web/
├── public/                         # Aset statis publik
│   ├── images/
│   │   └── cars/                   # Foto unit armada (Brio, Avanza, Innova, Hiace, Elf, dll.)
│   ├── favicon.ico                 # Favicon resmi Fajar Trans
│   ├── logo.png                    # Logo utama Fajar Trans Madiun
│   ├── rent.png                    # Ilustrasi armada pada Hero Section
│   └── garansi.jpeg                # Foto pendukung halaman Tentang Kami
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/
│   │   │   └── visitors/
│   │   │       └── route.ts        # Endpoint API pencatat & pengambil statistik pengunjung
│   │   ├── armada/
│   │   │   └── page.tsx            # Halaman Katalog Armada (/armada)
│   │   ├── kontak/
│   │   │   └── page.tsx            # Halaman Kontak & Lokasi (/kontak)
│   │   ├── tentang-kami/
│   │   │   └── page.tsx            # Halaman Profil & Visi Misi (/tentang-kami)
│   │   ├── apple-icon.png          # Ikon Apple Touch (Fajar Trans Logo)
│   │   ├── favicon.ico             # Favicon App Router (Fajar Trans Logo)
│   │   ├── icon.png                # Ikon Tab Browser Resolusi Tinggi (Fajar Trans Logo)
│   │   ├── globals.css             # Konfigurasi global Tailwind CSS v4
│   │   ├── layout.tsx              # Root Layout, konfigurasi Font Poppins, Metadata SEO, Navbar & Footer
│   │   └── page.tsx                # Halaman Utama / Beranda (/)
│   ├── components/
│   │   ├── shared/                 # Komponen utama aplikasi
│   │   │   ├── CarCard.tsx         # Kartu katalog mobil & integrasi link WhatsApp
│   │   │   ├── FeaturedCarsSection.tsx # Seksi 4 armada unggulan di Beranda
│   │   │   ├── Footer.tsx          # Footer utama, CTA, navigasi, & VisitorCounter
│   │   │   ├── HeroSection.tsx     # Seksi pembuka halaman utama
│   │   │   ├── HowItWorksSection.tsx   # Seksi alur pemesanan dengan animasi jalan & mobil
│   │   │   ├── Navbar.tsx          # Navigasi atas responsif (Desktop & Mobile Sheet)
│   │   │   ├── ServicesSection.tsx # Seksi 4 layanan unggulan
│   │   │   ├── TestimonialSection.tsx  # Seksi ulasan pelanggan Google Maps
│   │   │   └── VisitorCounter.tsx  # Widget statistik pengunjung di Footer
│   │   └── ui/                     # Komponen dasar Shadcn UI
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── sheet.tsx
│   ├── lib/
│   │   ├── data.ts                 # Sumber data utama (Info Perusahaan, Daftar Armada, Format Rupiah)
│   │   └── utils.ts                # Fungsi utilitas penggabung class Tailwind (cn)
│   └── types/
│       └── index.ts                # Definisi interface TypeScript (Car, CompanyInfo)
├── components.json                 # Konfigurasi Shadcn UI
├── eslint.config.mjs               # Konfigurasi ESLint
├── next.config.ts                  # Konfigurasi Next.js & domain gambar
├── package.json                    # Daftar dependensi dan script proyek
├── postcss.config.mjs              # Konfigurasi PostCSS Tailwind v4
└── tsconfig.json                   # Konfigurasi kompilator TypeScript
```

---

## 📈 Dokumentasi Fitur Visitor Counter (Real-Time)

Fitur penghitung pengunjung terdiri dari dua bagian utama:

### 1. Backend API Route (`src/app/api/visitors/route.ts`)
- Menggunakan zona waktu **WIB (`Asia/Jakarta`, UTC+7)** agar pergantian hari, minggu, bulan, dan tahun sesuai dengan waktu lokal Indonesia.
- Membagi pencatatan ke dalam 5 *bucket* waktu persisten:
  - `day-YYYY-MM-DD` → Pengunjung **Hari Ini**
  - `week-YYYY-WXX` → Pengunjung **Minggu Ini** (ISO Week)
  - `month-YYYY-MM` → Pengunjung **Bulan Ini**
  - `year-YYYY` → Pengunjung **Tahun Ini**
  - `total-all-time` → Total Pengunjung **Semua Waktu**
- Dilengkapi penyimpanan *fallback* lokal sehingga tetap berfungsi meskipun sedang dijalankan pada lingkungan lokal tanpa koneksi eksternal.

#### Contoh Response JSON (`POST /api/visitors?hit=1`):
```json
{
  "today": 14,
  "week": 86,
  "month": 340,
  "year": 1250,
  "total": 1250,
  "updatedAt": "2026-11-06T03:35:00.000Z"
}
```

### 2. Komponen Client (`src/components/shared/VisitorCounter.tsx`)
- Dipasang langsung di dalam komponen `Footer` (`src/components/shared/Footer.tsx`).
- Menggunakan *same-origin request* (`/api/visitors?hit=1&t=<timestamp>`) dengan header `Cache-Control: no-store` dan opsi `keepalive: true`.
- Menjamin kompatibilitas penuh ketika tautan website diklik dari:
  - **Instagram Bio / Story (Instagram In-App Browser)**
  - **TikTok Profile (TikTok WebView)**
  - **WhatsApp Chat Link**
  - **Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, Brave**

---

## 🚀 Panduan Instalasi & Menjalankan di Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

### 1. Prasyarat
- **Node.js** versi `18.18+` atau `20+`
- **Git**

### 2. Clone Repositori
```bash
git clone https://github.com/Argandhi23/fajartrans.git
cd fajartrans
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Jalankan Server Development
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 5. Build untuk Produksi
Untuk menguji hasil *build* produksi secara lokal:
```bash
npm run build
npm run start
```

---

## 🔧 Panduan Kustomisasi Data

Seluruh informasi kontak perusahaan dan daftar armada terpusat di satu file: **`src/lib/data.ts`**.

### Mengubah Informasi Kontak
```ts
export const companyInfo: CompanyInfo = {
  name: "Fajar Trans Madiun",
  email: "Fajartric@gmail.com",
  whatsapp: "628977312135", // Gunakan awalan kode negara 62 tanpa tanda +
  tiktok: "Fajar Trans Madiun",
  services: ["Paket wisata", "Jemput bandara", "Ziaroh wali"],
};
```

### Menambah atau Mengubah Unit Armada
Tambahkan objek baru ke dalam array `carList` di `src/lib/data.ts` dan letakkan foto kendaraan di `public/images/cars/`:
```ts
{
  id: "innova-zenix",
  name: "Innova Zenix",
  price: 750000,
  duration: "24 Jam", // Gunakan kata "Driver" jika harga sudah termasuk supir
  imageUrl: "/images/cars/zenix.png",
}
```

---

## 🌐 Deployment

Proyek ini terhubung langsung dengan **Vercel** untuk *Continuous Deployment (CD)*:
- Setiap perubahan yang di-*push* ke branch `main` pada repositori GitHub (`https://github.com/Argandhi23/fajartrans.git`) akan otomatis memicu proses *build* dan pembaruan di [https://fajartrans.vercel.app](https://fajartrans.vercel.app).

---

## 📞 Kontak Resmi Fajar Trans Madiun

- 🏢 **Nama Usaha:** Fajar Trans Madiun
- 📍 **Alamat Garasi:** Jl. Cemp. Sari, Nongkobener, Tempursari, Kec. Wungu, Kabupaten Madiun, Jawa Timur 63181
- 📱 **WhatsApp / Telepon:** [+62 897-7312-135](https://wa.me/628977312135)
- 📧 **Email:** [Fajartric@gmail.com](mailto:Fajartric@gmail.com)
- 📸 **Instagram:** [@fajar.c](https://www.instagram.com/fajar.c)
- 🎵 **TikTok:** [@fajartc](https://www.tiktok.com/@fajartc)
- 🌐 **Website Resmi:** [https://fajartrans.vercel.app](https://fajartrans.vercel.app)

---

<div align="center">
  <p>© 2026 <strong>Fajar Trans Madiun</strong>. All rights reserved.</p>
</div>
