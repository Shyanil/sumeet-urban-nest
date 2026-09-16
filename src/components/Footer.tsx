import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e4dc] bg-[#F8F7F3] py-12 md:py-16">
      <div className="mx-auto max-w-[1680px] px-6 md:px-[9vw]">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr_auto] md:gap-14">
          <div>
            <Link
              href="/"
              aria-label="Sumeet Urban Nest home"
              className="inline-flex"
            >
              <Image
                src="/logo.webp"
                alt="Sumeet Urban Nest"
                width={1921}
                height={819}
                className="h-auto w-[190px] object-contain md:w-[230px]"
                sizes="(min-width: 768px) 230px, 190px"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm font-light leading-7 text-[#8a8a8a] md:text-base">
              Khamardih, Shankar Nagar first BOHK Homes.
              <span className="block">Designed to open out your everyday.</span>
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-medium tracking-[0.48em] text-[#555555] md:text-base">
              CORPORATE
            </h2>
            <address className="text-sm font-light not-italic leading-7 text-[#8a8a8a] md:text-base">
              Sumeet Business Park,
              <span className="block">Pachpedi Naka, Raipur, Chhattisgarh</span>
            </address>
          </div>

          <div className="flex md:justify-end">
            <Image
              src="/images/interior/sumeet-infracon-logo.webp"
              alt="Sumeet Infracon"
              width={1268}
              height={1241}
              className="h-auto w-[135px] object-contain md:w-[165px]"
              sizes="(min-width: 768px) 165px, 135px"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-[#e2ded6] pt-6 text-center md:mt-12">
          <p className="text-xs text-[#aaa49c] md:text-sm">
            &copy; 2026 Sumeet Infraventures. All renderings indicative.
          </p>
        </div>
      </div>
    </footer>
  );
}
