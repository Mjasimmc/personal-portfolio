import { cn } from "@/lib/utils";

const phrases = ["Adapt", "Learn", "Explore the future", "Build an identity"];

/**
 * Oversized outlined phrase ribbon used as an editorial divider between sections.
 * Reuses the marquee keyframes; the duplicate row is hidden from assistive tech and the
 * animation stops under prefers-reduced-motion (handled in globals.css).
 */
export function PhraseStrip({ reverse = false, className }: { reverse?: boolean; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {phrases.map((p) => (
        <li key={p} className="flex items-center">
          <span className="text-display text-outline [-webkit-text-stroke-color:rgb(201_204_212/0.42)] whitespace-nowrap px-6 text-[clamp(3rem,9vw,8rem)] leading-none md:px-10">
            {p}
          </span>
          <span className="h-2 w-2 rotate-45 bg-electric" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      role="presentation"
      className={cn(
        "marquee relative overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] md:py-12",
        className,
      )}
    >
      <div className={cn("marquee-track flex w-max", reverse && "[animation-direction:reverse]")}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
