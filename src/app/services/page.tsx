import type { Metadata } from "next";
import Link from "next/link";
import { Block, CtaBand, PageShell } from "@/components/ui/PageShell";
import { faqSchema, itemListSchema, webPageSchema } from "@/lib/jsonld";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { site } from "@/lib/site";

const title = "Software Creation, AI and Automation Services";
const description =
  "Eight focused services from a software creator: custom software, AI-powered applications, agentic AI, business automation, SaaS, enterprise platforms, web applications and AI integration.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: "/services", title, description },
  twitter: { title, description },
};

export default function ServicesPage() {
  return (
    <PageShell
      crumbs={[{ name: "Services", path: "/services" }]}
      h1="Software creation, from idea to automated system."
      intro="Each service below is a distinct way of working with me. Pick the one closest to your situation, or describe your idea and I will tell you which fits."
      extraSchema={[
        webPageSchema({ path: "/services", name: title, description, type: "CollectionPage" }),
        itemListSchema(services.map((s) => ({ name: s.name, path: `/services/${s.slug}` }))),
        faqSchema(faqs),
      ]}
    >
      <Block id="services" title="Services">
        <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="bg-obsidian">
              <Link href={`/services/${s.slug}`} className="group block h-full p-7">
                <h2 className="text-2xl text-mist transition-colors group-hover:text-electric">{s.name}</h2>
                <p className="mt-3 leading-relaxed text-silver-dim">{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="stack" title="Stack">
        <p className="max-w-3xl leading-relaxed text-silver">{site.skills.join(" · ")}</p>
      </Block>

      <Block id="faq" title="Frequently asked">
        <dl className="divide-y divide-line border-t border-line">
          {faqs.map((f) => (
            <div key={f.q} className="grid gap-3 py-6 md:grid-cols-12">
              <dt className="text-lg text-mist md:col-span-5">{f.q}</dt>
              <dd className="leading-relaxed text-silver-dim md:col-span-7">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Block>
      <CtaBand subject="Services enquiry" />
    </PageShell>
  );
}
