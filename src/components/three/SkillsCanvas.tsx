"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import type { SkillCategoryId } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { skillNodes } from "./skillLayout";

const SkillsScene = dynamic(() => import("./SkillsScene"), { ssr: false });

export type SkillHover = { skill: string; category: string } | null;

type Props = { filter: "all" | SkillCategoryId; onHoverAction: (v: SkillHover) => void };

/** Lazy 3D orbital map plus a DOM label overlay that the scene positions each frame. */
export function SkillsCanvas({ filter, onHoverAction }: Props) {
  const tier = useDeviceTier();
  const reduced = useReducedMotion();
  const labelsRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  return (
    <>
      {tier && <SkillsScene tier={tier} reduced={reduced} filter={filter} paused={paused} labelsRef={labelsRef} />}
      <div ref={labelsRef} aria-hidden className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {skillNodes.map((n) => {
          const dimmed = filter !== "all" && filter !== n.category.id;
          return (
            <span key={n.skill} className="absolute left-0 top-0 will-change-transform" style={{ opacity: "var(--depth, 0)" }}>
              <span
                onPointerEnter={() => {
                  setPaused(true);
                  onHoverAction({ skill: n.skill, category: n.category.label });
                }}
                onPointerLeave={() => {
                  setPaused(false);
                  onHoverAction(null);
                }}
                className={cn(
                  "block select-none whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wider text-mist transition-[opacity,background-color] duration-500",
                  dimmed ? "pointer-events-none opacity-10" : "pointer-events-auto opacity-90 hover:bg-graphite",
                )}
                style={{ borderColor: `${n.category.accent}55`, backgroundColor: "rgb(5 5 7 / 0.7)" }}
              >
                {n.skill}
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
}
