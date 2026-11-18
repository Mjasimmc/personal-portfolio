import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, highlights } from "@/data/portfolio";

export function Education() {
  return (
    <>
      <SectionHeading
        index="05"
        eyebrow="Learning & highlights"
        title={
          <>
            Always <span className="font-serif-italic text-silver">learning</span>, never finished.
          </>
        }
      />

      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal as="ol" selector="[data-item]" className="lg:col-span-7">
          {education.map((e) => (
            <li key={e.program} data-item className="border-t border-line py-8 md:grid md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <p className="label-mono">
                  {e.start === e.end ? e.start : `${e.start} — ${e.end}`}
                </p>
                <p className="mt-2 text-sm text-silver-dim">{e.location}</p>
              </div>
              <div className="mt-4 md:col-span-8 md:mt-0">
                <h3 className="text-2xl tracking-tight text-mist">{e.program}</h3>
                <p className="mt-1 text-silver">{e.institution}</p>
                {e.details && (
                  <ul className="mt-5 space-y-2">
                    {e.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm leading-relaxed text-silver-dim">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-silver/50" aria-hidden />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
          <li aria-hidden className="metal-line" />
        </Reveal>

        <Reveal className="card relative overflow-hidden rounded-[32px] p-8 md:p-10 lg:col-span-5">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64">
            <div className="spin-slow absolute inset-0 rounded-[28%] border border-line" />
            <div className="spin-slower absolute inset-10 rounded-[28%] border border-violet/40" />
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet" />
          </div>
          <p className="label-mono relative">Highlights</p>
          <ol className="relative mt-6 space-y-5">
            {highlights.map((h, i) => (
              <li key={h} className="flex gap-4 text-sm leading-relaxed text-silver-dim">
                <span className="font-mono text-xs text-electric">0{i + 1}</span>
                <span>{h}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </>
  );
}
