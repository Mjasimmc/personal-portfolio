import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammed Jasim M C - TypeScript MERN Stack Developer Portfolio',
    short_name: 'MJ Portfolio',
    description:
      'Portfolio of Muhammed Jasim M C, a TypeScript-focused Full Stack Developer specializing in MERN stack, React, Node.js, and cloud deployments.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

