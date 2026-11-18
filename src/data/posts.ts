// Blog posts. Add a new object to publish a post; sitemap, pages and schema update automatically.
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  /** Links the post to a project page when it is a project write-up. */
  projectSlug?: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "seo-for-a-nextjs-developer-portfolio",
    title: "SEO for a Next.js developer portfolio: what actually matters",
    description:
      "A practical checklist for making a Next.js portfolio visible on Google: metadata, canonical URLs, sitemap, structured data and indexable pages.",
    date: "2026-11-18",
    tags: ["Next.js", "SEO", "Portfolio"],
    sections: [
      {
        heading: "Start with one canonical address",
        paragraphs: [
          "Search engines treat every hostname as a separate site. If your portfolio answers on a default platform address and on your own domain, rankings split between them. Pick one domain, set it as the metadata base, and redirect every other host to it.",
          "In the Next.js App Router, set metadataBase once in the root layout and give each page an alternates.canonical value. Every title, description and Open Graph URL then resolves against the same domain.",
        ],
      },
      {
        heading: "Give every page its own title and description",
        paragraphs: [
          "A single-page portfolio gives Google one thing to rank. Separate pages for services, projects, research and writing give it many. Each needs a unique title and a description that says what the page offers in plain words.",
          "generateMetadata lets project pages build their titles from data, so a new project gets correct metadata the moment it is added.",
        ],
      },
      {
        heading: "Use structured data",
        paragraphs: [
          "JSON-LD tells search engines what a page is. A portfolio benefits from Person, WebSite, ProfilePage, ProfessionalService, BreadcrumbList and FAQPage markup. It is invisible to visitors and is read directly by crawlers.",
          "Keep the markup truthful and in sync with what is on the page. Markup that contradicts visible content can be ignored or penalised.",
        ],
      },
      {
        heading: "Ship a sitemap and robots file",
        paragraphs: [
          "Next.js generates sitemap.xml and robots.txt from code. List every public page, then submit the sitemap in Google Search Console and Bing Webmaster Tools so new pages are found quickly.",
        ],
      },
      {
        heading: "Earn links, not just markup",
        paragraphs: [
          "On-page SEO makes a site eligible to rank. Links from other sites, such as community pages, social profiles and articles, are what push it up. Link your portfolio from every profile you own and publish useful writing others will reference.",
        ],
      },
    ],
  },
  {
    slug: "structured-data-json-ld-for-developers",
    title: "Structured data (JSON-LD) for developers: Person, Service and FAQ",
    description:
      "How JSON-LD helps search engines and AI tools understand who you are and what you offer, with the schema types a developer site should use.",
    date: "2026-11-18",
    tags: ["JSON-LD", "Schema.org", "SEO"],
    sections: [
      {
        heading: "What JSON-LD does",
        paragraphs: [
          "JSON-LD is a block of structured data in a page that describes its subject in a vocabulary from schema.org. Search engines and AI assistants use it to connect a name to a profession, a location, links and services.",
        ],
      },
      {
        heading: "The types worth adding",
        paragraphs: [
          "Person describes you: name, job title, location, contact point, profile links and the topics you know about. ProfessionalService describes what you can be hired for. FAQPage turns common questions into answers that can appear directly in results.",
          "Use @id values so the types reference each other. The service points to the person as its founder, and the profile page points to the person as its main entity.",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Mark up only what is visible on the page. Keep the data in one source file and generate both the page and the markup from it, so they cannot drift apart. Validate the result with Google's Rich Results Test after each deploy.",
        ],
      },
    ],
  },
  {
    slug: "building-a-visual-website-builder-with-react",
    title: "Building a visual drag-and-drop website builder with React and TypeScript",
    description:
      "How the Visual Website Builder was designed: component-driven rendering, centralized state, property inheritance and persistent serialization.",
    date: "2026-11-18",
    tags: ["React", "TypeScript", "Architecture", "State management"],
    projectSlug: "visual-website-builder",
    sections: [
      {
        heading: "The goal",
        paragraphs: [
          "The Visual Website Builder is a drag-and-drop editor for building websites with multi-page editing, reusable components, responsive layouts, nested containers and real-time style customization. The aim was a production-ready frontend that stays maintainable as features are added.",
        ],
      },
      {
        heading: "A component-driven rendering system",
        paragraphs: [
          "Every element on the canvas is described as data and rendered by a matching component. Because the editor and the output share the same tree, nested containers and reusable design blocks work the same way at any depth.",
          "Treating the page as a hierarchy also makes element management, such as moving, grouping and reordering, a matter of editing the tree rather than patching the DOM.",
        ],
      },
      {
        heading: "Centralized state and property inheritance",
        paragraphs: [
          "Editor state lives in one centralized store, so the canvas, the layers panel and the style controls always agree. Properties inherit from parents unless overridden, which keeps styling changes predictable and dynamic.",
        ],
      },
      {
        heading: "Persistence",
        paragraphs: [
          "Because the whole website is a serializable structure, saving and restoring it is straightforward. Keeping the model separate from the UI is what makes persistence, multi-page editing and future export possible.",
        ],
      },
      {
        heading: "What it taught",
        paragraphs: [
          "Scalability here came from modular design: small components, one source of truth for state, and a clear data model. Performance work followed from the same choices, since only the parts of the tree that change need to re-render.",
        ],
      },
    ],
  },
  {
    slug: "school-management-system-architecture",
    title: "A cloud school management system: admissions to invoices",
    description:
      "Notes on building a cloud-based school management platform with React, Node.js, REST APIs, role-based authentication and Nginx deployment.",
    date: "2026-11-18",
    tags: ["React", "Node.js", "REST", "Nginx", "Cloud"],
    projectSlug: "school-management-system",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "The School Management System is a cloud-based platform covering admissions, student records, attendance, scheduling, fee management, billing and invoice generation. One system replaces a set of separate paper and spreadsheet processes.",
        ],
      },
      {
        heading: "Frontend and backend split",
        paragraphs: [
          "Secure React.js modules talk to Node.js services over a RESTful API. Each area of the school, such as admissions, attendance and fees, is its own module, which keeps the codebase easy to extend.",
        ],
      },
      {
        heading: "Role-based authentication",
        paragraphs: [
          "Different people need different access: administrators, staff and others should only see and change what their role allows. Enforcing roles on the API, not just hiding screens, is what makes the access model secure.",
        ],
      },
      {
        heading: "Deployment and reliability",
        paragraphs: [
          "Nginx, production deployment pipelines and cloud infrastructure were configured to improve reliability, scalability and availability. A school depends on the system every day, so deployment work mattered as much as features.",
        ],
      },
    ],
  },
  {
    slug: "billing-management-platform-docker-nginx",
    title: "Shipping a billing platform with Docker, Nginx and Linux",
    description:
      "How a centralized billing platform was structured and deployed: multi-user access, invoices, printable reports and automated deployment.",
    date: "2026-11-18",
    tags: ["Docker", "Nginx", "Linux", "REST", "Deployment"],
    projectSlug: "billing-management-platform",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "The Billing Management Platform is a centralized system with multi-user access, invoice generation, printable reports, customer management and secure administrative controls.",
        ],
      },
      {
        heading: "Restructuring for maintainability",
        paragraphs: [
          "Maintainability improved by restructuring backend APIs, optimizing frontend state management and simplifying business workflows. Simpler workflows meant fewer states for users to get stuck in and less code to maintain.",
        ],
      },
      {
        heading: "Production deployment",
        paragraphs: [
          "Production services run with Docker behind Nginx on Linux servers, with automated deployment workflows. Containers make environments reproducible, Nginx handles routing and TLS, and automation removes manual release steps.",
        ],
      },
    ],
  },
  {
    slug: "mern-e-commerce-platform-build",
    title: "A complete MERN e-commerce platform: from catalog to checkout",
    description:
      "Design notes on a MERN stack e-commerce platform with JWT authentication, cart, order processing, payment workflow and an admin dashboard.",
    date: "2026-11-18",
    tags: ["MERN", "MongoDB", "JWT", "REST", "React"],
    projectSlug: "e-commerce-platform",
    sections: [
      {
        heading: "Features",
        paragraphs: [
          "The E-Commerce Platform includes JWT authentication, a product catalog, a shopping cart, order processing, a payment workflow and an administrative dashboard, built on MongoDB, Express.js, React.js and Node.js.",
        ],
      },
      {
        heading: "API and data design",
        paragraphs: [
          "Scalable REST APIs sit on MongoDB schemas designed around products, carts and orders. Getting the schemas right early keeps queries simple and the checkout flow consistent.",
        ],
      },
      {
        heading: "Authentication",
        paragraphs: [
          "JWT authentication gives stateless sessions for customers and a separate level of access for the administrative dashboard.",
        ],
      },
      {
        heading: "Frontend",
        paragraphs: [
          "Reusable React components and responsive interfaces were optimized for performance and maintainability, so the storefront works on phones as well as desktops.",
        ],
      },
    ],
  },
  {
    slug: "real-time-chat-with-socketio-and-websockets",
    title: "Real-time chat with Socket.IO and WebSockets: an event-driven design",
    description:
      "How a real-time messaging platform delivers instant messages, typing indicators and online presence using Socket.IO, Node.js and MongoDB.",
    date: "2026-11-18",
    tags: ["Socket.IO", "WebSockets", "Node.js", "MongoDB"],
    projectSlug: "real-time-chat-application",
    sections: [
      {
        heading: "Why events",
        paragraphs: [
          "A chat application is naturally event-driven: a message is sent, a user starts typing, someone goes online. Modelling these as events over WebSockets gives instant delivery without polling.",
        ],
      },
      {
        heading: "The stack",
        paragraphs: [
          "The Real-Time Chat Application uses Socket.IO and WebSockets with Node.js and Express.js, and stores data in MongoDB. Socket.IO adds reconnection and fallbacks on top of raw WebSockets.",
        ],
      },
      {
        heading: "Features",
        paragraphs: [
          "Instant messaging, typing indicators, online presence and authentication make up the core. Authenticating the socket connection itself keeps unauthenticated clients out of the event stream.",
        ],
      },
      {
        heading: "Scaling thoughts",
        paragraphs: [
          "An event-driven design scales by treating each event as small and independent. The same structure leaves room to add rooms, channels and more services later without rewriting the core.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
