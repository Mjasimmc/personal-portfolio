import dynamic from 'next/dynamic'
import React from 'react'

const HeroScene = dynamic(() => import('./HeroScene').then(m => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" aria-hidden />
  ),
})

export function HeroLoader() {
  return <HeroScene />
}

export default HeroLoader
