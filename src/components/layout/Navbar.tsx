"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";
import { navLinks, ctaLink } from "@/data/navigation";
import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // Hide top bar after 50px
    setHideTopBar(currentY > 50);

    // Hide nav on scroll down > 200px, show on scroll up
    if (currentY > 200) {
      setHideNav(currentY > lastScrollY);
    } else {
      setHideNav(false);
    }

    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
          hideNav && "-translate-y-full"
        )}
      >
        {/* Top info bar — hidden on mobile */}
        <div
          className={cn(
            "hidden lg:block bg-slate-900 border-b border-white/5 transition-all duration-300 overflow-hidden",
            hideTopBar ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
        >
          <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-sm text-slate-400">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {company.email}
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-teal-400 font-medium">
                Family-Owned & Operated
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                {company.serviceArea}
              </span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 group">
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-teal-400 group-hover:text-teal-300 transition-colors">
                  KUSTOM
                </span>{" "}
                <span className="text-white">HOME SERVICES</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium tracking-wide uppercase transition-colors",
                      isActive
                        ? "text-teal-400"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400" />
                    )}
                  </Link>
                );
              })}

              <ThemeToggle />

              <Link
                href={ctaLink.href}
                className="ml-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-bold uppercase tracking-wide rounded-full transition-colors"
              >
                GET FREE ESTIMATE
              </Link>
            </div>

            {/* Mobile: toggle + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed nav */}
      <div className={cn("lg:h-28 h-16", hideTopBar && "lg:h-16")} />

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
