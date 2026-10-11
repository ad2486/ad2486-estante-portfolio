import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Field names here must match public/admin/config.yml (the CMS writes these files).
const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(["diario", "tecnico"])).default([]),
    draft: z.boolean().default(false),
  }),
});

// The body is the optional review; books without one only show up on the shelf.
const livros = defineCollection({
  loader: glob({ base: "./src/content/livros", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().int().min(1).max(5),
    finished: z.coerce.date(),
    cover: z.string().optional(),
  }),
});

export const collections = { posts, livros };
