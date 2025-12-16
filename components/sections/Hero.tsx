'use client'

import { motion } from 'framer-motion'
import { HeroLoader } from '@/components/three/HeroLoader'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/framerVariants'
import Link from 'next/link'
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  FileCode,
  Cloud,
  Layers
} from 'lucide-react'

const techBadges = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Layers },
  { name: 'MongoDB', icon: Database },
  { name: 'TypeScript', icon: FileCode },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background - Lazy loaded for performance */}
      <div className="absolute inset-0 -z-10">
        <HeroLoader />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-5xl text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-gray-400 dark:text-gray-400 text-gray-600 mb-6"
        >
          TypeScript-Focused Full Stack Developer — 3+ Years Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white dark:text-white text-gray-900"
        >
          Hi, I&apos;m{' '}
          <span className="text-gray-300 dark:text-gray-300 text-gray-700">Muhammed Jasim</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 dark:text-gray-400 text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          TypeScript-Focused Full Stack Developer building fast, scalable, and meaningful digital experiences. Currently at SolutionsChamps Technologies, shipping production-grade MERN + Next.js systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base text-gray-500 dark:text-gray-500 text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          3+ years across Brototype → AF Technologies → SolutionsChamps. Deep in MERN + TypeScript, clean architecture, scalable APIs, and cloud deployment with Nginx, AWS, and DigitalOcean.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/projects">
            <Button variant="primary">View Projects</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </motion.div>

        {/* Interactive Tech Badges */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {techBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.name}
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 bg-white/10 dark:bg-white/10 bg-gray-900/10 backdrop-blur-sm border border-white/20 dark:border-white/20 border-gray-300 rounded-full flex items-center gap-2 text-sm text-white dark:text-white text-gray-900"
              >
                <Icon size={16} />
                <span>{badge.name}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-500 text-gray-600"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Software Developer @ SolutionsChamps Technologies
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
