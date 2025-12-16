'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Code2, Cloud, Target, Zap, BookOpen, Rocket, TrendingUp, Code } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/framerVariants'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

const journey = [
  {
    phase: 'Foundation',
    title: 'Starting with the Basics',
    location: 'Brototype',
    period: '2023 - Early 2024',
    type: 'learning',
    icon: BookOpen,
    description: 'My journey into software development began at Brototype, where I discovered my passion for building meaningful applications.',
    details: [
      'Started with C programming language — practicing simple operations, loops, and conditional logic',
      'Learned problem-solving mindset and logical thinking',
      'Moved into JavaScript — explored core concepts and OOP',
      'Built a strong foundation that made me realize: I wanted to build real, practical software',
    ],
    skills: ['C Programming', 'JavaScript', 'OOP', 'Problem Solving'],
  },
  {
    phase: 'Backend Development',
    title: 'Moving Into Backend Development',
    location: 'Brototype',
    period: 'Early 2024',
    type: 'learning',
    icon: Code2,
    description: 'Node.js opened an entirely new world. I understood how servers work, how APIs are built, and how data flows inside an application.',
    details: [
      'First backend project: Node.js + Express.js + HBS templating + MongoDB',
      'Second backend project: Improved experience with EJS and server-side rendering',
      'Gained confidence to move into full-stack development',
    ],
    skills: ['Node.js', 'Express.js', 'HBS Templating', 'EJS', 'MongoDB', 'RESTful APIs'],
  },
  {
    phase: 'Frontend & Full Stack',
    title: 'Transition to React',
    location: 'Brototype',
    period: 'Mid 2024',
    type: 'learning',
    icon: Rocket,
    description: 'I began learning React and built my first full-stack project — a milestone that gave me confidence to step into the industry.',
    details: [
      'Built a basic Todo List as my first React project',
      'Combined React and Express.js to build a Job Portal — my first major full-stack project',
      'Everything aligned together — frontend, backend, and database',
      'This project became a milestone and gave me confidence to step into the industry',
    ],
    skills: ['React', 'Express.js', 'MongoDB', 'Full Stack Development', 'RESTful APIs'],
  },
  {
    phase: 'Professional Career',
    title: 'Full Stack Developer',
    company: 'AF Technologies',
    location: 'Remote',
    period: '2024 - 2025',
    type: 'previous',
    icon: TrendingUp,
    description: 'After completing my projects, I landed my first role as a Full Stack Developer at AF Technologies. I worked there for a full year and grew tremendously — both technically and professionally.',
    details: [
      'Served as Lead Full Stack Developer, responsible for planning projects and developing features',
      'Built full stack architectures and deployed applications',
      'Maintained and scaled existing systems',
      'Developed a Next.js-based e-commerce project',
      'Reworked and improved existing client applications',
      'Built multiple projects from scratch based on client requirements',
      'Gained real-world understanding of business strategy, client communication, and delivery timelines',
      'Realized technical growth was slowing down — decided to move forward to learn more',
    ],
    skills: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'E-commerce Development', 'Project Planning', 'Client Communication', 'Cloud Deployment'],
  },
  {
    phase: 'Current Role',
    title: 'Software Developer',
    company: 'SolutionsChamps Technologies',
    location: 'Coimbatore',
    period: 'March 2025 - Present',
    type: 'current',
    icon: Zap,
    description: 'I joined SolutionsChamps Technologies (SCT) in March 2025, focusing heavily on TypeScript. What began as interest quickly turned into expertise — and soon I mastered it.',
    details: [
      'Focusing heavily on TypeScript-centric full stack development',
      'Working on MERN + Next.js + NestJS projects',
      'Building clean architecture & scalable code',
      'Handling production-level deployment and debugging',
      'Continuously revising and strengthening previously learned topics',
      'Committed to long-term mastery through consistent repetition',
    ],
    skills: ['TypeScript', 'MERN Stack', 'Next.js', 'NestJS', 'Express.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Clean Architecture', 'Production Deployment', 'Debugging'],
  },
]

