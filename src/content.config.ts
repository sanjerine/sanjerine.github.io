import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const weeks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/weeks" }),
  schema: z.object({
    week: z.number().int().positive(),
    title: z.string(),
    summary: z.string(),
    unitCode: z.string().default("CITX0001"),
    published: z.boolean().default(true),
    releaseDate: z.coerce.date().optional(),
    estimatedHours: z.number().positive().optional(),
    prerequisites: z.array(z.string()).default([]),
    learningOutcomes: z.array(z.string()).default([]),
  }),
});

export const collections = { weeks };
