"use client";

import { useLayoutEffect, useRef } from "react";
import { MOTION_OK, SplitText, gsap } from "@/components/animations/gsap";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { LinkButton } from "@/components/ui/LinkButton";
import { Magnetic } from "@/components/ui/Magnetic";
import { experience, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const q = gsap.utils.selector(el);
      let split: SplitText | undefined;
      let cancelled = false;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" }, paused: true });
      tl.fromTo(q("[data-hero-canvas]"), { autoAlpha: 0, scale: 1.06 }, { autoAlpha: 1, scale: 1, duration: 2.4 }, 0)
        .fromTo(q("[data-hero-meta]"), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 }, 0.4)
        .fromTo(
          q("[data-hero-rule]"),
          { autoAlpha: 0, scaleX: 0 },
          { autoAlpha: 1, scaleX: 1, duration: 1.3, transformOrigin: "left center" },
          1,
        )
        .fromTo(q("[data-hero-copy]"), { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.12 }, 1.1)
        .fromTo(q("[data-hero-scroll]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.8);

      document.fonts.ready.then(() => {
        if (cancelled) return;
        const titles = q("[data-hero-title]");
        split = SplitText.create(titles, { type: "words,chars", mask: "words" });
        gsap.set(titles, { autoAlpha: 1 });
        tl.fromTo(split.chars, { yPercent: 110 }, { yPercent: 0, duration: 1.5, stagger: 0.035 }, 0.3);
        tl.play();
      });

      // Scroll parallax: copy lifts away, scene drifts back.
      gsap.to(q("[data-hero-content]"), {
        y: -90,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom 35%", scrub: true },
      });
      gsap.to(q("[data-hero-canvas]"), {
        y: 140,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });

      return () => {
        cancelled = true;
        split?.revert();
        tl.kill();
      };
    });
    return () => mm.revert();
  }, []);

  const current = experience[0];

  return (
    <section id="home" ref={root} className="relative min-h-[100svh] overflow-hidden">
      <div data-hero-canvas className="gs-reveal absolute inset-0 will-change-transform">
        <HeroCanvas />
      </div>

      {/* Legibility scrim: keeps copy readable over the 3D scene on small screens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgb(5_5_7/0.55)_0%,transparent_22%,rgb(5_5_7/0.78)_58%,rgb(5_5_7/0.96)_100%)] md:bg-[linear-gradient(to_top,rgb(5_5_7/0.7),transparent_45%)]"
      />

      {/* Architectural grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1600px] grid-cols-4 px-6 opacity-[0.07] md:grid-cols-6"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={cn("border-l border-silver", i > 3 && "hidden md:block")} />
        ))}
      </div>

      <div
        data-hero-content
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-6 pb-12 pt-28 md:pb-16"
      >
        <div className="flex items-start justify-between gap-6">
          <p data-hero-meta className="gs-reveal label-mono flex items-center gap-2 text-silver">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {profile.location}
          </p>
          <p data-hero-meta className="gs-reveal label-mono hidden text-right md:block">
            Currently · {current.position} <span className="text-silver">@ {current.company}</span>
          </p>
        </div>

        <div className="flex-1" aria-hidden />

        <div className="grid items-end gap-10 md:grid-cols-12">
          <h1 className="text-display text-[clamp(3rem,14.5vw,9.5rem)] leading-[0.88] text-mist md:col-span-8 md:text-[clamp(3.2rem,10.5vw,9.5rem)]">
            <span data-hero-title className="gs-reveal block uppercase">
              {profile.firstName}
            </span>
            <span data-hero-title className="gs-reveal font-serif-italic block pb-[0.1em] pr-3 text-[1.18em] normal-case leading-[0.95] tracking-normal text-[#7ff0ff] [text-shadow:0_2px_18px_rgb(5_5_7/0.95),0_0_36px_rgb(56_225_255/0.28)]">
              {profile.lastName}
            </span>
          </h1>
          <div className="md:col-span-4 md:pb-3">
            <div data-hero-rule className="gs-reveal metal-line mb-6" aria-hidden />
            <p data-hero-copy className="gs-reveal inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan">
              {profile.designation}
            </p>
            <p data-hero-copy className="gs-reveal mt-4 max-w-sm text-[15px] leading-relaxed text-silver sm:text-base">
              {profile.statement}
            </p>
            <div data-hero-copy className="gs-reveal mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap [&_a]:w-full [&_a]:justify-center [&_a]:whitespace-nowrap [&_a]:px-4 sm:[&_a]:w-auto sm:[&_a]:px-6">
              <Magnetic>
                <LinkButton href="#projects">View projects</LinkButton>
              </Magnetic>
              <Magnetic>
                <LinkButton href="#contact" variant="ghost">
                  Get in touch
                </LinkButton>
              </Magnetic>
            </div>
          </div>
        </div>

        <div data-hero-scroll className="gs-reveal mt-14 flex items-center gap-4">
          <span className="relative block h-12 w-px overflow-hidden bg-line" aria-hidden>
            <span className="scroll-line absolute inset-0 bg-mist" />
          </span>
          <span className="label-mono">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
