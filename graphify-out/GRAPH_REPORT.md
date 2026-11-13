# Graph Report - portfolios  (2026-11-13)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 105 nodes · 153 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 50,821 input · 131 output

## Graph Freshness
- Built from commit: `d1e28608`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Tooling & Dependencies Config
- Root Layout & Project Pages
- Site Metadata & Home
- TypeScript Config
- Runtime Dependencies
- NPM Scripts
- PNPM Workspace Build
- Next Config & Headers
- Not Found Page
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `next` - 11 edges
3. `absoluteUrl()` - 8 edges
4. `site` - 7 edges
5. `ProjectPage()` - 5 edges
6. `JsonLd()` - 5 edges
7. `scripts` - 5 edges
8. `getProject()` - 4 edges
9. `breadcrumbSchema()` - 4 edges
10. `projectSchema()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `JsonLd()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/jsonld.tsx
- `breadcrumbSchema()` --calls--> `absoluteUrl()`  [EXTRACTED]
  src/lib/jsonld.tsx → src/lib/site.ts
- `projectSchema()` --calls--> `absoluteUrl()`  [EXTRACTED]
  src/lib/jsonld.tsx → src/lib/site.ts
- `robots()` --calls--> `absoluteUrl()`  [EXTRACTED]
  src/app/robots.ts → src/lib/site.ts
- `sitemap()` --calls--> `absoluteUrl()`  [EXTRACTED]
  src/app/sitemap.ts → src/lib/site.ts

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 0 - "Tooling & Dependencies Config"
Cohesion: 0.12
Nodes (22): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.6, tailwindcss@4.3.3, @tailwindcss/postcss@^4.3.5, @types/node@^20, @types/react@^19 (+14 more)

### Community 1 - "Root Layout & Project Pages"
Cohesion: 0.16
Nodes (15): geistMono, geistSans, metadata, RootLayout(), viewport, dynamicParams, generateMetadata(), ProjectPage() (+7 more)

### Community 2 - "Site Metadata & Home"
Cohesion: 0.19
Nodes (9): next, alt, contentType, size, robots(), sitemap(), projects, absoluteUrl() (+1 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "Runtime Dependencies"
Cohesion: 0.33
Nodes (6): dependencies, next@16.4.6, react@19.3.0, react-dom@19.3.0, react, react-dom

### Community 5 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 6 - "PNPM Workspace Build"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Site Metadata & Home` to `Tooling & Dependencies Config`, `Root Layout & Project Pages`, `Runtime Dependencies`, `Next Config & Headers`, `Not Found Page`?**
  _High betweenness centrality (0.360) - this node is a cross-community bridge._
- **Should `Tooling & Dependencies Config` be split into smaller, more focused modules?**
  _Cohesion score 0.11594202898550725 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `NPM Scripts` to `Tooling & Dependencies Config`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._