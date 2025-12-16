'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { buttonHover, buttonTap } from '@/lib/framerVariants'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'className'> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-full text-sm uppercase tracking-wide font-medium transition-all duration-200'
  
  const variants = {
    primary: 'bg-white dark:bg-white bg-gray-900 text-black dark:text-black text-white hover:bg-gray-100 dark:hover:bg-gray-100 hover:bg-gray-800',
    secondary: 'bg-gray-800 dark:bg-gray-800 bg-gray-200 text-white dark:text-white text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-700 hover:bg-gray-300 border border-gray-700 dark:border-gray-700 border-gray-300',
    outline: 'border border-gray-600 dark:border-gray-600 border-gray-400 text-white dark:text-white text-gray-900 hover:border-gray-400 dark:hover:border-gray-400 hover:border-gray-500 hover:bg-gray-900 dark:hover:bg-gray-900 hover:bg-gray-100',
  }

  return (
    <motion.button
      whileHover={buttonHover}
      whileTap={buttonTap}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

