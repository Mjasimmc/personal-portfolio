// Source of truth for site content. Identity copy is the owner's own; do not invent facts or metrics.
import type { Education, Profile, Role, SkillCategory } from "@/types/portfolio";

export const profile: Profile = {
  name: "Muhammed Jasim",
  fullName: "Muhammed Jasim M C",
  firstName: "Muhammed",
  lastName: "Jasim",
  title: "Software Creator",
  designation: "Software Creator",
  tagline: "I imagine it. I create it. I automate it.",
  statement:
    "I turn imagination into intelligent, automated software: custom products, AI-powered applications and business automation, taken from idea to a working system.",
  summary:
    "A software creator who takes an idea, understands what is possible, designs the solution, architects the system and builds it into working software. Curious about where technology is heading, and always adapting to new tools and ideas.",
  journey:
    "Travelling through the world of tech — adapting to new technologies, learning where the future is heading, and building an identity along the way. A tech enthusiast who builds an identity through what he learns and makes.",
  location: "Kozhikode, Kerala, India",
  email: "mjasimmc@gmail.com",
  phone: "+919778218906",
  phoneDisplay: "+91 97782 18906",
  yearsExperience: "3+",
  links: [
    { label: "GitHub", href: "https://github.com/jasim-sct", handle: "github.com/jasim-sct" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhamed-jasim-dev/",
      handle: "linkedin.com/in/muhamed-jasim-dev",
    },
    { label: "Website", href: "https://jasim.syncircle.org", handle: "jasim.syncircle.org" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    accent: "#f3f4f7",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "#3d7bff",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "#7b5cff",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Socket.IO",
      "JWT Authentication",
      "API Integration",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    accent: "#5fd4c4",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    accent: "#c9ccd4",
    skills: ["Docker", "GitHub Actions", "AWS", "Nginx", "Git", "GitHub", "CI/CD"],
  },
  {
    id: "tools",
    label: "Tools & Testing",
    accent: "#8a8f9a",
    skills: ["Jest", "Cursor", "Claude", "AntiGravity", "VS Code", "Postman", "Linux", "Figma"],
  },
  {
    id: "practices",
    label: "Architecture & Practices",
    accent: "#9db4ff",
    skills: [
      "Agile",
      "Scrum",
      "System Design",
      "Performance Optimization",
      "Secure Coding",
      "Code Reviews",
      "Microservices",
      "Clean Architecture",
      "Reusable Component Development",
    ],
  },
];

export const experience: Role[] = [
  {
    company: "SolutionChamps Technologies Pvt. Ltd.",
    position: "Software Developer",
    start: "Apr 2025",
    end: "Present",
    location: "Coimbatore, Tamil Nadu",
    bullets: [
      "Engineered enterprise-grade web applications using React.js, Next.js, TypeScript, Node.js, NestJS, GraphQL, and MongoDB for multiple production clients.",
      "Created reusable React components, shared UI libraries, and custom hooks that accelerated feature delivery across multiple projects.",
      "Enhanced frontend performance by reducing unnecessary re-renders, optimizing state management, and improving application responsiveness.",
      "Architected secure REST and GraphQL APIs with JWT authentication, request validation, authorization, and structured error handling.",
      "Integrated external APIs, payment gateways, and third-party services while maintaining reliable backend workflows.",
      "Improved database efficiency by optimizing MongoDB aggregation pipelines, PostgreSQL queries, indexing strategies, and API response times.",
      "Containerized backend services using Docker and automated build and deployment workflows through GitHub Actions CI/CD pipelines.",
      "Collaborated with designers, QA engineers, and backend developers in Agile sprints while participating in architecture discussions, code reviews, and production releases.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    company: "Al Farooq Group of Companies",
    position: "Full Stack Developer",
    start: "Feb 2024",
    end: "Apr 2025",
    location: "Kasaragod, Kerala",
    bullets: [
      "Built business-critical full-stack applications using React.js, Node.js, Express.js, MongoDB, and MySQL for internal business operations.",
      "Crafted responsive user interfaces with reusable component architecture and scalable frontend design patterns.",
      "Connected third-party APIs, authentication services, payment systems, and business workflows into existing platforms.",
      "Structured scalable relational and NoSQL database schemas while improving query execution and overall application performance.",
      "Managed production deployments using Nginx, SSL configuration, Linux servers, and cloud infrastructure.",
      "Resolved production issues, optimized application stability, and continuously improved maintainability through refactoring and code reviews.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Nginx", "Linux"],
  },
  {
    company: "Brototype",
    position: "MERN Stack Developer",
    start: "Oct 2022",
    end: "Feb 2024",
    location: "Kozhikode, Kerala",
    bullets: [
      "Built multiple production-style MERN Stack applications following modern software engineering practices.",
      "Created a complete e-commerce platform featuring authentication, product management, shopping cart, payment workflow, and administration modules.",
      "Engineered a real-time chat platform using Socket.IO, WebSockets, Node.js, and MongoDB with instant message synchronization.",
      "Applied TypeScript, REST API design principles, Git workflows, and reusable architecture throughout application development.",
      "Strengthened debugging, clean coding practices, performance optimization, and collaborative software development skills through project-based learning.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "TypeScript"],
  },
];

export const education: Education[] = [
  {
    institution: "Brototype",
    program: "MERN Stack Development Program",
    start: "Oct 2022",
    end: "Feb 2024",
    location: "Kozhikode, Kerala",
    details: [
      "Completed an intensive full-stack development program focused on React.js, Node.js, Express.js, MongoDB, TypeScript, REST APIs, Git, and modern software engineering practices.",
      "Built multiple production-style applications including an E-Commerce Platform, Real-Time Chat Application, and RESTful backend services.",
    ],
  },
  {
    institution: "JDT Islam VHSS",
    program: "Junior Software Developer (Computer Science)",
    start: "2022",
    end: "2022",
    location: "Kozhikode, Kerala",
  },
];

/** Resume section "Certifications & Highlights" — these are highlights; no formal certifications are listed. */
export const highlights: string[] = [
  "Strong expertise in React.js, Next.js, TypeScript, Node.js, NestJS, GraphQL, MongoDB, PostgreSQL, and MySQL.",
  "Experienced in designing reusable component architectures, scalable REST APIs, GraphQL services, authentication systems, and enterprise frontend applications.",
  "Hands-on experience with Docker, GitHub Actions, Nginx, AWS, CI/CD pipelines, and Linux-based production deployments.",
  "Built multiple production-grade platforms including a Visual Website Builder (SaaS), School Management System, Billing Management Platform, E-Commerce Platform, and Real-Time Chat Application.",
  "Familiar with Agile development, code reviews, performance optimization, clean architecture, and secure coding practices.",
  "Daily AI-assisted development using Cursor, Claude, ChatGPT, and AntiGravity to improve engineering productivity while maintaining production-quality code.",
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Toolkit" },
  { id: "experience", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Learning" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
] as const;

/** SynCircle — a tech community the owner is a member of. Text is taken from syncircle.org. */
export const community = {
  name: "SynCircle",
  href: "https://syncircle.org/",
  tagline: "Connecting Technology Talent. Building the future.",
  description:
    "An independent global network dedicated to connecting technology talent with peer mentorship, technical workshops, and career advancement.",
  role: "Member",
  badge: "Listed among the founding members",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/syncirclecommunity/" },
    { label: "X", href: "https://x.com/SynCircle" },
  ],
  pillars: [
    { name: "Connect", text: "Peer networking and executive mentorship networks." },
    { name: "Learn", text: "Sessions on AI orchestration, cloud native architectures and modern software engineering." },
    { name: "Develop", text: "Hands-on workshops, webinars and credentialed training." },
    { name: "Contribute", text: "Open-source initiatives, tech policy discussions and social-impact tech projects." },
    { name: "Bridge", text: "Bridging academia and industry through Forward Deployment Engineering." },
    { name: "Empower", text: "Digital literacy, data privacy and ethical technology adoption." },
  ],
} as const;
