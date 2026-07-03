'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const assistantPrompts = {
  en: ['Contact sales', 'Request NovaOS access', 'Run a GEO audit', 'Build an AI video workflow'],
  zh: ['联系销售', '申请 NovaOS 试用', '做一次 GEO 诊断', '创建 AI 视频工作流'],
  ja: ['営業に相談', 'NovaOS アクセスを申請', 'GEO 診断を行う', 'AI 動画ワークフローを作る'],
  ko: ['영업 문의', 'NovaOS 접근 신청', 'GEO 진단 실행', 'AI 영상 워크플로 만들기'],
} as const;

export function AIAssistantBar() {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [showPrompts, setShowPrompts] = useState(false);
  const prompts = assistantPrompts[lang];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('Nova AI assistant: ' + (query || t.ai.input));
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-5 pb-8 pt-28 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] items-start gap-7 lg:grid-cols-[0.25fr_0.75fr]">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl shadow-xl backdrop-blur-xl">AI</div>
          <div>
            <p className="text-xl font-semibold">{t.ai.title}</p>
            <p className="mt-1 text-sm text-white/80">{t.ai.subtitle}</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xl font-semibold">{t.hero.ask}</p>
          <div className="relative" onMouseEnter={() => setShowPrompts(true)} onMouseLeave={() => setShowPrompts(false)}>
            <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-lg bg-white shadow-xl shadow-blue-950/10">
              <input value={query} onFocus={() => setShowPrompts(true)} onChange={(event) => setQuery(event.target.value)} placeholder={t.ai.input} className="min-w-0 flex-1 px-5 py-4 text-slate-700 outline-none" />
              <button className="bg-blue-700 px-6 font-semibold text-white transition hover:bg-blue-800" type="submit">{t.ai.send}</button>
            </form>
            {showPrompts ? (
              <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-30 overflow-hidden rounded-2xl border border-blue-100 bg-white text-slate-700 shadow-2xl shadow-blue-950/18">
                {prompts.map((item) => (
                  <button key={item} type="button" onClick={() => { setQuery(item); setShowPrompts(false); }} className="flex w-full items-center gap-4 border-b border-slate-100 px-5 py-4 text-left text-base transition last:border-b-0 hover:bg-blue-50">
                    <span className="text-xl text-slate-400">✦</span>
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <p className="mt-3 text-xs text-white/70">{t.ai.note}</p>
        </div>
      </div>
    </section>
  );
}
