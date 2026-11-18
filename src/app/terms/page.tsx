import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { webPageSchema } from "@/lib/jsonld";
import { profile } from "@/data/portfolio";

const title = "Terms and Conditions";
const description = "Terms for using this website and for enquiries about software projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { type: "website", url: "/terms", title, description },
  twitter: { title, description },
};

const sections = [
  { h: "Using this site", p: "The content on this site is provided for general information. I aim to keep it accurate but make no warranty that it is complete or current." },
  { h: "Intellectual property", p: "Text, design and code on this site belong to Muhammed Jasim M C unless stated otherwise. Project descriptions refer to work whose ownership may rest with the respective clients or repositories." },
  { h: "Enquiries are not contracts", p: "Sending a message or receiving an estimate does not create an agreement. Any project work is agreed in writing, including scope, schedule, payment and ownership of the delivered code, before it starts." },
  { h: "External links", p: "This site links to third-party sites. I am not responsible for their content or practices." },
  { h: "Contact", p: `Questions about these terms: ${profile.email}.` },
];

export default function TermsPage() {
  return (
    <PageShell
      crumbs={[{ name: "Terms and Conditions", path: "/terms" }]}
      h1="Terms and Conditions"
      extraSchema={[webPageSchema({ path: "/terms", name: title, description })]}
    >
      {sections.map((s) => (
        <section key={s.h} className="mt-12 max-w-3xl">
          <h2 className="text-2xl text-mist">{s.h}</h2>
          <p className="mt-3 leading-relaxed text-silver-dim">{s.p}</p>
        </section>
      ))}
    </PageShell>
  );
}
