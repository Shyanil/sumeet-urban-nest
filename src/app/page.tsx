import Image from "next/image";
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
        <section
          className="relative w-full overflow-hidden bg-white py-4 sm:py-8 lg:h-[100svh] lg:min-h-[520px] lg:py-0"
          aria-label="Circular garden living"
        >
          <div className="relative mx-auto aspect-[1832/858] w-full max-w-[1720px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 lg:h-full lg:aspect-auto">
            <Image
              src="/images/circular-garden-living-diorama.webp"
              alt="Circular garden living at Sumeet Urban Nest"
              fill
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        </section>
        <ContactSection />
        <DeveloperSection />
        <Footer />
        <SiteVisitBar />
      </main>
    </EnquiryProvider>
  );
}
