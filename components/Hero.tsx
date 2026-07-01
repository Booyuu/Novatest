'use client';

import { AIAssistantBar } from '@/components/AIAssistantBar';
import { useLanguage } from '@/components/LanguageProvider';
import { dashboardModules } from '@/lib/content';

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLanguage();

  return (
    <>
      <AIAssistantBar />
      <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_22%_14%,rgba(56,189,248,0.20),transparent_28rem),radial-gradient(circle_at_78%_18%,rgba(99,102,241,0.18),transparent_30rem),linear-gradient(180deg,#ffffff_0%,#eef5ff_58%,#ffffff_100%)] text-slate-950">
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-40" />
        <div className="mx-auto grid min-h-[720px] max-w-[1500px] items-center gap-12 px-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-xl">
              <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">NovaStudio</span>
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-slate-950 sm:text-7xl lg:text-8xl">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className="rounded-md bg-blue-700 px-8 py-4 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800">{t.hero.demo}</a>
              <a href="/solutions" className="rounded-md border border-blue-200 bg-white px-8 py-4 text-center font-semibold text-blue-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-400">{t.hero.consult}</a>
              <button type="button" onClick={onOpenModal} className="rounded-md border border-blue-200 bg-white/70 px-8 py-4 font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-white">{t.hero.more}</button>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/70" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/80" />
            <div className="absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-violet-400 text-7xl shadow-2xl shadow-blue-900/20">🤖</div>
            {dashboardModules.map((module, index) => {
              const positions = ['left-10 top-16', 'left-56 top-2', 'right-24 top-20', 'right-8 top-56', 'right-36 bottom-16', 'left-40 bottom-8', 'left-0 bottom-36'];
              return (
                <div key={module} className={`absolute ${positions[index]} rounded-2xl border border-blue-100 bg-white px-5 py-4 text-center shadow-xl shadow-blue-900/10`}>
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-xs font-semibold text-white">{index + 1}</div>
                  <p className="text-sm font-semibold text-slate-700">{module}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
