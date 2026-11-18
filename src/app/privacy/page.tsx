import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { webPageSchema } from "@/lib/jsonld";
import { profile } from "@/data/portfolio";

const title = "Privacy Policy";
const description = "How this website handles contact form messages, analytics and cookies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { type: "website", url: "/privacy", title, description },
  twitter: { title, description },
};

const sections = [
  {
    h: "What I collect",
    p: "If you use the contact form I receive the name, email address and message you submit. If you email or call, I receive whatever you send. The form stores submissions in a private Google Sheet that only I can open.",
  },
  {
    h: "Analytics",
    p: "If analytics is enabled on this site it uses Google Analytics 4 to measure page views and general usage in aggregate. It does not identify you personally.",
  },
  {
    h: "How I use it",
    p: "Only to reply to you and to understand how the site is used. I do not sell or share your details with third parties for marketing.",
  },
  {
    h: "Retention and your rights",
    p: `Messages are kept as long as needed to deal with your enquiry. To ask what I hold about you, or to have it deleted, email ${profile.email}.`,
  },
  { h: "Changes", p: "This policy may be updated as the site changes. The current version is always on this page." },
];

export default function PrivacyPage() {
  return (
    <PageShell
      crumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
      h1="Privacy Policy"
      intro="Plain language, short by design."
      extraSchema={[webPageSchema({ path: "/privacy", name: title, description })]}
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
