import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { format } from 'date-fns';

const schema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  cover: z.string(),
  coverAlt: z.string(),
  date: z.coerce.date().transform((d) => format(d, 'MMMM dd, yyyy')),
  createdAt: z.coerce.string(),
  draft: z.boolean(),
  tags: z.array(z.string()).nullable(),
  url: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/data/blog/posts" }),
  schema
});


const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/data/projects" }),
  schema
});

export const collections = {
  blog,
  projects
};