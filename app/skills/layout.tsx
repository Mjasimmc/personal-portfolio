import { generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Skills — MERN Stack Developer Technical Expertise',
  description:
    'Comprehensive technical skills of Muhammed Jasim M C: TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, AWS, DigitalOcean, Nginx, and DevOps tools. Full Stack Developer specializing in MERN stack.',
  keywords: [
    'MERN Stack Skills',
    'TypeScript Developer Skills',
    'React Developer Expertise',
    'Node.js Developer Skills',
    'Full Stack Developer Technologies',
    'MongoDB PostgreSQL',
    'Cloud Deployment Skills',
  ],
  path: '/skills',
})

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children
}

