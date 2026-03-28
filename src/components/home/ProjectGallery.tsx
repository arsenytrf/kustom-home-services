"use client";

import Image from "next/image";
import { basePath } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  span: "large" | "normal";
}

const galleryItems: GalleryItem[] = [
  {
    src: `${basePath}/images/bathroom-mirror.jpg`,
    alt: "LED bathroom mirror installation on marble wall",
    label: "Bathroom Remodel",
    span: "large",
  },
  {
    src: `${basePath}/images/ceiling-fan.jpg`,
    alt: "Ceiling fan installed on wood plank ceiling",
    label: "Ceiling Fan Install",
    span: "normal",
  },
  {
    src: `${basePath}/images/plumbing.jpg`,
    alt: "Professional garbage disposal installation",
    label: "Plumbing",
    span: "normal",
  },
  {
    src: `${basePath}/images/garbage-disposal.jpg`,
    alt: "Glacier Bay garbage disposal install under kitchen sink",
    label: "Garbage Disposal",
    span: "normal",
  },
];

export default function ProjectGallery() {
  return (
    <section
      className="relative bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Our Work"
            title="Recent Projects"
            description="Real jobs for real homeowners. No stock photos, no filler — just work we're proud of."
            light
          />
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-8">
          {galleryItems.map((item, i) => (
            <ScrollReveal
              key={item.label}
              delay={i * 0.1}
              className={
                item.span === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }
            >
              <div className="relative group overflow-hidden h-full min-h-[240px] sm:min-h-[280px] rounded-2xl shadow-lg border border-slate-200/50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    item.span === "large"
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Persistent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Label — always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="inline-block font-display text-xs uppercase tracking-[0.15em] text-teal-300 font-semibold mb-1">
                    {item.label}
                  </span>
                  <div className="w-8 h-0.5 bg-teal-400 group-hover:w-16 transition-all duration-500" aria-hidden="true" />
                </div>

                {/* Teal corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-teal-400/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
