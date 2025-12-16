'use client'

import { motion } from 'framer-motion'
import { cardHover } from '@/lib/framerVariants'
import { HTMLMotionProps } from 'framer-motion'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'className'> {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? cardHover : undefined}
      className={`bg-gray-900 dark:bg-gray-900 bg-gray-50 border border-gray-800 dark:border-gray-800 border-gray-200 rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

