import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd, personSchema, profilePageSchema, serviceSchema, websiteSchema } from "@/lib/jsonld";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Cursor } from "@/components/layout/Cursor";
import { Nav } from "@/components/layout/Nav";
import { AmbientGlow } from "@/components/layout/AmbientGlow";
import { ProgressRail } from "@/components/layout/ProgressRail";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/layout/Analytics";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: "/" },
  // Search engine ownership tokens come from env so they can be set without a code change.
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>{`.gs-reveal{opacity:1!important}`}</style>
        </noscript>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={serviceSchema} />
        <JsonLd data={profilePageSchema} />
        <a
          href="#main"
          className="sr-only z-[80] rounded-full bg-mist px-4 py-2 text-obsidian focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <SmoothScroll />
        <Cursor />
        <Nav />
        <AmbientGlow />
        <ProgressRail />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
