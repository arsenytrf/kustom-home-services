import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyPhone from "@/components/layout/StickyPhone";
import BackToTop from "@/components/layout/BackToTop";
import ThemeProvider from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Kustom Home Services LLC | Handyman — Okeechobee, FL",
  description:
    "Kustom Home Services LLC — trusted handyman in Okeechobee, FL. " +
    "Drywall, painting, pressure washing, remodeling, flooring & more. " +
    "Call (863) 261-3877 for a free estimate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* Clash Display + Cabinet Grotesk from Fontshare */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased bg-slate-950 text-white min-h-full flex flex-col noise-overlay">
        <ThemeProvider>
          {/* Skip link for keyboard / screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-teal-500 focus:text-slate-950 focus:px-4 focus:py-2 focus:font-body focus:font-semibold"
          >
            Skip to main content
          </a>

          <LenisProvider>
            <Navbar />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <Footer />
          </LenisProvider>

          <StickyPhone />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
