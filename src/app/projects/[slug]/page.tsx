import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { JsonLd, breadcrumbSchema, projectSchema } from "@/lib/jsonld";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { LinkButton } from "@/components/ui/LinkButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const path = `/projects/${p.slug}`;
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: p.title, description: p.summary },
    twitter: { title: p.title, description: p.summary },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd data={projectSchema(p)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/#projects" },
          { name: p.title, path: `/projects/${p.slug}` },
        ])}
      />

      <Reveal>
        <nav aria-label="Breadcrumb" className="label-mono flex flex-wrap items-center gap-3">
          <Link href="/" className="transition-colors hover:text-mist">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/#projects" className="transition-colors hover:text-mist">
            Projects
          </Link>
          <span aria-hidden>/</span>
          <span className="text-silver">{p.title}</span>
        </nav>

        <header className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label-mono">
              <span className="text-electric">{String(idx + 1).padStart(2, "0")}</span> — {p.kind} · {p.period}
            </p>
            <h1 className="text-display mt-5 text-[clamp(2.8rem,7.5vw,7.5rem)] text-mist">{p.title}</h1>
          </div>
          <p className="leading-relaxed text-silver-dim md:col-span-4 md:text-lg">{p.summary}</p>
        </header>
      </Reveal>

      <Reveal className="mt-14">
        <ProjectVisual kind={p.visual} className="aspect-[16/10] rounded-[32px] border border-line md:aspect-[21/9]" />
      </Reveal>

      <section className="mt-20 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="label-mono">Stack</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          {(p.url || p.repo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {p.url && <LinkButton href={p.url}>Live site</LinkButton>}
              {p.repo && (
                <LinkButton href={p.repo} variant="ghost">
                  Source
                </LinkButton>
              )}
            </div>
          )}
        </Reveal>
        <Reveal selector="[data-row]" className="md:col-span-8">
          <p className="label-mono">What was built</p>
          <ol className="mt-6 divide-y divide-line border-t border-line">
            {p.highlights.map((h, i) => (
              <li key={h} data-row className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
                <span className="font-mono text-xs text-electric md:col-span-1">0{i + 1}</span>
                <p className="leading-relaxed text-silver md:col-span-11 md:text-lg">{h}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <footer className="mt-24 flex flex-col gap-8 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
        <Link href="/#projects" className="label-mono transition-colors hover:text-mist">
          ← All projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="group md:text-right">
          <span className="label-mono">Next project</span>
          <span className="text-display mt-2 block text-3xl text-mist transition-colors group-hover:text-electric md:text-4xl">
            {next.title} →
          </span>
        </Link>
      </footer>
    </main>
  );
}
