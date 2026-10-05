"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Walkthrough", href: "#walkthrough", id: "walkthrough" },
  { name: "Amenities", href: "#amenities", id: "amenities" },
  { name: "Gallery", href: "#gallery", id: "gallery" },
  { name: "Location", href: "#location", id: "location" },
  { name: "Specifications", href: "#specifications", id: "specifications" },
  { name: "Floor Plans", href: "#plan", id: "plan" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      const getDocumentTop = (element: HTMLElement) =>
        element.getBoundingClientRect().top + window.scrollY;

      // 1. If user is in the Hero or Overview section (above Walkthrough), no menu item should be highlighted
      const walkthroughEl = document.getElementById("walkthrough");
      if (!walkthroughEl || scrollY + window.innerHeight * 0.28 < getDocumentTop(walkthroughEl)) {
        setActiveSection("");
        return;
      }

      // 2. Detect which section is currently active based on scroll position
      const scrollPosition = scrollY + Math.min(window.innerHeight * 0.32, 280);
      let current = "";

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && scrollPosition >= getDocumentTop(el)) {
          current = navLinks[i].id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("load", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      const headerOffset = 70;
      const targetPosition =
        targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-100 bg-white/95 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1720px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Logo shifted towards the left */}
          <Link
            href="/"
            aria-label="Sumeet Urban Nest home"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <Image
              src={isScrolled ? "/logo.webp" : "/sumeet-urban-nest-logo-white.webp"}
              alt="Sumeet Urban Nest"
              width={1921}
              height={819}
              priority
              className={`h-auto w-[105px] transition-all min-[380px]:w-[115px] sm:w-[130px] md:w-[145px] lg:w-[155px] ${!isScrolled ? "drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)]" : ""}`}
            />
          </Link>

          {/* Desktop Navigation Links from PDF with Dynamic Scroll Highlighting */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-1.5 lg:flex xl:gap-3 2xl:gap-5"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return isActive ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="rounded-md bg-[#D6AC70] px-4 py-1.5 text-[14px] font-medium text-[#1a1a1a] shadow-sm transition-all duration-200 xl:px-5 xl:py-2 xl:text-[15px]"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`whitespace-nowrap px-2.5 py-1.5 text-[14px] font-medium tracking-wide transition-colors xl:px-3.5 xl:text-[15px] ${
                    isScrolled
                      ? "text-[#1a1a1a] hover:text-[#D6AC70]"
                      : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-[#D6AC70]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                isScrolled
                  ? "border-gray-200 bg-gray-50 text-gray-800"
                  : "border-white/30 bg-black/30 text-white backdrop-blur-sm"
              }`}
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {isMobileMenuOpen && (
          <div className="animate-[enquiry-sheet-in_200ms_ease-out] border-t border-gray-100 bg-white px-6 py-6 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#D6AC70] text-[#1a1a1a]"
                        : "text-gray-800 hover:bg-gray-50 hover:text-coral"
                    }`}
                  >
                    <span>{link.name}</span>
                    <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>

    </>
  );
}
