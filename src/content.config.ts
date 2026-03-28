import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      language: z.enum(['en', 'id']),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()).optional(),
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
      author: z.string().optional(),
    }),
});

export const collections = {
  blog,
};
