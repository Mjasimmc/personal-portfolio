import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { Contact } from "@/components/sections/Contact";
import { webPageSchema } from "@/lib/jsonld";

const title = "Contact";
const description =
  "Contact Muhammed Jasim about custom software, AI-powered applications or business automation. Email, phone, WhatsApp or the contact form.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", url: "/contact", title, description },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <PageShell
      crumbs={[{ name: "Contact", path: "/contact" }]}
      h1="Tell me what you want to create."
      extraSchema={[webPageSchema({ path: "/contact", name: title, description, type: "ContactPage" })]}
    >
      <div className="mt-16">
        <Contact />
      </div>
    </PageShell>
  );
}
