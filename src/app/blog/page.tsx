import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { profile } from "@/data/portfolio";

const title = "Blog: engineering, research and the future of tech";
const description = `Articles by ${profile.name} on web engineering, SEO, structured data and building for the future of technology.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: "/blog", title, description },
  twitter: { title, description },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <nav aria-label="Breadcrumb" className="label-mono flex items-center gap-3">
        <Link href="/" className="transition-colors hover:text-mist">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-silver">Blog</span>
      </nav>
      <h1 className="text-display mt-10 text-[clamp(2.6rem,7vw,7rem)] text-mist">Writing</h1>
      <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim md:text-lg">{description}</p>
      <ul className="mt-16 divide-y divide-line border-t border-line">
        {sorted.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-6">
              <time dateTime={p.date} className="label-mono md:col-span-2">
                {p.date}
              </time>
              <div className="md:col-span-10">
                <h2 className="text-2xl text-mist transition-colors group-hover:text-electric md:text-3xl">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-silver-dim">{p.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
