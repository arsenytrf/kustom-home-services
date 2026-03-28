"use client";

import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ServiceAreaMap() {
  return (
    <section
      className="bg-slate-900 py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="area-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Service Area"
            title="Serving All of Florida"
            description="Based in Okeechobee, we travel wherever the job takes us. From Fort Myers to Orlando and everywhere in between."
          />
        </ScrollReveal>

        {/* Cities as large text tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 md:mt-14">
          {company.cities.map((city, i) => (
            <ScrollReveal key={city} delay={i * 0.08}>
              <div className="group flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 border border-slate-700/60 hover:border-teal-500/60 bg-slate-950/50 hover:bg-teal-500/5 transition-all duration-300 cursor-default">
                <MapPin className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors shrink-0" />
                <span className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-wider">
                  {city}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-slate-500 text-sm mt-8 md:mt-10">
            <MapPin className="w-4 h-4 inline-block mr-1 text-teal-600 -mt-0.5" />
            Don&rsquo;t see your city? We likely still serve your area.{" "}
            <a
              href={`tel:${company.phoneRaw}`}
              className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
            >
              Call to check
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
