"use client";

import { useEffect, useState } from "react";
import { ArrowIcon, LinkButton } from "@/components/ui/LinkButton";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="relative overflow-hidden card rounded-[32px] px-5 py-12 md:rounded-[40px] md:px-16 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="drift absolute -left-32 -top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgb(61_123_255/0.24),transparent_62%)] blur-2xl" />
        <div className="drift-2 absolute -bottom-20 -right-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgb(123_92_255/0.2),transparent_62%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(201_204_212/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(201_204_212/0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          align="left"
          title={
            <span className="uppercase">
              Let&apos;s build
              <br />
              something <span className="font-serif-italic text-[1.12em] normal-case tracking-normal text-[#7ff0ff]">extraordinary.</span>
            </span>
          }
        />

        <Reveal className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label-mono">Email</p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-[clamp(1.15rem,5.6vw,2.8rem)] tracking-tight text-mist transition-colors hover:text-electric md:break-normal md:text-[clamp(1.4rem,3.4vw,2.8rem)]"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-wider text-silver transition-colors hover:border-silver/50 hover:text-mist"
              >
                {copied ? "Copied" : "Copy"}
              </button>
              <span role="status" aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
            <div className="mt-10">
              <Magnetic>
                <LinkButton href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`}>
                  Start a conversation
                </LinkButton>
              </Magnetic>
            </div>
          </div>

          <ul className="flex flex-col md:col-span-5">
            {profile.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-line py-4 transition-colors"
                >
                  <span className="label-mono">{l.label}</span>
                  <span className="flex items-center gap-2 text-silver transition-colors group-hover:text-mist">
                    {l.handle}
                    <ArrowIcon className="transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
