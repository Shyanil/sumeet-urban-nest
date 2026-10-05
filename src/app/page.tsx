import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import PlanSection from "@/components/PlanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SiteVisitBar from "@/components/SiteVisitBar";

export default function Home() {
  return (
      <main className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <OverviewSection />
        <WalkthroughSection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <SpecificationsSection />
        <PlanSection />
        <section className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-white" aria-label="Circular garden living">
          <Image
            src="/images/circular-garden-living-diorama.webp"
            alt="Circular garden living at Sumeet Urban Nest"
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </section>
        <ContactSection />
        <Footer />
        <SiteVisitBar />
      </main>
  );
}
