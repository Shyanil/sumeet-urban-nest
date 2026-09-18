"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EnquiryButton } from "@/components/EnquiryPanel";

const galleryImages = [
  {
    src: "/images/interior/living-dining.webp",
    alt: "Living and dining area",
  },
  {
    src: "/images/exterior/terrace-sitting.webp",
    alt: "Landscaped podium seating and walkway",
  },
  {
    src: "/images/exterior/swimming-pool.webp",
    alt: "Swimming pool view",
  },
  {
    src: "/images/exterior/podium-closeup.webp",
    alt: "Podium close-up evening view",
  },
  {
    src: "/images/exterior/balcony-view.webp",
    alt: "Balcony View",
  },
  {
    src: "/images/exterior/terrace-sitting.webp",
    alt: "Terrace Sitting Area",
  },
  {
    src: "/images/interior/entrance-lobby.webp",
    alt: "Ground Floor Entrance Lobby",
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const previousIndex =
    activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1;
  const nextIndex =
    activeIndex === galleryImages.length - 1 ? 0 : activeIndex + 1;

  useEffect(() => {
    if (selectedIndex !== null) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedIndex]);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#DF6E5A] pb-36 pt-8 md:pb-52 md:pt-14">
        <Image
          src="/images/exterior/amenities-rings.webp"
          alt=""
          width={2034}
          height={773}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-24 -z-10 hidden h-auto w-[850px] opacity-45 lg:block"
        />

        <div className="relative h-auto w-full aspect-[1.9/1] max-h-[680px] min-h-[280px]">
          <button
            type="button"
            onClick={() => setSelectedIndex(previousIndex)}
            aria-label={`Open ${galleryImages[previousIndex].alt}`}
            className="group absolute -left-[14%] inset-y-0 w-[24%] overflow-hidden rounded-[42px] md:rounded-[58px]"
          >
            <Image
              key={`previous-${galleryImages[previousIndex].src}`}
              src={galleryImages[previousIndex].src}
              alt={galleryImages[previousIndex].alt}
              fill
              className="animate-[gallery-slide-right_650ms_ease-out] object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="24vw"
            />
          </button>

          <button
            type="button"
            onClick={() => setSelectedIndex(activeIndex)}
            aria-label={`Open ${galleryImages[activeIndex].alt}`}
            className="group relative mx-auto block h-full w-[70%] overflow-hidden rounded-[42px] md:rounded-[58px]"
          >
            <Image
              key={`active-${galleryImages[activeIndex].src}`}
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              className="animate-[gallery-slide-right_650ms_ease-out] object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="70vw"
              priority
            />
          </button>

          <button
            type="button"
            onClick={() => setSelectedIndex(nextIndex)}
            aria-label={`Open ${galleryImages[nextIndex].alt}`}
            className="group absolute -right-[14%] inset-y-0 w-[24%] overflow-hidden rounded-[42px] md:rounded-[58px]"
          >
            <Image
              key={`next-${galleryImages[nextIndex].src}`}
              src={galleryImages[nextIndex].src}
              alt={galleryImages[nextIndex].alt}
              fill
              className="animate-[gallery-slide-right_650ms_ease-out] object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="24vw"
            />
          </button>
        </div>

        <div
          className="mt-10 flex justify-center gap-4"
          aria-label={`Amenity gallery slide ${activeIndex + 1} of ${galleryImages.length}`}
        >
          {galleryImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show amenity image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-4 w-4 rounded-full border-2 border-[#C8503E] transition-colors ${
                index === activeIndex ? "bg-[#C8503E]" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center px-6">
          <EnquiryButton
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#C8503E] px-9 py-4 text-base font-bold tracking-wide text-white shadow-[0_10px_24px_rgba(130,40,28,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B94535] md:px-11 md:text-lg"
          >
            REVEAL THE PRICE
          </EnquiryButton>
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Amenity image preview"
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm md:p-10"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/40 text-3xl leading-none text-white transition-colors hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            ×
          </button>

          <div
            className="relative h-[82vh] w-[92vw] max-w-[1500px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="92vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
