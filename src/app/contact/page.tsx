import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Map,
  Users,
  ShieldCheck,
  Timer,
  BadgeCheck,
  ClipboardCheck,
  Wrench,
  ThumbsUp,
  Star,
  ArrowRight,
} from "lucide-react";

import { company, basePath } from "@/data/company";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: `Contact Us | ${company.name}`,
  description: `Get a free estimate from ${company.name}. Call ${company.phone} or fill out our online form. Serving ${company.serviceArea} — ${company.cities.join(", ")}.`,
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: company.phone,
    href: `tel:${company.phoneRaw}`,
    description: "Talk to a real person",
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: company.address,
    href: undefined,
    description: "Family-owned, locally operated",
  },
  {
    icon: Clock,
    label: "Hours",
    value: company.hours.weekday,
    href: undefined,
    description: company.hours.weekend,
  },
  {
    icon: Map,
    label: "Service Area",
    value: company.serviceArea,
    href: undefined,
    description: company.cities.join(" \u00B7 "),
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Submit Your Request",
    description:
      "Fill out the form or give us a call. Tell us what you need and we\u2019ll take it from there.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "We Assess & Quote",
    description:
      "We review the details, come out if needed, and give you an honest quote — no surprises.",
  },
  {
    number: "03",
    icon: ThumbsUp,
    title: "We Get It Done",
    description:
      "Once you approve, we schedule the work and get it done right. Fast, clean, guaranteed.",
  },
];

const trustItems = [
  {
    icon: Users,
    title: "Family-Owned",
    description: "Local business that treats every home like our own.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully covered so you never have to worry.",
  },
  {
    icon: Timer,
    title: "24hr Response",
    description: "We get back to every inquiry within one business day.",
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    description: "No commitment, no pressure. Just an honest price.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] bg-gradient-to-br from-white via-slate-50 to-teal-50/30 overflow-hidden flex items-end">
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
          <div className="max-w-3xl">
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
              <span className="text-teal-600">Contact</span>
            </nav>

            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-teal-600 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                <span className="w-8 h-px bg-teal-500" aria-hidden="true" />
                Get In Touch
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-bold mb-6">
                <span className="block text-5xl sm:text-6xl md:text-7xl text-stroke leading-[0.95]">
                  LET&rsquo;S
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[0.95] mt-1">
                  TALK.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
                Ready for a free estimate? Have a question about a repair? Reach
                out any way you like — we&rsquo;ll get back to you fast.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ───────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left column — Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-3">
                    <span
                      className="w-6 h-px bg-teal-500"
                      aria-hidden="true"
                    />
                    Contact Info
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                    Reach Us Directly
                  </h2>
                </div>
              </ScrollReveal>

              {contactCards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 rounded-xl shadow-sm group">
                    <div className="shrink-0 w-11 h-11 bg-teal-50 border border-teal-200 flex items-center justify-center rounded-lg group-hover:bg-teal-100 transition-colors">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-0.5">
                        {card.label}
                      </span>
                      <span className="block font-display text-sm md:text-base font-semibold text-slate-900 truncate">
                        {card.value}
                      </span>
                      <span className="block text-xs text-slate-400 mt-0.5">
                        {card.description}
                      </span>
                    </div>
                    {card.href && (
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors shrink-0 mt-3 ml-auto" />
                    )}
                  </div>
                );

                return (
                  <ScrollReveal key={card.label} delay={i * 0.06}>
                    {card.href ? (
                      <a href={card.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </ScrollReveal>
                );
              })}

              {/* Quick CTA */}
              <ScrollReveal delay={0.35}>
                <div className="pt-4">
                  <Button
                    variant="teal"
                    size="md"
                    href={`tel:${company.phoneRaw}`}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — Quote Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <QuoteForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ───────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-slate-50 to-teal-50/30 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Find Us"
              title="Based in Okeechobee, FL"
              description="Centrally located to serve all of Florida. From Fort Myers to Orlando and everywhere in between."
              align="center"
              light
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              {/* Map accent corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal-500 rounded-tl-2xl z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-2xl z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal-500 rounded-br-2xl z-10" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56763.25078520377!2d-80.86138565!3d27.2389343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d0ac0a7c5c285d%3A0x8cf2a1a3dbc14e6!2sOkeechobee%2C%20FL!5e0!3m2!1sen!2sus!4v1711000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kustom Home Services location — Okeechobee, FL"
                className="w-full"
              />
            </div>
          </ScrollReveal>

          {/* City tags below map */}
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {company.cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-display uppercase tracking-wider text-slate-500 bg-white border border-slate-200 rounded-full"
                >
                  <MapPin className="w-3 h-3 text-teal-500" />
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What Happens Next (Timeline style) ────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Process"
              title="What Happens Next"
              description="Three simple steps from your first call to a finished job."
              align="center"
              light
            />
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent -translate-y-1/2"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.number} delay={i * 0.15}>
                    <div className="relative text-center group">
                      {/* Step number circle */}
                      <div className="relative mx-auto mb-6 w-20 h-20 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/15 group-hover:bg-teal-50 group-hover:shadow-teal-500/30 transition-all duration-300">
                        <Icon className="w-8 h-8 text-teal-600" />
                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-display text-xs font-bold">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Section ─────────────────────────────────────── */}
      <section className="relative bg-teal-50/40 py-20 md:py-28 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — editorial */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-4">
                  <span
                    className="w-6 h-px bg-teal-500"
                    aria-hidden="true"
                  />
                  Why Trust Us
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Built on Trust.
                  <br />
                  Backed by Results.
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
                  We&rsquo;re not a big franchise. We&rsquo;re a family business
                  that stakes our reputation on every single job. When we say
                  we&rsquo;ll be there, we&rsquo;ll be there. When we say it&rsquo;s
                  done right, it&rsquo;s done right.
                </p>

                <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={`${basePath}/images/branded-truck.png`}
                    alt="Kustom Home Services branded truck"
                    fill
                    className="object-contain bg-slate-100 p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right — trust cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                    <div className="relative bg-white border border-slate-200 hover-lift p-6 h-full group rounded-xl shadow-sm overflow-hidden">
                      {/* Teal top border accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600" aria-hidden="true" />
                      <div className="w-12 h-12 bg-teal-50 border border-teal-200 flex items-center justify-center rounded-xl mb-5 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                        <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
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
    </>
  );
}
