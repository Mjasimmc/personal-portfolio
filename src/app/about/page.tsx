import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { community, education, profile, skillCategories } from "@/data/portfolio";

const title = `About ${profile.name}: tech engineer from ${profile.location.split(",")[0]}`;
const description = `${profile.summary} Based in ${profile.location}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", url: "/about", title, description },
  twitter: { title, description },
};

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <nav aria-label="Breadcrumb" className="label-mono flex items-center gap-3">
        <Link href="/" className="transition-colors hover:text-mist">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-silver">About</span>
      </nav>

      <h1 className="text-display mt-10 text-[clamp(2.6rem,7vw,7rem)] text-mist">About {profile.name}</h1>
      <p className="mt-6 max-w-3xl leading-relaxed text-silver md:text-xl">{profile.statement}</p>
      <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim md:text-lg">
        {profile.fullName} is a {profile.title.toLowerCase()} based in {profile.location}. {profile.summary}
      </p>

      <section className="mt-20" aria-labelledby="toolkit">
        <h2 id="toolkit" className="label-mono">
          Toolkit
        </h2>
        <dl className="mt-6 divide-y divide-line border-t border-line">
          {skillCategories.map((c) => (
            <div key={c.id} className="grid gap-3 py-5 md:grid-cols-12">
              <dt className="text-lg text-mist md:col-span-3">{c.label}</dt>
              <dd className="leading-relaxed text-silver-dim md:col-span-9">{c.skills.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20" aria-labelledby="learning">
        <h2 id="learning" className="label-mono">
          Learning
        </h2>
        <ul className="mt-6 divide-y divide-line border-t border-line">
          {education.map((e) => (
            <li key={e.institution} className="py-5 text-lg text-mist">
              {e.institution}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20" aria-labelledby="community">
        <h2 id="community" className="label-mono">
          Community
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim md:text-lg">
          Member of{" "}
          <a href={community.href} target="_blank" rel="noopener noreferrer" className="text-silver hover:text-mist">
            {community.name}
          </a>
          . {community.description}
        </p>
      </section>

      <section className="mt-20 flex flex-wrap items-center gap-6 border-t border-line pt-10">
        <Link href="/services" className="text-2xl text-mist transition-colors hover:text-electric">
          Services →
        </Link>
        <Link href="/research" className="text-2xl text-silver transition-colors hover:text-mist">
          Research →
        </Link>
        <a href={`tel:${profile.phone}`} className="text-2xl text-silver transition-colors hover:text-mist">
          {profile.phoneDisplay}
        </a>
      </section>
    </main>
  );
}
