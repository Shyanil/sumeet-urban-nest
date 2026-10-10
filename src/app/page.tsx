import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import PlanSection from "@/components/PlanSection";
import LayoutSection from "@/components/LayoutSection";
import DeveloperSection from "@/components/DeveloperSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SiteVisitBar from "@/components/SiteVisitBar";
import { EnquiryProvider } from "@/components/EnquiryPanel";

export default function Home() {
  return (
    <EnquiryProvider>
      <main className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <OverviewSection />
        <AmenitiesSection />
        <GallerySection />
        <PlanSection />
        <SpecificationsSection />
        <LocationSection />
        <LayoutSection />
        <ContactSection />
        <DeveloperSection />
        <Footer />
        <SiteVisitBar />
      </main>
    </EnquiryProvider>
  );
}
