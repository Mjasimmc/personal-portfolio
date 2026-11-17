import { absoluteUrl, site } from "./site";
import { education, experience } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" to prevent breaking out of the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/#person"),
  name: site.name,
  url: site.url,
  jobTitle: site.jobTitle,
  email: `mailto:${site.email}`,
  sameAs: site.sameAs,
  knowsAbout: site.skills,
  address: { "@type": "PostalAddress", addressLocality: "Kozhikode", addressRegion: "Kerala", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": absoluteUrl("/#person") },
};

export const projectSchema = (p: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: p.title,
  description: p.summary,
  url: absoluteUrl(`/projects/${p.slug}`),
  datePublished: String(p.year),
  keywords: p.tech.join(", "),
  author: { "@id": absoluteUrl("/#person") },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});
