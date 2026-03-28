import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

import { company, basePath } from "@/data/company";
import { services } from "@/data/services";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `Our Services | ${company.name}`,
  description: `Professional handyman services in ${company.address}. General repairs, plumbing, ceiling fans, insulation, bathroom remodels, and home improvements. Call ${company.phone} for a free estimate.`,
};

/* Map each service slug to an image filename */
const serviceImages: Record<string, string> = {
  "general-repairs": "ceiling-fan.jpg",
  plumbing: "plumbing.jpg",
  "ceiling-fan-lighting": "ceiling-fan.jpg",
  "blow-in-insulation": "bathroom-mirror.jpg",
  "bathroom-remodel": "bathroom-mirror.jpg",
  "home-improvements": "garbage-disposal.jpg",
};

/* Extended descriptions for the editorial layout */
const serviceDetails: Record<string, string> = {
  "general-repairs":
    "Squeaky doors, broken shelves, stuck drawers, leaky faucets, drywall patches — you name it, we fix it. Our general repair service covers all the little things that pile up around the house. We show up on time, fix it right the first time, and clean up after ourselves. No job is too small.",
  plumbing:
    "From garbage disposal installs to leaky pipes and fixture replacements, our plumbing service gets your water flowing the way it should. We handle sink repairs, toilet fixes, faucet swaps, and supply line connections. Licensed, insured, and done right — no callbacks needed.",
  "ceiling-fan-lighting":
    "Whether you need a new ceiling fan installed, a light fixture swapped out, or outdoor lighting wired up, we handle it safely and cleanly. We work with all major brands, mount to any ceiling type, and make sure everything is balanced, quiet, and up to code.",
  "blow-in-insulation":
    "Cut your energy bills and keep your Florida home comfortable year-round with professional blow-in insulation. We assess your current insulation, identify gaps and thin spots, and fill your attic or walls with high-performance material. The difference on your next electric bill speaks for itself.",
  "bathroom-remodel":
    "Vanity replacements, mirror installs, tile work, fixture upgrades, new shower heads, and fresh caulking. We transform tired bathrooms into spaces you actually enjoy using. Whether it is a quick refresh or a full remodel, every detail gets our full attention.",
  "home-improvements":
    "Drywall finishing, trim installation, shelving, door replacements, paint touch-ups, and anything else that makes your house feel more like home. We handle the projects that fall between a quick repair and a full renovation — the ones that make the biggest difference in how your home looks and feels.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-slate-900"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-teal-400 transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-teal-400">Services</span>
          </nav>

          <ScrollReveal>
            <span className="inline-block text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-semibold text-teal-400 mb-3">
              Our Services
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              What We Fix
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              From quick repairs to full remodels — every job gets the same
              level of care, craftsmanship, and attention to detail.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Editorial Alternating Layout ────────────────────── */}
      <section className="bg-slate-950 py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              const number = String(index + 1).padStart(2, "0");
              const imageSrc = `${basePath}/images/${serviceImages[service.slug] ?? "ceiling-fan.jpg"}`;
              const detail =
                serviceDetails[service.slug] ?? service.description;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24"
                >
                  <ScrollReveal>
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                        isEven ? "lg:direction-rtl" : ""
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`relative aspect-[4/3] overflow-hidden bg-slate-900 ${
                          isEven ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={imageSrc}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Number overlay */}
                        <div className="absolute bottom-0 left-0 bg-slate-950/90 px-5 py-3">
                          <span className="font-display text-4xl md:text-5xl font-bold text-teal-500">
                            {number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={isEven ? "lg:order-1" : ""}>
                        <span className="inline-block text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-400 mb-3">
                          Service {number}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                          {service.title}
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                          {detail}
                        </p>
                        <Button href="/contact" variant="outline" size="md">
                          Request a Quote
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing / Transparency ──────────────────────────── */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              label="Transparent Pricing"
              title="Honest Pricing — No Hidden Fees"
              description="We quote what we charge, and we charge what we quote. No surprise line items, no inflated materials markup, no bait-and-switch. Just straightforward pricing for honest work."
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Free Estimates",
                  desc: "We come out, assess the job, and give you a price before any work starts.",
                },
                {
                  title: "No Hidden Fees",
                  desc: "The price we quote is the price you pay. Period. No add-ons after the fact.",
                },
                {
                  title: "Pay When Done",
                  desc: "You don't pay until you're happy with the work. That's our guarantee.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 border border-slate-800 bg-slate-950/50"
                >
                  <CheckCircle2 className="w-8 h-8 text-teal-500 mb-4 mx-auto" />
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <div
          className="bg-teal-500 py-16 md:py-20 lg:py-24"
          style={{
            clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-teal-950/70 mb-3">
                Let&rsquo;s Get Started
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.1]">
                Ready to Get It Fixed?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-4 md:mt-6 text-base sm:text-lg text-teal-900 max-w-xl mx-auto leading-relaxed">
                No job too small. Call us now or request a free quote online
                &mdash; we&rsquo;ll get back to you within 24 hours.
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

        <div
          className="absolute top-0 left-0 right-0 h-[8%] bg-slate-950"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[8%] bg-slate-950"
          aria-hidden="true"
        />
      </section>
    </>
  );
}
