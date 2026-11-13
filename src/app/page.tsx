import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-6 py-20">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{site.name}</h1>
        <p className="mt-2 text-xl text-neutral-500">{site.jobTitle}</p>
        <p className="mt-6 text-lg leading-relaxed">{site.description}</p>
      </header>

      <section aria-labelledby="projects" className="mt-16">
        <h2 id="projects" className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-6 grid gap-6">
          {projects.map((p) => (
            <li key={p.slug} className="rounded-lg border border-neutral-300/40 p-5">
              <h3 className="text-lg font-medium">
                <Link href={`/projects/${p.slug}`} className="hover:underline">{p.title}</Link>
              </h3>
              <p className="mt-1 text-neutral-500">{p.description}</p>
              <p className="mt-3 text-sm">{p.tech.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="mt-16">
        <h2 id="skills" className="text-2xl font-semibold">Skills</h2>
        <p className="mt-4">{site.skills.join(", ")}</p>
      </section>

      <section aria-labelledby="contact" className="mt-16">
        <h2 id="contact" className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>
    </main>
  );
}
