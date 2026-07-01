'use client';

import { useLanguage } from '@/components/LanguageProvider';

export function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[2.5rem] border border-blue-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.22),transparent_24rem),linear-gradient(135deg,#f8fbff,#eef6ff)] p-8 text-center shadow-2xl shadow-blue-900/10 sm:p-14 lg:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">{t.cta.eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">{t.cta.title}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t.cta.body}</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={onOpenModal} className="rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800">{t.cta.primary}</button>
          <a href="/contact" className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:border-blue-200">{t.cta.secondary}</a>
        </div>
      </div>
    </section>
  );
}
