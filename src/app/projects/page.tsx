import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageShell } from "@/components/ui/PageShell";
import { itemListSchema, webPageSchema } from "@/lib/jsonld";
import { projects } from "@/data/projects";

const title = "Selected Work: Software Products and Platforms";
const description =
  "Real software built end to end: SaaS platforms, enterprise systems, real-time applications and immersive websites, with the architecture and technology behind each.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { type: "website", url: "/projects", title, description },
  twitter: { title, description },
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  return (
    <PageShell
      crumbs={[{ name: "Work", path: "/projects" }]}
      h1="Software I have created."
      intro="Each project below was built and documented, with the problem, architecture and technology on its own page. Links to code and live versions appear only where they are public."
      extraSchema={[
        webPageSchema({ path: "/projects", name: title, description, type: "CollectionPage" }),
        itemListSchema(sorted.map((p) => ({ name: p.title, path: `/projects/${p.slug}` }))),
      ]}
    >
      <ul className="mt-16 divide-y divide-line border-t border-line">
        {sorted.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-6">
              <span className="label-mono md:col-span-2">
                {String(i + 1).padStart(2, "0")} · {p.period}
              </span>
              <span className="md:col-span-7">
                <h2 className="text-2xl text-mist transition-colors group-hover:text-electric md:text-3xl">{p.title}</h2>
                <span className="mt-3 block leading-relaxed text-silver-dim">{p.summary}</span>
              </span>
              <span className="label-mono md:col-span-3">{p.tech.slice(0, 4).join(" · ")}</span>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand subject="Project enquiry" />
    </PageShell>
  );
}
