"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { MOTION_OK, gsap } from "@/components/animations/gsap";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "ol" | "ul" | "li" | "p" | "header" | "footer";
  className?: string;
  /** Stagger matches of this selector instead of animating the wrapper. */
  selector?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  id?: string;
};

/** Scroll-triggered reveal. Content is visible by default when motion is reduced or JS is off. */
export function Reveal({ children, as = "div", className, selector, delay = 0, y = 36, stagger = 0.08, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const targets = selector ? Array.from(el.querySelectorAll<HTMLElement>(selector)) : el;
      if (selector) gsap.set(el, { opacity: 1 });
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          delay,
          stagger,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });
    return () => mm.revert();
  }, [delay, selector, stagger, y]);

  // All allowed tags share the same prop surface here; narrowing keeps the JSX ref type simple.
  const Tag = as as "div";
  return (
    <Tag ref={ref} id={id} className={cn("gs-reveal", className)}>
      {children}
    </Tag>
  );
}
