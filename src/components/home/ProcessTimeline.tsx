"use client";

import Image from "next/image";
import { Phone, MapPin, FileText, CheckCircle } from "lucide-react";
import { basePath } from "@/data/company";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Call or Text Us",
    description:
      "Reach out with what you need — no job is too small. We respond within 24 hours.",
    icon: Phone,
  },
  {
    number: "02",
    title: "We Come to You",
    description:
      "We'll schedule a visit at your convenience to see the job firsthand.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Get an Honest Quote",
    description:
      "No surprises, no hidden fees. You'll know exactly what it costs before we start.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Job Done Right",
    description:
      "We do the work, clean up after ourselves, and make sure you're 100% satisfied.",
    icon: CheckCircle,
  },
];

export default function ProcessTimeline() {
  const sectionRef = useGsapScroll<HTMLElement>((el, gsap) => {
    // Animate the timeline line drawing
    const line = el.querySelector("[data-timeline-line]");
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }

    // Animate each step
    const items = el.querySelectorAll("[data-timeline-item]");
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate dots
    const dots = el.querySelectorAll("[data-timeline-dot]");
    dots.forEach((dot) => {
      gsap.fromTo(
        dot,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: dot,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-50 to-teal-50/30 py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Photo background for texture */}
      <Image
        src={`${basePath}/images/bathroom-mirror.jpg`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="4 Simple Steps"
          description="From your first call to a finished job, we keep it easy."
          light
        />

        {/* Timeline */}
        <div className="relative mt-12 md:mt-16">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200"
            aria-hidden="true"
          >
            <div
              data-timeline-line
              className="absolute inset-0 w-full bg-teal-500 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-timeline-item
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div
                  data-timeline-dot
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-white border-2 border-teal-500 z-10 rounded-full shadow-md"
                  aria-hidden="true"
                >
                  <step.icon className="w-5 h-5 text-teal-600" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-teal-600 font-semibold">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
