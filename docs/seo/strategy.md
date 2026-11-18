# SEO and authority strategy

Positioning: **I imagine it. I create it. I automate it.** A software creator, not a resume.

## Evidence policy

- No search volumes, keyword difficulty, rankings or competitor metrics appear here. None were available in the build environment, and none are invented.
- Every keyword below is a **hypothesis about intent**. Validate each in Google Search Console (Performance → Queries) after 4–8 weeks of impressions, and optionally with Google Keyword Planner (free with an Ads account) before committing to new articles.
- Claims on the site point only at projects in `src/data/projects.ts`. AI and agent service pages describe the *offer*; no shipped agent product is claimed.

## One page per intent (no cannibalisation)

| Page | Primary keyword | Secondary cluster | Intent |
|---|---|---|---|
| `/` | software creator | AI-first software creator, Muhammed Jasim | Brand / navigational |
| `/about` | Muhammed Jasim | software creator story | Brand / entity |
| `/capabilities` | what a software creator does | AI-driven software creator, technology creator | Informational / entity |
| `/projects` | software projects portfolio | SaaS, enterprise, real-time platforms | Evidence |
| `/services` | custom software and AI services | hub for the eight below | Commercial hub |
| `/services/custom-software-development` | custom software development | custom business software, bespoke software | Commercial |
| `/services/ai-powered-software-development` | AI-powered software development | AI-powered applications, AI-first software | Commercial |
| `/services/agentic-ai-development` | agentic AI development | AI agent development, custom AI agents, autonomous business systems | Emerging / commercial |
| `/services/business-process-automation` | business process automation | workflow automation software, automate repetitive operations | Operational |
| `/services/saas-product-development` | SaaS product development | build a SaaS from scratch, SaaS MVP | Founder |
| `/services/enterprise-software-solutions` | enterprise software development | enterprise application development, enterprise workflow automation | Organisational |
| `/services/web-application-development` | web application development | full-stack product development, Next.js development | Practical |
| `/services/ai-integration-workflow-automation` | AI workflow automation | AI integration services, intelligent automation | Integration |
| `/ai-automation` | AI vs automation, when to use | choosing automation, AI or agents | Informational hub |
| `/work-with-me`, `/contact` | (conversion; not keyword targets) | | Transactional |
| `/blog/*` | long-tail, see roadmap | | Informational |

Cannibalisation guard: `ai-powered` = AI is the product; `ai-integration` = AI added to existing systems; `agentic` = autonomous multi-step; `business-process-automation` = operations, AI optional. `/ai-automation` explains *which to choose* and links to all four.

## Long-tail targets (blog, case-study style)

Each needs real, original content from projects actually built.

- how to turn a business idea into software
- how to automate repetitive business operations (with and without AI)
- what is agentic AI and how is it different from a chatbot
- how to build a multi-tenant SaaS: auth, tenancy, real-time
- custom software vs off-the-shelf: how to decide
- how to design human approval into an AI agent
- from spreadsheet to system: automating a manual workflow

## 90-day publishing roadmap (quality over frequency: ~1 article per 1–2 weeks)

| Weeks | Article | Intent | Primary keyword | Links to | CTA |
|---|---|---|---|---|---|
| 1–2 | Custom software vs off-the-shelf: how to decide | Informational → commercial | custom software vs off-the-shelf | custom-software-development | Discuss an idea |
| 3–4 | Agentic AI explained: agents vs chatbots | Informational | what is agentic AI | agentic-ai-development, /ai-automation | Explore AI automation |
| 5–6 | Designing human approval into AI agents | Informational | AI agent guardrails | agentic-ai-development | Collaborate |
| 7–8 | Building a multi-tenant SaaS: lessons from the Form Platform | Case study | multi-tenant SaaS architecture | saas-product-development, project page | Discuss an idea |
| 9–10 | Automating alerts with acknowledgement: Organization Alert System | Case study | business process automation example | business-process-automation | Request software |
| 11–12 | From manual workflow to automated system: a mapping guide | Informational | automate manual workflows | business-process-automation | Explore automation |
| 13 | Quarter review: what the Search Console data says | Meta | — | /resources | — |

