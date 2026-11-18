import type { Metadata } from "next";
import Link from "next/link";
import { Block, CtaBand, PageShell } from "@/components/ui/PageShell";
import { itemListSchema, webPageSchema } from "@/lib/jsonld";
import { skillCategories } from "@/data/portfolio";

const title = "What a Software Creator Can Build: Capabilities";
const description =
  "The seven capabilities behind the work: software creation, AI integration, agentic systems, business automation, enterprise applications, SaaS and system architecture.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/capabilities" },
  openGraph: { type: "website", url: "/capabilities", title, description },
  twitter: { title, description },
};

const capabilities = [
  { name: "Software creation", text: "Taking an idea to a working product: scope, design, build and deployment owned end to end.", href: "/services/custom-software-development" },
  { name: "AI integration", text: "Adding language understanding, extraction and generation to products and existing systems, with guardrails.", href: "/services/ai-integration-workflow-automation" },
  { name: "Agentic systems", text: "Agents that use tools and complete multi-step work, with permissions, logs and human approval.", href: "/services/agentic-ai-development" },
  { name: "Business automation", text: "Manual, repetitive operations turned into dependable, auditable workflows.", href: "/services/business-process-automation" },
  { name: "Enterprise applications", text: "Multi-role, multi-organisation platforms with enforced hierarchy and reliable operations.", href: "/services/enterprise-software-solutions" },
  { name: "SaaS development", text: "Multi-tenant products with secure authentication, real-time features and a path from MVP to scale.", href: "/services/saas-product-development" },
  { name: "System architecture", text: "Data models, APIs and deployment topologies chosen deliberately and documented so teams can maintain them.", href: "/services/web-application-development" },
];

export default function CapabilitiesPage() {
  return (
    <PageShell
      crumbs={[{ name: "Capabilities", path: "/capabilities" }]}
      h1="What a software creator can build."
      intro="A software creator works across the whole path from imagination to a running, automated system. These are the capabilities that make that possible, each backed by projects on this site."
      extraSchema={[
        webPageSchema({ path: "/capabilities", name: title, description, type: "CollectionPage" }),
        itemListSchema(capabilities.map((c) => ({ name: c.name, path: c.href }))),
      ]}
    >
      <Block id="capabilities" title="Capabilities">
        <ul className="divide-y divide-line border-t border-line">
          {capabilities.map((c) => (
            <li key={c.name}>
              <Link href={c.href} className="group grid gap-3 py-7 md:grid-cols-12 md:gap-6">
                <h2 className="text-2xl text-mist transition-colors group-hover:text-electric md:col-span-4">{c.name}</h2>
                <p className="leading-relaxed text-silver-dim md:col-span-8">{c.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Block>
      <Block id="toolkit" title="Toolkit behind it">
        <dl className="divide-y divide-line border-t border-line">
          {skillCategories.map((c) => (
            <div key={c.id} className="grid gap-3 py-5 md:grid-cols-12">
              <dt className="text-lg text-mist md:col-span-3">{c.label}</dt>
              <dd className="leading-relaxed text-silver-dim md:col-span-9">{c.skills.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Block>
      <CtaBand subject="Capabilities enquiry" />
    </PageShell>
  );
}
