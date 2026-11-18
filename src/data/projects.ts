// Source of truth: resume plus public repository READMEs and package manifests. Links are only listed where the repository is public.
import type { Project } from "@/types/portfolio";

export type { Project };

export const projects: Project[] = [
  {
    slug: "saas-form-platform",
    title: "SaaS Form Platform",
    kind: "Multi-tenant SaaS",
    period: "2026",
    year: 2026,
    summary:
      "A multi-tenant form-building and submission platform: React 19 workspaces with a drag-and-drop builder, a NestJS API with real-time Socket.IO on Redis, and a multi-container Nginx topology.",
    highlights: [
      "Built a pnpm monorepo with a React 19 + TypeScript + Vite frontend (admin and user workspaces, drag-and-drop form builder, form preview, submissions table and a public form runtime), a NestJS 11 + Mongoose API and shared types.",
      "Designed authentication with 15-minute JWT access tokens and rotating 7-day refresh tokens with replay-reuse detection, plus immediate session revocation through a token version.",
      "Specified a production topology in Docker Compose: Nginx edge load balancer with least-connections across two API instances, MongoDB, Redis pub/sub for Socket.IO scaling, HashiCorp Vault for secrets and MinIO for storage.",
      "Documented the architecture, security model and operations in the repository, and covered the API with Jest end-to-end tests.",
    ],
    tech: ["React 19", "NestJS", "MongoDB", "Redis", "Socket.IO", "Nginx", "Docker", "Vault"],
    visual: "builder",
    repo: "https://github.com/jasim-sct/machine-test",
  },
  {
    slug: "organization-alert-system",
    title: "Organization Alert System",
    kind: "Backend + Android",
    period: "2026",
    year: 2026,
    summary:
      "An alert and reminder platform for groups: an Express and Socket.IO backend with a scheduler, and an offline-capable Android app that rings like an alarm clock and requires acknowledgement.",
    highlights: [
      "Built a backend that is the source of truth for organizations, users, groups, alerts, deliveries and devices, running a scheduler and real-time broadcast over Express, MongoDB and Socket.IO.",
      "Built a Kotlin and Jetpack Compose Android app that syncs the schedule, registers AlarmManager alarms, rings like an alarm clock and works offline after sync.",
      "Designed a mandatory acknowledge and dismiss pipeline with retries, so a team has proof that each alert was delivered and acknowledged.",
      "Kept a living development walkthrough in the repository covering architecture, flows, tests and known limitations.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "Kotlin", "Jetpack Compose"],
    visual: "pulse",
    repo: "https://github.com/jasim-sct/web-builder-platform",
  },
  {
    slug: "enterprise-commerce-platform",
    title: "Enterprise Commerce Platform",
    kind: "Next.js platform",
    period: "2026",
    year: 2026,
    summary:
      "A multi-organization commerce platform design: a search-optimized storefront, a vendor marketplace and an enforced user hierarchy, built with Next.js, MongoDB and Redis.",
    highlights: [
      "Designed commerce around organizations rather than single shops: an admin organization, vendor organizations that onboard as companies, and internal roles such as managers and sales representatives with enforced hierarchy.",
      "Built the application with Next.js, React Query, Zustand, Zod validation, MongoDB with Mongoose and Redis, with Argon2 password hashing and JWT sessions.",
      "Prepared a separate NestJS backend, a Next.js client and an admin app as the next step towards a split architecture.",
      "Deployed the working storefront on Vercel.",
    ],
    tech: ["Next.js", "MongoDB", "Redis", "Zod", "Zustand", "React Query", "Argon2"],
    visual: "commerce",
    url: "https://ecom-nextjs-six-lac.vercel.app",
    repo: "https://github.com/jasim-sct/ecom-nextjs",
  },
  {
    slug: "f-tech-solutions",
    title: "F-Tech Solutions Website",
    kind: "Immersive website",
    period: "2026",
    year: 2026,
    summary:
      "An immersive, mobile-first company website built with Next.js and React Three Fiber, structured as a scrolling 3D journey.",
    highlights: [
      "Built the company's digital presence with Next.js (App Router), React Three Fiber, Drei and Three.js, with GSAP and Framer Motion for animation.",
      "Wrote the visitor-facing copy and the journey structure as separate documents in the repository, so content and experience could be changed independently.",
      "Deployed on Vercel with pinned package manager settings for repeatable builds.",
    ],
    tech: ["Next.js", "React Three Fiber", "Three.js", "GSAP", "Tailwind CSS", "TypeScript"],
    visual: "commerce",
    url: "https://f-tech-solutions.vercel.app",
    repo: "https://github.com/jasim-sct/f-tech-solutions",
  },
  {
    slug: "e-tournament-platform",
    title: "E-Tournament Platform",
    kind: "Real-time platform",
    period: "2023 – 2026",
    year: 2026,
    summary:
      "A full stack tournament platform with a React and Redux client, a Node.js API with JWT and Google sign-in, real-time play over Socket.IO and chess game logic.",
    highlights: [
      "Built a React client with Redux Toolkit, Material UI, React Router, drag-and-drop and chess.js game logic, with Firebase and Google OAuth sign-in.",
      "Built an Express and MongoDB API with JWT authentication, Passport, bcrypt hashing, file uploads and Socket.IO for real-time communication.",
      "Kept the platform in active development across 2023 to 2026, split into client, server and combined repositories.",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "chess.js"],
    visual: "pulse",
    repo: "https://github.com/Mjasimmc/e-tournament-platform",
  },
  {
    slug: "career-harbor-job-portal",
    title: "Career Harbor Job Portal",
    kind: "Hiring platform",
    period: "2024",
    year: 2024,
    summary:
      "A job platform connecting employees and employers, with a React client, an Express API, payments, map-based location and real-time features.",
    highlights: [
      "Built a React and Vite client with Material UI, Redux Toolkit, Firebase authentication, charts and Google Maps location features.",
      "Built an Express and MongoDB API with JWT, Cloudinary file storage, Nodemailer email and Socket.IO.",
      "Integrated Stripe and Razorpay payment flows on the client and server.",
      "Deployed the client on Vercel.",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Stripe", "Razorpay", "Firebase"],
    visual: "campus",
    url: "https://job-portal-client-gold.vercel.app",
    repo: "https://github.com/Mjasimmc/job-portal-client",
  },
  {
    slug: "visual-website-builder",
    title: "Visual Website Builder",
    kind: "SaaS",
    period: "2025",
    year: 2025,
    summary:
      "A drag-and-drop website builder with multi-page editing, reusable components, responsive layouts, nested containers and real-time style customization.",
    highlights: [
      "Architected a visual drag-and-drop website builder supporting multi-page editing, reusable components, responsive layouts, nested containers, and real-time style customization.",
      "Engineered a component-driven rendering system with centralized state management, property inheritance, dynamic styling, and persistent website serialization.",
      "Built advanced editing capabilities including configurable layouts, reusable design blocks, element hierarchy management, and production-ready frontend architecture.",
      "Focused on scalability, maintainability, performance optimization, and modular application design using React.js and TypeScript.",
    ],
    tech: ["React.js", "TypeScript", "Component Architecture", "State Management"],
    visual: "builder",
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    kind: "Cloud platform",
    period: "2024 – 2025",
    year: 2025,
    summary:
      "A cloud-based platform covering admissions, student records, attendance, scheduling, fee management, billing and invoice generation.",
    highlights: [
      "Created a cloud-based school management platform supporting admissions, student records, attendance, scheduling, fee management, billing, and invoice generation.",
      "Integrated secure React.js frontend modules with Node.js backend services following RESTful architecture and role-based authentication.",
      "Configured Nginx, production deployment pipelines, and cloud infrastructure to improve reliability, scalability, and application availability.",
    ],
    tech: ["React.js", "Node.js", "REST APIs", "Role-based Auth", "Nginx"],
    visual: "campus",
    repo: "https://github.com/Mjasimmc/schooladministration",
  },
  {
    slug: "billing-management-platform",
    title: "Billing Management Platform",
    kind: "Business platform",
    period: "2024 – 2025",
    year: 2025,
    summary:
      "A centralized billing platform with multi-user access, invoice generation, printable reports, customer management and secure administrative controls.",
    highlights: [
      "Built a centralized billing platform supporting multi-user access, invoice generation, printable reports, customer management, and secure administrative controls.",
      "Improved maintainability by restructuring backend APIs, optimizing frontend state management, and simplifying business workflows.",
      "Deployed production services using Docker, Nginx, Linux servers, and automated deployment workflows.",
    ],
    tech: ["Docker", "Nginx", "Linux", "REST APIs", "State Management"],
    visual: "ledger",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    kind: "MERN stack",
    period: "2024",
    year: 2024,
    summary:
      "A complete MERN e-commerce platform: JWT authentication, product catalog, cart, order processing, payment workflow and an administrative dashboard.",
    highlights: [
      "Developed a complete MERN Stack e-commerce platform featuring JWT authentication, product catalog, shopping cart, order processing, payment workflow, and administrative dashboard.",
      "Designed scalable REST APIs, MongoDB schemas, reusable React components, and responsive interfaces optimized for performance and maintainability.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication"],
    visual: "commerce",
  },
  {
    slug: "real-time-chat-application",
    title: "Real-Time Chat Application",
    kind: "Event-driven messaging",
    period: "2023",
    year: 2023,
    summary:
      "A real-time messaging platform with instant delivery, typing indicators, online presence and authentication on an event-driven architecture.",
    highlights: [
      "Engineered a real-time messaging platform using Socket.IO, WebSockets, Node.js, Express.js, and MongoDB.",
      "Implemented instant messaging, typing indicators, online presence, authentication, and scalable event-driven communication architecture.",
    ],
    tech: ["Socket.IO", "WebSockets", "Node.js", "Express.js", "MongoDB"],
    visual: "pulse",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
