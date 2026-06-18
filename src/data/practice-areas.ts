import type { Lang } from '../i18n/ui';

export interface PracticeArea {
  slug: string;
  name: { tr: string; en: string };
  description: { tr: string; en: string };
  /** Soyut görsel için gradyan renk çifti (telifsiz, CSS tabanlı). */
  gradient: [string, string];
}

/**
 * 17 çalışma alanı (dökümandan). Görseller; modern, soyut, grafik-olmayan
 * CSS gradyanlarıyla üretilir — istenirse satın alınan telifli fotoğraflarla
 * değiştirilebilir (PracticeVisual bileşenindeki `image` desteği ile).
 */
export const practiceAreas: PracticeArea[] = [
  {
    slug: 'ticaret-hukuku',
    name: { tr: 'Ticaret Hukuku', en: 'Commercial Law' },
    description: {
      tr: 'Ticari işletmeler, kıymetli evrak ve ticari sözleşmeler dahil ticari ilişkilerin her aşamasında danışmanlık ve uyuşmazlık çözümü.',
      en: 'Advisory and dispute resolution across all stages of commercial relationships, including commercial enterprises, negotiable instruments and commercial contracts.',
    },
    gradient: ['#0f1b2d', '#33455e'],
  },
  {
    slug: 'sirketler-hukuku',
    name: { tr: 'Şirketler Hukuku', en: 'Corporate Law' },
    description: {
      tr: 'Şirket kuruluşundan tasfiyeye, birleşme-devir ve hisse devirlerine kadar kurumsal yapılanma ve yönetişim desteği.',
      en: 'Support for corporate structuring and governance, from incorporation to liquidation, mergers, acquisitions and share transfers.',
    },
    gradient: ['#1b2a40', '#3d5170'],
  },
  {
    slug: 'is-hukuku',
    name: {
      tr: 'Bireysel ve Toplu İş Hukuku',
      en: 'Individual & Collective Labour Law',
    },
    description: {
      tr: 'İş sözleşmeleri, işe iade, kıdem-ihbar ve toplu iş ilişkileri dahil işçi-işveren uyuşmazlıklarında danışmanlık ve dava takibi.',
      en: 'Advisory and litigation in employer–employee disputes, including employment contracts, reinstatement, severance and collective labour relations.',
    },
    gradient: ['#2a3a52', '#516987'],
  },
  {
    slug: 'sosyal-guvenlik-hukuku',
    name: { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
    description: {
      tr: 'SGK uyuşmazlıkları, hizmet tespiti, iş kazası ve meslek hastalığı süreçlerinde hukuki destek.',
      en: 'Legal support in social security disputes, service determination, occupational accidents and occupational diseases.',
    },
    gradient: ['#23364a', '#46627c'],
  },
  {
    slug: 'gayrimenkul-hukuku',
    name: { tr: 'Gayrimenkul Hukuku', en: 'Real Estate Law' },
    description: {
      tr: 'Tapu, kira, kentsel dönüşüm, inşaat sözleşmeleri ve gayrimenkul yatırımlarında danışmanlık ve uyuşmazlık çözümü.',
      en: 'Advisory and dispute resolution in title deeds, leases, urban transformation, construction contracts and real estate investments.',
    },
    gradient: ['#3a3326', '#6f5f44'],
  },
  {
    slug: 'fikri-sinai-mulkiyet-hukuku',
    name: {
      tr: 'Fikri ve Sınai Mülkiyet Hukuku',
      en: 'Intellectual & Industrial Property Law',
    },
    description: {
      tr: 'Marka, patent, tasarım ve telif haklarının tescili, korunması ve ihlal davalarında uzman temsil.',
      en: 'Expert representation in the registration, protection and enforcement of trademarks, patents, designs and copyrights.',
    },
    gradient: ['#2d2a3e', '#564f72'],
  },
  {
    slug: 'medeni-hukuk',
    name: {
      tr: 'Medeni Hukuk (Aile ve Miras)',
      en: 'Civil Law (Family & Inheritance)',
    },
    description: {
      tr: 'Boşanma, velayet, mal rejimi, vesayet ve miras paylaşımı süreçlerinde hassas ve çözüm odaklı yaklaşım.',
      en: 'A sensitive, solution-oriented approach to divorce, custody, matrimonial property, guardianship and inheritance matters.',
    },
    gradient: ['#3a2630', '#6f4759'],
  },
  {
    slug: 'borclar-hukuku',
    name: {
      tr: 'Borçlar Hukuku (Tazminat ve Kira)',
      en: 'Law of Obligations (Compensation & Lease)',
    },
    description: {
      tr: 'Sözleşmeden ve haksız fiilden doğan tazminat talepleri, kira ilişkileri ve özel borç ilişkilerinde hukuki destek.',
      en: 'Legal support in compensation claims arising from contracts and torts, lease relationships and special obligations.',
    },
    gradient: ['#26303a', '#48606f'],
  },
  {
    slug: 'icra-iflas-hukuku',
    name: { tr: 'İcra İflas Hukuku', en: 'Enforcement & Bankruptcy Law' },
    description: {
      tr: 'Alacak takibi, haciz, iflas ve konkordato süreçlerinde alacaklı ve borçlu tarafların etkin temsili.',
      en: 'Effective representation of creditors and debtors in debt collection, attachment, bankruptcy and composition proceedings.',
    },
    gradient: ['#0f1b2d', '#2a3a52'],
  },
  {
    slug: 'yabancilar-goc-hukuku',
    name: { tr: 'Yabancılar ve Göç Hukuku', en: 'Immigration Law' },
    description: {
      tr: 'Yabancıların Türkiye’deki hukuki statüsü, vatandaşlık, sınır dışı ve uluslararası koruma süreçlerinde danışmanlık.',
      en: 'Advisory on the legal status of foreigners in Türkiye, citizenship, deportation and international protection procedures.',
    },
    gradient: ['#23364a', '#3d5170'],
  },
  {
    slug: 'ikamet-calisma-izinleri',
    name: {
      tr: 'İkamet ve Çalışma İzinleri',
      en: 'Residence & Work Permits',
    },
    description: {
      tr: 'Yabancı uyruklu çalışanlar ve aileleri için ikamet ve çalışma izni başvuru ve yenileme süreçlerinin yönetimi.',
      en: 'Management of residence and work permit applications and renewals for foreign employees and their families.',
    },
    gradient: ['#1b2a40', '#46627c'],
  },
  {
    slug: 'idare-vergi-hukuku',
    name: { tr: 'İdare ve Vergi Hukuku', en: 'Administrative & Tax Law' },
    description: {
      tr: 'İdari işlemlere karşı iptal ve tam yargı davaları ile vergi uyuşmazlıklarında uzlaşma ve dava süreçleri.',
      en: 'Annulment and full-remedy actions against administrative acts, and settlement and litigation in tax disputes.',
    },
    gradient: ['#2a3a52', '#516987'],
  },
  {
    slug: 'ceza-hukuku',
    name: { tr: 'Ceza Hukuku', en: 'Criminal Law' },
    description: {
      tr: 'Soruşturma ve kovuşturma aşamalarında şüpheli, sanık ve mağdur haklarının titizlikle savunulması.',
      en: 'Diligent defence of the rights of suspects, defendants and victims at the investigation and prosecution stages.',
    },
    gradient: ['#0f1b2d', '#1b2a40'],
  },
  {
    slug: 'sigorta-hukuku',
    name: { tr: 'Sigorta Hukuku', en: 'Insurance Law' },
    description: {
      tr: 'Sigorta sözleşmeleri, tazminat talepleri ve rücu davalarında sigortalı ve sigortacı temsilciliği.',
      en: 'Representation of insured parties and insurers in insurance contracts, indemnity claims and recourse actions.',
    },
    gradient: ['#26303a', '#48606f'],
  },
  {
    slug: 'kvkk',
    name: {
      tr: 'Kişisel Verilerin Korunması Hukuku',
      en: 'Data Protection Law',
    },
    description: {
      tr: 'KVKK ve GDPR uyumu, veri envanteri, aydınlatma-açık rıza süreçleri ve ihlal yönetiminde danışmanlık.',
      en: 'Advisory on KVKK and GDPR compliance, data inventories, disclosure and consent processes, and breach management.',
    },
    gradient: ['#2d2a3e', '#4f496a'],
  },
  {
    slug: 'tuketici-hukuku',
    name: { tr: 'Tüketici Hukuku', en: 'Consumer Law' },
    description: {
      tr: 'Ayıplı mal ve hizmet, tüketici sözleşmeleri ve hakem heyeti-tüketici mahkemesi süreçlerinde hukuki destek.',
      en: 'Legal support regarding defective goods and services, consumer contracts and arbitration committee / consumer court proceedings.',
    },
    gradient: ['#3a3326', '#6f5f44'],
  },
  {
    slug: 'sozlesmeler-hukuku',
    name: { tr: 'Sözleşmeler Hukuku', en: 'Contracts Law' },
    description: {
      tr: 'Ticari ve özel sözleşmelerin hazırlanması, müzakeresi ve risk analizi ile uyuşmazlıkların önlenmesi.',
      en: 'Drafting, negotiation and risk analysis of commercial and private contracts to prevent disputes.',
    },
    gradient: ['#23364a', '#46627c'],
  },
];

export function paName(area: PracticeArea, lang: Lang): string {
  return area.name[lang];
}
