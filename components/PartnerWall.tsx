'use client';

import { useLanguage } from '@/components/LanguageProvider';

const copy = {
  en: {
    eyebrow: 'Partner ecosystem',
    title: 'Built for teams that need marketing operations to scale.',
    body: 'Use this section as the homepage trust wall. Replace the placeholder logos with real client, partner, creator, media or ecosystem logos when they are ready.',
    note: 'Placeholder logos. Replace later with approved partner assets.',
  },
  zh: {
    eyebrow: '合作伙伴生态',
    title: '面向需要规模化营销运营的团队。',
    body: '这一块作为首页信任墙。现在先用占位 logo，后面可以换成真实客户、合作伙伴、创作者、媒体或生态合作方 logo。',
    note: '当前为占位 logo，后续替换为已授权合作方资产。',
  },
  ja: {
    eyebrow: 'パートナーエコシステム',
    title: 'マーケティング運用を拡大したいチームのために。',
    body: 'このセクションは信頼を示すロゴウォールです。後で正式なパートナーや顧客ロゴに差し替えられます。',
    note: 'Placeholder logos. Replace later with approved assets.',
  },
  ko: {
    eyebrow: '파트너 생태계',
    title: '마케팅 운영 확장이 필요한 팀을 위해.',
    body: '이 섹션은 홈페이지 신뢰 로고 월입니다. 이후 실제 고객, 파트너, 크리에이터, 미디어 로고로 교체할 수 있습니다.',
    note: 'Placeholder logos. Replace later with approved assets.',
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
      <div className="relative mx-auto max-w-[1500px] rounded-[2.5rem] border border-blue-100 bg-white/82 p-8 shadow-2xl shadow-blue-900/8 backdrop-blur-xl lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-slate-950 lg:text-5xl">{c.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{c.body}</p>
            <p className="mt-5 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-700">{c.note}</p>
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
