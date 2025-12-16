import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

// Defer loading heavy Three.js scene so the page can paint a fast placeholder.
const HeroScene = dynamic(() => import('./HeroScene').then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" aria-hidden />
  ),
})

export function HeroLoader() {
  const [mountScene, setMountScene] = useState(false)

  useEffect(() => {
    // Wait until after initial paint to mount the heavy canvas.
    // This reduces the chance the canvas blocks the LCP.
    const t = setTimeout(() => setMountScene(true), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* Fast paint placeholder: this should be an optimized static image (og-image). */}
      <img
        src="/og-image-1200x630.webp"
        alt="Hero placeholder"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        decoding="async"
      />

      {mountScene ? <HeroScene /> : null}
    </>
  )
}

export default HeroLoader
