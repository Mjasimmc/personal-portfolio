"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/components/animations/gsap";
import { lenisRef, scrollToHash } from "@/lib/lenis";

/** Lenis smooth scroll driven by the GSAP ticker so ScrollTrigger stays in sync; same-page anchors use it too. */
export function SmoothScroll() {
  useEffect(() => {
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    fontsReady.then(() => ScrollTrigger.refresh());

    // Delegated same-page anchor handling (Nav prevents default itself, so skip those).
    const onClick = (e: globalThis.MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a || a.getAttribute("href") === "#") return;
      const hash = a.getAttribute("href")!;
      if (!document.querySelector(hash)) return;
      e.preventDefault();
      scrollToHash(hash);
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return () => document.removeEventListener("click", onClick);

    const lenis = new Lenis({ autoRaf: false, lerp: 0.09, wheelMultiplier: 1, touchMultiplier: 1.3 });
    lenisRef.current = lenis;
    lenis.on("scroll", () => ScrollTrigger.update());
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  return null;
}
