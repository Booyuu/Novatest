'use client';

import { useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage, type Lang } from '@/components/LanguageProvider';
import { navItems } from '@/lib/content';

const navKey: Record<string, keyof ReturnType<typeof useLanguage>['t']['nav']> = {
  Products: 'products', Solutions: 'solutions', Cases: 'cases', NovaOS: 'novaos', Academy: 'academy', Resources: 'resources', Company: 'company', Contact: 'contact',
};

const menuCopy = {
  en: {
    Products: ['AI Agent Center', 'Brand Brain', 'Content Engine', 'Campaign Builder', 'Lead Capture Kit', 'GEO / AEO Engine', 'Data & CRM Layer', 'AI Analytics'],
    Solutions: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'],
    NovaOS: ['Command Center', 'Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators', 'CRM Customer Records'],
    Company: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Singapore APAC Growth', 'Partner Network'],
    panelTitle: 'AI-powered marketing operations',
    panelBody: 'Structured modules for content, campaigns, leads, customer records, marketplace assets and growth execution.',
    open: 'Open section',
  },
  zh: {
    Products: ['智能体中心', '品牌大脑', '内容引擎', '活动构建器', '线索捕获工具', 'GEO / AEO 引擎', '数据与 CRM 层', 'AI 分析'],
    Solutions: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育培训', '诊所与本地服务', '零售与消费', '专业服务'],
    NovaOS: ['指挥中心', '模板市场', '创作者奖励', '学院', '案例挑战', '积分与额度', '认证创作者', 'CRM 客户记录'],
    Company: ['关于 NovaStudio', '案例', '资源', '联系我们', '新加坡与 APAC 增长', '合作网络'],
    panelTitle: 'AI 驱动的营销运营',
    panelBody: '围绕内容、活动、线索、客户记录、市场资产和增长执行搭建结构化模块。',
    open: '打开板块',
  },
  ja: {
    Products: ['AI エージェントセンター', 'ブランドブレイン', 'コンテンツエンジン', 'キャンペーンビルダー', 'リード獲得キット', 'GEO / AEO エンジン', 'データと CRM', 'AI 分析'],
    Solutions: ['フィンテックと決済', 'Web3 と暗号資産', 'AI と B2B SaaS', '中小企業', '教育', 'クリニックと地域サービス', '小売と消費', '専門サービス'],
    NovaOS: ['コマンドセンター', 'テンプレート市場', 'クリエイター報酬', 'アカデミー', 'ケースチャレンジ', 'ポイントとクレジット', '認定クリエイター', 'CRM 顧客記録'],
    Company: ['NovaStudio について', '事例', 'リソース', 'お問い合わせ', 'シンガポールと APAC 成長', 'パートナーネットワーク'],
    panelTitle: 'AI によるマーケティング運用',
    panelBody: 'コンテンツ、キャンペーン、リード、顧客記録、市場資産、成長実行のための構造化モジュール。',
    open: 'セクションを開く',
  },
  ko: {
    Products: ['AI 에이전트 센터', '브랜드 브레인', '콘텐츠 엔진', '캠페인 빌더', '리드 캡처 키트', 'GEO / AEO 엔진', '데이터 및 CRM 레이어', 'AI 분석'],
    Solutions: ['핀테크 및 결제', 'Web3 및 크립토', 'AI 및 B2B SaaS', '중소기업', '교육', '클리닉 및 로컬 서비스', '리테일 및 소비재', '전문 서비스'],
    NovaOS: ['커맨드 센터', '템플릿 마켓', '크리에이터 보상', '아카데미', '사례 챌린지', '포인트 및 크레딧', '인증 크리에이터', 'CRM 고객 기록'],
    Company: ['NovaStudio 소개', '사례', '리소스', '문의', '싱가포르 및 APAC 성장', '파트너 네트워크'],
    panelTitle: 'AI 기반 마케팅 운영',
    panelBody: '콘텐츠, 캠페인, 리드, 고객 기록, 마켓 자산, 성장 실행을 위한 구조화 모듈입니다.',
    open: '섹션 열기',
  },
} as const;

type MenuName = 'Products' | 'Solutions' | 'NovaOS' | 'Company';

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const { lang, setLang, labels, t } = useLanguage();
  const menu = menuCopy[lang];

  function handleClick(href: string) {
    if (href === 'modal') onOpenModal();
    setIsOpen(false);
  }

  return (
    <header onMouseLeave={() => setActiveMenu(null)} className="fixed inset-x-0 top-0 z-40 border-b border-blue-100/80 bg-white/95 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-5">
        <a href="/" aria-label="NovaStudio home"><BrandLogo /></a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const hasMenu = item.label === 'Products' || item.label === 'Solutions' || item.label === 'NovaOS' || item.label === 'Company';
            return (
              <a key={item.label} href={item.href === 'modal' ? '#' : item.href} onMouseEnter={() => setActiveMenu(hasMenu ? item.label as MenuName : null)} onClick={(event) => { if (item.href === 'modal') event.preventDefault(); handleClick(item.href); }} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-blue-700">
                <span>{t.nav[navKey[item.label]] ?? item.label}</span>{hasMenu ? <span className="text-xs leading-none text-slate-400">⌄</span> : null}
              </a>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="rounded-full border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none">
            {(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}
          </select>
          <a href="/contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20">{t.nav.cta}</a>
        </div>
        <button type="button" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 lg:hidden" onClick={() => setIsOpen((value) => !value)}>{isOpen ? 'Close' : 'Menu'}</button>
      </nav>

      {activeMenu ? (
        <div className="hidden border-t border-blue-100 bg-white shadow-2xl shadow-blue-950/10 lg:block">
          <div className="mx-auto grid max-w-[1500px] grid-cols-[0.36fr_0.64fr]">
            <div className="px-8 py-10">
              <h3 className="text-4xl font-semibold tracking-tight text-slate-950">{t.nav[navKey[activeMenu]]}</h3>
              <div className="mt-8 grid gap-3">
                {menu[activeMenu].map((label) => (
                  <a key={label} href={activeMenu === 'Solutions' ? '/solutions' : activeMenu === 'Products' ? '/products' : activeMenu === 'Company' ? '/company' : '#'} onClick={(event) => { if (activeMenu === 'NovaOS') { event.preventDefault(); onOpenModal(); } }} className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{label}</a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 px-10 py-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">AI</div>
              <h4 className="text-3xl font-semibold tracking-tight text-slate-950">{menu.panelTitle}</h4>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">{menu.panelBody}</p>
              <a href={activeMenu === 'NovaOS' ? '#' : activeMenu === 'Solutions' ? '/solutions' : activeMenu === 'Products' ? '/products' : '/contact'} onClick={(event) => { if (activeMenu === 'NovaOS') { event.preventDefault(); onOpenModal(); } }} className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white">{menu.open}</a>
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? <div id="mobile-menu" className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden"><div className="grid gap-2"><select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="mb-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-700">{(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}</select>{navItems.map((item) => <a key={item.label} href={item.href === 'modal' ? '#' : item.href} onClick={(event) => { if (item.href === 'modal') event.preventDefault(); handleClick(item.href); }} className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{t.nav[navKey[item.label]] ?? item.label}</a>)}<a href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">{t.nav.cta}</a></div></div> : null}
    </header>
  );
}
