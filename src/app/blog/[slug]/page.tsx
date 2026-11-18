import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { JsonLd, blogPostingSchema, breadcrumbSchema } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const path = `/blog/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    keywords: p.tags,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: p.title, description: p.description, publishedTime: p.date, tags: p.tags },
    twitter: { title: p.title, description: p.description },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd data={blogPostingSchema(p)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path: `/blog/${p.slug}` },
        ])}
      />
      <nav aria-label="Breadcrumb" className="label-mono flex flex-wrap items-center gap-3">
        <Link href="/" className="transition-colors hover:text-mist">
          Home
        </Link>
        <span aria-hidden>/</span>
        <Link href="/blog" className="transition-colors hover:text-mist">
          Blog
        </Link>
      </nav>
      <article className="mt-10 max-w-3xl">
        <p className="label-mono">
          <time dateTime={p.date}>{p.date}</time> · {p.tags.join(" · ")}
        </p>
        <h1 className="text-display mt-5 text-[clamp(2.2rem,5.5vw,4.5rem)] text-mist">{p.title}</h1>
        <p className="mt-6 leading-relaxed text-silver md:text-lg">{p.description}</p>
        {p.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="text-2xl text-mist md:text-3xl">{s.heading}</h2>
            {s.paragraphs.map((t) => (
              <p key={t} className="mt-4 leading-relaxed text-silver-dim md:text-lg">
                {t}
              </p>
            ))}
          </section>
        ))}
      </article>
      <footer className="mt-20 border-t border-line pt-10">
        <Link href="/blog" className="label-mono transition-colors hover:text-mist">
          ← All posts
        </Link>
      </footer>
    </main>
  );
}
