"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;

    setProgress(Math.min(scrollProgress, 1));
    setVisible(scrollTop > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 18;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed z-40 rounded-full flex items-center justify-center",
        "bottom-6 right-6 w-14 h-14 lg:w-12 lg:h-12",
        "bg-white hover:bg-teal-50 text-slate-600 hover:text-teal-600",
        "shadow-lg shadow-slate-300/40 border border-slate-200",
        "transition-all duration-300 cursor-pointer",
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      {/* Scroll progress circle */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 40 40"
      >
        {/* Background track */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-200"
        />
        {/* Progress arc */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-teal-500"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
        />
      </svg>
      {/* Arrow icon */}
      <ArrowUp className="w-5 h-5 lg:w-4 lg:h-4 relative z-10" />
    </button>
  );
}
