import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import PlanSection from "@/components/PlanSection";
import LocationSection from "@/components/LocationSection";
import LayoutSection from "@/components/LayoutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OverviewSection />
      <WalkthroughSection />
      <AmenitiesSection />
      <GallerySection />
      <PlanSection />
      <LocationSection />
      <LayoutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
