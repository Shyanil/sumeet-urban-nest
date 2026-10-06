"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Preserve and lock original body overflow
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    let currentProgress = 0;
    let exitTimer: ReturnType<typeof setTimeout> | null = null;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let isTerminated = false;

    // Smooth increment towards 92%
    const progressInterval = setInterval(() => {
      if (isTerminated) return;
      const remaining = 92 - currentProgress;
      if (remaining > 0) {
        const step = Math.max(1, Math.ceil(remaining * 0.12));
        currentProgress = Math.min(92, currentProgress + step);
        setProgress(currentProgress);
      }
    }, 40);

    const triggerCompletion = () => {
      if (isTerminated) return;
      isTerminated = true;
      clearInterval(progressInterval);

      setProgress(100);

      // Brief holding pause at 100%
      exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 250);

      // Unmount after smooth fade out transition
      hideTimer = setTimeout(() => {
        setIsHidden(true);
        document.body.style.overflow = originalOverflow;
      }, 950);
    };

    const handleLoaded = () => {
      const elapsed = Date.now() - startTime;
      const minDisplayDuration = 900; // ensures smooth brand glimpse without annoying delay
      const remainingTime = Math.max(0, minDisplayDuration - elapsed);

      setTimeout(() => {
        triggerCompletion();
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      window.addEventListener("load", handleLoaded, { once: true });
    }

    // Safety timeout: ensure site is never blocked beyond 2.2s even on slow networks
    const safetyTimeout = setTimeout(() => {
      triggerCompletion();
    }, 2200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(safetyTimeout);
      if (exitTimer) clearTimeout(exitTimer);
      if (hideTimer) clearTimeout(hideTimer);
      window.removeEventListener("load", handleLoaded);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      id="site-preloader"
      aria-label="Loading Sumeet Urban Nest"
      aria-live="polite"
      role="status"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#110E0C] text-white select-none transition-all duration-700 ease-out ${
        isExiting
          ? "opacity-0 pointer-events-none scale-[1.02] blur-[2px]"
          : "opacity-100"
      }`}
    >
      {/* Ambient luxury radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(196, 154, 60, 0.16) 0%, rgba(232, 115, 74, 0.08) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Official Brand Logo */}
        <div className="relative mb-7 w-48 min-[400px]:w-56 sm:w-64 md:w-72">
          <Image
            src="/sumeet-urban-nest-logo-white.webp"
            alt="Sumeet Urban Nest"
            width={1921}
            height={819}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Tagline */}
        <p className="mb-8 max-w-[340px] text-[10px] font-light uppercase tracking-[0.28em] text-[#D6AC70] sm:text-xs">
          Khamardih, Shankar Nagar • Raipur
        </p>

        {/* Progress bar container */}
        <div className="w-56 sm:w-64">
          <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#D6AC70] via-[#E8734A] to-[#D6AC70] transition-[width] duration-200 ease-out shadow-[0_0_10px_rgba(214,172,112,0.7)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Counter & status */}
          <div className="mt-3 flex items-center justify-between text-[11px] tracking-widest text-[#B3A89F] font-mono">
            <span className="uppercase text-[10px] tracking-[0.2em] text-[#D6AC70]/80">Loading</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
