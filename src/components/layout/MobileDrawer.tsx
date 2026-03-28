"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { company } from "@/data/company";
import { navLinks, ctaLink } from "@/data/navigation";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring" as const,
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring" as const,
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
} as const;

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 200,
      delay: 0.1 + i * 0.08,
    },
  }),
} as const;

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  // Body scroll lock
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-900/30 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl overflow-y-auto flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6">
              <span className="font-display text-lg font-bold tracking-tight">
                <span className="text-teal-600">KUSTOM</span>{" "}
                <span className="text-slate-900">HOME SERVICES</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Teal gradient accent line */}
            <div className="h-px bg-gradient-to-r from-teal-500/80 via-teal-400/40 to-transparent" />

            {/* Navigation links — clean, big, no numbers */}
            <nav className="px-8 pt-10 pb-8 space-y-5 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block group"
                  >
                    <span className="font-display text-4xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors uppercase tracking-tight">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-8 h-px bg-slate-100" />

            {/* Contact info — simple text rows */}
            <div className="px-8 py-6 space-y-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors"
              >
                <Phone className="h-4 w-4 text-teal-500 shrink-0" />
                <span className="text-sm">{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors"
              >
                <Mail className="h-4 w-4 text-teal-500 shrink-0" />
                <span className="text-sm">{company.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin className="h-4 w-4 text-teal-500 shrink-0" />
                <span className="text-sm">{company.serviceArea}</span>
              </div>
            </div>

            {/* Family badge */}
            <div className="mx-8 flex items-center gap-2 px-4 py-3 rounded-lg bg-teal-50 border border-teal-200">
              <div className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs text-teal-700 font-medium">
                Family-Owned & Operated Since {company.founded}
              </span>
            </div>

            {/* CTA button with shimmer */}
            <div className="px-8 py-8">
              <Link
                href={ctaLink.href}
                onClick={onClose}
                className="relative flex items-center justify-center gap-2 w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm uppercase tracking-wide rounded-full overflow-hidden transition-colors group shadow-lg shadow-teal-500/20"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  GET FREE ESTIMATE
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
