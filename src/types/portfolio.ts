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
  statement: string;
  summary: string;
  location: string;
  email: string;
  yearsExperience: string;
  links: { label: string; href: string; handle: string }[];
};
