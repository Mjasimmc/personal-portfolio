import type { ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative scroll-mt-16 py-20 md:py-40", className)}>
      <div className="mx-auto max-w-[1600px] px-6">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <Section id="about">
        <About />
      </Section>
      <Section id="expertise">
        <Expertise />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="contact" className="pb-16 pt-10 md:pb-24 md:pt-16">
        <Contact />
      </Section>
    </main>
  );
}
