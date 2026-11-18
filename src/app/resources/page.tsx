import type { Metadata } from "next";
import Link from "next/link";
import { Block, PageShell } from "@/components/ui/PageShell";
import { webPageSchema } from "@/lib/jsonld";
import { posts } from "@/data/posts";
import { community, profile } from "@/data/portfolio";

const title = "Resources";
const description =
  "Articles, public repositories and community links from Muhammed Jasim, plus official references for web search, performance and structured data.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resources" },
  openGraph: { type: "website", url: "/resources", title, description },
  twitter: { title, description },
};

const references = [
  ["Google Search Central", "https://developers.google.com/search/docs"],
  ["Schema.org", "https://schema.org/docs/schemas.html"],
  ["web.dev: Core Web Vitals", "https://web.dev/articles/vitals"],
  ["Next.js documentation", "https://nextjs.org/docs"],
  ["IndexNow protocol", "https://www.indexnow.org/documentation"],
];

const linkClass = "text-lg text-silver transition-colors hover:text-mist";

export default function ResourcesPage() {
  return (
    <PageShell
      crumbs={[{ name: "Resources", path: "/resources" }]}
      h1="Resources."
      intro="Writing, code and references worth keeping close."
      extraSchema={[webPageSchema({ path: "/resources", name: title, description, type: "CollectionPage" })]}
    >
      <Block id="writing" title="Writing">
        <ul className="divide-y divide-line border-t border-line">
          {posts.slice(0, 6).map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block py-4 text-lg text-silver transition-colors hover:text-mist">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="label-mono mt-4 inline-block hover:text-mist">
          All articles →
        </Link>
      </Block>
      <Block id="code" title="Code and community">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {profile.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {l.label} ↗
              </a>
            </li>
          ))}
          <li>
            <a href={community.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {community.name} ↗
            </a>
          </li>
        </ul>
      </Block>
      <Block id="references" title="Official references">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {references.map(([name, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {name} ↗
              </a>
            </li>
          ))}
        </ul>
      </Block>
    </PageShell>
  );
}
