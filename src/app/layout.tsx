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

// ... (metadata tetap sama, letakkan di sini)

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