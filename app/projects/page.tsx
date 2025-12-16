'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Database, Server, Code, Calendar } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/framerVariants'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StructuredData } from '@/components/SEO/StructuredData'
import type { Project } from '@/types/project'
import Link from 'next/link'

const projects: Project[] = [
  {
    id: '1',
    name: 'School Management Service Software',
    description:
      'A comprehensive MERN full-stack cloud application for school administration. Features include admin automation for fees management, class scheduling, student admissions, and downloadable billing. Deployed with Nginx, custom domain, and cloud infrastructure.',
    tech: ['MERN Stack', 'TypeScript', 'MongoDB', 'Express.js', 'React', 'Nginx', 'Cloud Deployment'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    year: '2024',
  },
  {
    id: '2',
    name: 'Bill Management System',
    description:
      'A multi-user MERN billing application with comprehensive dashboard and real-time data updates. Features secure APIs, optimized UI, and cloud-hosted infrastructure with Nginx for reverse proxy and load balancing.',
    tech: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React', 'Nginx', 'Cloud Hosting'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    year: '2024',
  },
  {
    id: '3',
    name: 'Career Harbor',
    description:
      'A full-stack learning project showcasing the evolution from server-side rendering to modern React architecture. Started with Node.js + EJS templating, migrated to React for large-scale frontend, and includes complete deployment and database integration.',
    tech: ['Node.js', 'Express.js', 'EJS', 'React', 'MongoDB', 'Deployment'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    year: '2023-2024',
  },
]

const techIcons: Record<string, typeof Globe> = {
  'MERN Stack': Code,
  'Next.js': Globe,
  'React': Code,
  'Node.js': Server,
  'Express.js': Server,
  'NestJS': Database,
  'TypeScript': Code,
  'MongoDB': Database,
  'PostgreSQL': Database,
  'Nginx': Server,
  'Cloud Deployment': Globe,
  'Cloud Hosting': Globe,
  'EJS': Code,
  'Deployment': Globe,
}

export default function ProjectsPage() {
  return (
    <>
      {projects.map((project) => (
        <StructuredData key={project.id} type="project" data={project} />
      ))}
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white dark:text-white text-gray-900">
                Portfolio Projects — MERN Stack Developer Showcase
              </h1>
              <div className="w-24 h-0.5 bg-white dark:bg-white bg-gray-900 mx-auto mb-6" />
              <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
                3+ years of production-ready MERN/TypeScript applications: school automation, billing, and learning platforms. Real-world problem-solving, scalable architecture, and cloud deployments with Nginx, AWS, and DigitalOcean.
              </p>
            </motion.div>

            {/* Internal Linking for SEO */}
            <motion.div variants={fadeInUp} className="mb-8 p-4 bg-gray-900 dark:bg-gray-900 bg-gray-50 border border-gray-800 dark:border-gray-800 border-gray-200 rounded-lg">
              <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">
                Built using my <Link href="/skills" className="text-primary dark:text-primary hover:underline">technical skills</Link> during my 
                {' '}<Link href="/experience" className="text-primary dark:text-primary hover:underline">professional experience</Link> (3+ years) as a Full Stack Developer.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <article itemScope itemType="https://schema.org/SoftwareApplication">
                    <Card className="h-full flex flex-col">
                      <div className="flex-1">
                        <h2 itemProp="name" className="text-2xl font-semibold mb-3 text-white dark:text-white text-gray-900">
                          {project.name}
                        </h2>
                        {project.year && (
                          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500 text-gray-600 whitespace-nowrap mb-3">
                            <Calendar size={12} />
                            {project.year}
                          </span>
                        )}
                        <p itemProp="description" className="text-gray-400 dark:text-gray-400 text-gray-600 mb-6 leading-relaxed text-sm">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => {
                            const TechIcon = techIcons[tech] || Code
                            return (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 dark:bg-gray-800 bg-gray-200 text-gray-300 dark:text-gray-300 text-gray-700 rounded-full text-xs font-medium"
                              >
                                <TechIcon size={12} />
                                {tech}
                              </span>
                            )
                          })}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-gray-800 dark:border-gray-800 border-gray-200">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                            aria-label={`View live demo of ${project.name}`}
                          >
                            <Button variant="secondary" className="w-full">
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                            aria-label={`View source code of ${project.name} on GitHub`}
                          >
                            <Button variant="outline" className="w-full">
                              <Github size={16} className="mr-2" />
                              Source Code
                            </Button>
                          </a>
                        )}
                      </div>
                    </Card>
                  </article>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
