import { generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'About — TypeScript MERN Stack Developer Profile',
  description:
    'About Muhammed Jasim M C: MERN Stack Developer with 1.5 years training and 1 year industry experience. Currently Software Developer at SolutionsChamps Technologies, Coimbatore. Specializing in TypeScript, React, Node.js, and cloud deployments.',
  keywords: [
    'About Full Stack Developer',
    'MERN Stack Developer Profile',
    'TypeScript Developer About',
    'Software Developer Coimbatore',
    'React Developer Background',
  ],
  path: '/about',
  type: 'profile',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}

