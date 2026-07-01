'use client';

import { useState } from 'react';
import { useLanguage, type Lang } from '@/components/LanguageProvider';
import { navItems } from '@/lib/content';

const navKey: Record<string, keyof ReturnType<typeof useLanguage>['t']['nav']> = {
  Products: 'products',
  Solutions: 'solutions',
  Cases: 'cases',
  NovaOS: 'novaos',
  Marketplace: 'marketplace',
  Academy: 'academy',
  Resources: 'resources',
  Company: 'company',
  Contact: 'contact',
};

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, labels, t } = useLanguage();

  function handleClick(href: string) {
    if (href === 'modal') onOpenModal();
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-blue-100/80 bg-white/90 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-5">
        <a href="/" className="group flex items-center gap-3" aria-label="NovaStudio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-sm font-semibold text-white shadow-lg">N</span>
          <span className="text-xl font-semibold tracking-tight text-slate-950">Nova<span className="text-blue-700">Studio</span></span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href === 'modal' ? '#' : item.href}
              onClick={(event) => {
                if (item.href === 'modal') event.preventDefault();
                handleClick(item.href);
              }}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {t.nav[navKey[item.label]] ?? item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <select
            value={lang}
            onChange={(event) => setLang(event.target.value as Lang)}
            className="rounded-full border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none transition hover:border-blue-300"
            aria-label="Select language"
          >
            {(Object.keys(labels) as Lang[]).map((key) => (
              <option key={key} value={key}>{labels[key]}</option>
            ))}
          </select>
          <a href="/contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="mb-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-700">
              {(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}
            </select>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href === 'modal' ? '#' : item.href}
                onClick={(event) => {
                  if (item.href === 'modal') event.preventDefault();
                  handleClick(item.href);
                }}
                className="rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {t.nav[navKey[item.label]] ?? item.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">
              {t.nav.cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
