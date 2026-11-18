import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      lastModified: new Date(`${p.year}-12-31`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
