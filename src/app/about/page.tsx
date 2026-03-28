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
  description: `Family-owned handyman business based in ${company.address}. Honest work, quality results. Serving ${company.serviceArea}. Call ${company.phone}.`,
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
      "We don\u2019t cut corners. Every repair is done right the first time with materials that last. If we wouldn\u2019t put it in our own house, we won\u2019t put it in yours.",
  },
  {
    icon: HardHat,
    title: "Clean Worksites",
    description:
      "When we leave, the only thing you should notice is the finished work — not dust, debris, or tools left behind. We clean up after every job.",
  },
];

const milestones = [
  { year: "100+", event: "Projects Completed" },
  { year: "6+", event: "Services Offered" },
  { year: "ALL FL", event: "Service Area" },
  { year: "24HR", event: "Response Time" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-white via-slate-50 to-teal-50/30 overflow-hidden flex items-end">
        {/* Gradient mesh */}
        <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            {/* Left — copy */}
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider"
              >
                <Link
                  href="/"
                  className="text-slate-400 hover:text-teal-600 transition-colors duration-300"
                >
                  Home
                </Link>
                <span className="text-slate-300">/</span>
                <span className="text-teal-600">About</span>
              </nav>

              <ScrollReveal>
                <span className="inline-flex items-center gap-2 text-teal-600 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                  <span className="w-8 h-px bg-teal-500" aria-hidden="true" />
                  About Us
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display font-bold mb-6">
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-stroke leading-[0.95]">
                    FAMILY
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[0.95] mt-1">
                    OWNED.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
                  We started Kustom Home Services because we believe homeowners
                  deserve better — better service, better communication, better
                  results. That&rsquo;s not a sales pitch. It&rsquo;s just how we
                  were raised.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="teal" size="lg" href="/contact">
                    Work With Us
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`tel:${company.phoneRaw}`}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — logo / brand image */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative hidden lg:flex items-end justify-end">
                <div className="relative w-full max-w-md">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-teal-500/8 rounded-full blur-3xl"
                    aria-hidden="true"
                  />
                  <Image
                    src={`${basePath}/images/logo.jpg`}
                    alt="Kustom Home Services logo"
                    width={400}
                    height={400}
                    className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl"
                    sizes="(max-width: 1024px) 0px, 400px"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden group rounded-2xl shadow-xl">
                <Image
                  src={`${basePath}/images/branded-truck.png`}
                  alt="Kustom Home Services branded work truck"
                  fill
                  className="object-contain bg-slate-50 p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60"
                  aria-hidden="true"
                />
                {/* Corner accent */}
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-teal-500 rounded-bl-2xl"
                  aria-hidden="true"
                />
                {/* Badge overlay */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                  <span className="font-display text-sm font-bold text-teal-600 uppercase tracking-wider">
                    Family-Owned
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text */}
            <ScrollReveal direction="right">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-4">
                  <span
                    className="w-6 h-px bg-teal-500"
                    aria-hidden="true"
                  />
                  Our Story
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Built on
                  <br />
                  Honest Work
                </h2>
                <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed">
                  <p>
                    We&rsquo;re a family-owned handyman business out of
                    Okeechobee, Florida. We started with a simple idea: show up
                    on time, do the work right, charge a fair price, and clean
                    up when you&rsquo;re done.
                  </p>
                  <p>
                    No corporate overhead. No call centers. No runaround. When
                    you call us, you&rsquo;re talking to the people who actually
                    do the work. We handle everything from ceiling fan installs
                    and plumbing repairs to bathroom remodels and blow-in
                    insulation — across all of Florida.
                  </p>
                  <p>
                    We&rsquo;re not trying to be the biggest. We&rsquo;re trying
                    to be the best at taking care of our neighbors. Every job
                    gets our full attention, every customer gets treated like
                    family, and every finished project is something we&rsquo;re
                    proud to put our name on.
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

      {/* ── Timeline / Milestones ─────────────────────────────── */}
      <section className="relative bg-teal-900 py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${basePath}/images/ceiling-fan.jpg)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-teal-900/80" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <span className="block font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    {m.year}
                  </span>
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-teal-300 font-medium">
                    {m.event}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="relative bg-teal-50/50 py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Photo background for texture */}
        <Image
          src={`${basePath}/images/bathroom-mirror.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />
        {/* Decorative gradient orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="What We Stand For"
              title="Our Standards"
              description="These aren\u2019t just words on a page. They\u2019re how we run every job, every day."
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden group rounded-xl shadow-xl">
                <Image
                  src={`${basePath}/images/plumbing.jpg`}
                  alt="Professional plumbing work — garbage disposal installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            {/* Right — value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 content-center">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                    <div className="relative bg-white border border-slate-200 hover-lift p-5 md:p-6 h-full group rounded-xl shadow-sm overflow-hidden">
                      {/* Teal top border accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600" aria-hidden="true" />
                      <div className="w-10 h-10 flex items-center justify-center bg-teal-50 border border-teal-200 rounded-lg mb-4 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                        <Icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display text-base md:text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────────── */}
      <section
        className="bg-teal-900 py-20 md:py-28 lg:py-32 overflow-hidden"
        aria-labelledby="about-area-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Service Area"
              title="Serving All of Florida"
              description="Based in Okeechobee, we travel wherever the job takes us. From Fort Myers to Orlando and everywhere in between."
            />
          </ScrollReveal>

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

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <div
          className="relative bg-gradient-to-br from-teal-500 via-teal-500 to-teal-600 py-16 md:py-20 lg:py-24"
          style={{
            clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-teal-950/70 mb-3">
                Let&rsquo;s Work Together
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.1]">
                Your Home Deserves Better.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-4 md:mt-6 text-base sm:text-lg text-teal-900 max-w-xl mx-auto leading-relaxed">
                Real people. Real work. Real results. Reach out and see the
                difference a family-owned business makes.
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
          className="absolute top-0 left-0 right-0 h-[8%] bg-teal-900"
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
