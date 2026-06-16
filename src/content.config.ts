import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(), 
    pubDate: z.coerce.date(), 
    description: z.string().max(160), 
    author: z.string(),
    tags: z.array(z.string()),
    heroImage: image().optional(),
    categories: z.array(z.enum(['projects', 'events', 'resources', "reflections"])),
    
    // NEW: Structural Gallery Schema Extensions
    has_gallery: z.boolean().optional().default(false),
    galleryImages: z.array(image()).optional(),
  }),
});

export const collections = { blog };