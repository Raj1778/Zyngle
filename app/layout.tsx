import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono, Poppins, Sora } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Zyngle | Vibe. Connect. Be Real.",
  description: "Zyngle – your social space to be authentically real.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${sora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
