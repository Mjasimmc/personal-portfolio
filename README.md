# Muhammed Jasim - Professional Portfolio Website

A premium, multi-page portfolio website built with Next.js, Three.js, and Framer Motion. This is a modern, interactive developer portfolio that showcases professional work with a focus on type-safety, performance, and meaningful user experiences.

## Features

- 🎨 **Premium Design** - Minimal, modern aesthetic inspired by Vercel/Linear/Apple
- 🌙 **Dark Theme** - Beautiful dark theme by default
- 🎭 **3D Backgrounds** - Interactive Three.js particle system in the hero section
- ✨ **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Type-Safe** - Fully written in TypeScript for reliability
- 🚀 **Multi-Page** - Professional multi-page structure (Home, About, Skills, Projects, Contact)
- 🎯 **Performance Optimized** - Fast loading and smooth scrolling

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics and interactive backgrounds
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── skills/
│   │   └── page.tsx        # Skills page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── globals.css         # Global styles
│   └── providers.tsx       # Client providers (sidebar context)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Sidebar.tsx     # Mobile sidebar menu
│   │   ├── Footer.tsx      # Footer component
│   │   └── ClientLayout.tsx # Client layout wrapper
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   └── HomeHighlights.tsx # Home highlights
│   ├── ui/
│   │   ├── Button.tsx     # Reusable button component
│   │   └── Card.tsx        # Reusable card component
│   └── three/
│       └── HeroScene.tsx   # Three.js particle system
├── lib/
│   └── framerVariants.ts   # Shared animation variants
└── types/
    ├── project.ts          # Project type definitions
    └── skill.ts            # Skill type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

### Home (`/`)
- Hero section with 3D particle background
- Highlights section showcasing key strengths
- Call-to-action buttons

### About (`/about`)
- Personal introduction and experience
- Philosophy section (Performance, Type Safety)
- How I Work section (Clean Code, Collaboration)

### Skills (`/skills`)
- Categorized skills (Frontend, Backend, Language, Other)
- Animated skill cards with icons
- Technology descriptions

### Projects (`/projects`)
- Project gallery with detailed cards
- Tech stack badges
- Live demo and source code links

### Contact (`/contact`)
- Contact form with validation
- Social media links
- Professional layout

## Customization

### Update Personal Information

Edit the following files to customize the content:

- `components/sections/Hero.tsx` - Hero section text
- `app/about/page.tsx` - About page content
- `app/skills/page.tsx` - Skills and technologies
- `app/projects/page.tsx` - Project portfolio
- `components/layout/Footer.tsx` - Footer information
- `components/layout/Header.tsx` - Navigation items
- `components/layout/Sidebar.tsx` - Sidebar links and social media

### Styling

The project uses Tailwind CSS with a dark theme. Customize colors and themes in:

- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and custom CSS

### 3D Background

Modify the Three.js background in `components/three/HeroScene.tsx` to change the particle system appearance.

### Animation Variants

Shared animation variants are defined in `lib/framerVariants.ts`. Customize or add new variants as needed.

## Build for Production

```bash
npm run build
npm start
```

## Design Philosophy

This portfolio follows a premium, minimal design approach:

- **Dark Theme First** - Clean black background with subtle grays
- **Smooth Animations** - Professional, not flashy
- **Type Safety** - TypeScript everywhere
- **Performance** - Optimized Three.js rendering
- **Accessibility** - Semantic HTML and ARIA labels

## License

This project is open source and available for personal use.
