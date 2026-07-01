'use client';

import { useState } from 'react';
import { navItems } from '@/lib/content';

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(href: string) {
    if (href === 'modal') onOpenModal();
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-blue-100/80 bg-white/88 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="/" className="group flex items-center gap-3" aria-label="NovaStudio home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-sm font-semibold text-white shadow-lg">N</span>
          <span className="text-lg font-semibold tracking-tight text-slate-950">Nova<span className="text-blue-700">Studio</span></span>
        </a>

        <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href === 'modal' ? '#' : item.href}
              onClick={(event) => {
                if (item.href === 'modal') event.preventDefault();
                handleClick(item.href);
              }}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="/contact" className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 lg:inline-flex">
          Book a Strategy Call
        </a>

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
                {item.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">
              Book a Strategy Call
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
