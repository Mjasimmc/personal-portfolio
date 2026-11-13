import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">404 — Page not found</h1>
      <p className="mt-4"><Link href="/" className="underline">Back to home</Link></p>
    </main>
  );
}
