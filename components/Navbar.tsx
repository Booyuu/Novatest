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
    Products: ['AI Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO Engine', 'Compliance Copy Checker', 'Growth Dashboard', 'Creator Center'],
    Solutions: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'],
    Company: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Singapore APAC Growth', 'Partner Network'],
    panelTitle: 'NovaStudio is the door. NovaOS is the house.',
    panelBody: 'NovaOS connects tools, templates, Academy, creator economy and customer growth workflows into one AI Marketing OS.',
    open: 'Open section',
  },
  zh: {
    Products: ['AI 活动构建器', '品牌大脑', '内容引擎', '线索获取工具包', 'GEO / AEO 引擎', '合规文案检查', '增长仪表盘', '创作者中心'],
    Solutions: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育培训', '诊所与本地服务', '零售与消费', '专业服务'],
    Company: ['关于 NovaStudio', '案例', '资源', '联系我们', '新加坡与 APAC 增长', '合作网络'],
    panelTitle: 'NovaStudio 是门，NovaOS 是屋。',
    panelBody: 'NovaOS 把工具、模板、学院、创作者经济和客户增长工作流连接成一套 AI Marketing OS。',
    open: '打开板块',
  },
  ja: {
    Products: ['AI Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO Engine', 'Compliance Copy Checker', 'Growth Dashboard', 'Creator Center'],
    Solutions: ['フィンテックと決済', 'Web3 と暗号資産', 'AI と B2B SaaS', '中小企業', '教育', 'クリニックと地域サービス', '小売と消費', '専門サービス'],
    Company: ['NovaStudio について', '事例', 'リソース', 'お問い合わせ', 'シンガポールと APAC 成長', 'パートナーネットワーク'],
    panelTitle: 'NovaStudio は入口、NovaOS は中核です。',
    panelBody: 'NovaOS はツール、テンプレート、Academy、クリエイター経済、顧客成長ワークフローを一つの AI Marketing OS に接続します。',
    open: 'セクションを開く',
  },
  ko: {
    Products: ['AI Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO Engine', 'Compliance Copy Checker', 'Growth Dashboard', 'Creator Center'],
    Solutions: ['핀테크 및 결제', 'Web3 및 크립토', 'AI 및 B2B SaaS', '중소기업', '교육', '클리닉 및 로컬 서비스', '리테일 및 소비재', '전문 서비스'],
    Company: ['NovaStudio 소개', '사례', '리소스', '문의', '싱가포르 및 APAC 성장', '파트너 네트워크'],
    panelTitle: 'NovaStudio는 입구, NovaOS는 핵심입니다.',
    panelBody: 'NovaOS는 도구, 템플릿, Academy, 크리에이터 경제, 고객 성장 워크플로를 하나의 AI Marketing OS로 연결합니다.',
    open: '섹션 열기',
  },
} as const;

type MenuName = 'Products' | 'Solutions' | 'Company';

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
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            if (item.label === 'NovaOS') {
              return (
                <button key={item.label} type="button" onClick={onOpenModal} onMouseEnter={() => setActiveMenu(null)} className="relative rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700">
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
                  {t.nav.novaos}
                </button>
              );
            }
            const hasMenu = item.label === 'Products' || item.label === 'Solutions' || item.label === 'Company';
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
                  <a key={label} href={activeMenu === 'Solutions' ? '/solutions' : activeMenu === 'Products' ? '/products' : '/company'} className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{label}</a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 px-10 py-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">OS</div>
              <h4 className="text-3xl font-semibold tracking-tight text-slate-950">{menu.panelTitle}</h4>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">{menu.panelBody}</p>
              <a href={activeMenu === 'Solutions' ? '/solutions' : activeMenu === 'Products' ? '/products' : '/contact'} className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white">{menu.open}</a>
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? <div id="mobile-menu" className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden"><div className="grid gap-2"><select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="mb-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-700">{(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}</select>{navItems.map((item) => item.label === 'NovaOS' ? <button key={item.label} type="button" onClick={() => handleClick('modal')} className="rounded-2xl bg-slate-950 px-4 py-3 text-left font-semibold text-white">{t.nav.novaos}</button> : <a key={item.label} href={item.href === 'modal' ? '#' : item.href} onClick={(event) => { if (item.href === 'modal') event.preventDefault(); handleClick(item.href); }} className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{t.nav[navKey[item.label]] ?? item.label}</a>)}<a href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">{t.nav.cta}</a></div></div> : null}
    </header>
  );
}
