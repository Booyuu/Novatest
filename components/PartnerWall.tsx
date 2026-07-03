'use client';

import { useLanguage } from '@/components/LanguageProvider';

const copy = {
  en: {
    eyebrow: 'Brand wall',
    title: 'Built for brands that need AI marketing operations.',
    subtitle: 'Placeholder brand marks for now. Replace them with approved customer, partner, creator or media logos later.',
  },
  zh: {
    eyebrow: '品牌墙',
    title: '面向需要 AI 营销运营能力的品牌。',
    subtitle: '这里先放占位品牌标识，后续可替换为已授权客户、合作方、创作者或媒体 logo。',
  },
  ja: {
    eyebrow: 'ブランドウォール',
    title: 'AIマーケティング運用を必要とするブランドのために。',
    subtitle: '現在はプレースホルダーです。後で正式な顧客・パートナー・メディアロゴに差し替えられます。',
  },
  ko: {
    eyebrow: '브랜드 월',
    title: 'AI 마케팅 운영이 필요한 브랜드를 위해.',
    subtitle: '현재는 임시 브랜드 표시입니다. 이후 승인된 고객, 파트너, 크리에이터 또는 미디어 로고로 교체할 수 있습니다.',
  },
} as const;

// Replace these placeholder names with real approved logo assets later.
// Option A: change `name` only for text-based placeholders.
// Option B: add image files under /public/partners and render <img src="/partners/your-logo.svg" alt="Brand name" /> inside the mark area.
const brands = [
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
  { name: 'DataHarbor', tag: 'DATA' },
  { name: 'MediaBridge', tag: 'MEDIA' },
] as const;

export function PartnerWall() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.11),transparent_34rem)]" />
      <div className="relative mx-auto max-w-[1500px] rounded-[2.5rem] border border-blue-100 bg-white/90 px-6 py-12 shadow-2xl shadow-blue-900/8 backdrop-blur-xl lg:px-10 lg:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-slate-950 lg:text-5xl">{c.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500">{c.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm shadow-blue-900/5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand.name} className="group flex min-h-32 flex-col items-center justify-center border-b border-r border-blue-100 bg-white px-5 py-6 text-center transition hover:bg-blue-50/55 sm:min-h-36 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0 xl:[&:nth-child(4n)]:border-r xl:[&:nth-child(6n)]:border-r-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition group-hover:-translate-y-1 group-hover:bg-blue-700">{brand.name.slice(0, 1)}</div>
              <p className="mt-4 text-sm font-semibold text-slate-850">{brand.name}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">{brand.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
