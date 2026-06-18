import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

import tugba from '../assets/team/tugba-tufek.jpeg';
import taner from '../assets/team/taner-turkan.jpeg';
import mustafa from '../assets/team/mustafa-duran.jpeg';
import suna from '../assets/team/suna-yemez.jpeg';
import ezgi from '../assets/team/ezgi-ileri-firat.jpeg';
import oyku from '../assets/team/oyku-cetinkaya.jpeg';

export interface TeamMember {
  slug: string;
  name: string;
  /** Ünvan(lar) — ana sayfada isim altında gösterilir. */
  title: { tr: string; en: string };
  email: string;
  photo: ImageMetadata | null;
  /** Çalışma alanları (TR/EN). */
  areas: { tr: string; en: string }[];
  education: { tr: string; en: string }[];
  languages: { tr: string; en: string };
  /** Baro / üyelik bilgisi (etiket + değer). */
  bar?: { label: { tr: string; en: string }; value: string };
}

export const team: TeamMember[] = [
  {
    slug: 'tugba-tufek',
    name: 'Av. Arb. Tuğba Tüfek',
    title: { tr: 'Ortak · Arabulucu', en: 'Partner · Mediator' },
    email: 'tugba@turkan.av.tr',
    photo: tugba,
    areas: [
      { tr: 'Bireysel ve Toplu İş Hukuku', en: 'Individual & Collective Labour Law' },
      { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
      { tr: 'İkamet ve Çalışma İzinleri', en: 'Residence & Work Permits' },
      { tr: 'Yabancılar ve Göç Hukuku', en: 'Immigration Law' },
      { tr: 'Medeni Hukuk (Aile ve Miras)', en: 'Civil Law (Family & Inheritance)' },
      { tr: 'Sözleşmeler Hukuku', en: 'Contracts Law' },
    ],
    education: [
      {
        tr: 'Ankara Üniversitesi Hukuk Fakültesi / 2004',
        en: 'Ankara University Faculty of Law / 2004',
      },
      {
        tr: 'Marmara Üniversitesi SBE — İş ve Sosyal Güvenlik Hukuku Yüksek Lisans (devam etmekte)',
        en: 'Marmara University — LL.M. in Labour & Social Security Law (ongoing)',
      },
    ],
    languages: { tr: 'Türkçe, İngilizce', en: 'Turkish, English' },
    bar: {
      label: { tr: 'Baro', en: 'Bar' },
      value: 'İstanbul Barosu / 2006',
    },
  },
  {
    slug: 'taner-turkan',
    name: 'Av. Taner Türkan',
    title: { tr: 'Ortak', en: 'Partner' },
    email: 'taner@turkan.av.tr',
    photo: taner,
    areas: [
      { tr: 'Ticaret Hukuku', en: 'Commercial Law' },
      { tr: 'Şirketler Hukuku', en: 'Corporate Law' },
      { tr: 'Bireysel ve Toplu İş Hukuku', en: 'Individual & Collective Labour Law' },
      { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
      { tr: 'Borçlar Hukuku', en: 'Law of Obligations' },
      { tr: 'Gayrimenkul Hukuku', en: 'Real Estate Law' },
      { tr: 'Fikri ve Sınai Mülkiyet Hukuku', en: 'Intellectual & Industrial Property Law' },
      { tr: 'İcra İflas Hukuku', en: 'Enforcement & Bankruptcy Law' },
      { tr: 'İdare ve Vergi Hukuku', en: 'Administrative & Tax Law' },
      { tr: 'Tüketici Hukuku', en: 'Consumer Law' },
      { tr: 'Rekabet Hukuku', en: 'Competition Law' },
      { tr: 'Sözleşmeler Hukuku', en: 'Contracts Law' },
    ],
    education: [
      {
        tr: 'Ankara Üniversitesi Hukuk Fakültesi / 2004',
        en: 'Ankara University Faculty of Law / 2004',
      },
    ],
    languages: { tr: 'Türkçe, İngilizce', en: 'Turkish, English' },
    bar: {
      label: { tr: 'Baro', en: 'Bar' },
      value: 'İstanbul Barosu / 2006',
    },
  },
  {
    slug: 'mustafa-duran',
    name: 'Av. Mustafa Duran',
    title: {
      tr: 'Avukat · Marka Patent Vekili · Bilirkişi (Fikri ve Sınai Haklar)',
      en: 'Lawyer · Trademark & Patent Attorney · Expert Witness (IP)',
    },
    email: 'mustafa@turkan.av.tr',
    photo: mustafa,
    areas: [
      { tr: 'Fikri ve Sınai Mülkiyet Hukuku', en: 'Intellectual & Industrial Property Law' },
      { tr: 'İnşaat ve Gayrimenkul Hukuku', en: 'Construction & Real Estate Law' },
      { tr: 'Sigorta Hukuku', en: 'Insurance Law' },
      { tr: 'Ceza Hukuku', en: 'Criminal Law' },
    ],
    education: [
      {
        tr: 'Ankara Üniversitesi Hukuk Fakültesi / 2003',
        en: 'Ankara University Faculty of Law / 2003',
      },
    ],
    languages: { tr: 'Türkçe, İngilizce', en: 'Turkish, English' },
    bar: {
      label: { tr: 'Baro', en: 'Bar' },
      value: 'Gaziantep Barosu / 2003',
    },
  },
  {
    slug: 'suna-yemez',
    name: 'Av. Suna Yemez',
    title: { tr: 'Avukat', en: 'Lawyer' },
    email: 'suna@turkan.av.tr',
    photo: suna,
    areas: [
      { tr: 'Bireysel ve Toplu İş Hukuku', en: 'Individual & Collective Labour Law' },
      { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
      { tr: 'Medeni Hukuk (Aile ve Miras)', en: 'Civil Law (Family & Inheritance)' },
      { tr: 'Ceza Hukuku', en: 'Criminal Law' },
      { tr: 'Ticaret Hukuku', en: 'Commercial Law' },
      { tr: 'İcra ve İflas Hukuku', en: 'Enforcement & Bankruptcy Law' },
      { tr: 'Yabancılar ve Göç Hukuku', en: 'Immigration Law' },
      { tr: 'İkamet ve Çalışma İzinleri', en: 'Residence & Work Permits' },
      { tr: 'Tüketici Hukuku', en: 'Consumer Law' },
      { tr: 'Borçlar Hukuku', en: 'Law of Obligations' },
    ],
    education: [
      {
        tr: 'Marmara Üniversitesi Hukuk Fakültesi / 2020',
        en: 'Marmara University Faculty of Law / 2020',
      },
    ],
    languages: { tr: 'Türkçe', en: 'Turkish' },
    bar: {
      label: { tr: 'Baro', en: 'Bar' },
      value: 'İstanbul Barosu / 2021',
    },
  },
  {
    slug: 'ezgi-ileri-firat',
    name: 'Av. Ezgi İleri Fırat',
    title: { tr: 'Avukat', en: 'Lawyer' },
    email: 'ezgi@turkan.av.tr',
    photo: ezgi,
    areas: [
      { tr: 'Bireysel ve Toplu İş Hukuku', en: 'Individual & Collective Labour Law' },
      { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
      { tr: 'Ticaret Hukuku', en: 'Commercial Law' },
      { tr: 'Sözleşmeler Hukuku', en: 'Contracts Law' },
      { tr: 'Kişisel Verilerin Korunması Hukuku', en: 'Data Protection Law' },
      { tr: 'Medeni Hukuk (Aile ve Miras)', en: 'Civil Law (Family & Inheritance)' },
      { tr: 'Rekabet Hukuku', en: 'Competition Law' },
      { tr: 'Tüketici Hukuku', en: 'Consumer Law' },
    ],
    education: [
      {
        tr: 'İstanbul Üniversitesi Hukuk Fakültesi / 2018',
        en: 'Istanbul University Faculty of Law / 2018',
      },
    ],
    languages: { tr: 'Türkçe, İngilizce', en: 'Turkish, English' },
    bar: {
      label: { tr: 'Üyelikler', en: 'Memberships' },
      value: 'İstanbul Barosu / 2019',
    },
  },
  {
    slug: 'oyku-cetinkaya',
    name: 'Av. Öykü Çetinkaya',
    title: { tr: 'Avukat', en: 'Lawyer' },
    email: 'oyku@turkan.av.tr',
    photo: oyku,
    areas: [
      { tr: 'Bireysel ve Toplu İş Hukuku', en: 'Individual & Collective Labour Law' },
      { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
      { tr: 'Medeni Hukuk (Aile ve Miras)', en: 'Civil Law (Family & Inheritance)' },
      { tr: 'İcra ve İflas Hukuku', en: 'Enforcement & Bankruptcy Law' },
      { tr: 'Yabancılar ve Göç Hukuku', en: 'Immigration Law' },
      { tr: 'İkamet ve Çalışma İzinleri', en: 'Residence & Work Permits' },
      { tr: 'Sigorta Hukuku', en: 'Insurance Law' },
      { tr: 'İdare ve Vergi Hukuku', en: 'Administrative & Tax Law' },
      { tr: 'Borçlar Hukuku', en: 'Law of Obligations' },
    ],
    education: [
      {
        tr: 'İstanbul Üniversitesi Hukuk Fakültesi / 2024',
        en: 'Istanbul University Faculty of Law / 2024',
      },
    ],
    languages: { tr: 'Türkçe', en: 'Turkish' },
    bar: {
      label: { tr: 'Baro', en: 'Bar' },
      value: 'İstanbul Barosu / 2026',
    },
  },
  {
    slug: 'suna-adikti',
    name: 'Suna Adikti',
    title: { tr: 'Asistan', en: 'Assistant' },
    email: 'asistan@turkan.av.tr',
    photo: null,
    areas: [],
    education: [],
    languages: { tr: 'Türkçe', en: 'Turkish' },
  },
];

export function memberTitle(m: TeamMember, lang: Lang): string {
  return m.title[lang];
}
