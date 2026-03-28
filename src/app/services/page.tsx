import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Clock,
} from "lucide-react";

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

/* Short bullet highlights per service */
const serviceHighlights: Record<string, string[]> = {
  "general-repairs": [
    "Same-day availability for urgent repairs",
    "All work backed by our satisfaction guarantee",
    "We handle everything from drywall to doors",
  ],
  plumbing: [
    "Garbage disposal & faucet installation",
    "Leak detection and pipe repair",
    "Fixture upgrades and replacements",
  ],
  "ceiling-fan-lighting": [
    "All major brands and ceiling types",
    "Indoor and outdoor installations",
    "Balanced, quiet, up to code",
  ],
  "blow-in-insulation": [
    "Reduces energy bills by up to 30%",
    "Professional assessment of current insulation",
    "High-performance materials only",
  ],
  "bathroom-remodel": [
    "Vanity, tile, and fixture upgrades",
    "Custom mirror and lighting installs",
    "Full remodel or quick refresh",
  ],
  "home-improvements": [
    "Drywall, trim, and shelving",
    "Door replacements and paint touch-ups",
    "From quick fixes to full upgrades",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-white via-slate-50 to-teal-50/30 overflow-hidden flex items-end">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

        {/* Subtle grid pattern */}
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
                <span className="text-teal-600">Services</span>
              </nav>

              <ScrollReveal>
                <span className="inline-flex items-center gap-2 text-teal-600 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                  <span className="w-8 h-px bg-teal-500" aria-hidden="true" />
                  What We Do
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display font-bold mb-6">
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-stroke leading-[0.95]">
                    EXPERT
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[0.95] mt-1">
                    SERVICES.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
                  From quick repairs to full remodels — every job gets the same
                  level of care, craftsmanship, and attention to detail. No
                  shortcuts, no excuses.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="teal" size="lg" href="/contact">
                    Get Free Estimate
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

            {/* Right — truck image floating */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative hidden lg:flex items-end justify-end">
                <div className="relative w-full max-w-lg">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-teal-500/8 rounded-full blur-3xl"
                    aria-hidden="true"
                  />
                  <Image
                    src={`${basePath}/images/branded-truck.png`}
                    alt="Kustom Home Services branded work truck"
                    width={600}
                    height={400}
                    className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 0px, 600px"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Trust strip below hero */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-warm-400 fill-warm-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-500" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                <span>Free Estimates</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Count Strip ──────────────────────────────── */}
      <section className="relative bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-teal-900/80" aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-teal-700/50">
            {[
              { value: "6+", label: "Services" },
              { value: "100+", label: "Projects" },
              { value: "24HR", label: "Response" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 py-6 md:py-8"
              >
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="font-display text-xs uppercase tracking-[0.2em] text-teal-300 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial Alternating Services ────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              const number = String(index + 1).padStart(2, "0");
              const imageSrc = `${basePath}/images/${serviceImages[service.slug] ?? "ceiling-fan.jpg"}`;
              const detail =
                serviceDetails[service.slug] ?? service.description;
              const highlights = serviceHighlights[service.slug] ?? [];

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24"
                >
                  {/* Divider between services */}
                  {index > 0 && (
                    <div className="max-w-5xl mx-auto py-8 md:py-12">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    </div>
                  )}

                  <ScrollReveal>
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                        isEven ? "" : ""
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`relative overflow-hidden group rounded-2xl shadow-xl ${
                          isEven ? "lg:order-2" : ""
                        }`}
                      >
                        <div className="relative aspect-[4/3] bg-slate-100">
                          <Image
                            src={imageSrc}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
                            aria-hidden="true"
                          />
                          {/* Number badge */}
                          <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-tr-xl">
                            <span className="font-display text-4xl md:text-5xl font-bold text-teal-600">
                              {number}
                            </span>
                          </div>
                          {/* Corner accent */}
                          <div
                            className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-teal-500 rounded-tr-2xl"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={isEven ? "lg:order-1" : ""}>
                        <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-4">
                          <span
                            className="w-6 h-px bg-teal-500"
                            aria-hidden="true"
                          />
                          Service {number}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
                          {service.title}
                        </h2>
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                          {detail}
                        </p>

                        {/* Highlights */}
                        {highlights.length > 0 && (
                          <ul className="space-y-3 mb-8">
                            {highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-slate-600"
                              >
                                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}

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

      {/* ── Parallax Quote Break ─────────────────────────────── */}
      <section
        className="relative h-[40vh] sm:h-[50vh] overflow-hidden flex items-center justify-center"
        aria-label="Company motto"
      >
        <div
          className="absolute inset-[-10%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${basePath}/images/bathroom-mirror.jpg)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-teal-950/65" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <blockquote>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
              &ldquo;We don&rsquo;t just fix houses.
              <br className="hidden sm:block" /> We take care of
              homes.&rdquo;
            </p>
            <footer className="mt-6 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-teal-500" aria-hidden="true" />
              <cite className="not-italic font-display text-xs sm:text-sm uppercase tracking-[0.2em] text-teal-400 font-semibold">
                Kustom Home Services
              </cite>
              <span className="w-8 h-px bg-teal-500" aria-hidden="true" />
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Pricing / Transparency ────────────────────────────── */}
      <section className="relative bg-teal-50/40 py-20 md:py-28 lg:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — editorial text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-4">
                  <span
                    className="w-6 h-px bg-teal-500"
                    aria-hidden="true"
                  />
                  Transparent Pricing
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Honest Pricing.
                  <br />
                  No Hidden Fees.
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                  We quote what we charge, and we charge what we quote. No
                  surprise line items, no inflated materials markup, no
                  bait-and-switch. Just straightforward pricing for honest work.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="teal" size="md" href="/contact">
                    Get Free Estimate
                  </Button>
                  <Button
                    variant="ghost"
                    size="md"
                    href={`tel:${company.phoneRaw}`}
                  >
                    <Phone className="w-4 h-4" />
                    {company.phone}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — pricing cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  title: "Free Estimates",
                  desc: "We come out, assess the job, and give you a price before any work starts.",
                  icon: CheckCircle2,
                },
                {
                  number: "02",
                  title: "No Hidden Fees",
                  desc: "The price we quote is the price you pay. Period. No add-ons after the fact.",
                  icon: ShieldCheck,
                },
                {
                  number: "03",
                  title: "Pay When Done",
                  desc: "You don\u2019t pay until you\u2019re happy with the work. That\u2019s our guarantee.",
                  icon: Star,
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                  <div className="relative bg-white border border-slate-200 hover-lift p-6 h-full group rounded-xl shadow-sm overflow-hidden">
                    {/* Teal top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600" aria-hidden="true" />
                    {/* Number watermark */}
                    <span className="absolute top-3 right-4 font-display text-5xl font-bold text-teal-100 select-none">
                      {item.number}
                    </span>
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center bg-teal-50 border border-teal-200 rounded-lg mb-4 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display text-base md:text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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
