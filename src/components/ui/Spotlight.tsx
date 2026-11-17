"use client";

import type { ReactNode, PointerEvent } from "react";
import { cn } from "@/lib/utils";

/** Container whose border/background glow follows the pointer (fine pointers only, pure CSS vars). */
export function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={onMove} className={cn("spot", className)}>
      {children}
    </div>
  );
}
