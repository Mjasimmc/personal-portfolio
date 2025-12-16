'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Shield, Heart } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/framerVariants'
import { Card } from '@/components/ui/Card'

const highlights = [
  {
    icon: Code2,
    title: '3+ Years Full Stack',
    description: 'MERN + TypeScript across Brototype → AF Technologies → SCT',
  },
  {
    icon: Zap,
    title: 'Production-Ready Delivery',
    description: 'E-commerce, billing, school management, and cloud deployments',
  },
  {
    icon: Shield,
    title: 'Clean Architecture',
    description: 'Type-safe APIs, modular design, Nginx/DevOps, performance first',
  },
  {
    icon: Heart,
    title: 'Passion & Growth',
    description: 'Continuous learning—React Native, Electron, Tauri explorations',
  },
]

export function HomeHighlights() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white dark:text-white text-gray-900">
              What I Bring
            </h2>
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
              A focus on type-safety, performance, and meaningful user experiences across 3+ years of full stack delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg mb-4">
                      <Icon className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white dark:text-white text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

