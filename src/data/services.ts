// Service pages. Each one targets a distinct search intent (see docs/seo/strategy.md).
// Evidence rule: claims about past work point only at projects listed in projects.ts.
// AI/agent services describe the approach offered; they do not claim shipped agent products.

export type Service = {
  slug: string;
  name: string;
  /** Page H1. */
  h1: string;
  /** <title> without the site suffix (the layout template adds it). */
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Who searches this and what they want. */
  intent: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  deliverables: string[];
  steps: { name: string; text: string }[];
  /** Project slugs that genuinely demonstrate this service. */
  projectSlugs: string[];
  /** Other service slugs worth reading next. */
  related: string[];
  faqs: { q: string; a: string }[];
};

const process = {
  discover: {
    name: "Discover",
    text: "We talk through the idea, the people who will use it and what success looks like. I tell you plainly what is feasible and what is not.",
  },
  design: {
    name: "Design",
    text: "I propose the architecture, data model and a first scope small enough to ship, with the trade-offs written down.",
  },
  build: {
    name: "Build",
    text: "Working software in short cycles you can see and try, rather than a long silence followed by a reveal.",
  },
  launch: {
    name: "Launch and hand over",
    text: "Deployment, documentation and a clear handover so the system is understood, not a black box.",
  },
};

const standardSteps = [process.discover, process.design, process.build, process.launch];

