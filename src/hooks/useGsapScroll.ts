"use client";

import { useRef, useEffect } from "react";

/**
 * Standard GSAP + ScrollTrigger hook with lazy loading.
 * Respects prefers-reduced-motion. Returns a ref to attach to the animated container.
 */
export function useGsapScroll<T extends HTMLElement = HTMLDivElement>(
  animationFn: (
    el: T,
    gsap: typeof import("gsap").default,
    ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger
  ) => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;

    // Lazy-load GSAP + ScrollTrigger
    async function init() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      if (!el) return;

      ctx = gsap.context(() => {
        animationFn(el, gsap, ScrollTrigger);
      }, el);
    }

    init();

    return () => {
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
