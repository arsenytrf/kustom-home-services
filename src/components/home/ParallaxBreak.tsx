"use client";

import { useGsapScroll } from "@/hooks/useGsapScroll";
import { basePath } from "@/data/company";

export default function ParallaxBreak() {
  const sectionRef = useGsapScroll<HTMLElement>((el, gsap, ScrollTrigger) => {
    const bgImage = el.querySelector("[data-parallax-bg]");
    if (!bgImage) return;

    gsap.fromTo(
      bgImage,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center"
      aria-label="Company motto"
    >
      {/* Parallax background */}
      <div
        data-parallax-bg
        className="absolute inset-[-20%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${basePath}/images/bathroom-mirror.jpg)`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay 50-60% */}
      <div
        className="absolute inset-0 bg-slate-950/55"
        aria-hidden="true"
      />

      {/* Subtle teal gradient accent */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-teal-950/20 via-transparent to-teal-950/20"
        aria-hidden="true"
      />

      {/* Quote content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <blockquote>
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
            &ldquo;Honest Work. Quality Results.
            <br className="hidden sm:block" />{" "}
            That&rsquo;s not a slogan — it&rsquo;s how we run every
            job.&rdquo;
          </p>
          <footer className="mt-6 md:mt-8 flex items-center justify-center gap-3">
            <span
              className="w-8 h-px bg-teal-500"
              aria-hidden="true"
            />
            <cite className="not-italic font-display text-xs sm:text-sm uppercase tracking-[0.2em] text-teal-400 font-semibold">
              Kustom Home Services
            </cite>
            <span
              className="w-8 h-px bg-teal-500"
              aria-hidden="true"
            />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
