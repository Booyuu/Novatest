'use client';

import { useLanguage } from '@/components/LanguageProvider';

const copy = {
  en: {
    eyebrow: 'Brand ecosystem',
    title: 'Designed for teams building modern AI marketing operations.',
    subtitle: 'A clean logo wall structure for approved customer, partner, creator and media brand marks as NovaStudio expands across APAC and global markets.',
  },
  zh: {
    eyebrow: '品牌生态',
    title: '为构建现代 AI 营销运营能力的团队而设计。',
    subtitle: '用于展示已授权客户、合作伙伴、创作者与媒体品牌标识的正式品牌墙结构，支撑 NovaStudio 面向 APAC 与全球市场的品牌表达。',
  },
  ja: {
    eyebrow: 'ブランドエコシステム',
    title: '現代的なAIマーケティング運用を構築するチームのために設計。',
    subtitle: 'NovaStudioがAPACおよびグローバル市場で展開する中で、承認済みの顧客・パートナー・クリエイター・メディアのブランドマークを整理して表示するためのロゴウォールです。',
  },
  ko: {
    eyebrow: '브랜드 생태계',
    title: '현대적인 AI 마케팅 운영을 구축하는 팀을 위해 설계되었습니다.',
    subtitle: 'NovaStudio가 APAC 및 글로벌 시장으로 확장되는 과정에서 승인된 고객, 파트너, 크리에이터, 미디어 브랜드 마크를 정리해 보여주는 로고 월 구조입니다.',
  },
} as const;

const brands = [
  'Meridian Bank',
  'APAC Pay',
  'Nexa AI',
  'Orbit Labs',
  'BrightEdu',
  'ClinicOS',
  'RetailGrid',
  'CreatorHub',
  'TradeFlow',
  'LocalWorks',
  'DataHarbor',
  'MediaBridge',
] as const;

export function PartnerWall() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_34rem)]" />
      <div className="relative mx-auto max-w-[1500px] rounded-[2.5rem] border border-blue-100 bg-white/92 px-6 py-12 shadow-2xl shadow-blue-900/10 backdrop-blur-xl lg:px-10 lg:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-slate-950 lg:text-5xl">{c.title}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-500">{c.subtitle}</p>
        </div>

        <div className="mx-auto mt-11 grid max-w-6xl grid-cols-2 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-blue-900/5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              aria-label={`${brand} brand mark`}
              className="group flex min-h-28 items-center justify-center border-b border-r border-slate-200 bg-gradient-to-br from-white to-slate-50/70 px-5 py-7 text-center transition duration-300 hover:bg-blue-50/55 sm:min-h-32 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0 xl:[&:nth-child(4n)]:border-r xl:[&:nth-child(6n)]:border-r-0"
            >
              <div className="flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-5 shadow-sm shadow-slate-900/5 transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-900/10">
                <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.16em] text-slate-800 transition group-hover:text-blue-700">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
