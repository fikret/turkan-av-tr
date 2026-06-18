import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Insight = CollectionEntry<'insights'>;

/** Belirli dildeki, taslak olmayan yazıları tarihe göre (yeni->eski) döndürür. */
export async function getInsights(lang: Lang): Promise<Insight[]> {
  const all = await getCollection('insights', ({ data }) => {
    return data.lang === lang && data.draft !== true;
  });
  return all.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/** Yaklaşık okuma süresi (dakika). */
export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
