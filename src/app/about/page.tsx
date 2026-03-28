import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Heart,
  DollarSign,
  Sparkles,
  HardHat,
  ArrowRight,
} from "lucide-react";

import { company, basePath } from "@/data/company";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `About Us | ${company.name}`,
  description: `Family-owned handyman business based in ${company.address}. Honest work, quality results. Serving ${company.serviceArea} since ${company.founded}. Call ${company.phone}.`,
};

const values = [
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description:
      "We quote what we charge. No surprise fees, no inflated materials markup, no bait-and-switch. The number we give you is the number you pay.",
  },
  {
    icon: Heart,
    title: "Family Values",
    description:
      "We treat every home like it belongs to someone we care about — because it does. Respect for your space, your time, and your budget.",
  },
  {
    icon: Sparkles,
    title: "Quality First",
    description:
      "We don't cut corners. Every repair is done right the first time with materials that last. If we wouldn't put it in our own house, we won't put it in yours.",
  },
  {
    icon: HardHat,
    title: "Clean Worksites",
    description:
      "When we leave, the only thing you should notice is the finished work — not dust, debris, or tools left behind. We clean up after every job.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* -- Hero ------------------------------------------------- */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider"
          >
            <Link
              href="/"
              className="text-slate-400 hover:text-teal-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-teal-600">About</span>
          </nav>

          <ScrollReveal>
            <span className="inline-block text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-3">
              About Us
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              Family-Owned.
              <br />
              Florida-Rooted.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
              We started Kustom Home Services because we believe homeowners
              deserve better — better service, better communication, better
              results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Our Story -------------------------------------------- */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 rounded-2xl shadow-xl">
                <Image
                  src={`${basePath}/images/branded-truck.jpg`}
                  alt="Kustom Home Services work truck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                  <span className="font-display text-sm font-bold text-teal-600 uppercase tracking-wider">
                    Est. {company.founded}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text */}
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Built on Honest Work
                </h2>
                <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed">
                  <p>
                    We&rsquo;re a family-owned handyman business out of Okeechobee, Florida.
                    We started in {company.founded} with a simple idea: show up on time, do
                    the work right, charge a fair price, and clean up when you&rsquo;re done.
                  </p>
                  <p>
                    No corporate overhead. No call centers. No runaround. When you call us,
                    you&rsquo;re talking to the people who actually do the work. We handle
                    everything from ceiling fan installs and plumbing repairs to bathroom
                    remodels and blow-in insulation — across all of Florida.
                  </p>
                  <p>
                    We&rsquo;re not trying to be the biggest. We&rsquo;re trying to be the
                    best at taking care of our neighbors. Every job gets our full attention,
                    every customer gets treated like family, and every finished project is
                    something we&rsquo;re proud to put our name on.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/contact" variant="outline" size="md">
                    Get In Touch
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- Values ------------------------------------------------ */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="What We Stand For"
              title="Our Values"
              description="These aren't just words on a page. They're how we run every job, every day."
              align="center"
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 0.08}>
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-teal-50 border border-teal-200 flex items-center justify-center rounded-xl mb-5">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Service Area ------------------------------------------ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Where We Work"
              title="Serving All of Florida"
              description="Based in Okeechobee, we travel wherever the job takes us. These are just a few of the cities we serve regularly."
              align="center"
              light
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {company.cities.map((city, i) => (
              <ScrollReveal key={city} delay={i * 0.06}>
                <div className="group flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 border border-slate-200 hover:border-teal-400 bg-slate-50 hover:bg-teal-50 transition-all duration-300 cursor-default rounded-xl">
                  <MapPin className="w-4 h-4 text-teal-500 group-hover:text-teal-600 transition-colors shrink-0" />
                  <span className="font-display text-base sm:text-lg md:text-xl font-bold text-slate-700 group-hover:text-teal-700 transition-colors uppercase tracking-wider">
                    {city}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-center text-slate-400 text-sm mt-8">
              <MapPin className="w-4 h-4 inline-block mr-1 text-teal-500 -mt-0.5" />
              Don&rsquo;t see your city? We likely still serve your area.{" "}
              <a
                href={`tel:${company.phoneRaw}`}
                className="text-teal-600 hover:text-teal-500 underline underline-offset-2 transition-colors"
              >
                Call to check
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- CTA -------------------------------------------------- */}
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
                Let&rsquo;s Work Together
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.1]">
                Ready to Meet Your Handyman?
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
          className="absolute top-0 left-0 right-0 h-[8%] bg-white"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[8%] bg-slate-900"
          aria-hidden="true"
        />
      </section>
    </>
  );
}
