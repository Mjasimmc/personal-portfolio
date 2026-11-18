// Central site config, derived from the resume data in src/data/portfolio.ts.
import { profile, skillCategories } from "@/data/portfolio";

export const site = {
  name: profile.name,
  title: `${profile.name} | ${profile.title}`,
  titleTemplate: `%s | ${profile.name}`,
  description: `${profile.name} is a software creator who turns imagination into intelligent, automated software: custom software, AI-powered applications, agentic AI, business automation and SaaS products. Based in ${profile.location}, working worldwide.`,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jasim.syncircle.org").replace(/\/$/, ""),
  locale: "en_IN",
  jobTitle: profile.title,
  email: profile.email,
  phone: profile.phone,
  services: [
    "Custom software development",
    "AI-powered software development",
    "Agentic AI development",
    "Business process automation",
    "SaaS product development",
    "Enterprise software solutions",
    "Web application development",
    "AI integration and workflow automation",
  ],
  keywords: [
    "software creator",
    "AI-first software creator",
    "custom software development",
    "AI-powered software development",
    "agentic AI development",
    "AI agent development",
    "business process automation",
    "AI workflow automation",
    "SaaS product development",
    "enterprise software development",
    "full-stack product development",
    "Muhammed Jasim",
    "Muhammed Jasim M C",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
  ],
  sameAs: profile.links.map((l) => l.href),
  skills: skillCategories.flatMap((c) => c.skills),
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
