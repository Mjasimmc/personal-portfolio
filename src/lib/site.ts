// Central site config: edit this file to personalise the whole site + SEO.
export const site = {
  name: "Your Name",
  title: "Your Name | Full-Stack Developer",
  titleTemplate: "%s | Your Name",
  description:
    "Portfolio of Your Name, a full-stack developer building fast, accessible and SEO-friendly web apps with Next.js, React and TypeScript.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_US",
  jobTitle: "Full-Stack Developer",
  email: "hello@example.com",
  twitter: "@yourhandle",
  keywords: ["portfolio", "full-stack developer", "Next.js", "React", "TypeScript", "web developer"],
  sameAs: [
    "https://github.com/yourhandle",
    "https://www.linkedin.com/in/yourhandle",
    "https://twitter.com/yourhandle",
  ],
  skills: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
