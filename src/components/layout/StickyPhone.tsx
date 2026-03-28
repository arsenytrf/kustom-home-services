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
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-center gap-2 py-3.5 bg-teal-500 text-slate-950 font-bold text-sm uppercase tracking-wide transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-label="Call now"
    >
      <Phone className="h-4 w-4" />
      CALL NOW
    </a>
  );
}
