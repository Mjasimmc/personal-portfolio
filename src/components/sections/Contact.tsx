"use client";

import { useEffect, useState, type SubmitEvent } from "react";
import { ArrowIcon } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const field =
  "w-full rounded-2xl border border-line bg-transparent px-4 py-3 text-mist outline-none transition-colors placeholder:text-silver/50 focus:border-electric";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (res.status === 429) {
        setErrorMsg("Too many attempts. Please wait a minute.");
        throw new Error("rate");
      }
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

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
          index="07"
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
            <form onSubmit={submit} noValidate className="mt-10 flex max-w-xl flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="label-mono">Name</span>
                <input name="name" required maxLength={120} autoComplete="name" className={field} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label-mono">Email</span>
                <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label-mono">Message</span>
                <textarea name="message" required rows={5} maxLength={5000} className={field} />
              </label>
              {/* Honeypot: hidden from people, filled by bots */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full border border-line px-6 py-3 font-mono text-[12px] tracking-wider text-mist transition-colors hover:border-silver/50 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                <span role="status" aria-live="polite" className="font-mono text-[11px] tracking-wider text-silver">
                  {status === "sent" && "Thanks. I'll reply within 48 hours."}
                  {status === "error" && (errorMsg || "Something went wrong. Please email me directly.")}
                </span>
              </div>
            </form>
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
