import Image from "next/image";

export const metadata = {
  title: "Thank You | Sumeet Urban Nest",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#F7F5F0] py-6 sm:py-10">
      <Image src="/images/exterior/hero-building.webp" alt="Sumeet Urban Nest" fill priority sizes="100vw" className="z-0 object-cover object-center opacity-[0.16]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#F7F5F0]/70 via-[#F7F5F0]/85 to-[#F7F5F0]" />
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-3rem)] w-[calc(100%-3rem)] max-w-5xl items-center justify-center sm:min-h-[calc(100svh-5rem)]">
        <div className="w-full overflow-hidden rounded-[28px] border border-[#2B2623]/10 bg-white/95 shadow-[0_24px_70px_rgba(43,38,35,0.16)] backdrop-blur-md sm:rounded-[36px]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[210px] overflow-hidden bg-[#2B2623] sm:min-h-[260px] lg:min-h-[500px]">
              <Image src="/images/exterior/aerial-view.webp" alt="Sumeet Urban Nest aerial view" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2623]/80 via-[#2B2623]/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">Sumeet Urban Nest</p>
                <p className="mt-2 text-xl font-light leading-tight sm:text-2xl">Your new address is taking shape.</p>
              </div>
            </div>
            <div className="px-6 py-10 text-center sm:px-12 sm:py-14 lg:flex lg:flex-col lg:justify-center lg:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-coral/10 text-coral lg:mx-0">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" /></svg>
              </div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-coral">Enquiry received</p>
              <h1 className="mt-3 text-4xl font-light tracking-[-0.045em] text-[#2B2623] sm:text-5xl">Thank you.</h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#6d625c] sm:text-base">Your details have been received. Our team will connect with you shortly to help you discover your new home.</p>
              <a href="/downloads/sumeet-urban-nest-brochure.pdf" download="Sumeet Urban Nest Brochure.pdf" className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-coral px-7 text-xs font-bold tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(232,115,74,0.28)] transition hover:-translate-y-0.5 hover:bg-coral-dark sm:text-sm lg:self-start">
                DOWNLOAD BROCHURE <span className="text-lg transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
              </a>
              <a href="/" className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[#6d625c] transition hover:text-coral lg:self-start">Back to website</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
