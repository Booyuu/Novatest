'use client';

import { useLanguage } from '@/components/LanguageProvider';

const copy = {
  en: {
    eyebrow: 'Brand wall',
    title: 'A brand wall for the markets NovaOS is built to support.',
    body: 'Showcase the industries, customer types and ecosystem brands that NovaStudio can serve. Replace these placeholders with approved customer, partner, creator or media logos when ready.',
    note: 'Use this area for trusted brands, ecosystem partners and media references.',
  },
  zh: {
    eyebrow: '品牌墙',
    title: '展示 NovaOS 可以服务的品牌与行业场景。',
    body: '这里用于展示 NovaStudio 可服务的行业、客户类型和生态品牌。后续可以替换成真实客户、合作伙伴、创作者或媒体 logo。',
    note: '适合放客户品牌、生态合作方和媒体引用。',
  },
  ja: {
    eyebrow: 'ブランドウォール',
    title: 'NovaOS が支援できる市場とブランド領域。',
    body: 'NovaStudio が支援できる業界、顧客タイプ、エコシステムブランドを示すエリアです。後で正式なロゴに差し替えられます。',
    note: '顧客ブランド、パートナー、メディア掲載に使えます。',
  },
  ko: {
    eyebrow: '브랜드 월',
    title: 'NovaOS가 지원할 수 있는 시장과 브랜드 영역.',
    body: 'NovaStudio가 지원할 수 있는 산업, 고객 유형, 생태계 브랜드를 보여주는 영역입니다. 이후 승인된 실제 로고로 교체할 수 있습니다.',
    note: '고객 브랜드, 파트너, 미디어 레퍼런스에 적합합니다.',
  },
} as const;

// Replace these placeholder names with real approved logo assets later.
// Option A: change `name` only for text-based placeholders.
// Option B: add image files under /public/partners and render <img src="/partners/your-logo.svg" alt="Partner name" /> inside the card.
const partners = [
  { name: 'Meridian Bank', tag: 'FINTECH' },
  { name: 'APAC Pay', tag: 'PAYMENTS' },
  { name: 'Nexa AI', tag: 'AI SAAS' },
  { name: 'Orbit Labs', tag: 'WEB3' },
  { name: 'BrightEdu', tag: 'EDU' },
  { name: 'ClinicOS', tag: 'HEALTH' },
  { name: 'RetailGrid', tag: 'RETAIL' },
  { name: 'CreatorHub', tag: 'CREATOR' },
  { name: 'TradeFlow', tag: 'B2B' },
  { name: 'LocalWorks', tag: 'SME' },
] as const;

export function PartnerWall() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.10),transparent_34rem)]" />
      <div className="relative mx-auto max-w-[1500px] rounded-[2.5rem] border border-blue-100 bg-white/90 p-8 shadow-2xl shadow-blue-900/8 backdrop-blur-xl lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-slate-950 lg:text-5xl">{c.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{c.body}</p>
            <p className="mt-5 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">{c.note}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {partners.map((partner) => (
              <div key={partner.name} className="group flex min-h-28 flex-col items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold text-white shadow-md shadow-slate-900/15">{partner.name.slice(0, 1)}</div>
                <p className="text-sm font-semibold text-slate-800">{partner.name}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">{partner.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
