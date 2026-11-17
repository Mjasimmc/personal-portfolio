"use client";

import { useLayoutEffect, useRef } from "react";
import { MOTION_OK, ScrollTrigger, gsap } from "@/components/animations/gsap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/portfolio";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

export function Experience() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = wrap.current;
    const ln = line.current;
    if (!el || !ln) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        ln,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: { trigger: el, start: "top 65%", end: "bottom 55%", scrub: 0.6 },
        },
      );
      el.querySelectorAll<HTMLElement>("[data-dot]").forEach((dot) => {
        ScrollTrigger.create({ trigger: dot, start: "top 60%", toggleClass: { targets: dot, className: "is-active" } });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title={
          <>
            Three years, three teams, <span className="font-serif-italic text-silver">production every time.</span>
          </>
        }
        lede="Roles as listed on the resume — responsibilities, stack and verified outcomes. No invented metrics."
      />

      <div ref={wrap} className="relative">
        <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-line lg:left-1/2">
          <div
            ref={line}
            className="h-full w-full origin-top bg-gradient-to-b from-electric via-violet to-transparent"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <ol className="space-y-6">
          {experience.map((role, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={role.company}
                selector="[data-reveal]"
                className="relative grid gap-5 pl-9 lg:grid-cols-2 lg:gap-x-20 lg:pl-0"
              >
                <span
                  data-dot
                  aria-hidden
                  className="absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border border-line bg-obsidian transition-colors duration-700 [&.is-active]:border-electric lg:left-1/2 lg:-translate-x-1/2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-silver-dim transition-colors duration-700 [.is-active_&]:bg-electric" />
                </span>

                <div data-reveal className={cn("lg:pt-0", flip ? "lg:order-2 lg:pl-0" : "lg:text-right")}>
                  <p className="label-mono">
                    {role.start} — {role.end}
                  </p>
                  <h3 className="text-display mt-3 text-[clamp(1.9rem,3.4vw,3.2rem)] text-mist">{role.company}</h3>
                  <p className="mt-2 text-silver">{role.position}</p>
                  <p className="mt-1 text-sm text-silver-dim">{role.location}</p>
                </div>

                <Spotlight className={cn("card mb-8 rounded-3xl lg:mb-12", flip && "lg:order-1")}>
                <div data-reveal className="p-5 lg:p-8">
                  <ul className="space-y-3">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-silver-dim">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-silver/50" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </>
  );
}
