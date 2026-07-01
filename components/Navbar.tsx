'use client';

import { useState } from 'react';
import { navItems } from '@/lib/content';

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(href: string) {
    if (href === 'modal') {
      onOpenModal();
    }
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#03050a]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Replace this text logo with the official NovaStudio logo asset later. */}
        <a href="#top" className="group flex items-center gap-3" aria-label="NovaStudio home">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold shadow-glow">N</span>
          <span className="text-lg font-semibold tracking-tight text-white">Nova<span className="text-slate-300">Studio</span></span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href === 'modal' ? '#' : item.href}
              onClick={(event) => {
                if (item.href === 'modal') event.preventDefault();
                handleClick(item.href);
              }}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200 lg:inline-flex">
          Book a Strategy Call
        </a>

        <button
          type="button"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#060913] px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href === 'modal' ? '#' : item.href}
                onClick={(event) => {
                  if (item.href === 'modal') event.preventDefault();
                  handleClick(item.href);
                }}
                className="rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-white px-5 py-3 text-center font-semibold text-slate-950">
              Book a Strategy Call
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
