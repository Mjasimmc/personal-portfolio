"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type MouseEvent,
} from "react";
import { navItems, profile } from "@/data/portfolio";
import { gsap } from "@/components/animations/gsap";
import { lenisRef, scrollToHash } from "@/lib/lenis";
import { cn } from "@/lib/utils";

type NavId = (typeof navItems)[number]["id"];

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};
const isScrolled = () => window.scrollY > 32;
const serverScrolled = () => false;

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<NavId>("home");
  // Transparent → solid after the first scroll.
  const solid = useSyncExternalStore(subscribeScroll, isScrolled, serverScrolled);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Active section tracking (home only).
  useEffect(() => {
    if (!isHome) return;
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id as NavId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  // Animated active indicator pill (re-measured on resize and once fonts settle).
  useLayoutEffect(() => {
    const list = listRef.current;
    const pill = pillRef.current;
    if (!list || !pill) return;
    const measure = (animate: boolean) => {
      const link = list.querySelector<HTMLElement>(`[data-id="${active}"]`);
      if (!link) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gsap.to(pill, {
        x: link.offsetLeft,
        width: link.offsetWidth,
        opacity: isHome ? 1 : 0,
        duration: animate && !reduce ? 0.6 : 0,
        ease: "expo.out",
        overwrite: true,
      });
    };
    measure(true);
    const onResize = () => measure(false);
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, isHome]);

  // Mobile menu: lock scroll, focus, Escape, focus trap.
  useEffect(() => {
    const menu = menuRef.current;
    if (!open || !menu) return;
    lenisRef.current?.stop();
    document.body.style.overflow = "hidden";
    const focusables = menu.querySelectorAll<HTMLElement>("a[href], button");
    focusables[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenisRef.current?.start();
    };
  }, [open]);

  const onNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, id: NavId) => {
      if (!isHome) return; // let Next navigate to /#id
      e.preventDefault();
      setOpen(false);
      setActive(id);
      // The mobile menu locks scroll (body overflow + Lenis stop); release it before scrolling,
      // otherwise the scroll is silently ignored and the tap looks like it did nothing.
      document.body.style.overflow = "";
      lenisRef.current?.start();
      scrollToHash(`#${id}`);
      history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
    },
    [isHome],
  );

  const href = (id: NavId) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1600px] px-4 pt-4 sm:px-6">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between rounded-full py-1.5 pl-4 pr-1.5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-700 ease-expo",
            solid || open
              ? "glass shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)]"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link
            href="/"
            onClick={(e) => onNavClick(e, "home")}
            className="group flex items-center gap-3 py-2"
            aria-label={`${profile.name} — home`}
          >
            <span className="grid h-7 w-7 place-items-center rounded-full border border-line bg-graphite font-mono text-[11px] tracking-wider text-mist transition-colors group-hover:border-silver/40">
              MJ
            </span>
            <span className="label-mono hidden text-silver sm:inline">{profile.name}</span>
          </Link>

          <ul ref={listRef} className="relative hidden items-center lg:flex">
            <span
              ref={pillRef}
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 h-8 -translate-y-1/2 rounded-full bg-mist/8 opacity-0"
            />
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  data-id={item.id}
                  onClick={(e) => onNavClick(e, item.id)}
                  aria-current={isHome && active === item.id ? "location" : undefined}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-2 text-[13px] tracking-wide transition-colors duration-300",
                    isHome && active === item.id ? "text-mist" : "text-silver-dim hover:text-silver",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={href("contact")}
              onClick={(e) => onNavClick(e, "contact")}
              className="hidden items-center gap-2 rounded-full bg-mist px-4 py-2 text-[13px] font-medium text-obsidian transition-transform duration-300 ease-expo hover:scale-[1.04] lg:inline-flex"
            >
              Let&apos;s talk
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-electric" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-silver transition-colors hover:border-silver/40 hover:text-mist lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-4" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-500 ease-expo",
                    open && "translate-y-[5.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[5.5px] h-px w-4 bg-current transition-opacity duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[11px] h-px w-4 bg-current transition-transform duration-500 ease-expo",
                    open && "-translate-y-[5.5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
        className="fixed inset-0 -z-10 flex flex-col justify-end bg-obsidian/92 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item, i) => (
            <li
              key={item.id}
              className={cn(
                "transition-[opacity,transform] duration-700 ease-expo",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
            >
              <a
                href={href(item.id)}
                onClick={(e) => onNavClick(e, item.id)}
                className="flex items-baseline gap-4 border-b border-line py-3 text-display text-4xl text-mist"
              >
                <span className="font-mono text-xs text-silver-dim">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {profile.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-silver transition-colors hover:text-mist"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
