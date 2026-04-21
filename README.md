Shantanu Upadhyay — Portfolio

A premium, dark-first personal portfolio for **Shantanu Upadhyay**, Frontend-Focused Full Stack Engineer (React.js · TypeScript · Node.js · AI/LLM integration). Built as a single-page React + Vite application with custom 3D, scroll-driven motion, and an interactive AI/LLM workflow simulation.

---

## Overview

This portfolio is engineered, not just designed. Every section is built around three themes that define Shantanu's craft:

1. **Performance engineering** — render optimization, memoization, virtualization, sub-200ms APIs.
2. **Production React at enterprise scale** — Wipro / HP global platforms, 1M+ records, zero-regression releases.
3. **AI/LLM integration** — full-stack ownership of React ↔ Ollama pipelines for real-time AI-assisted workflows.

The site itself is a proof of those themes: it ships with a 60fps 3D hero, lazy-loaded sections, motion that respects `prefers-reduced-motion`, and a typed, modular component architecture.

---

## Tech Stack

### Core

| Area              | Tooling                                                              |
| ----------------- | -------------------------------------------------------------------- |
| Framework         | **React 18** + **TypeScript** (strict)                               |
| Build tool        | **Vite**                                                             |
| Routing           | **wouter**                                                           |
| Styling           | **TailwindCSS v4** (CSS-first config, custom HSL design tokens)      |
| UI primitives     | **shadcn/ui** + **Radix UI** (accordion, dialog, tabs, tooltip, …)  |
| Icons             | **lucide-react**, **react-icons**                                   |
| Fonts             | Inter (sans), Space Grotesk (display), Space Mono (mono)             |

### Motion & 3D

| Area              | Tooling                                                              |
| ----------------- | -------------------------------------------------------------------- |
| Component motion  | **framer-motion**                                                    |
| 3D / WebGL        | **three**, **@react-three/fiber**, **@react-three/drei**            |
| Scroll reveals    | framer-motion `whileInView` + IntersectionObserver hooks             |
| Reduced motion    | `prefers-reduced-motion` honored throughout                          |

### Forms & Validation

| Area              | Tooling                                                              |
| ----------------- | -------------------------------------------------------------------- |
| Form state        | **react-hook-form**                                                  |
| Schema validation | **zod** (`zod/v4`) via `@hookform/resolvers`                         |

### Workspace

| Area              | Tooling                                                              |
| ----------------- | -------------------------------------------------------------------- |
| Monorepo          | **pnpm workspaces**                                                  |
| Node.js           | **v24**                                                              |
| Package manager   | **pnpm** (catalog-based version pinning)                             |

---

## Architecture

```
artifacts/portfolio/
├── index.html                    # SEO meta, OG tags, fonts
├── vite.config.ts                # PORT + BASE_PATH driven, Tailwind, Replit plugins
├── tsconfig.json                 # Strict TS, @/ path alias
├── package.json
└── src/
    ├── main.tsx                  # React entry
    ├── App.tsx                   # Router + layout shell
    ├── index.css                 # Design tokens (HSL), Tailwind v4 theme, elevate utilities
    ├── components/
    │   ├── canvas/               # Three.js / R3F scenes (HeroBackground, …)
    │   ├── layout/               # Nav, footer, page chrome
    │   ├── sections/             # Hero, About, Experience, Projects, AIShowcase,
    │   │                          Skills, Education, Contact
    │   └── ui/                   # shadcn/ui primitives (button, card, form, …)
    ├── data/                     # Resume content as typed data (experience, projects, skills)
    ├── hooks/                    # use-mobile, use-toast, custom motion hooks
    ├── lib/                      # utils, formatters, constants
    └── pages/
        └── not-found.tsx
```

**Conventions**

- Atomic design — UI primitives in `components/ui/`, composed sections in `components/sections/`.
- Resume content lives in `data/` as typed constants so copy edits never touch components.
- All imports use the `@/` alias rooted at `src/`.
- No `any`. No emojis in UI copy.

---

## Sections

1. **Hero** — 3D particle field background (R3F), animated typing role swap, dual CTAs.
2. **About** — First-person engineering philosophy.
3. **Experience** — Timeline with scannable impact metrics (40% fewer re-renders, sub-200ms APIs, 1M+ records).
4. **Projects** — Real-Time Stock Tracking · CodeBricks · Wipro Enterprise Data Platform Suite.
5. **AI/LLM Showcase** — Simulated React ↔ Ollama classification flow with mock terminal and animated Ingest → Classify → Enrich → Graph pipeline.
6. **Skills** — Categorized animated grid + live engineering metrics widget.
7. **Education** — RGPV, B.E. Computer Science.
8. **Contact** — Validated form (react-hook-form + zod) that posts to `/api/contact` and sends email via SMTP.

---

## Performance Strategy

- **Memoization** — `React.memo`, `useMemo`, `useCallback` on hot paths and motion-heavy children.
- **Code splitting** — heavy sections (3D scene, AI showcase) are lazy-loaded.
- **WebGL safety net** — `HeroBackground` feature-detects WebGL and falls back to a CSS gradient on unsupported environments via an error boundary.
- **Motion budget** — staggered reveals, no layout thrash, 60fps target, `prefers-reduced-motion` respected.
- **No layout shift** — explicit sizing on hero, project visuals, and form blocks.
- **Asset discipline** — bespoke generated imagery only; no oversized stock.

