// Type declarations for importing CSS files as side-effects in Next.js app directory
// This prevents TypeScript error TS(2882): Cannot find module or type declarations for side-effect import of './globals.css'.

declare module '*.css'

export {}
