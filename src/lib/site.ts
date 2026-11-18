// Central site config, derived from the resume data in src/data/portfolio.ts.
import { profile, skillCategories } from "@/data/portfolio";

export const site = {
  name: profile.name,
  title: `${profile.name} | ${profile.title}`,
  titleTemplate: `%s | ${profile.name}`,
  description: `Portfolio of ${profile.name}, a ${profile.title.toLowerCase()} from ${profile.location} adapting to new technologies, exploring the future of tech and building an identity along the way.`,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jasim-sct.vercel.app").replace(/\/$/, ""),
  locale: "en_IN",
  jobTitle: profile.title,
  email: profile.email,
  keywords: [
    "Muhammed Jasim",
    "tech enthusiast",
    "future of technology",
    "full stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "GraphQL",
    "Kozhikode",
    "Kerala",
  ],
  sameAs: profile.links.map((l) => l.href),
  skills: skillCategories.flatMap((c) => c.skills),
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
