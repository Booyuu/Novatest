'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Products', '#products'], ['Solutions', '#solutions'], ['NovaOS', 'modal'], ['Marketplace', 'modal'], ['Academy', 'modal'], ['Resources', '#academy'], ['Company', '#why'], ['Contact', '#contact'],
];

export function Navbar({ onModal }: { onModal: () => void }) {
  const [open, setOpen] = useState(false);
  const click = (href: string) => (e: React.MouseEvent) => { if (href === 'modal') { e.preventDefault(); onModal(); } setOpen(false); };
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#050609]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Replace this text logo with your final NovaStudio logo asset later. */}
        <a href="#top" className="text-xl font-semibold tracking-tight">Nova<span className="text-slate-300">Studio</span></a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => <a key={label} href={href === 'modal' ? '#' : href} onClick={click(href)} className="text-sm text-slate-300 transition hover:text-white">{label}</a>)}
        </div>
        <a href="#contact" className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 lg:block">Book a Strategy Call</a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#070a12] px-5 py-4 lg:hidden">{links.map(([label, href]) => <a key={label} href={href === 'modal' ? '#' : href} onClick={click(href)} className="block py-3 text-slate-300">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-white px-5 py-3 text-center font-semibold text-slate-950">Book a Strategy Call</a></div>}
    </header>
  );
}
