import { ArrowIcon } from "@/components/ui/LinkButton";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { community } from "@/data/portfolio";

export function Community() {
  return (
    <>
      <SectionHeading
        index="06"
        eyebrow={`${community.role} of ${community.name}`}
        title={
          <>
            Learning is <span className="font-serif-italic text-silver">better shared.</span>
          </>
        }
        lede={community.description}
      />

      <Reveal selector="[data-pillar]" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {/* Feature card */}
        <div
          data-pillar
          className="card relative overflow-hidden rounded-[28px] p-7 sm:col-span-2 md:p-10 lg:col-span-3 lg:row-span-2"
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72">
            <div className="spin-slow absolute inset-0 rounded-full border border-line" />
            <div className="spin-slower absolute inset-10 rounded-full border border-cyan/30" />
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan" />
          </div>
          <p className="label-mono relative">Community</p>
          <p className="relative mt-3 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
            {community.role} · {community.badge}
          </p>
          <h3 className="text-display relative mt-4 text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.98] text-mist">
            {community.name}
          </h3>
          <p className="relative mt-4 max-w-md text-lg leading-snug text-silver">{community.tagline}</p>
          <div className="relative mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={community.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-3 text-[13px] font-medium text-obsidian transition-transform duration-300 ease-expo hover:scale-[1.04]"
              >
                Visit {community.name}
                <ArrowIcon />
              </a>
            </Magnetic>
            {community.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono rounded-full border border-line px-4 py-2.5 text-silver transition-colors hover:border-silver/50 hover:text-mist"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {community.pillars.map((p, i) => (
          <Spotlight
            key={p.name}
            className="rounded-[24px] border border-line bg-graphite/40 p-6 transition-colors hover:border-transparent lg:col-span-1"
          >
            <div data-pillar className="flex h-full flex-col">
              <span className="font-mono text-xs text-electric">0{i + 1}</span>
              <h3 className="text-display mt-6 text-2xl text-mist">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-dim">{p.text}</p>
            </div>
          </Spotlight>
        ))}
      </Reveal>
    </>
  );
}
