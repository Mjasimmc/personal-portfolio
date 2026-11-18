"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/components/animations/gsap";
import { ArrowIcon } from "@/components/ui/LinkButton";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { useFinePointer, useReducedMotion } from "@/hooks/useMediaQuery";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <>
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title={
          <>
            Things I&apos;ve built <span className="font-serif-italic text-silver">to learn by doing.</span>
          </>
        }
        lede="Selected builds, what each one involved and the technology behind it. No public links are listed, so none are invented — each piece gets an abstract visual, not a mock screenshot."
      />
      <ol className="flex flex-col gap-16 md:gap-36">
        {projects.map((p, i) => (
          <ProjectItem key={p.slug} project={p} index={i} />
        ))}
      </ol>
    </>
  );
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const tilt = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const flip = index % 2 === 1;
  const detailsId = `${project.slug}-details`;

  useEffect(() => {
    const el = tilt.current;
    if (!el || !fine || reduced) return;
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.9, ease: "expo.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.9, ease: "expo.out" });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rx(-py * 9);
      ry(px * 12);
    };
    const leave = () => {
      rx(0);
      ry(0);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [fine, reduced]);

  return (
    <Reveal as="li" className="grid items-start gap-6 md:grid-cols-12 md:gap-12">
      {/* Visual stays pinned while the text column (incl. expanded details) scrolls past. */}
      <div className={cn("md:sticky md:top-28 md:col-span-7", flip && "md:order-2")}>
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${project.title} — case study`}
          className="group block [perspective:1400px]"
        >
          <div ref={tilt} className="relative [transform-style:preserve-3d]">
            <span
              aria-hidden
              className={cn(
                "text-display text-outline pointer-events-none absolute -top-14 z-10 hidden text-[9rem] leading-none transition-colors duration-700 group-hover:[-webkit-text-stroke-color:rgb(56_225_255/0.7)] lg:block",
                flip ? "right-2" : "-left-2",
              )}
              style={{ transform: "translateZ(80px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <ProjectVisual
              kind={project.visual}
              className="aspect-[5/4] rounded-[24px] border border-line md:aspect-[4/3] md:rounded-[28px] transition-shadow duration-700 group-hover:shadow-[0_50px_90px_-40px_rgb(61_123_255/0.35)]"
            />
            <span
              className="label-mono absolute left-6 top-6 text-silver"
              style={{ transform: "translateZ(40px)" }}
            >
              {project.period}
            </span>
            <span
              className="absolute bottom-6 right-6 grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-mist text-obsidian opacity-0 transition-[opacity,translate] duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100"
              style={{ transform: "translateZ(60px)" }}
            >
              <ArrowIcon />
            </span>
          </div>
        </Link>
      </div>

      <div className={cn("md:col-span-5", flip && "md:order-1")}>
        <p className="label-mono">
          <span className="text-electric">{String(index + 1).padStart(2, "0")}</span> — {project.kind}
        </p>
        <h3 className="text-display mt-3 text-[clamp(2rem,8vw,3.6rem)] leading-[0.98] text-mist md:mt-4 md:text-[clamp(2rem,3.8vw,3.6rem)]">{project.title}</h3>
        <p className="mt-5 leading-relaxed text-silver-dim">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((o) => !o)}
            className="group inline-flex items-center gap-3 text-sm text-mist"
          >
            <span
              aria-hidden
              className={cn(
                "grid h-7 w-7 place-items-center rounded-full border border-line text-base leading-none transition-transform duration-500 ease-expo",
                open && "rotate-45",
              )}
            >
              +
            </span>
            {open ? "Hide details" : "Key work"}
          </button>
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm text-silver-dim underline-offset-4 transition-colors hover:text-mist hover:underline"
          >
            Open case study
          </Link>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-silver-dim hover:text-mist">
              Live site
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-sm text-silver-dim hover:text-mist">
              Source
            </a>
          )}
        </div>

        <div
          id={detailsId}
          aria-hidden={!open}
          className={cn(
            "grid transition-[grid-template-rows] duration-700 ease-expo",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-silver-dim">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-electric" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
