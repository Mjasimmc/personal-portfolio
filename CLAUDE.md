# Project: 3D portfolio site
Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4 · three + @react-three/fiber + drei · GSAP/ScrollTrigger · Lenis · GLSL for custom shaders · GLB assets in `public/models`. pnpm only.
Read `AGENTS.md` and the matching `node_modules/next/dist/docs/` page before Next-specific code.

## 3D / perf rules
- R3F scenes are client components; load heavy ones with `next/dynamic` (`ssr: false`).
- Compress GLBs (draco/meshopt), cap DPR (`dpr={[1,2]}`), reuse geometries/materials, dispose on unmount.
- Drive animation from `useFrame`/GSAP, never React state per frame. Respect `prefers-reduced-motion`.
- Add a dependency only when a task needs it.

## Token rules
- Order: `graphify query` → targeted read of pointed lines → edit → diagnostics → `graphify update .`.
- Don't re-read unchanged files or list whole directories; reuse existing components/utils.
- Docs: Context7 for the one API needed (library id + narrow topic), not whole libraries.
- Screenshots/Chrome DevTools/Playwright only to verify a visual or perf change, once per change.
- Short replies, no restating context. Subagents only for genuinely parallel work.
- Task-specific notes go in `docs/tasks/*.md`, not here.
