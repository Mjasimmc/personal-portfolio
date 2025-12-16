import { generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Projects — MERN Stack Developer Portfolio Showcase',
  description:
    'Portfolio projects by Muhammed Jasim M C: School Management System, Bill Management System, Career Harbor. Built with MERN stack, TypeScript, React, Node.js, Express, MongoDB, and cloud deployment.',
  keywords: [
    'MERN Stack Projects',
    'Full Stack Developer Portfolio',
    'TypeScript Projects',
    'React Projects',
    'Node.js Projects',
    'Cloud Deployed Applications',
    'School Management System',
  ],
  path: '/projects',
})

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}

