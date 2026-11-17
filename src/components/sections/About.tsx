import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { experience, profile } from "@/data/portfolio";
import { projects } from "@/data/projects";

const facts = [
  { value: `${profile.yearsExperience}`, label: "Years shipping production software" },
  { value: String(experience.length), label: "Teams, from startup to enterprise clients" },
  { value: String(projects.length), label: "Production-grade platforms built" },
];

export function About() {
  const current = experience[0];
  return (
    <>
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            Engineering digital products, <span className="font-serif-italic text-silver">end to end.</span>
          </>
        }
        lede={`${profile.title} based in ${profile.location}.`}
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7" selector="[data-line]">
          <p data-line className="text-[clamp(1.2rem,5.2vw,2rem)] leading-snug tracking-tight text-mist md:text-[clamp(1.35rem,2.3vw,2rem)]">
            I&apos;m {profile.name}, a full stack software developer. For the past three-plus years I&apos;ve
            been shipping production web applications — enterprise-grade React and Next.js frontends,
            reusable component libraries, and the secure REST and GraphQL services behind them.
          </p>
          <p data-line className="mt-8 max-w-2xl text-base leading-relaxed text-silver-dim md:text-lg">
            Today I&apos;m a {current.position} at {current.company}, building for multiple production
            clients with TypeScript, NestJS, GraphQL and MongoDB, containerising services with Docker and
            shipping through GitHub Actions. Before that I built business-critical systems for{" "}
            {experience[1].company} and trained as a MERN stack developer at {experience[2].company}.
          </p>
          <p data-line className="mt-6 max-w-2xl text-base leading-relaxed text-silver-dim md:text-lg">
            What I care about: clean, maintainable, production-ready code — performance optimisation,
            secure authentication, clean architecture and honest code reviews.
          </p>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal className="card relative overflow-hidden rounded-[28px] p-6 md:rounded-[32px] md:p-10">
            {/* Decorative orbital element */}
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-72 w-72">
              <div className="spin-slow absolute inset-0 rounded-full border border-line" />
              <div className="spin-slower absolute inset-8 rounded-full border border-electric/30" />
              <div className="absolute inset-20 rounded-full bg-[radial-gradient(circle,rgb(61_123_255/0.25),transparent_70%)]" />
              <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric" />
            </div>

            <dl className="relative grid grid-cols-3 gap-4 lg:grid-cols-2 lg:gap-4">
              {facts.map((f, i) => (
                <Spotlight
                  key={f.label}
                  className={
                    "lg:rounded-2xl lg:border lg:border-line lg:bg-obsidian/40 lg:p-6 " +
                    (i === 0 ? "lg:col-span-2" : "")
                  }
                >
                  <dd className="text-display text-gradient text-4xl md:text-6xl lg:text-7xl">{f.value}</dd>
                  <dt className="mt-2 text-[12px] leading-snug text-silver-dim lg:text-sm">{f.label}</dt>
                </Spotlight>
              ))}
            </dl>
            <div className="metal-line mt-10" aria-hidden />
            <p className="label-mono mt-6">{profile.location}</p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
