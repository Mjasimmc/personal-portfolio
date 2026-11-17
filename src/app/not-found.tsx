import { LinkButton } from "@/components/ui/LinkButton";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[80svh] w-full max-w-[1600px] flex-col justify-center px-6 py-32">
      <p className="label-mono">
        <span className="text-electric">404</span> — Not found
      </p>
      <h1 className="text-display mt-6 text-[clamp(3rem,10vw,9rem)] text-mist">
        Lost in <span className="font-serif-italic text-silver">space.</span>
      </h1>
      <p className="mt-6 max-w-md text-silver-dim">This page doesn&apos;t exist. The portfolio does.</p>
      <div className="mt-10">
        <LinkButton href="/">Back to home</LinkButton>
      </div>
    </main>
  );
}
