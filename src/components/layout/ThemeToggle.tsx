"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * Truck-themed light/dark toggle.
 * A tiny truck drives across a pill-shaped road from left (day) to right (night).
 * The background transitions from a sunny day scene to a starry night.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="relative flex items-center w-[68px] h-[32px] rounded-full cursor-pointer overflow-hidden border-2 transition-colors duration-500"
      style={{
        borderColor: isLight ? "#d4d4d4" : "#2DD4BF33",
        background: isLight
          ? "linear-gradient(180deg, #87CEEB 0%, #B0E0E6 50%, #8B7355 85%, #6B5B3A 100%)"
          : "linear-gradient(180deg, #0A0A0A 0%, #111827 50%, #1A1A2E 85%, #0F0F23 100%)",
      }}
    >
      {/* Sun or Moon in the sky */}
      <motion.div
        className="absolute"
        animate={{
          top: isLight ? 4 : 3,
          left: isLight ? 8 : 48,
          scale: isLight ? 1 : 0.7,
        }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
      >
        {isLight ? (
          /* Sun */
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: "#FFD700",
              boxShadow: "0 0 8px 2px rgba(255,215,0,0.6)",
            }}
          />
        ) : (
          /* Moon crescent */
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: "#E8E8E8",
              boxShadow: "0 0 6px 1px rgba(232,232,232,0.4), inset -2px -1px 0 0 #0A0A0A",
            }}
          />
        )}
      </motion.div>

      {/* Stars (dark mode only) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isLight ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full" style={{ top: 5, left: 12 }} />
        <div className="absolute w-[3px] h-[3px] bg-white/80 rounded-full" style={{ top: 8, left: 28 }} />
        <div className="absolute w-0.5 h-0.5 bg-white/60 rounded-full" style={{ top: 4, left: 38 }} />
        <div className="absolute w-[3px] h-[3px] bg-teal-400/50 rounded-full" style={{ top: 10, left: 18 }} />
        <div className="absolute w-0.5 h-0.5 bg-white/70 rounded-full" style={{ top: 6, left: 52 }} />
      </motion.div>

      {/* Road line at the bottom */}
      <div
        className="absolute bottom-[5px] left-2 right-2 h-[2px] rounded-full"
        style={{
          background: isLight
            ? "linear-gradient(90deg, transparent 0%, #555 20%, #555 80%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, #333 20%, #333 80%, transparent 100%)",
        }}
      />

      {/* Dashed center line on road */}
      <div
        className="absolute bottom-[6px] left-4 right-4 h-[1px]"
        style={{
          backgroundImage: isLight
            ? "repeating-linear-gradient(90deg, #999 0px, #999 4px, transparent 4px, transparent 8px)"
            : "repeating-linear-gradient(90deg, #444 0px, #444 4px, transparent 4px, transparent 8px)",
        }}
      />

      {/* Truck — drives across the road */}
      <motion.div
        className="absolute bottom-[6px] z-10"
        animate={{
          x: isLight ? 6 : 34,
        }}
        transition={{
          type: "spring" as const,
          stiffness: 200,
          damping: 18,
          mass: 1.2,
        }}
      >
        {/* Truck SVG — tiny pickup truck silhouette */}
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          className="drop-shadow-md"
        >
          {/* Truck bed */}
          <rect x="0" y="4" width="10" height="6" rx="1" fill={isLight ? "#1A1A1A" : "#1A1A1A"} />
          {/* Truck cab */}
          <path
            d="M10 4 L10 2 C10 1 11 0 12 0 L17 0 C18 0 19 1 19 2 L19 10 L10 10 L10 4Z"
            fill={isLight ? "#1A1A1A" : "#1A1A1A"}
          />
          {/* Windshield */}
          <path
            d="M11.5 1.5 L16.5 1.5 L17.5 4 L11 4 Z"
            fill="#14B8A6"
            opacity="0.8"
          />
          {/* Headlight */}
          <rect x="18.5" y="5" width="1.5" height="2" rx="0.5" fill={isLight ? "#FFD700" : "#FFD700"} />
          {/* Taillight */}
          <rect x="0" y="5" width="1" height="2" rx="0.5" fill="#EF4444" />
          {/* Front wheel */}
          <circle cx="15" cy="10" r="2.5" fill="#333" stroke="#555" strokeWidth="0.5" />
          <circle cx="15" cy="10" r="1" fill="#666" />
          {/* Rear wheel */}
          <circle cx="5" cy="10" r="2.5" fill="#333" stroke="#555" strokeWidth="0.5" />
          <circle cx="5" cy="10" r="1" fill="#666" />
          {/* KUSTOM text on the side */}
          <text x="2" y="8.5" fill="#14B8A6" fontSize="3" fontWeight="bold" fontFamily="sans-serif">K</text>
        </svg>

        {/* Headlight glow */}
        {!isLight && (
          <motion.div
            className="absolute -right-1 top-1 w-4 h-3"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: "radial-gradient(ellipse at left, rgba(255,215,0,0.3) 0%, transparent 70%)",
            }}
          />
        )}
      </motion.div>
    </button>
  );
}
