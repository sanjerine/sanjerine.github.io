# AGENTS: Workshop Content Rules

This file defines how LLMs and coding agents should create and update workshop content in this repository.

## Primary objective

Produce weekly Python workshop material that aligns with CITX0001 lecture concepts and can be published directly to students.

## Project map

- Content entries: `src/content/weeks/*.mdx`
- Content schema: `src/content.config.ts`
- Week route: `src/pages/weeks/[slug].astro`
- Week layout: `src/layouts/WeekLayout.astro`
- Reusable callout component: `src/components/Callout.astro`
- Authoring guide: `docs/WORKSHOP_AUTHORING.md`

## Required frontmatter

Every week file must include:

- `week` (positive integer)
- `title` (string)
- `summary` (string)
- `published` (boolean)

Optional fields:

- `releaseDate` (YYYY-MM-DD)
- `estimatedHours` (number)
- `prerequisites` (string array)
- `learningOutcomes` (string array)

## Content quality constraints

1. Keep writing direct and student-friendly.
2. Include at least one runnable Python code block.
3. Include at least one exercise block using `Callout` with `tone="exercise"`.
4. Keep code examples consistent with lecture theory and notational conventions.
5. Default to ASCII unless Unicode is required by the concept being taught.

## Structural conventions

- Use `##` headings for major sections so table of contents remains useful.
- Pair concept explanation with practical coding activity.
- Add a final section with next steps or additional practice links.

## Publishing workflow

- Draft content with `published: false`.
- Switch to `published: true` only when reviewed.
- Verify locally with:

```bash
npm run build
```

## Creating new weeks

Preferred command:

```bash
npm run new-week -- <week-number> "Week title"
```

Then edit the generated file in `src/content/weeks/`.
