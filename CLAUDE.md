# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

CryptoWire, a small crypto news site built as a timed practical exercise. The briefs are in the repo
root and are the source of truth for scope:

- `spec.md` (part 1): header, latest articles list, price list, article page. Match the wireframe
  shape, don't polish. Plain `<img>` is fine, any readable date format is fine.
- `spec-2.md` (part 2): metered registration wall. Only the header and article page change, the
  homepage doesn't.
- `tickets/`: user stories with Given/When/Then acceptance criteria for part 2. They pin down the
  meter edge cases the spec leaves open (rereading an article is free, reads while logged in don't
  count, state survives a return visit, logging in from the wall reveals the body in place). Check
  them before changing meter or auth behaviour.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build, also type-checks
npm run lint     # ESLint 9 flat config (next core-web-vitals + typescript)
npx tsc --noEmit # type-check only
```

There is no test runner configured.

## Stack notes

- Next.js 16 App Router, React 19, TypeScript strict. `@/*` resolves to the repo root.
- Tailwind v4 via `@tailwindcss/postcss`. There is no `tailwind.config`; theme tokens live in the
  `@theme` block in `app/globals.css`.
- Next 16 differs from older versions in ways that show up here:
  - Route `params` is a Promise and must be awaited.
  - Pages and layouts are typed with the global `PageProps<"/route">` and `LayoutProps<"/">`
    helpers, generated into `.next/types` by `next dev` or `next build`. Run one of them after
    adding a route if the type is missing.
  - `error.tsx` receives `retry()` (re-fetch and re-render). `reset()` still exists but only clears
    the error state.
  - `cookies()` and `headers()` are async.

## Architecture

- All data comes from the exercise API at `https://eqdesk.vercel.app/api`, with no keys. The
  endpoints in use are `/articles` (list of `ArticleSummary`) and `/articles/:id` (`Article`, whose
  `body` is an HTML string rendered with `dangerouslySetInnerHTML`). The full API docs, including
  the price endpoint and TypeScript types, were shared as a URL at the start of the exercise and are
  not in the repo.
- Pages are async Server Components that fetch directly and throw on a non-OK response, which
  `app/error.tsx` catches. `app/loading.tsx` is the route-level loading state.
- The `ArticleSummary` and `Article` types are currently duplicated in `app/page.tsx` and
  `app/articles/[id]/page.tsx`.
- The header and price list are meant to be shared by the homepage and article page, so they belong
  in `app/layout.tsx` rather than in each page.
