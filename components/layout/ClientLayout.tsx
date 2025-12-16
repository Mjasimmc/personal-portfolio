'use client'

import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { useSidebar } from '@/app/providers'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <div className="flex min-h-screen flex-col">
      <Header onMenuClick={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

