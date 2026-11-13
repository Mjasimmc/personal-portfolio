export type Project = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tech: string[];
  url?: string;
  repo?: string;
  date: string; // ISO
};

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics dashboard with role-based access and server-rendered charts.",
    body: "A multi-tenant analytics platform built with Next.js App Router, PostgreSQL and streaming server components. Cut time-to-first-byte by 60% through caching and edge rendering.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/yourhandle/saas-dashboard",
    date: "2026-03-01",
  },
  {
    slug: "ecommerce-storefront",
    title: "E-commerce Storefront",
    description: "Headless storefront with 100 Lighthouse SEO score and structured product data.",
    body: "Headless commerce storefront with static generation, JSON-LD product schema, and image optimisation, resulting in a 40% organic traffic increase.",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    url: "https://example.com",
    date: "2026-07-15",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
