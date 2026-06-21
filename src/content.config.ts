import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // FIXED: Expanded glob tracking pattern to fully parse both .md and .mdx formats
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(), 
    pubDate: z.coerce.date(), 
    description: z.string().max(160), 
    author: z.string(),
    tags: z.array(z.string()),
    heroImage: image().optional(),
    // NEW: Strict constraint validation for descriptive structural image tagging
    heroImageAlt: z.string().default("Spatial presentation design artifact frame."),
    categories: z.array(z.enum(['projects', 'roamed', 'resources', "reflections"])),
  }),
});

export const collections = { blog };

