export type SkillCategoryId =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "tools"
  | "practices";

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  /** Hex accent used by the constellation + chips. */
  accent: string;
  skills: string[];
};

export type Role = {
  company: string;
  position: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export type ProjectVisual = "builder" | "campus" | "ledger" | "commerce" | "pulse";

export type Project = {
  slug: string;
  title: string;
  kind: string;
  period: string;
  /** Year used for ordering, sitemap and schema.org datePublished. */
  year: number;
  summary: string;
  highlights: string[];
  tech: string[];
  visual: ProjectVisual;
  url?: string;
  repo?: string;
  /** Real screenshot of the live site, taken from the public URL. Never mock-ups. */
  screenshot?: { src: string; alt: string; width: number; height: number };
};

export type Education = {
  institution: string;
  program: string;
  start: string;
  end: string;
  location: string;
  details?: string[];
};

export type Profile = {
  name: string;
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  designation: string;
  tagline: string;
  statement: string;
  summary: string;
  /** Earlier identity copy, kept for the About page. */
  journey: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  yearsExperience: string;
  links: { label: string; href: string; handle: string }[];
};
