import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * "Güncel" yazıları. Dosya adı: <slug>.<lang>.md (örn. ornek-yazi.tr.md).
 * `lang` ve `slug` alanları frontmatter'da zorunlu tutulur.
 */
const insights = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/insights',
    // Dil + slug ile benzersiz ID — aynı slug'ın TR/EN sürümleri çakışmasın.
    generateId: ({ data }) => `${data.lang}/${data.slug}`,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['tr', 'en']),
    slug: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Tüfek & Türkan Hukuk Bürosu'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
