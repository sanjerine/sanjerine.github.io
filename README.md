# CITX0001 Workshop Site

This repository hosts a weekly workshop website for CITX0001, built with Astro and Tailwind and designed for GitHub Pages.

## Stack

- Astro 5 (static output)
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- MDX content collections for weekly workshop pages

## Project structure

- `src/content/weeks/` - weekly workshop content in MDX
- `src/content.config.ts` - collection schema and validation
- `src/pages/weeks/[slug].astro` - dynamic week route
- `src/layouts/WeekLayout.astro` - consistent page shell for workshop content
- `src/components/Callout.astro` - reusable info/exercise/challenge block
- `docs/WORKSHOP_AUTHORING.md` - authoring guide for staff and LLMs
- `AGENTS.md` - machine-readable generation rules

## Local development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Adding a new week

Use the scaffold script:

```bash
npm run new-week -- 4 "Functions and Problem Solving"
```

Then edit the generated file in `src/content/weeks/` and set `published: true` when ready.

## Deployment (GitHub Pages)

Deployment is handled by `.github/workflows/deploy.yml` using `withastro/action@v5`.

In GitHub repo settings, set **Pages -> Source** to **GitHub Actions**.

For a user site repository named `sanjerine.github.io`, Astro only needs:

- `site: "https://sanjerine.github.io"`

No `base` value is required unless this is moved to a non-user-site repository.

## Notes

- Legacy file `week2.html` is kept in the repo for reference while content is migrated into MDX.
