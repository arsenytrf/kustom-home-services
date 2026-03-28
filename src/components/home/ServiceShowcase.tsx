"use client";

import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import Link from "next/link";

export default function ServiceShowcase() {
  return (
    <section className="bg-slate-950 py-20 md:py-28 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="From quick repairs to full remodels, we handle it all. Every job gets the same attention to detail."
            align="left"
          />
        </ScrollReveal>

        {/* Numbered rows */}
        <div className="mt-8 divide-y divide-slate-800/60">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.08}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex items-center gap-4 sm:gap-6 md:gap-8 py-6 md:py-8 transition-colors hover:bg-slate-900/40 -mx-4 px-4 sm:-mx-6 sm:px-6"
              >
                {/* Number */}
                <span className="shrink-0 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 group-hover:text-teal-500 transition-colors duration-300 tabular-nums w-16 md:w-20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title + Description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-slate-500 group-hover:text-slate-400 transition-colors duration-300 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-slate-800 group-hover:border-teal-500 group-hover:bg-teal-500 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-slate-600 group-hover:text-slate-950 transition-colors duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
