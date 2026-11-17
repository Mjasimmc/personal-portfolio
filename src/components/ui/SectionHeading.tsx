import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "left" | "split";
};

export function SectionHeading({ index, eyebrow, title, lede, className, align = "split" }: Props) {
  return (
    <Reveal className={cn("relative mb-10 md:mb-20", className)}>
      <span
        aria-hidden
        className="text-display text-outline pointer-events-none absolute -top-24 right-0 hidden select-none text-[10rem] leading-none md:block"
      >
        {index}
      </span>
      <div className="relative flex items-center gap-3">
        <span className="rounded-full border border-electric/40 bg-electric/10 px-2.5 py-1 font-mono text-[11px] text-electric">
          {index}
        </span>
        <span className="label-mono text-silver">{eyebrow}</span>
        <span className="metal-line w-10 flex-1 md:w-16 md:flex-none" aria-hidden />
      </div>
      <div className={cn("relative mt-6 gap-10", align === "split" && "md:grid md:grid-cols-12")}>
        <h2
          className={cn(
            "text-display text-balance text-[clamp(2.4rem,9.5vw,5.6rem)] leading-[0.95] text-mist md:text-[clamp(2.6rem,6vw,5.6rem)] md:leading-[0.9]",
            align === "split" && "md:col-span-8",
          )}
        >
          {title}
        </h2>
        {lede && (
          <p
            className={cn(
              "mt-5 max-w-md border-l border-electric/40 pl-4 text-[15px] leading-relaxed text-silver-dim md:mt-2 md:border-0 md:pl-0 md:text-base",
              align === "split" && "md:col-span-4 md:justify-self-end",
            )}
          >
            {lede}
          </p>
        )}
      </div>
    </Reveal>
  );
}
