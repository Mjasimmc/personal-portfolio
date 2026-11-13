import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { JsonLd, breadcrumbSchema, projectSchema } from "@/lib/jsonld";

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
    description: p.description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: p.title, description: p.description, publishedTime: p.date },
    twitter: { title: p.title, description: p.description },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-6 py-20">
      <JsonLd data={projectSchema(p)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: p.title, path: `/projects/${p.slug}` },
        ])}
      />
      <nav aria-label="Breadcrumb" className="text-sm">
        <Link href="/" className="underline">Home</Link> / <span>{p.title}</span>
      </nav>
      <article className="mt-8">
        <h1 className="text-3xl font-bold">{p.title}</h1>
        <time dateTime={p.date} className="text-sm text-neutral-500">{p.date}</time>
        <p className="mt-6 text-lg leading-relaxed">{p.body}</p>
        <p className="mt-4 text-sm">{p.tech.join(" · ")}</p>
        <p className="mt-6 flex gap-4">
          {p.url && <a className="underline" href={p.url} rel="noopener">Live site</a>}
          {p.repo && <a className="underline" href={p.repo} rel="noopener">Source</a>}
        </p>
      </article>
    </main>
  );
}
