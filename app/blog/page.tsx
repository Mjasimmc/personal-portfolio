'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { fadeInUp } from '@/lib/framerVariants'
import { Card } from '@/components/ui/Card'

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-full">
              <BookOpen className="text-white dark:text-white text-gray-900" size={48} />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white dark:text-white text-gray-900">
            Blog & Articles
          </h1>
          <div className="w-24 h-0.5 bg-white dark:bg-white bg-gray-900 mx-auto mb-8" />

          <Card className="max-w-2xl mx-auto">
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-4">
              Coming soon! I&apos;ll be sharing articles about web development, TypeScript, MERN stack, cloud deployment, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-gray-600 text-sm">
              Check back later for insightful content and tutorials.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

