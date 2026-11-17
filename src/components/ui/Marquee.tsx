import { skillCategories } from "@/data/portfolio";

const items = skillCategories.flatMap((c) => c.skills);

/** Infinite tech-stack ribbon. Content is duplicated for a seamless loop; the copy is hidden from AT. */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((s) => (
        <li key={s} className="flex items-center">
          <span className="px-6 font-mono text-xs uppercase tracking-[0.2em] text-silver-dim md:px-9 md:text-sm">{s}</span>
          <span className="h-1 w-1 rotate-45 bg-electric" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      aria-label="Technologies I work with"
      className="marquee relative overflow-hidden border-y border-line bg-graphite/40 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