export const services: Service[] = [
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    h1: "Custom software built around how your business actually works",
    title: "Custom Software Development",
    description:
      "Bespoke software designed and built from scratch for your workflow, not a template bent to fit. Architecture, build and deployment by one person who owns the result.",
    primaryKeyword: "custom software development",
    secondaryKeywords: ["custom business software", "bespoke software", "build custom software for my business", "software from scratch"],
    intent: "Commercial: a business that has outgrown spreadsheets or off-the-shelf tools and wants software made for it.",
    intro:
      "Off-the-shelf tools make you adapt your process to them. Custom software works the other way round: it models your process, your rules and your vocabulary, and it can change when the business does.",
    sections: [
      {
        heading: "When custom software is the right call",
        paragraphs: [
          "Custom software earns its cost when the workflow is a real part of how you compete, when existing tools force awkward workarounds, or when data lives in too many places to trust. It is usually the wrong call for a problem a well-configured existing product already solves, and I will say so.",
        ],
      },
      {
        heading: "How I approach it",
        paragraphs: [
          "I start from the workflow, not the feature list: who does what, what decisions are made, what goes wrong today. The software is then designed around those facts, with a data model that reflects the business and an interface that the people doing the work can use without training.",
          "I build and own the whole stack, so there is no hand-off gap between design, frontend, API, database and deployment. Past work in this style includes a billing platform, a school management system and a multi-organization commerce platform.",
        ],
      },
    ],
    deliverables: [
      "A written scope and architecture you can keep",
      "Working software deployed to your own infrastructure or cloud account",
      "Source code and documentation you own",
      "Automated tests on the parts that carry risk",
    ],
    steps: standardSteps,
    projectSlugs: ["billing-management-platform", "school-management-system", "enterprise-commerce-platform"],
    related: ["enterprise-software-solutions", "business-process-automation", "web-application-development"],
    faqs: [
      {
        q: "How is custom software different from a website or an app template?",
        a: "A template gives you a fixed structure with your content in it. Custom software is designed around your own data and process, so features, permissions and reports follow how you work.",
      },
      {
        q: "Do I own the code?",
        a: "That is the intent of a custom build: you receive the source code and documentation. Ownership terms are confirmed in writing before work starts.",
      },
      {
        q: "Can you start with a small version?",
        a: "Yes, and I recommend it. A first release that covers the most valuable workflow gets real feedback quickly and keeps early cost and risk low.",
      },
    ],
  },
  {
    slug: "ai-powered-software-development",
    name: "AI-Powered Software Development",
    h1: "Software with intelligence built into the product",
    title: "AI-Powered Software Development",
    description:
      "Applications where AI is a designed part of the product: language understanding, extraction, search and generation, built with guardrails and an honest view of where AI helps.",
    primaryKeyword: "AI-powered software development",
    secondaryKeywords: ["AI-powered applications", "develop an AI-powered business application", "AI application development", "AI-first software"],
    intent: "Commercial and exploratory: a founder or team that wants an application whose core value depends on AI.",
    intro:
      "AI is most valuable when it is part of the product design rather than a feature added at the end. The questions that matter are what the model should decide, what it must never decide, and how a person stays in control.",
    sections: [
      {
        heading: "AI as a product decision",
        paragraphs: [
          "Language understanding, document extraction, semantic search, summarisation and generation each have different failure modes. I design for those failures up front: validation of model output, fallbacks when a model is wrong or unavailable, and review steps where a mistake would be costly.",
        ],
      },
      {
        heading: "AI-first development practice",
        paragraphs: [
          "I use AI tools such as Cursor, Claude and ChatGPT daily while building, which shortens the path from idea to a working prototype. Generated code is reviewed and tested like any other code, because the goal is production-quality software, not a demo.",
          "This page describes the approach I offer. The shipped projects on this site are full-stack platforms; where a project uses AI as a feature it says so on its own page.",
        ],
      },
    ],
    deliverables: [
      "A scoped AI feature design with clear boundaries and fallbacks",
      "The full application around it: interface, API, data and deployment",
      "Evaluation cases so quality can be checked, not assumed",
      "Cost and latency notes so usage costs are predictable",
    ],
    steps: standardSteps,
    projectSlugs: ["saas-form-platform", "visual-website-builder"],
    related: ["agentic-ai-development", "ai-integration-workflow-automation", "saas-product-development"],
    faqs: [
      {
        q: "Do I need AI for my idea?",
        a: "Not always. If rules or a good database query solve the problem, that is cheaper and more predictable. I will tell you when AI adds value and when it does not.",
      },
      {
        q: "Which AI models do you work with?",
        a: "I choose per problem and avoid locking the product to one vendor where practical, so the model can be changed as the field moves.",
      },
      {
        q: "How do you keep AI output reliable?",
        a: "By constraining what the model can do, validating its output against a schema, adding human review where errors are costly, and keeping evaluation cases.",
      },
    ],
  },
  {
    slug: "agentic-ai-development",
    name: "Agentic AI Development",
    h1: "AI agents that carry out multi-step work, under control",
    title: "Agentic AI Development and AI Agent Development",
    description:
      "Design and build of AI agents that plan, use tools and complete multi-step business tasks, with permissions, audit trails and human approval where it matters.",
    primaryKeyword: "agentic AI development",
    secondaryKeywords: ["AI agent development", "custom AI agents", "autonomous business systems", "build an AI agent for my business"],
    intent: "Emerging and commercial: teams exploring agents that act, not just answer.",
    intro:
      "An agent differs from a chatbot in that it takes actions: it reads data, calls tools and completes steps toward a goal. That power is exactly why an agent needs boundaries, logging and a way for a person to approve what matters.",
    sections: [
      {
        heading: "What makes an agent trustworthy",
        paragraphs: [
          "I design agents around four things: a narrow, well-described set of tools; explicit permissions per action; a full record of what the agent did and why; and approval gates before anything irreversible, such as sending money, deleting data or contacting a customer.",
          "Autonomy is earned in stages. An agent starts by proposing actions for approval, and only the steps that prove reliable are later allowed to run on their own.",
        ],
      },
      {
        heading: "Where the engineering matters",
        paragraphs: [
          "Reliable agents are mostly ordinary software engineering: queues and retries, idempotent actions, schema-validated tool calls, real-time status for the people watching, and tests. My background building scheduled, real-time, acknowledgement-driven systems, such as the Organization Alert System, is the foundation this work sits on.",
          "This page describes the service I offer. I do not present any project on this site as a deployed agent product unless its page says so.",
        ],
      },
    ],
    deliverables: [
      "An agent design: goal, tools, permissions and escalation rules",
      "Implementation with logging, retries and an approval flow",
      "A review interface so people can see and correct what the agent did",
      "An evaluation set to measure whether the agent actually succeeds",
    ],
    steps: standardSteps,
    projectSlugs: ["organization-alert-system", "real-time-chat-application"],
    related: ["ai-integration-workflow-automation", "business-process-automation", "ai-powered-software-development"],
    faqs: [
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot answers. An agent acts: it plans steps, calls tools such as your database or email, and completes tasks, which is why it needs permissions and oversight.",
      },
      {
        q: "Can an agent run without human oversight?",
        a: "For low-risk, well-tested steps, yes. For anything costly or irreversible I recommend approval gates, and widening autonomy only as the agent proves reliable.",
      },
      {
        q: "What does a first agent project look like?",
        a: "One workflow, a handful of tools, approval on every action, and an evaluation set. That keeps scope small and shows quickly whether the approach works.",
      },
    ],
  },
  {
    slug: "business-process-automation",
    name: "Business Process Automation",
    h1: "Turn repetitive manual operations into automated systems",
    title: "Business Process Automation",
    description:
      "Replace manual, error-prone business operations with automated workflows: approvals, scheduling, notifications, billing and reporting, built as dependable software.",
    primaryKeyword: "business process automation",
    secondaryKeywords: ["workflow automation software", "automate repetitive business operations", "transform manual workflows into automated systems", "custom business automation"],
    intent: "Operational: someone whose team loses time to manual steps, copying data between tools or chasing approvals.",
    intro:
      "Most businesses carry processes that exist only as habits: someone remembers to send the reminder, copy the figures, chase the approval. Automation turns those habits into a system that runs the same way every time.",
    sections: [
      {
        heading: "Finding what is worth automating",
        paragraphs: [
          "The best candidates are frequent, rule-based and costly when done wrong. I map the process as it really runs, mark the steps that need human judgement, and automate the rest, so people spend their time on decisions rather than data entry.",
        ],
      },
      {
        heading: "Automation with accountability",
        paragraphs: [
          "Automation that cannot be audited is a liability. I build in records of what ran and when, notifications when something fails, and acknowledgement where a person must confirm. The Organization Alert System is an example: scheduled alerts, real-time delivery, and a mandatory acknowledge step so a team has proof that each alert was received.",
          "Billing and school administration are further examples of structured operations turned into software, in the Billing Management Platform and the School Management System.",
        ],
      },
    ],
    deliverables: [
      "A mapped process showing what is automated and what stays human",
      "The automation, built as maintainable software rather than fragile scripts",
      "Run history, failure alerts and an audit trail",
      "Documentation so your team can operate and extend it",
    ],
    steps: standardSteps,
    projectSlugs: ["organization-alert-system", "billing-management-platform", "school-management-system"],
    related: ["ai-integration-workflow-automation", "custom-software-development", "agentic-ai-development"],
    faqs: [
      {
        q: "Do I need AI to automate a business process?",
        a: "Usually not. Rules, schedules and integrations automate most processes reliably. AI is added only for steps that need understanding, such as reading unstructured documents.",
      },
      {
        q: "Will automation replace my team?",
        a: "The aim is to remove repetitive work so people can focus on judgement and relationships. I design the workflow so people stay in control of decisions.",
      },
      {
        q: "Can you connect to the tools we already use?",
        a: "Often yes, through their APIs or exports. Feasibility depends on the tool, and I check it during discovery before promising anything.",
      },
    ],
  },
  {
    slug: "saas-product-development",
    name: "SaaS Product Development",
    h1: "Build a SaaS product from first idea to live customers",
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS development for founders: multi-tenant architecture, authentication, workspaces, real-time features and production deployment, from MVP onward.",
    primaryKeyword: "SaaS product development",
    secondaryKeywords: ["build a SaaS product from scratch", "SaaS application development", "SaaS MVP development", "multi-tenant SaaS"],
    intent: "Founder-focused: someone with a product idea who needs it built properly.",
    intro:
      "A SaaS product is more than an app with a login. It needs tenants kept strictly apart, secure sessions, roles, a way to grow without a rewrite, and an operations story. Getting those foundations right early is what separates an MVP that can grow from one that must be rebuilt.",
    sections: [
      {
        heading: "Foundations I build in from the start",
        paragraphs: [
          "Multi-tenancy, authentication with rotating tokens and session revocation, role-based access, real-time updates, secrets management and a deployable topology. The SaaS Form Platform on this site is built this way: React 19 workspaces, a NestJS API, Socket.IO on Redis and a multi-container Nginx setup.",
        ],
      },
      {
        heading: "From MVP to something customers rely on",
        paragraphs: [
          "I scope the first release around the one workflow customers will pay for, ship it, and let usage decide what comes next. The Visual Website Builder is a further SaaS project showing a product where users create and publish their own output through a visual editor.",
        ],
      },
    ],
    deliverables: [
      "Multi-tenant architecture and data model",
      "Authentication, roles and a secure session design",
      "Working MVP in production with deployment documentation",
      "A prioritised roadmap for what to build after launch",
    ],
    steps: standardSteps,
    projectSlugs: ["saas-form-platform", "visual-website-builder", "enterprise-commerce-platform"],
    related: ["custom-software-development", "web-application-development", "ai-powered-software-development"],
    faqs: [
      {
        q: "Can you build just the MVP?",
        a: "Yes. A focused MVP is the recommended starting point, built on foundations that do not need replacing when the product grows.",
      },
      {
        q: "Which stack do you use for SaaS?",
        a: "Typically React or Next.js with TypeScript on the front, Node.js and NestJS on the back, MongoDB or SQL for data and Redis where real-time or caching matters. The choice follows the product.",
      },
      {
        q: "Will you help with the product thinking, not just the code?",
        a: "Yes. Deciding what not to build is part of building a SaaS product well, and I will give a direct opinion on scope.",
      },
    ],
  },
  {
    slug: "enterprise-software-solutions",
    name: "Enterprise Software Solutions",
    h1: "Enterprise software with the structure large organisations need",
    title: "Enterprise Software Solutions",
    description:
      "Enterprise application development: organisation hierarchies, role-based access, audit trails, reliable APIs and production deployment for complex multi-user systems.",
    primaryKeyword: "enterprise software development",
    secondaryKeywords: ["enterprise application development", "custom enterprise software", "enterprise workflow automation", "enterprise web platform"],
    intent: "Organisational: a company needing a complex, multi-role internal or customer-facing platform.",
    intro:
      "Enterprise software is defined less by size than by structure: many users, many roles, strict permissions, data that must be correct and a system that must stay up. The engineering challenge is keeping that complexity understandable.",
    sections: [
      {
        heading: "Structure first",
        paragraphs: [
          "I model organisations, departments and roles explicitly, and enforce the hierarchy in the backend rather than the interface alone. The Enterprise Commerce Platform, for instance, separates an admin organisation from vendor organisations, with internal roles such as managers and sales representatives.",
        ],
      },
      {
        heading: "Reliability and operations",
        paragraphs: [
          "Hands-on experience with Docker, GitHub Actions, Nginx, AWS and CI/CD means a system is delivered with a way to deploy, monitor and roll back, not just code. Clean architecture and code review practice keep the system maintainable by the team that inherits it.",
        ],
      },
    ],
    deliverables: [
      "Role and permission model enforced server side",
      "Reliable REST or GraphQL APIs with validation",
      "CI/CD pipeline and production deployment",
      "Architecture documentation for the team that maintains it",
    ],
    steps: standardSteps,
    projectSlugs: ["enterprise-commerce-platform", "school-management-system", "billing-management-platform"],
    related: ["custom-software-development", "business-process-automation", "saas-product-development"],
    faqs: [
      {
        q: "Can you work with an existing engineering team?",
        a: "Yes. I can build a module, lead a small piece of architecture or work alongside your developers following your conventions.",
      },
      {
        q: "Do you handle security requirements?",
        a: "Security is designed in: hashed credentials, short-lived tokens, server-side authorisation and secrets kept out of code. Formal compliance certification is outside what I can claim.",
      },
      {
        q: "How do you handle deployment?",
        a: "With containers and CI/CD pipelines, targeting your cloud or servers, with the setup documented so your team can run it.",
      },
    ],
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    h1: "Fast, accessible web applications built with React and Next.js",
    title: "Web Application Development",
    description:
      "Modern web application development with React, Next.js and TypeScript: fast, accessible, search-friendly applications and immersive 3D web experiences.",
    primaryKeyword: "web application development",
    secondaryKeywords: ["full-stack product development", "Next.js development", "React application development", "interactive 3D websites"],
    intent: "Practical: someone who needs a web application or site built to a high standard.",
    intro:
      "A web application is judged in seconds: how fast it loads, whether it works on a phone, and whether it feels considered. I build with React, Next.js and TypeScript, and care about the details that separate a good build from an average one.",
    sections: [
      {
        heading: "Performance and accessibility as defaults",
        paragraphs: [
          "Server rendering where it helps, optimised images, semantic HTML, keyboard support and respect for reduced-motion preferences. These are part of the build, not a later polish pass, and they are also what search engines reward.",
        ],
      },
      {
        heading: "Where it gets distinctive",
        paragraphs: [
          "Beyond standard applications I build immersive interfaces with Three.js and GSAP, such as the F-Tech Solutions website and this portfolio itself, while keeping them fast and usable. The E-Commerce Platform and Career Harbor Job Portal show the application side: real data, accounts and workflows.",
        ],
      },
    ],
    deliverables: [
      "Responsive, accessible interface in React or Next.js",
      "API and database where the application needs one",
      "Technical SEO foundations: metadata, sitemap, structured data",
      "Deployment on Vercel or your own infrastructure",
    ],
    steps: standardSteps,
    projectSlugs: ["f-tech-solutions", "e-commerce-platform", "career-harbor-job-portal", "e-tournament-platform"],
    related: ["custom-software-development", "saas-product-development", "ai-powered-software-development"],
    faqs: [
      {
        q: "Do you build marketing websites too?",
        a: "Yes, particularly where design, performance and search visibility matter. Content-heavy sites are built so they stay easy to update.",
      },
      {
        q: "Will the site be found on Google?",
        a: "I build the technical foundations: fast rendering, correct metadata, sitemap and structured data. Rankings also depend on content and competition, and I do not promise positions.",
      },
      {
        q: "Can you add 3D or animation without hurting performance?",
        a: "Yes. 3D scenes are loaded lazily, capped for pixel density, and disabled or simplified for users who prefer reduced motion.",
      },
    ],
  },
  {
    slug: "ai-integration-workflow-automation",
    name: "AI Integration and Workflow Automation",
    h1: "Add AI to the systems and tools you already run",
    title: "AI Integration and Workflow Automation",
    description:
      "Connect AI and automation to your existing software: APIs, databases, email, documents and internal tools, without rebuilding what already works.",
    primaryKeyword: "AI workflow automation",
    secondaryKeywords: ["AI integration services", "AI business automation", "intelligent automation", "automate repetitive business operations using AI"],
    intent: "Integration: a team with working systems that wants AI or automation added to them.",
    intro:
      "You may not need new software at all. Often the most valuable step is connecting AI and automation to what already exists: your database, your email, your documents, your internal tools.",
    sections: [
      {
        heading: "Integrate, do not replace",
        paragraphs: [
          "I start by understanding the systems you have and where data and decisions get stuck. Then I add the smallest integration that removes the friction: a service that reads incoming documents into your database, drafts replies for review, or triggers actions when conditions are met.",
        ],
      },
      {
        heading: "Built to be maintained",
        paragraphs: [
          "Integrations fail quietly when they are written as one-off scripts. I build them as proper services with retries, validation, logging and alerts, and with documentation so they keep working after I step away.",
        ],
      },
    ],
    deliverables: [
      "An integration plan covering data flow, access and failure handling",
      "The integration service with logging and alerts",
      "Review steps where a person should approve AI output",
      "Runbook for operating and extending it",
    ],
    steps: standardSteps,
    projectSlugs: ["organization-alert-system", "billing-management-platform"],
    related: ["business-process-automation", "agentic-ai-development", "ai-powered-software-development"],
    faqs: [
      {
        q: "How is this different from business process automation?",
        a: "Business process automation maps and rebuilds a whole operation. AI integration is narrower: adding intelligence or automation to systems you already have.",
      },
      {
        q: "Is it safe to connect AI to company data?",
        a: "It can be, with care: send only the data a task needs, control which provider receives it, and keep access scoped and logged. I design for that from the start.",
      },
      {
        q: "How long does a first integration take?",
        a: "A focused single-workflow integration is usually a small project. I give an estimate after discovery rather than guessing in advance.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
