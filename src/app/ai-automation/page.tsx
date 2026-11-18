import type { Metadata } from "next";
import Link from "next/link";
import { Block, CtaBand, PageShell } from "@/components/ui/PageShell";
import { webPageSchema } from "@/lib/jsonld";
import { getService } from "@/data/services";

const title = "AI and Automation: When to Use What";
const description =
  "A plain guide to choosing between rules-based automation, AI features, AI integration and autonomous agents for a business problem, and where each one fits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai-automation" },
  openGraph: { type: "website", url: "/ai-automation", title, description },
  twitter: { title, description },
};

const levels = [
  { slug: "business-process-automation", when: "The steps are known and rule-based. Use plain automation; it is cheaper and more predictable than AI." },
  { slug: "ai-integration-workflow-automation", when: "A step needs understanding, such as reading documents or drafting replies, inside systems you already run." },
  { slug: "ai-powered-software-development", when: "AI is central to the product itself and needs designing in from the start." },
  { slug: "agentic-ai-development", when: "The work is multi-step and the system must plan and act with tools, under permissions and approval." },
];

const principles = [
  "Automate the rule-based first; add AI only where understanding is needed.",
  "Keep a person in control of decisions that are costly or irreversible.",
  "Record what the system did, so every action can be explained.",
  "Measure results against real cases instead of assuming quality.",
];

export default function AiAutomationPage() {
  return (
    <PageShell
      crumbs={[{ name: "AI and Automation", path: "/ai-automation" }]}
      h1="AI and automation, matched to the problem."
      intro="Not every problem needs AI, and not every automation needs an agent. Using the simplest approach that works keeps systems reliable and costs predictable."
      extraSchema={[webPageSchema({ path: "/ai-automation", name: title, description })]}
    >
      <Block id="ladder" title="From simple to autonomous">
        <ol className="divide-y divide-line border-t border-line">
          {levels.map((l, i) => {
            const s = getService(l.slug);
            if (!s) return null;
            return (
              <li key={l.slug} className="grid gap-3 py-7 md:grid-cols-12 md:gap-6">
                <span className="label-mono md:col-span-1">0{i + 1}</span>
                <h2 className="text-2xl text-mist md:col-span-5">
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-electric">
                    {s.name} →
                  </Link>
                </h2>
                <p className="leading-relaxed text-silver-dim md:col-span-6">{l.when}</p>
              </li>
            );
          })}
        </ol>
      </Block>
      <Block id="principles" title="Principles I work by">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {principles.map((t) => (
            <li key={t} className="bg-obsidian p-6 text-mist">
              {t}
            </li>
          ))}
        </ul>
      </Block>
      <p className="mt-12 max-w-3xl leading-relaxed text-silver-dim">
        Related writing is on the{" "}
        <Link href="/blog" className="text-silver underline-offset-4 hover:underline">
          blog
        </Link>
        .
      </p>
      <CtaBand subject="AI and automation enquiry" />
    </PageShell>
  );
}