---

## Animation Strategy

- **framer-motion** owns component-level motion (entrance, hover, tap, exit).
- **Scroll-triggered reveals** via `whileInView` + viewport thresholds.
- **3D hero** uses `@react-three/fiber` with a slowly rotating point cloud — composed, not decorative.
- **Micro-interactions** — magnetic hovers, button elevations, success-state animation on contact submit.

---

## Setup

### Prerequisites

- **Node.js 24+**
- **pnpm 10+**

### Install

From the **monorepo root**:

```bash
pnpm install
```

### Run the portfolio (development)

The portfolio is a workspace package and is started via Replit workflows (which inject `PORT` and `BASE_PATH`). To run it directly outside Replit:

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
```

Then open `http://localhost:5173/`.

### Run the contact API (development)

The contact form now submits to the API server. Run it in a second terminal:

```bash
PORT=3001 pnpm --filter @workspace/api-server run dev
```

The frontend dev server proxies `/api/*` to `http://127.0.0.1:3001` by default. If your API runs elsewhere, set `API_PROXY_TARGET` before starting the portfolio app.

### Typecheck

```bash
pnpm run typecheck                          # whole workspace
pnpm --filter @workspace/portfolio run typecheck   # this package only
```

### Production build

```bash
pnpm --filter @workspace/portfolio run build
pnpm --filter @workspace/portfolio run serve   # preview the built output
```

Build output: `artifacts/portfolio/dist/public/`.

---

## Environment Variables

The portfolio frontend still uses `PORT` and `BASE_PATH`, and the contact form now also depends on SMTP configuration in the API server.

| Variable     | Required | Purpose                                                                 |
| ------------ | -------- | ----------------------------------------------------------------------- |
| `PORT`       | Yes      | Port the Vite dev/preview server binds to.                              |
| `BASE_PATH`  | Yes      | URL prefix the app is served under (e.g. `/`). Used as Vite `base`.     |
| `NODE_ENV`   | No       | `development` enables Replit dev plugins; `production` for builds.      |
| `REPL_ID`    | No       | Auto-set on Replit; gates the cartographer / dev-banner plugins.        |
| `API_PROXY_TARGET` | No | Dev-only proxy target for `/api`; defaults to `http://127.0.0.1:3001`. |
| `VITE_API_BASE_URL` | No | Absolute API base URL for deployed frontend builds when `/api` is not same-origin. |

API server variables:

| Variable            | Required | Purpose                                                            |
| ------------------- | -------- | ------------------------------------------------------------------ |
| `PORT`              | Yes      | Port the Express API server binds to.                              |
| `SMTP_HOST`         | Yes      | SMTP host, for example `smtp.gmail.com`.                           |
| `SMTP_PORT`         | Yes      | SMTP port, usually `465` for SSL or `587` for STARTTLS.            |
| `SMTP_SECURE`       | No       | Set to `true` for implicit SSL; defaults to `true` when port is `465`. |
| `SMTP_USER`         | Yes      | SMTP username.                                                     |
| `SMTP_PASS`         | Yes      | SMTP password or app password.                                     |
| `CONTACT_TO_EMAIL`  | Yes      | Inbox that should receive contact form submissions.                |
| `CONTACT_FROM_EMAIL`| No       | Sender address used by the server; defaults to `SMTP_USER`.        |

When running outside Replit, set the frontend `PORT` and `BASE_PATH` explicitly and provide the SMTP variables to the API server.

---

## Deployment

This package builds to a static bundle and can be served by any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, Replit Deployments, …).

**On Replit**

1. Click **Publish** in the workspace.
2. The platform runs `pnpm --filter @workspace/portfolio run build` and serves `dist/public/` over HTTPS.

**On Vercel / Netlify**

- Build command: `pnpm --filter @workspace/portfolio run build`
- Output directory: `artifacts/portfolio/dist/public`
- Install command: `pnpm install`
- Environment: set `BASE_PATH=/` and `PORT=3000` (or framework default).

---

## Code Quality

- **Strict TypeScript** — no `any`, no implicit returns.
- **Path aliases** — `@/*` → `src/*` for clean imports.
- **Modular sections** — each landing-page section is self-contained and individually testable.
- **Typed resume data** — content lives in `src/data/` so non-visual edits never touch JSX.

---

## Future Improvements

- MDX-driven case studies for each project with deep-dive write-ups.
- A blog section for engineering notes (perf debugging, LLM integration patterns).
- Rate-limiting and spam protection for the contact form.
- Live GitHub activity feed via the public GitHub API.
- View-transition API for cross-section navigation polish.
- Lighthouse CI in the build pipeline to lock the perf budget.

---

## Contact

- **Email** — shantanu.upadhyay14@gmail.com
- **Phone** — +91-79740 99695
- **Location** — Pune, India

---

Built with care. Engineered for speed.
