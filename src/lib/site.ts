// Central site config, derived from the resume data in src/data/portfolio.ts.
import { profile, skillCategories } from "@/data/portfolio";

export const site = {
  name: profile.name,
  title: `${profile.name} | ${profile.title}`,
  titleTemplate: `%s | ${profile.name}`,
  description: `Portfolio of ${profile.name}, a ${profile.title.toLowerCase()} with ${profile.yearsExperience} years of experience building scalable web applications with React, Next.js, TypeScript, Node.js, NestJS and GraphQL.`,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jasim-sct.vercel.app").replace(/\/$/, ""),
  locale: "en_IN",
  jobTitle: profile.title,
  email: profile.email,
  keywords: [
    "Muhammed Jasim",
    "full stack developer",
    "software developer",
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
