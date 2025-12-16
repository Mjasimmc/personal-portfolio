import { generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Experience — Professional Career as TypeScript MERN Stack Developer',
  description:
    'Professional experience of Muhammed Jasim M C as a TypeScript MERN Stack Developer. Currently Software Developer at SolutionsChamps Technologies, Coimbatore. Previous roles at AF Technologies and Brototype.',
  keywords: [
    'Software Developer Coimbatore',
    'Full Stack Developer Experience',
    'MERN Stack Developer Career',
    'TypeScript Developer Experience',
    'Node.js Developer',
    'React Developer Portfolio',
  ],
  path: '/experience',
})

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children
}

