"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { basePath } from "@/data/company";

interface StatItem {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "100+", numericValue: 100, suffix: "+", label: "Projects" },
  { value: "6+", numericValue: 6, suffix: "+", label: "Services" },
  { value: "ALL FL", label: "Service Area" },
  { value: "24HR", label: "Response Time" },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    }

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, start]);

  return count;
}

function StatCounter({
  stat,
  isVisible,
}: {
  stat: StatItem;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.numericValue ?? 0, 2000, isVisible);

  return (
    <div className="flex flex-col items-center gap-1 py-6 md:py-8">
      <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {stat.numericValue !== undefined ? (
          <>
            {count}
            {stat.suffix}
          </>
        ) : (
          stat.value
        )}
      </span>
      <span className="font-display text-xs uppercase tracking-[0.2em] text-teal-400 font-medium">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    []
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "0px",
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-900 overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Background image at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${basePath}/images/ceiling-fan.jpg)`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/80" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/50">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
