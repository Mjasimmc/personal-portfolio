import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/research"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      lastModified: new Date(`${p.year}-12-31`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
