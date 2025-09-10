import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
    title: "Pedal Inn - Cañon City Hotel & Bike Hub",
    description: "Join Pedal Inn for exclusive access to our boutique 10-room hotel and bike service hub in downtown Cañon City. Adventure, community, and exclusive perks await.",
    keywords: ["Cañon City", "hotel", "bike rental", "Colorado", "adventure", "founding members", "community", "Pedal Inn"],
    authors: [{ name: "Pedal Inn Hotel" }],
  openGraph: {
    title: "Pedal Inn - Cañon City Hotel & Bike Hub",
    description: "Join our exclusive community of adventure enthusiasts in downtown Cañon City",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