const exploration = {
  title: 'What I Explore in My Free Time',
  description: 'Besides my core stack, I love experimenting with technologies that represent the future of cross-platform development.',
  technologies: [
    { name: 'React Native', description: 'Mobile app development' },
    { name: 'Electron.js', description: 'Desktop application development' },
    { name: 'Tauri', description: 'Modern desktop app framework' },
  ],
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white dark:text-white text-gray-900">
              My Full Developer Journey
            </h1>
            <div className="w-24 h-0.5 bg-white dark:bg-white bg-gray-900 mx-auto mb-6" />
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-3xl mx-auto text-lg">
              From writing C programs at Brototype to becoming a professional TypeScript MERN developer — my journey has been built on curiosity, consistency, and a desire to build something meaningful.
            </p>
          </motion.div>

          {/* Internal Linking for SEO */}
          <motion.div variants={fadeInUp} className="mb-8 p-4 bg-gray-900 dark:bg-gray-900 bg-gray-50 border border-gray-800 dark:border-gray-800 border-gray-200 rounded-lg">
            <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">
              Explore my <Link href="/skills" className="text-primary dark:text-primary hover:underline">technical skills</Link> and 
              {' '}<Link href="/projects" className="text-primary dark:text-primary hover:underline">portfolio projects</Link> built during this journey.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 dark:bg-gray-800 bg-gray-300 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {[...journey].reverse().map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`relative flex items-start ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 ${
                      item.type === 'current'
                        ? 'bg-primary dark:bg-primary border-4 border-gray-800 dark:border-gray-800 border-gray-300'
                        : item.type === 'previous'
                        ? 'bg-white dark:bg-white bg-gray-900 border-4 border-gray-800 dark:border-gray-800 border-gray-300'
                        : 'bg-gray-600 dark:bg-gray-600 border-4 border-gray-800 dark:border-gray-800 border-gray-300'
                    }`} />

                    {/* Content card */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      } ml-16 md:ml-0`}
                    >
                      <Card className={`h-full ${
                        item.type === 'current' ? 'border-2 border-primary dark:border-primary' : ''
                      }`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg flex-shrink-0 ${
                            item.type === 'current'
                              ? 'bg-primary/20 dark:bg-primary/20'
                              : item.type === 'previous'
                              ? 'bg-gray-800 dark:bg-gray-800 bg-gray-200'
                              : 'bg-gray-700 dark:bg-gray-700 bg-gray-300'
                          }`}>
                            <Icon
                              className={`${
                                item.type === 'current'
                                  ? 'text-primary dark:text-primary'
                                  : 'text-white dark:text-white text-gray-900'
                              }`}
                              size={24}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h2 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                                {item.title}
                              </h2>
                              {item.type === 'current' && (
                                <span className="px-2 py-0.5 bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary text-xs rounded-full">
                                  Current
                                </span>
                              )}
                              {item.type === 'previous' && (
                                <span className="px-2 py-0.5 bg-gray-700 dark:bg-gray-700 bg-gray-300 text-gray-300 dark:text-gray-300 text-gray-700 text-xs rounded-full">
                                  Previous
                                </span>
                              )}
                              {item.type === 'learning' && (
                                <span className="px-2 py-0.5 bg-blue-500/20 dark:bg-blue-500/20 text-blue-400 dark:text-blue-400 text-xs rounded-full">
                                  Learning
                                </span>
                              )}
                            </div>
                            {(item.company || item.location) && (
                              <p className="text-gray-300 dark:text-gray-300 text-gray-700 font-medium mb-1">
                                {item.company || item.location}
                              </p>
                            )}
                            <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-400 text-gray-600 mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {item.period}
                              </span>
                              {item.location && item.company && (
                                <span className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  {item.location}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm mb-4 italic">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-semibold text-white dark:text-white text-gray-900 mb-2">
                              Key Achievements & Learnings:
                            </h3>
                            <ul className="space-y-2">
                              {item.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-gray-400 dark:text-gray-400 text-gray-600"
                                >
                                  <span className="text-primary dark:text-primary mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.skills && item.skills.length > 0 && (
                            <div>
                              <h3 className="text-sm font-semibold text-white dark:text-white text-gray-900 mb-2">
                                Skills Developed:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-gray-800 dark:bg-gray-800 bg-gray-200 text-gray-300 dark:text-gray-300 text-gray-700 rounded text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Exploration Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 dark:bg-primary/20 rounded-lg">
                  <Code className="text-primary dark:text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white dark:text-white text-gray-900">
                    {exploration.title}
                  </h2>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm mt-1">
                    {exploration.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {exploration.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg"
                  >
                    <h3 className="text-white dark:text-white text-gray-900 font-semibold mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 border-primary/20 dark:border-primary/20">
              <p className="text-lg text-white dark:text-white text-gray-900 mb-4">
                Today, I&apos;m a Full Stack Developer with 3+ years of experience, specializing in MERN Stack, TypeScript, Next.js, NestJS, Express.js, and Node.js.
              </p>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                And I&apos;m still learning. Still improving. Still pushing forward.
              </p>
              <p className="text-primary dark:text-primary font-semibold mt-4">
                Because for me, development isn&apos;t just a career — it&apos;s a long-term journey of growth, passion, and constant evolution.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
