"use client";

import { useState } from "react";
import { SkillsCanvas } from "@/components/three/SkillsCanvas";
import type { SkillHover } from "@/components/three/SkillsCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { Tag } from "@/components/ui/Tag";
import { skillCategories } from "@/data/portfolio";
import { useFinePointer, useIsDesktop } from "@/hooks/useMediaQuery";
import type { SkillCategoryId } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type Filter = "all" | SkillCategoryId;

export function Expertise() {
  const [filter, setFilter] = useState<Filter>("all");
  const [hovered, setHovered] = useState<SkillHover>(null);
  const desktop = useIsDesktop();
  const fine = useFinePointer();
  const show3D = desktop && fine;
  const visible = filter === "all" ? skillCategories : skillCategories.filter((c) => c.id === filter);

  return (
    <>
      <SectionHeading
        index="02"
        eyebrow="Toolkit"
        title={
          <>
            Tools I use, <span className="font-serif-italic text-silver">and keep adding to.</span>
          </>
        }
        lede="Technologies I actually build with, grouped by area — no proficiency scores, no padding. The list keeps growing."
      />

      <Reveal>
        <div role="group" aria-label="Filter skills by category" className="flex flex-wrap gap-2">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterChip>
          {skillCategories.map((c) => (
            <FilterChip
              key={c.id}
              active={filter === c.id}
              accent={c.accent}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </FilterChip>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        {show3D && (
          <Reveal className="relative isolate h-[64vh] min-h-[440px] overflow-hidden rounded-[32px] border border-line bg-graphite/30 lg:col-span-8">
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(61_123_255/0.08),transparent_70%)]" />
            <SkillsCanvas filter={filter} onHoverAction={setHovered} />
            <div className="glass pointer-events-none absolute bottom-5 left-5 min-w-[220px] rounded-2xl px-4 py-3">
              {hovered ? (
                <>
                  <p className="label-mono">{hovered.category}</p>
                  <p className="mt-1 text-mist">{hovered.skill}</p>
                </>
              ) : (
                <>
                  <p className="label-mono">Orbital map</p>
                  <p className="mt-1 text-sm text-silver-dim">Hover a node · move to orbit</p>
                </>
              )}
            </div>
          </Reveal>
        )}

        <Reveal
          selector="[data-cat]"
          className={cn(show3D ? "lg:col-span-4" : "grid gap-x-10 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3")}
        >
          {visible.map((c) => (
            <Spotlight
              key={c.id}
              className="mb-3 break-inside-avoid rounded-2xl border border-line bg-graphite/40 p-5 transition-colors hover:border-transparent"
            >
              <div data-cat>
              <h3 className="label-mono flex items-center gap-2 text-silver">
                <span
                  className="h-2 w-2 rounded-full shadow-[0_0_12px_currentColor]"
                  style={{ background: c.accent, color: c.accent }}
                  aria-hidden
                />
                {c.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li key={s}>
                    <Tag className="text-silver">{s}</Tag>
                  </li>
                ))}
              </ul>
              </div>
            </Spotlight>
          ))}
        </Reveal>
      </div>
    </>
  );
}

function FilterChip({
  active,
  accent,
  onClick,
  children,
}: {
  active: boolean;
  accent?: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] transition-[background-color,border-color,color] duration-400",
        active
          ? "border-mist bg-mist text-obsidian"
          : "border-line text-silver-dim hover:border-silver/40 hover:text-mist",
      )}
    >
      {accent && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: active ? "#050507" : accent }}
          aria-hidden
        />
      )}
      {children}
    </button>
  );
}
