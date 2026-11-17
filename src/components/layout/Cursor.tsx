"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/components/animations/gsap";
import { useFinePointer, useMediaQuery, useReducedMotion } from "@/hooks/useMediaQuery";

/** Custom cursor: desktop fine-pointer only, disabled for reduced motion / forced colors. */
export function Cursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const forced = useMediaQuery("(forced-colors: active)");
  const enabled = fine && !reduced && !forced;
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");
    gsap.set([dot.current, ring.current], { x: -100, y: -100 });

    const dx = gsap.quickTo(dot.current, "x", { duration: 0.1, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.1, ease: "power3" });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.42, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.42, ease: "power3" });
    let hovering = false;

    const move = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const next = !!target?.closest("a, button, [data-cursor]");
      if (next === hovering) return;
      hovering = next;
      gsap.to(ring.current, { scale: next ? 2.4 : 1, opacity: next ? 0.95 : 0.55, duration: 0.35 });
      gsap.to(dot.current, { scale: next ? 0 : 1, duration: 0.25 });
    };
    const down = () => gsap.to(ring.current, { scale: hovering ? 2 : 0.75, duration: 0.15 });
    const up = () => gsap.to(ring.current, { scale: hovering ? 2.4 : 1, duration: 0.25 });
    const leave = () => gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.3 });
    const enter = () => {
      gsap.to(dot.current, { opacity: 1, duration: 0.3 });
      gsap.to(ring.current, { opacity: 0.55, duration: 0.3 });
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    root.addEventListener("mouseleave", leave);
    root.addEventListener("mouseenter", enter);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      root.removeEventListener("mouseleave", leave);
      root.removeEventListener("mouseenter", enter);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70]">
      <div
        ref={dot}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mist"
      />
      <div
        ref={ring}
        className="absolute left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mist opacity-55 mix-blend-difference"
      />
    </div>
  );
}
