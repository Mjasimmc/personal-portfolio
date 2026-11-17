import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cn("h-3.5 w-3.5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 13 13 3M6 3h7v7" />
    </svg>
  );
}

/** Pill CTA. Internal routes use <Link>; hashes, mailto and external URLs render a plain anchor. */
export function LinkButton({ href, children, variant = "solid", className }: Props) {
  const classes = cn(
    "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-[transform,background-color,border-color,color] duration-500 ease-expo",
    variant === "solid"
      ? "bg-mist text-obsidian hover:scale-[1.03]"
      : "border border-line text-silver hover:border-silver/50 hover:text-mist",
    className,
  );
  const icon = (
    <ArrowIcon className="transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {icon}
    </a>
  );
}
