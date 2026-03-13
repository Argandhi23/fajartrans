import FeaturedCarsSection from "@/components/shared/FeaturedCarsSection";
import HeroSection from "@/components/shared/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";
import TestimonialSection from "@/components/shared/TestimonialSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturedCarsSection />
      <TestimonialSection />
    </div>
  );
}