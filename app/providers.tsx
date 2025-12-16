'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { ThemeProvider } from '@/lib/theme'

interface SidebarContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
})

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within Providers')
  }
  return context
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Always render ThemeProvider to ensure context is available
  return (
    <ThemeProvider>
      <SidebarContext.Provider value={{ isOpen: sidebarOpen, setIsOpen: setSidebarOpen }}>
        {children}
      </SidebarContext.Provider>
    </ThemeProvider>
  )
}
