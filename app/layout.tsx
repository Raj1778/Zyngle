import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Geist, Geist_Mono, Poppins, Sora } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Zyngle",
  description: "Zyngle – your social space to be authentically real.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sora.variable}`}
    >
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
