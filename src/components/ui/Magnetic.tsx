"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/components/animations/gsap";
import { useFinePointer, useReducedMotion } from "@/hooks/useMediaQuery";

/** Magnetic hover for CTAs. Inert on touch devices and with reduced motion. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !fine || reduced) return;
    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "expo.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "expo.out" });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * strength);
      y((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => {
      x(0);
      y(0);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [fine, reduced, strength]);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
}
