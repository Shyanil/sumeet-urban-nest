"use client";

import { useEffect, useRef, useState } from "react";

export default function FloorPlanPdfViewer({ src, maxPages }: { src: string; maxPages?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const renderPages = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();

        const pdf = await pdfjs.getDocument(src).promise;
        const container = containerRef.current;
        if (!container || cancelled) return;

        container.replaceChildren();
        const availableWidth = container.clientWidth;

        const pageCount = maxPages ? Math.min(maxPages, pdf.numPages) : pdf.numPages;
        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = Math.min(availableWidth / baseViewport.width, 2);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context || cancelled) return;

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.className = "block w-full bg-white shadow-[0_8px_24px_rgba(43,38,35,0.1)]";
          container.appendChild(canvas);
          await page.render({ canvas, canvasContext: context, viewport }).promise;
        }
      } catch {
        if (!cancelled) setError(true);
      }
    };

    void renderPages();
    return () => { cancelled = true; };
  }, [src, maxPages]);

  if (error) {
    return <p className="p-8 text-center text-sm text-[#6d625c]">The floor plan could not be displayed. Please refresh the page.</p>;
  }

  return (
    <div ref={containerRef} className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 sm:gap-5" aria-label="Sumeet Urban Nest floor plan brochure" />
  );
}
