# Workshop Authoring Guide

This project is an Astro + Tailwind site that publishes weekly workshop material from MDX files.

## Where content lives

- Weekly files: `src/content/weeks/week-XX.mdx`
- Collection schema: `src/content.config.ts`
- Week page template: `src/layouts/WeekLayout.astro`
- Reusable content block: `src/components/Callout.astro`

## Quick start

1. Create a new week file:

```bash
npm run new-week -- 4 "Functions and Problem Solving"
```

2. Fill in frontmatter and workshop content.
3. Set `published: true` when student-ready.
4. Run local checks:

```bash
npm run dev
npm run build
```

## Frontmatter contract

Every week entry must follow this structure:

```yaml
week: 4
title: Functions and Problem Solving
summary: One-line summary shown on cards and week header.
published: false
releaseDate: 2026-03-11
estimatedHours: 2
prerequisites:
  - Optional prerequisite 1
learningOutcomes:
  - Outcome 1
  - Outcome 2
```

## Authoring conventions

- Use clear section headings (`##`) so the right-side table of contents is useful.
- Keep code snippets runnable as pasted.
- Keep exercise instructions direct and testable.
- Use `<Callout tone="exercise" ...>` for tasks, `<Callout tone="challenge" ...>` for stretch work.
- Use ASCII characters by default unless the teaching example needs Unicode.

## Week publishing workflow

- Student-facing pages begin at `week >= 2`.
- `published: false` keeps the file in the repo, but hides it from student listings and routes.
- `published: true` makes the week visible in `/` and `/weeks/` and creates the student route.

## Deploying

The site deploys automatically via GitHub Actions from `main` using `.github/workflows/deploy.yml`.
