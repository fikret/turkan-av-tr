import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** URL'den aktif dili çıkarır (örn. /en/team -> 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Verilen dil için çeviri fonksiyonu döndürür. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Yerelleştirilmiş yol üretir.
 * tr (varsayılan) için önek yok: localizedPath('tr', '/ekibimiz') -> '/ekibimiz'
 * en için önekli: localizedPath('en', '/ekibimiz') -> '/en/ekibimiz'
 */
export function localizedPath(lang: Lang, path: string): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/**
 * Sayfa yollarının TR<->EN karşılıkları.
 * Dil değiştiricide karşı dildeki eş sayfaya gitmek için kullanılır.
 */
export const routeMap = {
  home: { tr: '/', en: '/en/' },
  about: { tr: '/#hakkimizda', en: '/en/#hakkimizda' },
  practice: { tr: '/calisma-alanlari', en: '/en/practice-areas' },
  team: { tr: '/ekibimiz', en: '/en/team' },
  insights: { tr: '/guncel', en: '/en/insights' },
  links: { tr: '/faydali-linkler', en: '/en/useful-links' },
  contact: { tr: '/#iletisim', en: '/en/#iletisim' },
} as const;

export type RouteKey = keyof typeof routeMap;
