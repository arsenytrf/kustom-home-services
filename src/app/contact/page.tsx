import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

import { company } from "@/data/company";
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
      "Fill out the form or give us a call. Tell us what you need and we'll take it from there.",
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
            <span className="text-teal-600">Contact</span>
          </nav>

          <ScrollReveal>
            <span className="inline-block text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-3">
              Get In Touch
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              Let&rsquo;s Talk
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
              Ready for a free estimate? Have a question about a repair? Reach
              out any way you like &mdash; we&rsquo;ll get back to you fast.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Contact Info + Form ---------------------------------- */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left column — Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Contact Info
                </h2>
              </ScrollReveal>

              {contactCards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors rounded-xl">
                    <div className="shrink-0 w-10 h-10 bg-teal-50 border border-teal-200 flex items-center justify-center rounded-lg">
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
                  </div>
                );

                return (
                  <ScrollReveal key={card.label} delay={i * 0.06}>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="block"
                      >
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
                    variant="outline"
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

      {/* -- What Happens Next ------------------------------------ */}
      <section className="bg-slate-50 py-20 md:py-28">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="relative text-center p-6">
                    {/* Step number */}
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-display text-7xl font-bold text-slate-200/60 select-none">
                      {step.number}
                    </span>
                    <div className="relative">
                      <div className="w-14 h-14 bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto mb-5 rounded-xl">
                        <Icon className="w-7 h-7 text-teal-600" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Trust Section ---------------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Why Trust Us"
              title="Built on Trust"
              description="We're not a big franchise. We're a family business that stakes our reputation on every single job."
              align="center"
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="text-center p-6 border border-slate-200 bg-slate-50 hover:border-teal-300 transition-colors rounded-xl">
                    <div className="w-12 h-12 bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto mb-4 rounded-xl">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1.5">
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
      </section>
    </>
  );
}
