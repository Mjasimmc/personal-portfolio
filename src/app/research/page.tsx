import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { profile } from "@/data/portfolio";

const title = "Technical research and engineering investigation";
const description = `${profile.name} takes on technical research: evaluating technologies, prototyping ideas, comparing architectures and turning findings into clear recommendations.`;

const process = [
  { step: "Frame", text: "Turn a vague question into a testable one, with clear scope and success criteria." },
  { step: "Survey", text: "Read documentation, specifications and source code, and compare the real options." },
  { step: "Prototype", text: "Build the smallest working version that answers the question with evidence." },
  { step: "Measure", text: "Test performance, cost, complexity and risk against the criteria set at the start." },
  { step: "Report", text: "Deliver a short written recommendation with the trade-offs and next steps." },
];

const areas = [
  "Technology and framework evaluation",
  "Architecture and system design options",
  "Web performance and SEO investigation",
  "Prototypes and proofs of concept",
  "Emerging technology and the future of tech",
  "Debugging and root-cause analysis",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/research" },
  openGraph: { type: "website", url: "/research", title, description },
  twitter: { title, description },
};

export default function ResearchPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
        ])}
      />
      <nav aria-label="Breadcrumb" className="label-mono flex items-center gap-3">
        <Link href="/" className="transition-colors hover:text-mist">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-silver">Research</span>
      </nav>

      <h1 className="text-display mt-10 text-[clamp(2.6rem,7vw,7rem)] text-mist">Research, with evidence.</h1>
      <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim md:text-lg">{description}</p>

      <section className="mt-20" aria-labelledby="areas">
        <h2 id="areas" className="label-mono">
          Areas
        </h2>
        <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a} className="bg-obsidian p-6 text-lg text-mist">
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20" aria-labelledby="process">
        <h2 id="process" className="label-mono">
          Process
        </h2>
        <ol className="mt-6 divide-y divide-line border-t border-line">
          {process.map((p, i) => (
            <li key={p.step} className="grid gap-3 py-6 md:grid-cols-12">
              <span className="font-mono text-xs text-electric md:col-span-1">0{i + 1}</span>
              <h3 className="text-lg text-mist md:col-span-3">{p.step}</h3>
              <p className="leading-relaxed text-silver-dim md:col-span-8">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 flex flex-wrap items-center gap-6 border-t border-line pt-10">
        <Link href="/blog" className="text-2xl text-mist transition-colors hover:text-electric">
          Read the blog →
        </Link>
        <a href={`mailto:${profile.email}`} className="text-2xl text-silver transition-colors hover:text-mist">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="text-2xl text-silver transition-colors hover:text-mist">
          {profile.phoneDisplay}
        </a>
      </section>
    </main>
  );
}
