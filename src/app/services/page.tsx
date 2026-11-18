import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { faqs } from "@/data/faqs";
import { profile } from "@/data/portfolio";
import { site } from "@/lib/site";

const title = "Engineering & Development Services";
const description = `Hire ${profile.name}, a tech engineer in ${profile.location}, for web development, full stack engineering, technical research, prototyping and engineering help. Fast delivery, clear communication.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: "/services", title, description },
  twitter: { title, description },
};

export default function ServicesPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <nav aria-label="Breadcrumb" className="label-mono flex items-center gap-3">
        <Link href="/" className="transition-colors hover:text-mist">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-silver">Services</span>
      </nav>

      <h1 className="text-display mt-10 text-[clamp(2.6rem,7vw,7rem)] text-mist">Engineering &amp; development, done fast.</h1>
      <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim md:text-lg">
        {profile.name} is a tech engineer based in {profile.location}. From idea to shipped product: building, researching
        and solving technical problems across the stack.
      </p>

      <section className="mt-20" aria-labelledby="what">
        <h2 id="what" className="label-mono">
          What I can do
        </h2>
        <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <li key={s} className="bg-obsidian p-6 text-lg text-mist">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20" aria-labelledby="stack">
        <h2 id="stack" className="label-mono">
          Stack
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-silver">{site.skills.join(" · ")}</p>
      </section>

      <section className="mt-20" aria-labelledby="faq">
        <h2 id="faq" className="label-mono">
          Frequently asked
        </h2>
        <dl className="mt-6 divide-y divide-line border-t border-line">
          {faqs.map((f) => (
            <div key={f.q} className="grid gap-3 py-6 md:grid-cols-12">
              <dt className="text-lg text-mist md:col-span-5">{f.q}</dt>
              <dd className="leading-relaxed text-silver-dim md:col-span-7">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20 flex flex-wrap items-center gap-6 border-t border-line pt-10">
        <a href={`tel:${profile.phone}`} className="text-2xl text-mist transition-colors hover:text-electric">
          {profile.phoneDisplay}
        </a>
        <a href={`mailto:${profile.email}`} className="text-2xl text-silver transition-colors hover:text-mist">
          {profile.email}
        </a>
        <Link href="/#contact" className="label-mono transition-colors hover:text-mist">
          Contact form →
        </Link>
      </section>
    </main>
  );
}
