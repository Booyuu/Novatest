'use client';

import { useState } from 'react';
import { useLanguage, type Lang } from '@/components/LanguageProvider';
import { navItems } from '@/lib/content';

const navKey: Record<string, keyof ReturnType<typeof useLanguage>['t']['nav']> = {
  Products: 'products', Solutions: 'solutions', Cases: 'cases', NovaOS: 'novaos', Academy: 'academy', Resources: 'resources', Company: 'company', Contact: 'contact',
};

const menus: Record<string, string[]> = {
  Products: ['AI Agent Center', 'Brand Brain', 'Content Engine', 'Campaign Builder', 'Lead Capture Kit', 'GEO / AEO Engine', 'Data & CRM Layer', 'AI Analytics'],
  Solutions: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'],
  NovaOS: ['Command Center', 'Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators', 'CRM Customer Records'],
  Company: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Singapore APAC Growth', 'Partner Network'],
};

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { lang, setLang, labels, t } = useLanguage();

  function handleClick(href: string) {
    if (href === 'modal') onOpenModal();
    setIsOpen(false);
  }

  return (
    <header onMouseLeave={() => setActiveMenu(null)} className="fixed inset-x-0 top-0 z-40 border-b border-blue-100/80 bg-white/95 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-5">
        <a href="/" className="flex items-center gap-3" aria-label="NovaStudio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-sm font-semibold text-white shadow-lg">N</span>
          <span className="text-xl font-semibold tracking-tight text-slate-950">Nova<span className="text-blue-700">Studio</span></span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const hasMenu = Boolean(menus[item.label]);
            return (
              <a key={item.label} href={item.href === 'modal' ? '#' : item.href} onMouseEnter={() => setActiveMenu(hasMenu ? item.label : null)} onClick={(event) => { if (item.href === 'modal') event.preventDefault(); handleClick(item.href); }} className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
                {t.nav[navKey[item.label]] ?? item.label}{hasMenu ? ' v' : ''}
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
              <h3 className="text-4xl font-semibold tracking-tight text-slate-950">{activeMenu}</h3>
              <div className="mt-8 grid gap-3">
                {menus[activeMenu].map((label) => (
                  <a key={label} href={activeMenu === 'Solutions' ? '/solutions' : activeMenu === 'Products' ? '/products' : activeMenu === 'Company' ? '/company' : '#'} onClick={(event) => { if (activeMenu === 'NovaOS') { event.preventDefault(); onOpenModal(); } }} className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{label}</a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 px-10 py-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">AI</div>
              <h4 className="text-3xl font-semibold tracking-tight text-slate-950">AI-powered marketing operations</h4>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">Structured modules for content, campaigns, leads, customer records, marketplace assets and growth execution.</p>
              <a href={activeMenu === 'NovaOS' ? '#' : activeMenu === 'Solutions' ? '/solutions' : activeMenu === 'Products' ? '/products' : '/contact'} onClick={(event) => { if (activeMenu === 'NovaOS') { event.preventDefault(); onOpenModal(); } }} className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white">Open section</a>
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? <div id="mobile-menu" className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden"><div className="grid gap-2"><select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="mb-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-700">{(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}</select>{navItems.map((item) => <a key={item.label} href={item.href === 'modal' ? '#' : item.href} onClick={(event) => { if (item.href === 'modal') event.preventDefault(); handleClick(item.href); }} className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">{t.nav[navKey[item.label]] ?? item.label}</a>)}<a href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">{t.nav.cta}</a></div></div> : null}
    </header>
  );
}
