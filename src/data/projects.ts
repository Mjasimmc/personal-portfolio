// Source of truth: resume PDF. No live URLs or repositories are listed there, so none are linked.
import type { Project } from "@/types/portfolio";

export type { Project };

export const projects: Project[] = [
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
