"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { company, basePath } from "@/data/company";
import Button from "@/components/shared/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden" aria-label="Call to action">
      {/* Teal background with photo + diagonal clip */}
      <div
        className="relative bg-gradient-to-br from-teal-500 via-teal-500 to-teal-600 py-20 md:py-28 lg:py-32 overflow-hidden"
        style={{
          clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)",
        }}
      >
        {/* Photo background */}
        <Image
          src={`${basePath}/images/bathroom-mirror.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-teal-950/70 mb-3">
              Ready to Get Started?
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.1]">
              Need Something Fixed?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-4 md:mt-6 text-base sm:text-lg text-teal-900 max-w-xl mx-auto leading-relaxed">
              No job too small, no estimate too quick. Call us now or fill out
              the form — we&rsquo;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:mt-10">
              <Button variant="dark" size="lg" href="/contact">
                Get Free Estimate
              </Button>
              <Button
                variant="white"
                size="lg"
                href={`tel:${company.phoneRaw}`}
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Top spacer to account for clip path — matches ServiceAreaMap teal bg */}
      <div className="absolute top-0 left-0 right-0 h-[8%] bg-teal-900" aria-hidden="true" />
      {/* Bottom spacer — matches footer dark or next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-slate-900" aria-hidden="true" />
    </section>
  );
}
