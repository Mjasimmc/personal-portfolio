import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="label-mono">
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p className="label-mono">
            Member of{" "}
            <a
              href="https://syncircle.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver transition-colors hover:text-mist"
            >
              Syncircle
            </a>
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="/services" className="label-mono text-silver transition-colors hover:text-mist">
              Services
            </Link>
          </li>
          {profile.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono text-silver transition-colors hover:text-mist"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="label-mono">Next.js · React Three Fiber · GSAP</p>
      </div>
    </footer>
  );
}
