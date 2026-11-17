import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
