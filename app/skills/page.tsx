'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Globe,
  Server,
  FileCode,
  Layers,
  Database,
  GitBranch,
  Settings,
  Palette,
  Cloud,
  Shield,
  Network,
  Box,
} from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/framerVariants'
import { Card } from '@/components/ui/Card'
import type { Skill } from '@/types/skill'
import Link from 'next/link'

const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    icon: Code,
    description: 'Building interactive user interfaces',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: Globe,
    description: 'Server-side rendering and static generation',
  },
  {
    name: 'Redux / Redux Toolkit',
    category: 'Frontend',
    icon: Box,
    description: 'State management for complex applications',
  },
  {
    name: 'HTML, CSS, Bootstrap, Tailwind',
    category: 'Frontend',
    icon: Palette,
    description: 'Semantic markup and modern styling frameworks',
  },
  {
    name: 'EJS, HBS',
    category: 'Frontend',
    icon: FileCode,
    description: 'Server-side templating engines',
  },
  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    icon: Server,
    description: 'Scalable server-side applications',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: Layers,
    description: 'MVC pattern and RESTful API architecture',
  },
  {
    name: 'RESTful API',
    category: 'Backend',
    icon: Network,
    description: 'Designing scalable API architectures',
  },
  {
    name: 'Authentication/Authorization',
    category: 'Backend',
    icon: Shield,
    description: 'Secure user authentication systems',
  },
  {
    name: 'Modular Backend Design',
    category: 'Backend',
    icon: Settings,
    description: 'Clean, maintainable backend architecture',
  },
  // Databases
  {
    name: 'MongoDB',
    category: 'Databases',
    icon: Database,
    description: 'NoSQL database with flexible schema',
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    icon: Database,
    description: 'Relational database with query optimization',
  },
  {
    name: 'Query Optimization & Schema Modeling',
    category: 'Databases',
    icon: Settings,
    description: 'Efficient database design and performance',
  },
  // DevOps / Tools
  {
    name: 'Git, GitHub',
    category: 'DevOps / Tools',
    icon: GitBranch,
    description: 'Version control and collaboration',
  },
  {
    name: 'CI/CD Pipelines',
    category: 'DevOps / Tools',
    icon: Settings,
    description: 'Automated deployment workflows',
  },
  {
    name: 'Postman',
    category: 'DevOps / Tools',
    icon: Network,
    description: 'API testing and documentation',
  },
  {
    name: 'Figma',
    category: 'DevOps / Tools',
    icon: Palette,
    description: 'UI/UX design and prototyping',
  },
  // Cloud Platforms
  {
    name: 'DigitalOcean',
    category: 'Cloud Platforms',
    icon: Cloud,
    description: 'Cloud hosting and deployment',
  },
  {
    name: 'AWS EC2',
    category: 'Cloud Platforms',
    icon: Cloud,
    description: 'Elastic compute cloud services',
  },
  {
    name: 'AWS Route 53',
    category: 'Cloud Platforms',
    icon: Network,
    description: 'DNS and domain management',
  },
  {
    name: 'DNS Configuration',
    category: 'Cloud Platforms',
    icon: Settings,
    description: 'Domain name system setup',
  },
  {
    name: 'Nginx',
    category: 'Cloud Platforms',
    icon: Server,
    description: 'Reverse proxy and load balancing',
  },
]

const categories: Skill['category'][] = ['Frontend', 'Backend', 'Databases', 'DevOps / Tools', 'Cloud Platforms']

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white dark:text-white text-gray-900">
              Skills & Technologies — MERN Stack Developer Expertise
            </h1>
            <div className="w-24 h-0.5 bg-white dark:bg-white bg-gray-900 mx-auto mb-6" />
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
              3+ years building production-grade MERN/TypeScript systems: React, Next.js, Node.js, Express, MongoDB, PostgreSQL, plus Nginx, AWS, and DigitalOcean deployments.
            </p>
          </motion.div>

          {/* Internal Linking for SEO */}
          <motion.div variants={fadeInUp} className="mb-8 p-4 bg-gray-900 dark:bg-gray-900 bg-gray-50 border border-gray-800 dark:border-gray-800 border-gray-200 rounded-lg">
            <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">
              View my <Link href="/experience" className="text-primary dark:text-primary hover:underline">professional experience</Link> and 
              {' '}<Link href="/projects" className="text-primary dark:text-primary hover:underline">real-world projects</Link> showcasing these skills.
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category)
              return (
                <motion.div key={category} variants={fadeInUp}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white dark:text-white text-gray-900">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => {
                      const Icon = skill.icon || Code
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                                <Icon className="text-white dark:text-white text-gray-900" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                                {skill.name}
                              </h3>
                            </div>
                            {skill.description && (
                              <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">
                                {skill.description}
                              </p>
                            )}
                          </Card>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
