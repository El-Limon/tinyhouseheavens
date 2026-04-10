import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modelsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/models' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['entry', 'small', 'medium', 'large', 'special']),
    buildingArea: z.number(),
    livingArea: z.number(),
    terrace: z.number().optional(),
    dimensions: z.object({
      length: z.number(),
      width: z.number(),
    }),
    rooms: z.array(z.object({
      key: z.string(),
      area: z.number(),
    })),
    features: z.array(z.string()),
    hasGableRoof: z.boolean().default(false),
    hasSauna: z.boolean().default(false),
    hasTerrace: z.boolean().default(false),
    variants: z.array(z.union([
      z.string(),
      z.object({
        name: z.string(),
        image: z.string().optional(),
        description: z.object({
          nl: z.string(),
          fr: z.string(),
          en: z.string(),
        }).optional(),
      }),
    ])).optional(),
    heroImage: z.string(),
    galleryImages: z.array(z.string()),
    floorplanImage: z.string(),
    description: z.object({
      nl: z.string(),
      fr: z.string(),
      en: z.string(),
    }),
    tagline: z.object({
      nl: z.string(),
      fr: z.string(),
      en: z.string(),
    }),
    featured: z.boolean().default(false),
    sortOrder: z.number(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Tiny House Heavens'),
    image: z.string().optional(),
    tags: z.array(z.string()),
    locale: z.enum(['nl', 'fr', 'en']),
  }),
});

export const collections = {
  models: modelsCollection,
  blog: blogCollection,
};
