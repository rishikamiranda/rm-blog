import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().max(160),
    author: z.string(),
    tags: z.array(z.string()),
    categories: z.array(z.enum(['projects', 'roamed', 'resources', "reflections"])),
    heroImage: image().optional(),
    heroImageAlt: z.string().default("Spatial presentation design artifact frame."),
    // UPDATED: Shifted from single image properties to a highly secure structured image array
    images: z.array(
      z.object({
        src: image(),
        alt: z.string()
      })
    ).optional(),
  }),
});

export const collections = { blog };