For each: outline = problem → approach → trade-offs → what I would do differently; include code or diagrams from real work.

## Authority building (all genuine)

1. Keep one identical name, title and tagline on GitHub, LinkedIn, SynCircle and the site (`sameAs` in the Person schema lists them).
2. Write READMEs for public repos as short case studies linking to the matching project page.
3. Publish case-study articles on dev.to / Hashnode with a canonical link back to the site.
4. Contribute to open-source projects you use; contributions create real mentions.
5. Give talks or workshops via SynCircle and link the recordings.
6. Never buy links, fabricate reviews or use link schemes.

## Implemented technical foundation

Canonical URLs on every page, unique titles/descriptions, one H1 per page, breadcrumbs (visible + JSON-LD), `sitemap.xml` (40 URLs, generated from data), `robots.txt`, security headers, host redirect from the old vercel.app domain, static prerendering, `lang="en"`, no hreflang (single English version).

Structured data: Person, WebSite, ProfilePage, ProfessionalService (site-wide); Service + WebPage + FAQPage + BreadcrumbList (each service); CollectionPage + ItemList (hubs); BlogPosting (articles); CreativeWork (projects). No ratings, reviews or prices are asserted.

## Verification and monitoring checklist

Set these environment variables (Vercel → Settings → Environment Variables), then redeploy:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-…`); analytics script loads only when set |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console HTML-tag token |
| `NEXT_PUBLIC_BING_VERIFICATION` | Bing Webmaster `msvalidate.01` token |
| `INDEXNOW_KEY` | IndexNow key; served at `/indexnow-key.txt` |

Steps:

- [ ] Search Console: add the `https://jasim.syncircle.org` property, verify, submit `/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console or verify with the token; submit the sitemap.
- [ ] IndexNow: after each deploy run `INDEXNOW_KEY=… node scripts/indexnow.mjs`.
- [ ] GA4: create a web stream, confirm Realtime shows a visit; mark `generate_lead`-style events once the contact form gets tracking.
- [ ] Rich Results Test and Schema Markup Validator on `/`, a service page and a blog post.
- [ ] PageSpeed Insights / Lighthouse on `/` and `/services/*` (mobile). Record scores; fix regressions before publishing new pages.
- [ ] URL Inspection: request indexing for the home page and each service page; confirm "Indexed" before claiming it.
- [ ] Monthly: Search Console queries, pages, coverage and Core Web Vitals report; adjust the keyword map from real data.

## SERP research notes (2026-11-18, manual web searches, no volume data)

- Head terms ("agentic AI development", "AI agent development") are dominated by agencies and platform vendors. Do not expect to rank for them soon; they are brand and offer pages.
- Informational long-tail ("AI agent vs chatbot", "custom software vs off-the-shelf", "automation vs AI automation") is answered mostly by explainers and decision guides. Articles are written to that intent, with guardrails/controls and a decision test as the differentiator.
- Treat all of this as hypotheses; confirm in Search Console after 4-8 weeks.

## Published articles (first three, in `src/data/posts.ts`)

1. custom-software-vs-off-the-shelf
2. ai-agents-vs-chatbots-and-how-to-keep-agents-in-check (merges roadmap items 2 and 3)
3. business-process-automation-vs-ai-automation

Each links to its service pages through `serviceSlugs`. They cite only projects that exist and state that the Organization Alert System is not an AI agent.

## Remaining opportunities

- Case-study articles (multi-tenant SaaS, alert acknowledgement) from the roadmap above.
- Real screenshots only exist for projects with a public live URL (2 of 11); add more when others are deployed.
- Add contact-form submit events to GA4.
- Add a dedicated `/case-studies` section once projects have verified outcomes to report.
- Privacy and Terms are plain-language drafts; have them reviewed before relying on them contractually.
