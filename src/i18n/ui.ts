export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'tr';

/**
 * Arayüz (menü, etiketler, başlıklar) çevirileri.
 * İçerik (ekip, çalışma alanları) src/data/* içinde tutulur.
 */
export const ui = {
  tr: {
    'site.name': 'Tüfek & Türkan Hukuk Bürosu',
    'site.short': 'Tüfek & Türkan',
    'site.tagline': 'Önleyici, çözüm odaklı ve etkin hukuki destek',

    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.practice': 'Çalışma Alanları',
    'nav.team': 'Ekibimiz',
    'nav.insights': 'Güncel',
    'nav.links': 'Faydalı Linkler',
    'nav.contact': 'İletişim',
    'nav.menu': 'Menü',

    'hero.title': 'Güvene dayalı, çözüm odaklı hukuki çözüm ortağınız',
    'hero.subtitle':
      '2014’ten bu yana gerçek ve tüzel kişilere önleyici, hızlı ve etkin hukuki destek sunuyoruz.',
    'hero.cta.practice': 'Çalışma Alanları',
    'hero.cta.contact': 'Bize Ulaşın',
    'hero.member': 'we connect üyesi',

    'about.title': 'Hakkımızda',
    'about.more': 'Devamını okuyun',

    'practice.title': 'Çalışma Alanları',
    'practice.subtitle':
      'Farklı hukuk dallarında danışmanlık ve dava takibi hizmeti veriyoruz.',
    'practice.all': 'Tüm Çalışma Alanları',

    'team.title': 'Ekibimiz',
    'team.subtitle': 'Deneyimli ve uzman avukat kadromuz.',
    'team.all': 'Ekibi Tanıyın',
    'team.areas': 'Çalışma Alanları',
    'team.education': 'Eğitim',
    'team.languages': 'Dil',
    'team.bar': 'Baro',
    'team.memberships': 'Üyelikler',
    'team.email': 'E-posta',

    'insights.title': 'Güncel',
    'insights.subtitle': 'Hukuki gelişmeler ve büromuzdan haberler.',
    'insights.all': 'Tüm Yazılar',
    'insights.empty': 'Yakında yeni içerikler eklenecektir.',
    'insights.back': 'Tüm yazılara dön',
    'insights.readingTime': 'dk okuma',

    'links.title': 'Faydalı Linkler',
    'links.subtitle': 'Sıkça başvurulan resmi kaynaklar ve rehberler.',
    'links.external': 'Yeni sekmede açılır',

    'contact.title': 'İletişim',
    'contact.subtitle': 'Bizimle iletişime geçin.',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.directions': 'Yol Tarifi Al',

    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.nav': 'Site Haritası',

    'lang.switch': 'Dil',

    'a11y.skip': 'İçeriğe geç',
  },
  en: {
    'site.name': 'Tüfek & Türkan Law Firm',
    'site.short': 'Tüfek & Türkan',
    'site.tagline': 'Preventive, solution-oriented and effective legal support',

    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.practice': 'Practice Areas',
    'nav.team': 'Our Team',
    'nav.insights': 'Insights',
    'nav.links': 'Useful Links',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.title': 'Your trusted, solution-oriented legal partner',
    'hero.subtitle':
      'Since 2014, we provide individuals and businesses with preventive, fast and effective legal support.',
    'hero.cta.practice': 'Practice Areas',
    'hero.cta.contact': 'Get in Touch',
    'hero.member': 'we connect member',

    'about.title': 'About Us',
    'about.more': 'Read more',

    'practice.title': 'Practice Areas',
    'practice.subtitle':
      'We provide advisory services and litigation across a wide range of legal fields.',
    'practice.all': 'All Practice Areas',

    'team.title': 'Our Team',
    'team.subtitle': 'Our experienced and specialised team of lawyers.',
    'team.all': 'Meet the Team',
    'team.areas': 'Practice Areas',
    'team.education': 'Education',
    'team.languages': 'Languages',
    'team.bar': 'Bar',
    'team.memberships': 'Memberships',
    'team.email': 'Email',

    'insights.title': 'Insights',
    'insights.subtitle': 'Legal developments and news from our firm.',
    'insights.all': 'All Articles',
    'insights.empty': 'New content will be added soon.',
    'insights.back': 'Back to all articles',
    'insights.readingTime': 'min read',

    'links.title': 'Useful Links',
    'links.subtitle': 'Frequently referenced official resources and guides.',
    'links.external': 'Opens in a new tab',

    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.directions': 'Get Directions',

    'footer.rights': 'All rights reserved.',
    'footer.nav': 'Sitemap',

    'lang.switch': 'Language',

    'a11y.skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['tr'];
