import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ganj Tattoos | Solo Tattoo Artist",
  description:
    "A premium, consult-first tattoo experience — custom fine line, blackwork, and traditional-inspired work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
