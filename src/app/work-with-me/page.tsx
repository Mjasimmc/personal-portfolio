import type { Metadata } from "next";
import { Block, PageShell } from "@/components/ui/PageShell";
import { LinkButton } from "@/components/ui/LinkButton";
import { webPageSchema } from "@/lib/jsonld";
import { profile } from "@/data/portfolio";

const title = "Work With Me: Start a Software Project";
const description =
  "Five ways to work together: discuss a software idea, request custom software, explore AI automation, collaborate on a product or hire for a project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work-with-me" },
  openGraph: { type: "website", url: "/work-with-me", title, description },
  twitter: { title, description },
};

const paths = [
  { name: "Discuss a software idea", for: "Founders", text: "You have an idea and want an honest view of what it would take, before committing to anything.", subject: "Software idea" },
  { name: "Request custom software", for: "Businesses", text: "You know what you need built. Send the problem and I will propose scope, approach and a first release.", subject: "Custom software request" },
  { name: "Explore AI automation", for: "Operations teams", text: "You suspect parts of your operation could run themselves. We find which, and whether AI is even needed.", subject: "AI automation exploration" },
  { name: "Collaborate on a product", for: "Product teams", text: "You are building something and want a creator who can own architecture and delivery alongside you.", subject: "Product collaboration" },
  { name: "Hire me for a project", for: "Companies", text: "You need someone able to build a complex system. Share the role or project and the timeline.", subject: "Project hire" },
];

const include = [
  "What you want to build or fix, in your own words",
  "Who will use it and what they do today",
  "Any deadline, budget range or existing systems",
  "Anything you have already tried",
];

export default function WorkWithMePage() {
  return (
    <PageShell
      crumbs={[{ name: "Work With Me", path: "/work-with-me" }]}
      h1="Let us build it."
      intro="Choose the path closest to where you are. Each opens an email with the right subject; a few lines about your situation is enough to start."
      extraSchema={[webPageSchema({ path: "/work-with-me", name: title, description, type: "ContactPage" })]}
    >
      <Block id="paths" title="Ways to start">
        <ul className="divide-y divide-line border-t border-line">
          {paths.map((p) => (
            <li key={p.name} className="grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-6">
              <span className="label-mono md:col-span-2">{p.for}</span>
              <div className="md:col-span-7">
                <h2 className="text-2xl text-mist">{p.name}</h2>
                <p className="mt-2 leading-relaxed text-silver-dim">{p.text}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <LinkButton href={`mailto:${profile.email}?subject=${encodeURIComponent(p.subject)}`} variant="ghost">
                  Start this
                </LinkButton>
              </div>
            </li>
          ))}
        </ul>
      </Block>
      <Block id="include" title="What to include in your first message">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {include.map((t) => (
            <li key={t} className="bg-obsidian p-6 text-mist">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl leading-relaxed text-silver-dim">
          You will get a direct reply with an honest view of feasibility and a suggested first scope. Work is remote and open to clients worldwide.
        </p>
      </Block>
    </PageShell>
  );
}
