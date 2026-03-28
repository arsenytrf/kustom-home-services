"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Distance to translate from (px) */
  distance?: number;
  /** Direction to animate from */
  direction?: "up" | "down" | "left" | "right";
  /** Duration in seconds */
  duration?: number;
  /** ScrollTrigger start position */
  start?: string;
  /** Whether to animate once or every time */
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 40,
  direction = "up",
  duration = 0.8,
  start = "top 85%",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;

    async function init() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      if (!el) return;

      const directionMap = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
      };

      const from = directionMap[direction];

      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: from.x,
            y: from.y,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: once
                ? "play none none none"
                : "play none none reverse",
            },
          }
        );
      }, el);
    }

    // Set initial hidden state
    el.style.opacity = "0";
    init();

    return () => {
      ctx?.revert();
    };
  }, [delay, distance, direction, duration, start, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
