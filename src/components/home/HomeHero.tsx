"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { basePath, company } from "@/data/company";
import Button from "@/components/shared/Button";
import HeroForm from "@/components/home/HeroForm";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;

    async function init() {
      const { default: gsap } = await import("gsap");

      if (!el) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          "[data-hero-label]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
          .fromTo(
            "[data-hero-headline] > *",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
            "-=0.3"
          )
          .fromTo(
            "[data-hero-subtitle]",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
          )
          .fromTo(
            "[data-hero-buttons] > *",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            "-=0.3"
          )
          .fromTo(
            "[data-hero-trust]",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.2"
          )
          .fromTo(
            "[data-hero-truck]",
            { opacity: 0, x: 60, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, duration: 0.9 },
            "-=0.8"
          )
          .fromTo(
            "[data-hero-form]",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7 },
            "-=0.4"
          );
      }, el);
    }

    init();
    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-slate-950 overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 lg:pt-36 pb-12">
        {/* Main hero content — two columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side — copy */}
          <div>
            {/* Label */}
            <div data-hero-label className="mb-6">
              <span className="inline-flex items-center gap-2 text-warm-400 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
                <span className="w-8 h-px bg-warm-400" aria-hidden="true" />
                Family-Owned Handyman — Okeechobee, FL
              </span>
            </div>

            {/* Headline */}
            <div data-hero-headline className="mb-6">
              <h1 className="font-display font-bold">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stroke leading-[0.95]">
                  YOUR HOME.
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mt-1">
                  OUR PRIORITY.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              data-hero-subtitle
              className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed mb-8"
            >
              Honest work and quality results for every job, big or small. From
              plumbing and ceiling fans to full bathroom remodels — we show up on
              time, do it right, and leave your home better than we found it.
            </p>

            {/* Buttons */}
            <div
              data-hero-buttons
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <Button variant="teal" size="lg" href="#estimate-form">
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

            {/* Trust strip */}
            <div
              data-hero-trust
              className="flex flex-wrap items-center gap-5 text-xs text-slate-500"
            >
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
          </div>

          {/* Right side — truck image */}
          <div
            data-hero-truck
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Teal glow behind the truck */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-teal-500/10 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <Image
                src={`${basePath}/images/branded-truck.jpg`}
                alt="Kustom Home Services branded black Toyota Tacoma work truck"
                width={700}
                height={450}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                preload
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
              />
            </div>
          </div>
        </div>

        {/* Hero Form — below the fold, visible on all devices */}
        <div data-hero-form className="mt-12 lg:mt-16 max-w-3xl mx-auto">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
