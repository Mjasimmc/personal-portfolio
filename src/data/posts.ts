// Blog posts. Add a new object to publish a post; sitemap, pages and schema update automatically.
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "seo-for-a-nextjs-developer-portfolio",
    title: "SEO for a Next.js developer portfolio: what actually matters",
    description:
      "A practical checklist for making a Next.js portfolio visible on Google: metadata, canonical URLs, sitemap, structured data and indexable pages.",
    date: "2026-11-18",
    tags: ["Next.js", "SEO", "Portfolio"],
    sections: [
      {
        heading: "Start with one canonical address",
        paragraphs: [
          "Search engines treat every hostname as a separate site. If your portfolio answers on a default platform address and on your own domain, rankings split between them. Pick one domain, set it as the metadata base, and redirect every other host to it.",
          "In the Next.js App Router, set metadataBase once in the root layout and give each page an alternates.canonical value. Every title, description and Open Graph URL then resolves against the same domain.",
        ],
      },
      {
        heading: "Give every page its own title and description",
        paragraphs: [
          "A single-page portfolio gives Google one thing to rank. Separate pages for services, projects, research and writing give it many. Each needs a unique title and a description that says what the page offers in plain words.",
          "generateMetadata lets project pages build their titles from data, so a new project gets correct metadata the moment it is added.",
        ],
      },
      {
        heading: "Use structured data",
        paragraphs: [
          "JSON-LD tells search engines what a page is. A portfolio benefits from Person, WebSite, ProfilePage, ProfessionalService, BreadcrumbList and FAQPage markup. It is invisible to visitors and is read directly by crawlers.",
          "Keep the markup truthful and in sync with what is on the page. Markup that contradicts visible content can be ignored or penalised.",
        ],
      },
      {
        heading: "Ship a sitemap and robots file",
        paragraphs: [
          "Next.js generates sitemap.xml and robots.txt from code. List every public page, then submit the sitemap in Google Search Console and Bing Webmaster Tools so new pages are found quickly.",
        ],
      },
      {
        heading: "Earn links, not just markup",
        paragraphs: [
          "On-page SEO makes a site eligible to rank. Links from other sites, such as community pages, social profiles and articles, are what push it up. Link your portfolio from every profile you own and publish useful writing others will reference.",
        ],
      },
    ],
  },
  {
    slug: "structured-data-json-ld-for-developers",
    title: "Structured data (JSON-LD) for developers: Person, Service and FAQ",
    description:
      "How JSON-LD helps search engines and AI tools understand who you are and what you offer, with the schema types a developer site should use.",
    date: "2026-11-18",
    tags: ["JSON-LD", "Schema.org", "SEO"],
    sections: [
      {
        heading: "What JSON-LD does",
        paragraphs: [
          "JSON-LD is a block of structured data in a page that describes its subject in a vocabulary from schema.org. Search engines and AI assistants use it to connect a name to a profession, a location, links and services.",
        ],
      },
      {
        heading: "The types worth adding",
        paragraphs: [
          "Person describes you: name, job title, location, contact point, profile links and the topics you know about. ProfessionalService describes what you can be hired for. FAQPage turns common questions into answers that can appear directly in results.",
          "Use @id values so the types reference each other. The service points to the person as its founder, and the profile page points to the person as its main entity.",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Mark up only what is visible on the page. Keep the data in one source file and generate both the page and the markup from it, so they cannot drift apart. Validate the result with Google's Rich Results Test after each deploy.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
