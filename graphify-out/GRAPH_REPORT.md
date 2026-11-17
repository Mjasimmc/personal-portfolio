# Graph Report - portfolios  (2026-11-17)

## Corpus Check
- 59 files · ~13,828 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 276 nodes · 687 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53ff372e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Tooling & Dependencies Config
- layout.tsx
- data/portfolio.ts
- TypeScript Config
- react
- data/portfolio.ts
- PNPM Workspace Build
- .mcp.json
- Projects.tsx
- PostCSS Config
- Project: 3D portfolio site
- README.md
- AGENTS.md
- Projects.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 29 edges
2. `react` - 25 edges
3. `Reveal()` - 18 edges
4. `compilerOptions` - 16 edges
5. `SectionHeading()` - 15 edges
6. `next` - 14 edges
7. `Expertise()` - 12 edges
8. `useReducedMotion()` - 12 edges
9. `LinkButton()` - 11 edges
10. `ProjectVisual()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `Cursor()`  [EXTRACTED]
  src/app/layout.tsx → src/components/layout/Cursor.tsx
- `RootLayout()` --calls--> `JsonLd()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/jsonld.tsx
- `NotFound()` --calls--> `LinkButton()`  [EXTRACTED]
  src/app/not-found.tsx → src/components/ui/LinkButton.tsx
- `Home()` --calls--> `Contact()`  [EXTRACTED]
  src/app/page.tsx → src/components/sections/Contact.tsx
- `ProjectPage()` --calls--> `LinkButton()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/components/ui/LinkButton.tsx

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "Tooling & Dependencies Config"
Cohesion: 0.07
Nodes (33): eslintConfig, gsap@^3.15.1, react-dom@19.3.0, devDependencies, eslint@^9, eslint-config-next@16.4.6, tailwindcss@4.3.3, @tailwindcss/postcss@^4.3.5 (+25 more)

### Community 1 - "layout.tsx"
Cohesion: 0.13
Nodes (20): lenis, geistMono, geistSans, instrumentSerif, metadata, RootLayout(), viewport, Footer() (+12 more)

### Community 2 - "data/portfolio.ts"
Cohesion: 0.10
Nodes (26): nextConfig, securityHeaders, next, alt, contentType, size, dynamicParams, generateMetadata() (+18 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "react"
Cohesion: 0.14
Nodes (21): dependencies, lenis@^1.3.27, next@16.4.6, react@19.3.0, @react-three/drei@^10.7.9, @react-three/fiber@^9.8.2, three@^0.187.0, @react-three/drei (+13 more)

### Community 5 - "data/portfolio.ts"
Cohesion: 0.08
Nodes (34): Props, SceneCanvas(), Props, SceneErrorBoundary, State, RING_BASE, RING_STEP, SkillNode (+26 more)

### Community 6 - "PNPM Workspace Build"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 7 - ".mcp.json"
Cohesion: 0.38
Nodes (6): cmd, chrome-devtools, context7, playwright, @playwright/mcp, @upstash/context7-mcp

### Community 8 - "Projects.tsx"
Cohesion: 0.23
Nodes (20): Home(), Section(), About(), facts, Education(), Experience(), Expertise(), Filter (+12 more)

### Community 10 - "Project: 3D portfolio site"
Cohesion: 0.50
Nodes (3): 3D / perf rules, Project: 3D portfolio site, Token rules

### Community 11 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 13 - "Projects.tsx"
Cohesion: 0.18
Nodes (18): react, metadata, NotFound(), MOTION_OK, Cursor(), Contact(), ProjectItem(), HeroCanvas() (+10 more)

## Knowledge Gaps
- **2 isolated node(s):** `@upstash/context7-mcp`, `@playwright/mcp`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 81 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Projects.tsx` to `Tooling & Dependencies Config`, `layout.tsx`, `react`, `data/portfolio.ts`, `Projects.tsx`?**
  _High betweenness centrality (0.199) - this node is a cross-community bridge._
- **What connects `@upstash/context7-mcp`, `@playwright/mcp` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tooling & Dependencies Config` be split into smaller, more focused modules?**
  _Cohesion score 0.07394957983193277 - nodes in this community are weakly interconnected._
- **Why does `next` connect `data/portfolio.ts` to `Tooling & Dependencies Config`, `layout.tsx`, `react`, `data/portfolio.ts`, `Projects.tsx`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Projects.tsx` to `layout.tsx`, `data/portfolio.ts`, `data/portfolio.ts`, `Projects.tsx`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Should `data/portfolio.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09851551956815115 - nodes in this community are weakly interconnected._