import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { faqSchema, webPageSchema } from "@/lib/jsonld";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";

const title = "Frequently Asked Questions";
const description =
  "Answers about working with Muhammed Jasim: what a software creator does, what can be built, technologies, working remotely and how to start a project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { type: "website", url: "/faq", title, description },
  twitter: { title, description },
};

export default function FaqPage() {
  return (
    <PageShell
      crumbs={[{ name: "FAQ", path: "/faq" }]}
      h1="Questions, answered."
      extraSchema={[webPageSchema({ path: "/faq", name: title, description, type: "FAQPage" }), faqSchema(faqs)]}
    >
      <dl className="mt-16 divide-y divide-line border-t border-line">
        {faqs.map((f) => (
          <div key={f.q} className="grid gap-3 py-6 md:grid-cols-12">
            <dt className="text-lg text-mist md:col-span-5">{f.q}</dt>
            <dd className="leading-relaxed text-silver-dim md:col-span-7">{f.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 text-silver-dim">Service-specific questions are answered on each of the {services.length} service pages.</p>
    </PageShell>
  );
}
