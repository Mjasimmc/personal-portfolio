import { generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Contact — Hire a TypeScript MERN Stack Developer',
  description:
    'Contact Muhammed Jasim M C, a TypeScript-focused Full Stack Developer. Available for freelance projects, full-time positions, and collaborations. Based in Coimbatore, India. Email: mjasimmc@gmail.com',
  keywords: [
    'Hire Full Stack Developer',
    'Contact MERN Stack Developer',
    'TypeScript Developer Contact',
    'Software Developer Coimbatore',
    'Freelance Full Stack Developer',
  ],
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

