'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/mjasimmc', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mjasimmc@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-900 dark:border-gray-900 border-gray-200 bg-black dark:bg-black bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">
              Muhammed Jasim M C
            </h3>
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">
              TypeScript-Focused Full Stack Developer | MERN Stack Specialist
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-gray-600 text-xs mt-2">
              Software Developer @ SolutionsChamps Technologies, Coimbatore
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white dark:text-white text-gray-900 mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 dark:text-gray-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white dark:text-white text-gray-900 mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 dark:text-gray-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 dark:border-gray-900 border-gray-200 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-gray-600 text-sm">
            © {new Date().getFullYear()} Muhammed Jasim M C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

