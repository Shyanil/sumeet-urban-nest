import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-[112px] max-w-[1680px] items-center justify-between px-6 md:h-[160px] md:px-[9vw] md:pt-10">
        {/* Logo */}
        <Link href="/" aria-label="Sumeet Urban Nest home" className="shrink-0">
          <Image
            src="/logo.webp"
            alt="Sumeet Urban Nest"
            width={1921}
            height={819}
            priority
            className="h-auto w-[132px] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] md:w-[152px] lg:w-[165px]"
          />
        </Link>

        {/* Contact Info - Desktop */}
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:+917247724800"
            className="flex items-center gap-2 text-[15px] font-medium text-[#242424] transition-colors hover:text-coral lg:text-[17px]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-coral/65"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.8 5.7c0 8 6.5 14.5 14.5 14.5.8 0 1.5-.5 1.8-1.2l1-2.4-4.3-2-1.6 2c-3.3-1.4-5.9-4-7.3-7.3l2-1.6-2-4.3-2.4 1c-.7.3-1.2 1-1.2 1.8Z"
              />
            </svg>
            7247 7248 00
          </a>
          <a
            href="mailto:sales@sumeetinfraventurs.com"
            className="flex items-center gap-2 text-[15px] font-medium text-[#242424] transition-colors hover:text-coral lg:text-[17px]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-coral/65"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="2.8" y="5" width="18.4" height="14" rx="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
            </svg>
            sales@sumeetinfraventurs.com
          </a>
          <a
            href="#contact"
            className="ml-4 rounded-md bg-coral px-8 py-4 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-coral-dark lg:px-14 lg:py-[18px] lg:text-[17px]"
          >
            ENQUIRE NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-[#242424] drop-shadow-sm xl:hidden" aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
