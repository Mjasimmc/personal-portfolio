# Graph Report - portfolios  (2026-11-13)

## Corpus Check
- 55 files · ~12,445 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 260 nodes · 642 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
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
- ProjectVisual.tsx
- PNPM Workspace Build
- .mcp.json
- Projects.tsx
- PostCSS Config
- Project: 3D portfolio site
- README.md
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `cn()` - 25 edges
2. `react` - 23 edges
3. `Reveal()` - 18 edges
4. `compilerOptions` - 16 edges
5. `SectionHeading()` - 15 edges
6. `next` - 14 edges
7. `useReducedMotion()` - 12 edges
8. `Expertise()` - 11 edges
9. `LinkButton()` - 11 edges
10. `ProjectVisual()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `JsonLd()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/jsonld.tsx
- `NotFound()` --calls--> `LinkButton()`  [EXTRACTED]
  src/app/not-found.tsx → src/components/ui/LinkButton.tsx
- `ProjectPage()` --calls--> `LinkButton()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/components/ui/LinkButton.tsx
- `ProjectPage()` --calls--> `ProjectVisual()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/components/ui/ProjectVisual.tsx
- `ProjectPage()` --calls--> `Reveal()`  [EXTRACTED]
  src/app/projects/[slug]/page.tsx → src/components/ui/Reveal.tsx

## Import Cycles
- None detected.

## Communities (13 total, 2 thin omitted)

### Community 0 - "Tooling & Dependencies Config"
Cohesion: 0.06
Nodes (40): eslintConfig, dependencies, gsap@^3.15.1, lenis@^1.3.27, next@16.4.6, react@19.3.0, react-dom@19.3.0, @react-three/drei@^10.7.9 (+32 more)

### Community 1 - "layout.tsx"
Cohesion: 0.12
Nodes (23): lenis, geistMono, geistSans, instrumentSerif, metadata, RootLayout(), viewport, Cursor() (+15 more)

### Community 2 - "data/portfolio.ts"
Cohesion: 0.10
Nodes (27): nextConfig, securityHeaders, next, alt, contentType, size, dynamicParams, generateMetadata() (+19 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "react"
Cohesion: 0.09
Nodes (35): react, @react-three/drei, @react-three/fiber, three, CameraRig(), HeroCanvas(), HeroScene, Composition() (+27 more)

### Community 5 - "ProjectVisual.tsx"
Cohesion: 0.43
Nodes (7): Builder(), Campus(), Commerce(), Ledger(), ProjectVisual(), Pulse(), ProjectVisual

### Community 6 - "PNPM Workspace Build"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 7 - ".mcp.json"
Cohesion: 0.38
Nodes (6): cmd, chrome-devtools, context7, playwright, @playwright/mcp, @upstash/context7-mcp

### Community 8 - "Projects.tsx"
Cohesion: 0.16
Nodes (28): metadata, NotFound(), Home(), Section(), MOTION_OK, About(), facts, Contact() (+20 more)

### Community 10 - "Project: 3D portfolio site"
Cohesion: 0.50
Nodes (3): 3D / perf rules, Project: 3D portfolio site, Token rules

### Community 11 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **2 isolated node(s):** `@upstash/context7-mcp`, `@playwright/mcp`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 76 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Tooling & Dependencies Config`, `Projects.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **What connects `@upstash/context7-mcp`, `@playwright/mcp` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Tooling & Dependencies Config` be split into smaller, more focused modules?**
  _Cohesion score 0.06155632984901278 - nodes in this community are weakly interconnected._
- **Why does `next` connect `data/portfolio.ts` to `Tooling & Dependencies Config`, `layout.tsx`, `react`, `Projects.tsx`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11932773109243698 - nodes in this community are weakly interconnected._
- **Should `data/portfolio.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09634146341463415 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._