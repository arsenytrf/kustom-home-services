"use client";

import Image from "next/image";
import { Shield, Clock, DollarSign, Sparkles } from "lucide-react";
import { basePath } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const differentiators = [
  {
    icon: Shield,
    title: "Family-Owned",
    description:
      "We treat your home like our own. Every job gets personal attention from the owners — not a random subcontractor.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "We show up when we say we will. Your time matters, and we respect it. Period.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description:
      "No hidden fees, no surprise charges. You get a clear quote before we start — and that's what you pay.",
  },
  {
    icon: Sparkles,
    title: "Clean Worksite",
    description:
      "We leave your home cleaner than we found it. Our job isn't done until every scrap is picked up.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative bg-teal-50/50 py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Decorative teal gradient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Why Kustom"
            title="Built Different"
            description="We're not a franchise. We're a family that takes pride in every job."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-8">
          {/* Left — image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden group rounded-2xl shadow-xl">
              <Image
                src={`${basePath}/images/plumbing.jpg`}
                alt="Professional plumbing work — garbage disposal installation under a kitchen sink"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent opacity-60"
                aria-hidden="true"
              />
              {/* Corner accent */}
              <div
                className="absolute bottom-0 left-0 w-28 h-28 border-b-3 border-l-3 border-teal-400 rounded-bl-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute top-0 right-0 w-20 h-20 border-t-3 border-r-3 border-teal-400 rounded-tr-2xl"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>

          {/* Right — differentiators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 content-center">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                <div className="relative bg-white border border-slate-200 hover-lift p-5 md:p-6 h-full group rounded-xl shadow-sm overflow-hidden">
                  {/* Teal top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600" aria-hidden="true" />
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-50 border border-teal-200 rounded-lg mb-4 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-base md:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
