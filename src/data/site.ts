import type { Lang } from '../i18n/ui';

export const contact = {
  addressLines: [
    'Caferağa Mah. Mühürdar Cad.',
    'Tezer Apt. No:81 Kat:4 Daire:5',
    'Moda, Kadıköy, İstanbul',
  ],
  /** Tek satır adres (harita / schema için) */
  addressFull:
    'Caferağa Mah. Mühürdar Cad. Tezer Apt. No:81 Kat:4 Daire:5 Moda, Kadıköy, İstanbul',
  locality: 'Kadıköy',
  region: 'İstanbul',
  country: 'TR',
  phoneDisplay: '0216 349 30 36',
  phoneHref: '+902163493036',
  email: 'info@turkan.av.tr',
  // Gömülü harita: Moda, Kadıköy (adres aramasıyla)
  mapsEmbed:
    'https://www.google.com/maps?q=Cafera%C4%9Fa%20Mah.%20M%C3%BCh%C3%BCrdar%20Cad.%20Moda%20Kad%C4%B1k%C3%B6y%20%C4%B0stanbul&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Cafera%C4%9Fa%20Mah.%20M%C3%BCh%C3%BCrdar%20Cad.%20Tezer%20Apt.%20Moda%20Kad%C4%B1k%C3%B6y%20%C4%B0stanbul',
  foundedYear: 2014,
};

/** Faydalı linkler — TR/EN başlıkla birlikte (dökümandan). */
export const usefulLinks: {
  url: string;
  title: { tr: string; en: string };
}[] = [
  {
    url: 'https://www.istanbulbarosu.org.tr/adliyeler/adliyerehberi',
    title: { tr: 'İstanbul Adliye Rehberi', en: 'Istanbul Courthouse Guide' },
  },
  {
    url: 'https://www.resmigazete.gov.tr/arsiv/',
    title: { tr: 'Resmî Gazete Arşivi', en: 'Official Gazette Archive' },
  },
  {
    url: 'https://www.ticaretsicil.gov.tr/',
    title: {
      tr: 'Türkiye Ticaret Sicil Gazetesi',
      en: 'Turkish Trade Registry Gazette',
    },
  },
  {
    url: 'https://istanbulbarosu.org.tr/haber/2026-yili-tavsiye-niteliginde-en-az-ucret-cizelgesi',
    title: {
      tr: 'İstanbul Barosu Ücret Tarifesi',
      en: 'Istanbul Bar Association Fee Schedule',
    },
  },
  {
    url: 'https://legalbank.net/belge/enflasyon-oranlari-tefe-ufe-tufe-oranlari/3225950/',
    title: {
      tr: 'Aylık ve Yıllık ÜFE / TÜFE Oranları (2005–2026)',
      en: 'Monthly & Annual PPI / CPI Rates (2005–2026)',
    },
  },
];

/** Ana menü tanımı (RouteKey i18n/utils ile eşleşir). */
export const navItems = [
  { key: 'home', labelKey: 'nav.home' },
  { key: 'about', labelKey: 'nav.about' },
  { key: 'practice', labelKey: 'nav.practice' },
  { key: 'team', labelKey: 'nav.team' },
  { key: 'insights', labelKey: 'nav.insights' },
  { key: 'links', labelKey: 'nav.links' },
  { key: 'contact', labelKey: 'nav.contact' },
] as const;

export function t2(value: { tr: string; en: string }, lang: Lang): string {
  return value[lang];
}
