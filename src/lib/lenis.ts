import type Lenis from "lenis";

/** Shared Lenis instance (null when smooth scroll is disabled, e.g. reduced motion). */
export const lenisRef: { current: Lenis | null } = { current: null };

export function scrollToHash(hash: string) {
  const el = document.querySelector<HTMLElement>(hash);
  if (!el) return;
  if (lenisRef.current) {
    lenisRef.current.scrollTo(el, { duration: 1.4 });
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
