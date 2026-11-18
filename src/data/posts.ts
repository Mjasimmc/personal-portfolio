// Blog posts. Add a new object to publish a post; sitemap, pages and schema update automatically.
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  /** Links the post to a project page when it is a project write-up. */
  projectSlug?: string;
  /** Service pages this post supports; rendered as links under the article. */
  serviceSlugs?: string[];
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
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom software vs off-the-shelf: how to decide for your business",
    description:
      "A practical way to decide between buying a ready-made product and building custom software: test one real workflow, compare multi-year cost, and plan the exit route before you commit.",
    date: "2026-11-18",
    tags: ["Custom software", "Decision guide", "Business software"],
    serviceSlugs: ["custom-software-development", "enterprise-software-solutions"],
    sections: [
      {
        heading: "Start from a default: buy first",
        paragraphs: [
          "For common needs such as accounting, payroll or email, a mature product almost always wins. It costs less, ships in weeks and is maintained by someone else. Custom software has to earn its place by doing something a product cannot.",
          "So the useful question is not whether custom software is better. It is whether your process is different enough that bending it to a product costs more than building around it.",
        ],
      },
      {
        heading: "Test one real workflow, not a feature list",
        paragraphs: [
          "Feature comparisons hide the problem. Instead, take a single real order, request or report and walk it through the product you are considering, step by step. Note every exception, side spreadsheet, manual copy and workaround it needs.",
          "If the product handles it cleanly, buy it. If you keep inventing workarounds for the part of the process that makes your business distinctive, that is the signal that custom software is worth a closer look.",
        ],
      },
      {
        heading: "Compare cost over years, not at the start",
        paragraphs: [
          "A subscription looks cheap in month one. Add it up over three to five years, multiplied by the users you expect to have, and add integration work, admin time and the cost of leaving. Custom software has its own total: the build, then the running, hosting and changes that follow.",
          "Neither number is fixed in advance, so treat both as ranges. Ask for a small discovery phase or prototype before committing to a full build; it turns a guess into evidence.",
        ],
      },
      {
        heading: "Plan the exit route either way",
        paragraphs: [
          "With a product, confirm you can export all of your data in a usable form. With custom software, confirm you receive the source code and documentation, so the system does not depend on one person's memory.",
          "A hybrid is common and often best: use products for the standard parts of the business and build custom software only for the workflow that gives you an edge.",
        ],
      },
      {
        heading: "How I approach it",
        paragraphs: [
          "I start with the workflow rather than the technology, and I will tell you when a product already solves the problem. Where custom is justified, I build it end to end and hand over code and documentation. Examples of that approach are the Billing Management Platform and the School Management System.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-vs-chatbots-and-how-to-keep-agents-in-check",
    title: "AI agents vs chatbots, and how to keep an agent under control",
    description:
      "The practical difference between a chatbot and an AI agent, and the engineering controls an agent needs before it can act on your systems: narrow tools, permissions, audit trails and approval gates.",
    date: "2026-11-18",
    tags: ["Agentic AI", "AI agents", "Automation"],
    serviceSlugs: ["agentic-ai-development", "ai-integration-workflow-automation"],
    sections: [
      {
        heading: "The difference is action",
        paragraphs: [
          "A chatbot answers. You ask where your order is, it replies with a status and stops. An AI agent is given a goal and can plan steps, call tools and carry the task through: check the shipment, spot the delay, notify the customer, record what it did.",
          "The two overlap. A chatbot is often the interface to an agent, and a chatbot becomes an agent once it gains planning, tool access and memory. The label matters less than a simple question: can this system change something in the real world?",
        ],
      },
      {
        heading: "Why that changes the engineering",
        paragraphs: [
          "A system that only talks can be wrong and embarrassing. A system that acts can be wrong and expensive: a refund sent twice, a record deleted, a message sent to the wrong customer. Everything that matters about building an agent follows from that gap.",
        ],
      },
      {
        heading: "Four controls an agent needs",
        paragraphs: [
          "Narrow tools. Give the agent only the specific actions it needs, each with a precise description and validated inputs, not open access to a database or an inbox.",
          "Explicit permissions. Decide per action what the agent may do alone, what needs a person, and what it may never do. Treat permissions as code, not as instructions in a prompt.",
          "An audit trail. Record every tool call, its inputs, its result and the reason the agent gave. When something goes wrong, you need to reconstruct what happened.",
          "Approval gates. Put a human confirmation before anything costly or irreversible. Start with approval on every action and widen autonomy only for steps that have proven reliable.",
        ],
      },
      {
        heading: "Most of it is ordinary software engineering",
        paragraphs: [
          "Reliable agents lean on familiar techniques: queues and retries, actions that are safe to repeat, schema-checked tool calls, real-time status for the people watching, and tests built from real cases. I used this kind of thinking in the Organization Alert System, where scheduled alerts must be delivered and then explicitly acknowledged, so a team has proof of receipt.",
          "That project is not an AI agent, and I do not present it as one. It is the delivery, retry and acknowledgement foundation that an agent's actions would need to sit on.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick one workflow, give the agent a handful of tools, require approval for each action and keep a set of real examples to measure whether it succeeds. If it does not clearly beat the manual process on those examples, you have learned that cheaply.",
        ],
      },
    ],
  },
  {
    slug: "business-process-automation-vs-ai-automation",
    title: "Business process automation vs AI automation: which one does your process need?",
    description:
      "A decision guide for choosing between rules-based business process automation and AI-driven automation, with a two-question test and guidance on combining them safely.",
    date: "2026-11-18",
    tags: ["Business automation", "AI automation", "Workflow"],
    serviceSlugs: ["business-process-automation", "ai-integration-workflow-automation"],
    sections: [
      {
        heading: "They solve different kinds of problems",
        paragraphs: [
          "Business process automation runs fixed rules: when an invoice is approved, send it; when a deadline passes, remind the owner. It is predictable, fast and easy to test. AI automation handles work that requires reading or judgement: understanding a free-text request, extracting fields from a document, drafting a reply.",
          "Most real processes contain both kinds of step, which is why the useful question is not which approach is better, but which step needs which.",
        ],
      },
      {
        heading: "A two-question test",
        paragraphs: [
          "First: is the input always structured? Second: is the path through the process fixed? If both answers are yes, plain automation is the right tool and AI adds cost and uncertainty for no gain. If either answer is no, that step likely needs AI to interpret or decide.",
        ],
      },
      {
        heading: "Combine them, with rules in charge",
        paragraphs: [
          "The dependable pattern is to let rules orchestrate the process and call AI only for the steps that need it. The AI reads the document or classifies the request; the rules then validate the result and decide what happens next. A step that fails validation goes to a person.",
          "Keep a human on decisions that are rare but costly. Automation is best at the high-volume, low-risk middle.",
        ],
      },
      {
        heading: "Fix the process before you automate it",
        paragraphs: [
          "Automating a confusing process only makes the confusion faster. Map how the work really runs, remove the steps that exist out of habit, and mark where judgement is truly required. Often half of the benefit appears before any software is written.",
        ],
      },
      {
        heading: "Make it accountable",
        paragraphs: [
          "Whatever you choose, keep a record of what ran and when, alert someone when a step fails, and require acknowledgement where a person must confirm. The Billing Management Platform and the Organization Alert System are built on this principle of automated operations with a visible trail.",
          "If you are unsure which parts of your operation to automate, start with the guide on the AI and automation page, then get in touch with one real workflow.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
