import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sumeet Urban Nest | Khamardih, Shankar Nagar's First BOHK Homes",
  description:
    "Discover 2 & 3 BOHK homes at Sumeet Urban Nest, Khamardih, Shankar Nagar, Raipur. 152 residences across 3 towers, spread over 1.76 acres with world-class amenities.",
  keywords: [
    "Sumeet Urban Nest",
    "BOHK Homes",
    "Khamardih",
    "Shankar Nagar",
    "Raipur",
    "2 BOHK",
    "3 BOHK",
    "Chhattisgarh",
    "Sumeet Infraventures",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
