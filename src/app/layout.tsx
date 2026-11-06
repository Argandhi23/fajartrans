import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // <-- Ubah import font di sini
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// Konfigurasi font Poppins
// Kita panggil beberapa 'weight' (ketebalan) agar bisa dipakai dari teks biasa sampai judul yang tebal
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fajartrans.vercel.app"),
  title: {
    default: "Fajar Trans Madiun | Rental Mobil, Paket Wisata & Jemput Bandara",
    template: "%s | Fajar Trans Madiun",
  },
  description:
    "Solusi transportasi premium di Madiun. Melayani rental mobil lepas kunci & dengan supir, paket wisata, jemput bandara, hingga ziarah wali 24 jam dengan armada terawat.",
  keywords: [
    "Fajar Trans",
    "Fajar Trans Madiun",
    "Rental Mobil Madiun",
    "Sewa Mobil Madiun",
    "Paket Wisata Madiun",
    "Jemput Bandara Madiun",
    "Ziarah Wali Madiun",
    "Sewa Hiace Madiun",
    "Sewa Elf Madiun",
  ],
  authors: [{ name: "Fajar Trans Madiun" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Fajar Trans Madiun | Rental Mobil & Transportasi Premium",
    description:
      "Solusi transportasi premium di Madiun. Melayani sewa mobil, paket wisata, jemput bandara, hingga ziarah wali dengan armada terbaik dan supir profesional.",
    siteName: "Fajar Trans Madiun",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Fajar Trans Madiun Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Terapkan font Poppins di tag body */}
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Navbar />
        {/* Flex-grow agar footer selalu terdorong ke paling bawah layarnya */}
        <main className="grow bg-slate-50">
          {children} 
        </main>
        <Footer /> 
      </body>
    </html>
  );
}