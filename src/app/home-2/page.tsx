import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sumeet Urban Nest | Coming Soon — Register Your Interest",
  description:
    "Be the first to discover Khamardih, Shankar Nagar's first BOHK Homes. Register now for exclusive pre-launch access.",
};

export default function Home2() {
  return (
    <main className="min-h-screen bg-white font-[var(--font-montserrat)]">
      {/* ─── HERO + FORM ─── */}
      <section className="relative w-full min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/exterior/elevation-view-1.webp"
            alt="Sumeet Urban Nest"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        </div>

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 50 50" className="w-[44px] h-[44px]">
                <rect x="5" y="5" width="18" height="18" fill="#E8734A" rx="2" />
                <rect x="27" y="5" width="18" height="18" fill="#F5C242" rx="2" />
                <rect x="5" y="27" width="18" height="18" fill="#2A7B88" rx="2" />
                <rect x="27" y="27" width="18" height="18" fill="#E8734A" rx="2" />
              </svg>
              <span className="text-[9px] font-bold tracking-[0.15em] text-white mt-0.5">URBAN</span>
              <span className="text-[9px] font-bold tracking-[0.15em] text-white -mt-1">NEST</span>
            </div>
          </Link>

          <a
            href="tel:+917247724800"
            className="hidden sm:flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 7247 7248 00
          </a>
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 flex items-center min-h-[calc(100vh-100px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full py-12">
            {/* Left — Reveal Copy */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-coral/20 border border-coral/40 rounded-full px-4 py-1.5 w-fit mb-8">
                <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
                <span className="text-coral text-xs font-semibold tracking-wider uppercase">
                  Coming Soon
                </span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-medium leading-[1.1] mb-6">
                Khamardih, Shankar
                <br />
                Nagar&apos;s first
                <br />
                <span className="text-coral">BOHK homes.</span>
              </h1>

              <p className="text-white/70 text-base md:text-lg max-w-[520px] leading-relaxed mb-8">
                Something extraordinary is opening out at Shankar Nagar. 2 &amp; 3 BHK homes
                designed to extend your everyday — across 1.76 acres, 3 towers, 152 residences.
              </p>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div>
                  <p className="text-coral text-3xl md:text-4xl font-semibold">152</p>
                  <p className="text-white/50 text-sm mt-1">Residences</p>
                </div>
                <div>
                  <p className="text-coral text-3xl md:text-4xl font-semibold">1.76</p>
                  <p className="text-white/50 text-sm mt-1">Acres</p>
                </div>
                <div>
                  <p className="text-coral text-3xl md:text-4xl font-semibold">3</p>
                  <p className="text-white/50 text-sm mt-1">Towers</p>
                </div>
                <div>
                  <p className="text-coral text-3xl md:text-4xl font-semibold">2-3</p>
                  <p className="text-white/50 text-sm mt-1">BHK Homes</p>
                </div>
              </div>
            </div>

            {/* Right — Form Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                <h2 className="text-gray-800 text-2xl md:text-[28px] font-semibold mb-2">
                  Get Exclusive Access
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Register now for pre-launch pricing &amp; floor plans.
                </p>

                <form className="space-y-5">
                  <div>
                    <label htmlFor="h2Name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="h2Name"
                      name="fullName"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="h2Phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="h2Phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow"
                      placeholder="+91"
                    />
                  </div>

                  <div>
                    <label htmlFor="h2Email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="h2Email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="h2Config" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Interested In
                    </label>
                    <select
                      id="h2Config"
                      name="config"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow"
                    >
                      <option value="">Select configuration</option>
                      <option value="2bhk">2 BHK</option>
                      <option value="3bhk">3 BHK</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-coral text-white font-bold text-base py-4 rounded-lg hover:bg-coral-dark transition-colors tracking-wide mt-2"
                  >
                    REVEAL THE PRICE
                  </button>

                  <p className="text-gray-400 text-xs text-center mt-3">
                    RERA: PCGRERA190326002064 &nbsp;|&nbsp; rera.cgstate.gov.in
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEASER SECTION ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.3em] text-coral uppercase mb-3">
              Opening Out Soon
            </p>
            <h2 className="text-gray-800 text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight max-w-[700px] mx-auto">
              A home that doesn&apos;t end at the walls.
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-16">
            {/* Card 1 */}
            <div className="group relative rounded-xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/exterior/podium-closeup.webp"
                alt="Podium Amenities"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-coral text-xs font-semibold tracking-wider uppercase mb-2">
                  Amenities
                </p>
                <h3 className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Podium greens to
                  <br />rooftop skies.
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/interior/living-dining.webp"
                alt="Living & Dining Interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-coral text-xs font-semibold tracking-wider uppercase mb-2">
                  Interiors
                </p>
                <h3 className="text-white text-xl md:text-2xl font-medium leading-snug">
                  Spaces designed to
                  <br />open out living.
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/exterior/aerial-view.webp"
                alt="Aerial Masterplan View"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-coral text-xs font-semibold tracking-wider uppercase mb-2">
                  Masterplan
                </p>
                <h3 className="text-white text-xl md:text-2xl font-medium leading-snug">
                  1.76 acres. 3 towers.
                  <br />Opened to life.
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="bg-coral rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1200px] mx-auto">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-medium mb-1">
                Be the first to know.
              </h3>
              <p className="text-white/80 text-base">
                Pre-launch access · Exclusive pricing · Priority unit selection
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+917247724800"
                className="inline-flex items-center justify-center gap-2 bg-white text-coral font-bold text-sm px-8 py-4 rounded-lg hover:bg-cream transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7247 7248 00
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-sm px-8 py-4 rounded-lg hover:bg-white hover:text-coral transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER STRIP ─── */}
      <footer className="bg-gray-900 py-6">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 Sumeet Infraventures. All renderings indicative.
          </p>
          <p className="text-gray-500 text-xs">
            Sumeet Business Park, Pachpedi Naka, Raipur, Chhattisgarh
          </p>
        </div>
      </footer>
    </main>
  );
}
