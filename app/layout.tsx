import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Providers } from './providers'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { StructuredData } from '@/components/SEO/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'
import { LocalBusinessSchema } from '@/lib/structured-data'

export const metadata: Metadata = genMeta({
  title: 'Muhammed Jasim M C — TypeScript MERN Stack Developer | Full Stack Developer Portfolio',
  description:
    'Portfolio of Muhammed Jasim M C, a TypeScript-focused Full Stack Developer specializing in MERN stack, React, Node.js, and scalable cloud deployments. Software Developer at SolutionsChamps Technologies, Coimbatore, India.',
  keywords: [
    'TypeScript Developer',
    'MERN Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Software Developer Coimbatore',
    'Software Developer Kerala',
  ],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://jasim-sct.vercel.app/" />
        <link rel="icon" href="/favicon.svg" />
        {/* Google Analytics placeholder - set NEXT_PUBLIC_GA_ID in env to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        )}
      </head>
      <body className="min-h-screen bg-black dark:bg-black bg-white text-white dark:text-white text-gray-900 antialiased">
        <StructuredData type="website" />
        <StructuredData type="person" />
        <StructuredData type="organization" />
        {/* Basic breadcrumb list for main sections to help search engines */}
        <StructuredData
          type="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: 'https://jasim-sct.vercel.app' },
            { name: 'About', url: 'https://jasim-sct.vercel.app/about' },
            { name: 'Skills', url: 'https://jasim-sct.vercel.app/skills' },
            { name: 'Projects', url: 'https://jasim-sct.vercel.app/projects' },
            { name: 'Contact', url: 'https://jasim-sct.vercel.app/contact' },
          ]}
        />
        <StructuredData type="organization" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema()) }} />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
