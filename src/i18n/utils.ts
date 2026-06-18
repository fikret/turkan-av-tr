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
 * Verilen kök-mutlak yola dağıtım `base` önekini ekler.
 * base '/' iken no-op; demo (örn. '/turkan-av-tr/') iken önekler.
 * withBase('/ekibimiz') -> '/turkan-av-tr/ekibimiz'
 */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // '' veya '/turkan-av-tr'
  const p = path.startsWith('/') ? path : `/${path}`;
  const out = `${base}${p}`;
  return out === '' ? '/' : out;
}

/**
 * Yerelleştirilmiş yol üretir.
 * tr (varsayılan) için önek yok: localizedPath('tr', '/ekibimiz') -> '/ekibimiz'
 * en için önekli: localizedPath('en', '/ekibimiz') -> '/en/ekibimiz'
 */
export function localizedPath(lang: Lang, path: string): string {
  const clean = '/' + path.replace(/^\/+/, '');
  const logical = lang === defaultLang ? clean : clean === '/' ? '/en/' : `/en${clean}`;
  return withBase(logical);
}

/**
 * Sayfa yollarının TR<->EN karşılıkları (base-duyarlı).
 * Dil değiştiricide ve menüde kullanılır.
 */
export const routeMap = {
  home: { tr: withBase('/'), en: withBase('/en/') },
  about: { tr: withBase('/#hakkimizda'), en: withBase('/en/#hakkimizda') },
  practice: { tr: withBase('/calisma-alanlari'), en: withBase('/en/practice-areas') },
  team: { tr: withBase('/ekibimiz'), en: withBase('/en/team') },
  insights: { tr: withBase('/guncel'), en: withBase('/en/insights') },
  links: { tr: withBase('/faydali-linkler'), en: withBase('/en/useful-links') },
  contact: { tr: withBase('/#iletisim'), en: withBase('/en/#iletisim') },
} as const;

export type RouteKey = keyof typeof routeMap;
