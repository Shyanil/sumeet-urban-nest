"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LuminaInteractiveList, type LuminaSlide } from "@/components/ui/lumina-interactive-list";

const gallerySlides: LuminaSlide[] = [
  { title: "Podium Gardens", description: "Landscaped greens and quiet seating create an everyday escape close to home.", media: "/images/exterior/terrace-sitting.webp" },
  { title: "Living Spaces", description: "Bright, generous interiors designed around comfort, connection and natural light.", media: "/images/interior/living-dining.webp" },
  { title: "Rooftop Leisure", description: "An elevated pool and sundeck bring relaxation into the open sky.", media: "/images/exterior/swimming-pool.webp" },
  { title: "Evening Glow", description: "Warm architectural lighting gives the podium a calm character after sunset.", media: "/images/exterior/podium-closeup.webp" },
  { title: "Private Views", description: "Expansive balconies extend the home toward open views and fresh air.", media: "/images/exterior/balcony-view.webp" },
  { title: "Grand Arrival", description: "A welcoming double height lobby sets a refined tone from the first step inside.", media: "/images/interior/entrance-lobby.webp" },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelectedIndex(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selectedIndex]);

  return (
    <>
      <section id="gallery" className="scroll-mt-20">
        <LuminaInteractiveList slides={gallerySlides} onOpen={setSelectedIndex} />
      </section>
      {selectedIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label="Gallery image preview" onClick={() => setSelectedIndex(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5 backdrop-blur-md md:p-10">
          <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image preview" className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 text-3xl text-white transition hover:bg-white hover:text-black">×</button>
          <div className="relative h-[85vh] w-[94vw] max-w-[1600px]" onClick={(event) => event.stopPropagation()}>
            <Image src={gallerySlides[selectedIndex].media} alt={gallerySlides[selectedIndex].title} fill className="object-contain" sizes="94vw" priority />
          </div>
        </div>
      )}
    </>
  );
}
