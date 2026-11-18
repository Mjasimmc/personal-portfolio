import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageShell, Block } from "@/components/ui/PageShell";
import { faqSchema, serviceDetailSchema, webPageSchema } from "@/lib/jsonld";
import { getProject } from "@/data/projects";
import { getService, services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: s.title,
    description: s.description,
    keywords: [s.primaryKeyword, ...s.secondaryKeywords],
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: s.title, description: s.description },
    twitter: { title: s.title, description: s.description },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const projects = s.projectSlugs.map(getProject).filter((p) => p !== undefined);
  const related = s.related.map(getService).filter((r) => r !== undefined);

  return (
    <PageShell
      crumbs={[
        { name: "Services", path: "/services" },
        { name: s.name, path },
      ]}
      h1={s.h1}
      intro={s.intro}
      extraSchema={[
        serviceDetailSchema(s),
        webPageSchema({ path, name: s.title, description: s.description }),
        faqSchema(s.faqs),
      ]}
    >
      {s.sections.map((sec) => (
        <section key={sec.heading} className="mt-16 max-w-3xl">
          <h2 className="text-2xl text-mist md:text-4xl">{sec.heading}</h2>
          {sec.paragraphs.map((t) => (
            <p key={t} className="mt-4 leading-relaxed text-silver-dim md:text-lg">
              {t}
            </p>
          ))}
        </section>
      ))}

      <Block id="deliverables" title="What you receive">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {s.deliverables.map((d) => (
            <li key={d} className="bg-obsidian p-6 text-mist">
              {d}
            </li>
          ))}
        </ul>
      </Block>

      <Block id="process" title="How it works">
        <ol className="grid gap-px border border-line bg-line md:grid-cols-4">
          {s.steps.map((st, i) => (
            <li key={st.name} className="bg-obsidian p-6">
              <p className="label-mono">0{i + 1}</p>
              <h3 className="mt-3 text-xl text-mist">{st.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-dim">{st.text}</p>
            </li>
          ))}
        </ol>
      </Block>

      {projects.length > 0 && (
        <Block id="work" title="Related work">
          <ul className="divide-y divide-line border-t border-line">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group grid gap-2 py-6 md:grid-cols-12 md:gap-6">
                  <span className="label-mono md:col-span-2">{p.kind}</span>
                  <span className="md:col-span-10">
                    <span className="block text-2xl text-mist transition-colors group-hover:text-electric">{p.title}</span>
                    <span className="mt-2 block leading-relaxed text-silver-dim">{p.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Block>
      )}

      <Block id="faq" title="Questions">
        <dl className="divide-y divide-line border-t border-line">
          {s.faqs.map((f) => (
            <div key={f.q} className="grid gap-3 py-6 md:grid-cols-12">
              <dt className="text-lg text-mist md:col-span-5">{f.q}</dt>
              <dd className="leading-relaxed text-silver-dim md:col-span-7">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block id="more" title="Related services">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/services/${r.slug}`} className="text-lg text-silver transition-colors hover:text-mist">
                {r.name} →
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      <CtaBand subject={s.name} />
    </PageShell>
  );
}
