import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { LinkButton } from "@/components/ui/LinkButton";
import { profile } from "@/data/portfolio";

type Crumb = { name: string; path: string };

/** Shared frame for inner pages: breadcrumb (visible + JSON-LD), single H1 and intro. */
export function PageShell({
  crumbs,
  h1,
  intro,
  children,
  extraSchema,
}: {
  crumbs: Crumb[];
  h1: string;
  intro?: string;
  children: ReactNode;
  extraSchema?: object[];
}) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <main id="main" className="mx-auto w-full max-w-[1600px] px-6 pb-28 pt-32 md:pt-40">
      <JsonLd data={breadcrumbSchema(all)} />
      {extraSchema?.map((s, i) => <JsonLd key={i} data={s} />)}
      <nav aria-label="Breadcrumb" className="label-mono flex flex-wrap items-center gap-3">
        {all.map((c, i) => (
          <span key={c.path} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden>/</span>}
            {i === all.length - 1 ? (
              <span className="text-silver" aria-current="page">
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className="transition-colors hover:text-mist">
                {c.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <h1 className="text-display mt-10 max-w-6xl text-[clamp(2.4rem,6vw,6rem)] text-mist">{h1}</h1>
      {intro && <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim md:text-lg">{intro}</p>}
      {children}
    </main>
  );
}

export function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-20" aria-labelledby={id}>
      <h2 id={id} className="label-mono">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** Closing call to action used on every service and conversion page. */
export function CtaBand({ subject = "Project enquiry" }: { subject?: string }) {
  return (
    <section className="mt-24 border-t border-line pt-12" aria-label="Start a conversation">
      <p className="text-display max-w-4xl text-[clamp(1.8rem,4vw,3.2rem)] text-mist">
        Have something in mind? Describe it, and I will tell you honestly how I would build it.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <LinkButton href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}`}>Email me about it</LinkButton>
        <LinkButton href="/work-with-me" variant="ghost">
          How we would work together
        </LinkButton>
        <LinkButton href="/contact" variant="ghost">
          Contact form
        </LinkButton>
      </div>
    </section>
  );
}
