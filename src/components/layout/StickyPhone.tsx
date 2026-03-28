"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";

export default function StickyPhone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${company.phoneRaw}`}
      className={cn(
        "fixed bottom-6 left-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/30 transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-4 opacity-0 scale-90 pointer-events-none"
      )}
      aria-label="Call now"
    >
      <Phone className="h-5 w-5" />
    </a>
  );
}
