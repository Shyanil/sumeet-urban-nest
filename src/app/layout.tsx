import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sumeet Urban Nest | Khamardih, Shankar Nagar's First BOHK Homes",
  description:
    "Discover 2 & 3 BHK homes at Sumeet Urban Nest, Khamardih, Shankar Nagar, Raipur. 152 residences across 3 towers, spread over 1.76 acres with world-class amenities.",
  keywords: [
    "Sumeet Urban Nest",
    "BOHK Homes",
    "Khamardih",
    "Shankar Nagar",
    "Raipur",
    "2 BHK",
    "3 BHK",
    "Chhattisgarh",
    "Sumeet Infraventures",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
