"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type MouseEvent } from "react";
import { navItems } from "@/data/portfolio";
import { scrollToHash } from "@/lib/lenis";

/**
 * Fixed "waypoint" rail on large screens: a progress line plus one stop per section.
 * Progress and the active stop are written straight to the DOM, so scrolling never triggers a React render.
 */
export function ProgressRail() {
  const isHome = usePathname() === "/";
  const root = useRef<HTMLElement>(null);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!isHome || !el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      if (fill.current) fill.current.style.transform = `scaleY(${p})`;
      el.dataset.show = window.scrollY > window.innerHeight * 0.5 ? "true" : "false";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const stops = Array.from(el.querySelectorAll<HTMLElement>("[data-stop]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          stops.forEach((s) => (s.dataset.active = s.dataset.stop === e.target.id ? "true" : "false"));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const s = document.getElementById(n.id);
      if (s) io.observe(s);
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, [isHome]);

  if (!isHome) return null;

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToHash(`#${id}`);
  };

  return (
    <nav
      ref={root}
      aria-label="Section progress"
      data-show="false"
      className="group/rail pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 opacity-0 transition-opacity duration-700 ease-expo data-[show=true]:pointer-events-auto data-[show=true]:opacity-100 xl:block"
    >
      <div className="relative py-2">
        <span aria-hidden className="absolute bottom-2 right-[5px] top-2 w-px bg-line" />
        <span
          ref={fill}
          aria-hidden
          className="absolute bottom-2 right-[5px] top-2 w-px origin-top bg-gradient-to-b from-electric to-cyan"
          style={{ transform: "scaleY(0)" }}
        />
        <ul className="relative flex flex-col items-end gap-5">
          {navItems.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={(e) => go(e, n.id)}
                data-stop={n.id}
                data-active="false"
                className="group/stop flex items-center gap-3"
                aria-label={n.label}
              >
                <span className="label-mono translate-x-1 text-silver-dim opacity-0 transition-[opacity,transform] duration-500 ease-expo group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-data-[active=true]/stop:text-mist">
                  <span className="text-silver-dim/60">0{i + 1}</span> {n.label}
                </span>
                <span className="block h-[11px] w-[11px] rounded-full border border-silver/40 bg-obsidian transition-[transform,background-color,border-color] duration-500 ease-expo group-data-[active=true]/stop:scale-125 group-data-[active=true]/stop:border-cyan group-data-[active=true]/stop:bg-cyan" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
