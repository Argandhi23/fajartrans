import HeroSection from "@/components/shared/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";
import FeaturedCarsSection from "@/components/shared/FeaturedCarsSection";
import TestimonialSection from "@/components/shared/TestimonialSection";
import HowItWorksSection from "@/components/shared/HowItWorksSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <HeroSection />
      <ServicesSection />
      
      {/* Tambahan: Bagian Alur Pemesanan yang baru kita buat */}
      <HowItWorksSection />
      
      <FeaturedCarsSection />
      <TestimonialSection />
    </main>
  );
}