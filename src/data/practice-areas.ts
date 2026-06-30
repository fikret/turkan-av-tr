import type { Lang } from '../i18n/ui';

export interface PracticeArea {
  slug: string;
  name: { tr: string; en: string };
  description: { tr: string; en: string };
  /** Soyut görsel için gradyan renk çifti (telifsiz, CSS tabanlı fallback). */
  gradient: [string, string];
}

/**
 * 17 çalışma alanı. Açıklamalar; danışmanlıktan dava takibine kadar
 * büronun yaklaşımını yansıtacak biçimde, kurumsal ve doyurucu yazıldı.
 */
export const practiceAreas: PracticeArea[] = [
  {
    slug: 'ticaret-hukuku',
    name: { tr: 'Ticaret Hukuku', en: 'Commercial Law' },
    description: {
      tr: 'Ticari işletme devirleri, kıymetli evrak, acentelik ve distribütörlük ile her tür ticari sözleşmenin hazırlanması ve müzakeresinde danışmanlık veriyoruz. Ticari ilişkinin kuruluşundan uyuşmazlığın çözümüne kadar, ticari davalar ve tahkim süreçlerinde müvekkillerimizi temsil ediyoruz.',
      en: 'We advise on the transfer of commercial enterprises, negotiable instruments, agency and distributorship arrangements, and the drafting and negotiation of commercial contracts of every kind. From the formation of the commercial relationship to the resolution of disputes, we represent our clients in commercial litigation and arbitration.',
    },
    gradient: ['#2a2a2e', '#4a4a50'],
  },
  {
    slug: 'sirketler-hukuku',
    name: { tr: 'Şirketler Hukuku', en: 'Corporate Law' },
    description: {
      tr: 'Şirket kuruluşu, ana sözleşme değişiklikleri, sermaye artırımı, birleşme-devralma ve hisse devri işlemlerinde kurumsal yapılanma ve yönetişim desteği sağlıyoruz. Pay sahipleri sözleşmeleri ve genel kurul süreçlerinde, kuruluştan tasfiyeye kadar şirketin yanında oluyoruz.',
      en: 'We provide corporate structuring and governance support across incorporation, articles amendments, capital increases, mergers and acquisitions, and share transfers. From shareholders’ agreements to general assembly procedures, we stand alongside the company from formation through to liquidation.',
    },
    gradient: ['#26262a', '#46464c'],
  },
  {
    slug: 'is-hukuku',
    name: { tr: 'Bireysel ve Toplu İş Hukuku', en: 'Individual & Collective Labour Law' },
    description: {
      tr: 'İş sözleşmelerinin düzenlenmesi, işe iade, kıdem ve ihbar tazminatı, mobbing ve iş kazası süreçlerinde hem işçi hem işveren tarafını temsil ediyoruz. Toplu iş sözleşmeleri ve sendikal ilişkilerde, ihtilafların önlenmesine yönelik proaktif danışmanlık veriyoruz.',
      en: 'We represent both employees and employers in employment contracts, reinstatement, severance and notice pay, mobbing and occupational-accident matters. In collective bargaining and union relations, we provide proactive advice aimed at preventing disputes before they arise.',
    },
    gradient: ['#2a2a2e', '#4a4a50'],
  },
  {
    slug: 'sosyal-guvenlik-hukuku',
    name: { tr: 'Sosyal Güvenlik Hukuku', en: 'Social Security Law' },
    description: {
      tr: 'Hizmet tespiti, prim ve teşvik uyuşmazlıkları, iş kazası ve meslek hastalığından doğan rücu davalarında danışmanlık ve dava takibi yürütüyoruz. SGK işlemlerine karşı idari ve yargısal başvuru süreçlerini titizlikle yönetiyoruz.',
      en: 'We advise on and litigate service determination, premium and incentive disputes, and recourse actions arising from occupational accidents and diseases. We diligently manage administrative and judicial challenges to Social Security Institution decisions.',
    },
    gradient: ['#27272b', '#474750'],
  },
  {
    slug: 'gayrimenkul-hukuku',
    name: { tr: 'Gayrimenkul Hukuku', en: 'Real Estate Law' },
    description: {
      tr: 'Tapu ve kadastro işlemleri, kat karşılığı inşaat sözleşmeleri, kentsel dönüşüm ve kira ilişkilerinde danışmanlık veriyoruz. Gayrimenkul yatırımlarında hukuki durum incelemesi (due diligence) ve uyuşmazlık çözümünde müvekkillerimizin yanındayız.',
      en: 'We advise on title and cadastre matters, construction-for-flat contracts, urban transformation, and lease relationships. We support our clients with legal due diligence on real-estate investments and with dispute resolution.',
    },
    gradient: ['#2c2a26', '#4f4a40'],
  },
  {
    slug: 'fikri-sinai-mulkiyet-hukuku',
    name: { tr: 'Fikri ve Sınai Mülkiyet Hukuku', en: 'Intellectual & Industrial Property Law' },
    description: {
      tr: 'Marka, patent, tasarım ve telif haklarının tescili, lisanslanması ve devrinde danışmanlık; ihlal ve haksız rekabet davalarında uzman temsil sağlıyoruz. Markanın kuruluşundan korunmasına kadar fikri varlıkların stratejik yönetimini üstleniyoruz.',
      en: 'We advise on the registration, licensing and assignment of trademarks, patents, designs and copyrights, and provide expert representation in infringement and unfair-competition actions. We undertake the strategic management of intellectual assets from creation through protection.',
    },
    gradient: ['#2a2a30', '#4a4a55'],
  },
  {
    slug: 'medeni-hukuk',
    name: { tr: 'Medeni Hukuk (Aile ve Miras)', en: 'Civil Law (Family & Inheritance)' },
    description: {
      tr: 'Boşanma, velayet, mal rejimi tasfiyesi, nafaka ve vesayet süreçlerini hassas ve çözüm odaklı bir yaklaşımla yürütüyoruz. Miras paylaşımı, vasiyetname ve tenkis davalarında ailelerin haklarını koruyoruz.',
      en: 'We handle divorce, custody, matrimonial-property liquidation, alimony and guardianship matters with a sensitive, solution-oriented approach. We protect families’ rights in inheritance division, wills and abatement actions.',
    },
    gradient: ['#2c2829', '#4f4748'],
  },
  {
    slug: 'borclar-hukuku',
    name: { tr: 'Borçlar Hukuku (Tazminat ve Kira)', en: 'Law of Obligations (Compensation & Lease)' },
    description: {
      tr: 'Sözleşmeden ve haksız fiilden doğan maddi-manevi tazminat talepleri, kira tespiti ve tahliye davalarında danışmanlık ve temsil sağlıyoruz. Özel borç ilişkilerinin kurulması ve sona ermesinde riskleri öngören bir yaklaşım benimsiyoruz.',
      en: 'We advise on and represent clients in pecuniary and non-pecuniary compensation claims arising from contracts and torts, as well as rent-determination and eviction actions. We adopt a risk-anticipating approach to the formation and termination of special obligations.',
    },
    gradient: ['#27272b', '#47474f'],
  },
  {
    slug: 'icra-iflas-hukuku',
    name: { tr: 'İcra İflas Hukuku', en: 'Enforcement & Bankruptcy Law' },
    description: {
      tr: 'Alacak takibi, haciz, ihtiyati tedbir ve rehnin paraya çevrilmesi süreçlerinde alacaklı ve borçluyu etkin biçimde temsil ediyoruz. İflas, iflas erteleme ve konkordato süreçlerinde stratejik hukuki yönetim sunuyoruz.',
      en: 'We effectively represent both creditors and debtors in debt collection, attachment, interim injunctions and the realisation of pledges. We provide strategic legal management in bankruptcy, postponement and composition (concordat) proceedings.',
    },
    gradient: ['#222226', '#42424a'],
  },
  {
    slug: 'yabancilar-goc-hukuku',
    name: { tr: 'Yabancılar ve Göç Hukuku', en: 'Immigration Law' },
    description: {
      tr: 'Yabancıların Türkiye’deki hukuki statüsü, vatandaşlık başvuruları, sınır dışı kararlarına itiraz ve uluslararası koruma süreçlerinde danışmanlık veriyoruz. Yabancı yatırımcı ve çalışanların hukuki güvenliğini gözeten bütünsel bir hizmet sunuyoruz.',
      en: 'We advise on the legal status of foreign nationals in Türkiye, citizenship applications, appeals against deportation decisions, and international-protection procedures. We offer integrated counsel that safeguards the legal security of foreign investors and employees.',
    },
    gradient: ['#26282b', '#46505a'],
  },
  {
    slug: 'ikamet-calisma-izinleri',
    name: { tr: 'İkamet ve Çalışma İzinleri', en: 'Residence & Work Permits' },
    description: {
      tr: 'Yabancı uyruklu çalışanlar ve aileleri için ikamet ve çalışma izni başvuru, uzatma ve geçiş süreçlerini uçtan uca yönetiyoruz. Şirketlerin yabancı istihdamına ilişkin uyum yükümlülüklerinde rehberlik ediyoruz.',
      en: 'We manage residence and work-permit applications, renewals and transitions end-to-end for foreign employees and their families. We guide companies through their compliance obligations relating to the employment of foreign nationals.',
    },
    gradient: ['#26282c', '#46505c'],
  },
  {
    slug: 'idare-vergi-hukuku',
    name: { tr: 'İdare ve Vergi Hukuku', en: 'Administrative & Tax Law' },
    description: {
      tr: 'İdari işlemlere karşı iptal ve tam yargı davaları ile kamulaştırma uyuşmazlıklarında müvekkillerimizi temsil ediyoruz. Vergi incelemeleri, uzlaşma ve vergi davalarında ihtilafı önlemeye yönelik danışmanlık sağlıyoruz.',
      en: 'We represent clients in annulment and full-remedy actions against administrative acts and in expropriation disputes. We provide advice aimed at preventing conflict in tax audits, settlements and tax litigation.',
    },
    gradient: ['#272729', '#474749'],
  },
  {
    slug: 'ceza-hukuku',
    name: { tr: 'Ceza Hukuku', en: 'Criminal Law' },
    description: {
      tr: 'Soruşturma ve kovuşturmanın her aşamasında şüpheli, sanık ve mağdur haklarını titizlikle savunuyoruz. Ekonomik suçlar ve beyaz yaka ceza hukuku alanında, kurumsal müvekkillere özel önleyici danışmanlık sunuyoruz.',
      en: 'We diligently defend the rights of suspects, defendants and victims at every stage of investigation and prosecution. We provide preventive counsel tailored to corporate clients in the field of economic and white-collar criminal law.',
    },
    gradient: ['#202024', '#404048'],
  },
  {
    slug: 'sigorta-hukuku',
    name: { tr: 'Sigorta Hukuku', en: 'Insurance Law' },
    description: {
      tr: 'Sigorta sözleşmelerinin yorumu, tazminat talepleri ve rücu davalarında sigortalı ve sigortacıyı temsil ediyoruz. Hasar süreçlerinin yönetiminde, poliçe kapsamına ilişkin uyuşmazlıkları öngören bir yaklaşım benimsiyoruz.',
      en: 'We represent both insured parties and insurers in the interpretation of insurance contracts, indemnity claims and recourse actions. In claims management we adopt an approach that anticipates disputes over policy coverage.',
    },
    gradient: ['#26262a', '#46464e'],
  },
  {
    slug: 'kvkk',
    name: { tr: 'Kişisel Verilerin Korunması Hukuku', en: 'Data Protection Law' },
    description: {
      tr: 'KVKK ve GDPR uyum programları, veri envanteri, aydınlatma ve açık rıza süreçlerinin kurulmasında danışmanlık veriyoruz. Veri ihlali yönetimi ve Kurul başvurularında, işletmenin hukuki riskini en aza indiriyoruz.',
      en: 'We advise on KVKK and GDPR compliance programmes, data inventories, and the establishment of disclosure and explicit-consent processes. In breach management and Authority filings, we minimise the organisation’s legal exposure.',
    },
    gradient: ['#26262c', '#464658'],
  },
  {
    slug: 'tuketici-hukuku',
    name: { tr: 'Tüketici Hukuku', en: 'Consumer Law' },
    description: {
      tr: 'Ayıplı mal ve hizmet, mesafeli sözleşmeler ve abonelik ilişkilerinden doğan uyuşmazlıklarda danışmanlık ve temsil sağlıyoruz. Hakem heyeti ve tüketici mahkemesi süreçlerini her iki taraf için etkin biçimde yürütüyoruz.',
      en: 'We advise on and represent clients in disputes arising from defective goods and services, distance contracts and subscription relationships. We conduct arbitration-committee and consumer-court proceedings effectively for either side.',
    },
    gradient: ['#2c2a26', '#4f4a3e'],
  },
  {
    slug: 'sozlesmeler-hukuku',
    name: { tr: 'Sözleşmeler Hukuku', en: 'Contracts Law' },
    description: {
      tr: 'Ticari ve özel sözleşmelerin tasarımı, müzakeresi ve risk analizinde danışmanlık vererek ihtilafları doğmadan önlüyoruz. Çerçeve sözleşmeler, gizlilik ve teminat yapılarında, müvekkilin ticari hedeflerine uygun çözümler kurguluyoruz.',
      en: 'We prevent disputes before they arise by advising on the design, negotiation and risk analysis of commercial and private contracts. We structure framework agreements, confidentiality and security arrangements aligned with the client’s commercial objectives.',
    },
    gradient: ['#27272b', '#47474f'],
  },
];

export function paName(area: PracticeArea, lang: Lang): string {
  return area.name[lang];
}
