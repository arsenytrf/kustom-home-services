"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * Handyman-themed light/dark toggle.
 * Pill shape — a knob slides left/right with a spring + rotation.
 * Dark = moon-wrench icon on the right, Light = sun-hammer icon on the left.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="relative flex items-center w-14 h-7 rounded-full p-0.5 transition-colors duration-300 cursor-pointer border border-transparent hover:border-teal-400/40"
      style={{
        background: isLight
          ? "linear-gradient(135deg, #E5E5E5 0%, #F5F5F5 100%)"
          : "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
      }}
    >
      {/* Teal glow behind active side */}
      <motion.div
        className="absolute top-0 bottom-0 w-7 rounded-full"
        animate={{
          left: isLight ? 0 : "calc(100% - 1.75rem)",
          opacity: 0.25,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Sliding knob */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full shadow-md"
        animate={{
          x: isLight ? 0 : 26,
          rotate: isLight ? 0 : 180,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.8,
        }}
        style={{
          background: isLight
            ? "linear-gradient(135deg, #ffffff 0%, #F5F5F5 100%)"
            : "linear-gradient(135deg, #404040 0%, #1A1A1A 100%)",
          boxShadow: isLight
            ? "0 1px 4px rgba(0,0,0,0.15), 0 0 8px rgba(20,184,166,0.2)"
            : "0 1px 4px rgba(0,0,0,0.5), 0 0 8px rgba(20,184,166,0.15)",
        }}
      >
        {/* Icon — sun/hammer in light, moon/wrench in dark */}
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isLight ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={isLight ? "text-warm-500" : "text-teal-400"}
        >
          {isLight ? (
            /* Sun + hammer hybrid */
            <>
              {/* Sun circle */}
              <circle cx="12" cy="12" r="4" />
              {/* Rays — cardinal directions like a tool crosshair */}
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
              {/* Diagonal rays — shorter, hammer-head feel */}
              <line x1="4.9" y1="4.9" x2="6.7" y2="6.7" />
              <line x1="17.3" y1="17.3" x2="19.1" y2="19.1" />
              <line x1="19.1" y1="4.9" x2="17.3" y2="6.7" />
              <line x1="6.7" y1="17.3" x2="4.9" y2="19.1" />
            </>
          ) : (
            /* Moon + wrench hybrid */
            <>
              {/* Moon crescent */}
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              {/* Small wrench mark */}
              <line x1="14" y1="8" x2="16" y2="6" />
            </>
          )}
        </motion.svg>
      </motion.div>
    </button>
  );
}
