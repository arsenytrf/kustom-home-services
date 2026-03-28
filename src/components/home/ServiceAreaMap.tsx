"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { company, basePath } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ServiceAreaMap() {
  return (
    <section
      className="relative bg-teal-900 py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="area-heading"
    >
      <Image
        src={`${basePath}/images/ceiling-fan.jpg`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.06]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="group flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 border border-teal-700/50 hover:border-teal-400/60 bg-teal-800/40 hover:bg-teal-800/60 transition-all duration-300 cursor-default rounded-lg">
                <MapPin className="w-4 h-4 text-teal-400/60 group-hover:text-teal-300 transition-colors shrink-0" />
                <span className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-100 group-hover:text-white transition-colors uppercase tracking-wider">
                  {city}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-teal-300/70 text-sm mt-8 md:mt-10">
            <MapPin className="w-4 h-4 inline-block mr-1 text-teal-400 -mt-0.5" />
            Don&rsquo;t see your city? We likely still serve your area.{" "}
            <a
              href={`tel:${company.phoneRaw}`}
              className="text-teal-300 hover:text-white underline underline-offset-2 transition-colors duration-300"
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
