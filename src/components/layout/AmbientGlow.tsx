"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed background glow whose hue drifts from blue to violet to cyan as the page scrolls.
 * The hue is written to a CSS variable on the element (no React renders); static under reduced motion.
 */
export function AmbientGlow() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      // 220 (blue) → 262 (violet) → 190 (cyan)
      const hue = p < 0.5 ? 220 + (p / 0.5) * 42 : 262 - ((p - 0.5) / 0.5) * 72;
      node.style.setProperty("--glow-hue", hue.toFixed(1));
      node.style.setProperty("--glow-y", `${20 + p * 60}%`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={el}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-60"
      style={{
        background:
          "radial-gradient(60% 45% at 85% var(--glow-y, 20%), hsl(var(--glow-hue, 220) 90% 55% / 0.13), transparent 70%)",
      }}
    />
  );
}
