import Image from "next/image";
import Link from "next/link";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { getProject } from "@/data/projects";
import { services } from "@/data/services";

const featured = ["saas-form-platform", "enterprise-commerce-platform", "f-tech-solutions"]
  .map(getProject)
  .filter((p) => p !== undefined);

/** Home-page services strip and selected-work teasers. Server component; links only, no new motion. */
export function HomeServices() {
  return (
    <>
      <section id="services" aria-labelledby="services-h" className="relative scroll-mt-16 py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="services-h" className="text-display text-[clamp(2rem,4.5vw,4rem)] text-mist">
              What I create
            </h2>
            <Link href="/services" className="label-mono transition-colors hover:text-mist">
              All services →
            </Link>
          </div>
          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug} className="bg-obsidian">
                <Link href={`/services/${s.slug}`} className="group block h-full p-6">
                  <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-3 block text-lg text-mist transition-colors group-hover:text-electric">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="work-h" className="relative scroll-mt-16 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="work-h" className="text-display text-[clamp(2rem,4.5vw,4rem)] text-mist">
              Selected work
            </h2>
            <Link href="/projects" className="label-mono transition-colors hover:text-mist">
              All work →
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  {p.screenshot ? (
                    <Image
                      src={p.screenshot.src}
                      alt={p.screenshot.alt}
                      width={p.screenshot.width}
                      height={p.screenshot.height}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="aspect-[16/10] w-full rounded-2xl border border-line object-cover object-top"
                    />
                  ) : (
                    <ProjectVisual kind={p.visual} className="aspect-[16/10] rounded-2xl border border-line" />
                  )}
                  <span className="label-mono mt-4 block">{p.kind}</span>
                  <span className="mt-1 block text-xl text-mist transition-colors group-hover:text-electric">{p.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-silver-dim">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
