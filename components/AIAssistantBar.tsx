'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const assistantPrompts = {
  en: ['Contact sales', 'Request NovaOS access', 'Run a GEO audit', 'Build an AI video workflow'],
  zh: ['联系销售', '申请 NovaOS 试用', '做一次 GEO 诊断', '创建 AI 视频工作流'],
  ja: ['営業に相談', 'NovaOS アクセスを申請', 'GEO 診断を行う', 'AI 動画ワークフローを作る'],
  ko: ['영업 문의', 'NovaOS 접근 신청', 'GEO 진단 실행', 'AI 영상 워크플로 만들기'],
} as const;

const assistantUi = {
  en: { open: 'Open Nova AI', collapse: 'Collapse Nova AI', hint: 'Ask about NovaOS, GEO, content, AI video or sales access.' },
  zh: { open: '打开 Nova AI', collapse: '收起 Nova AI', hint: '咨询 NovaOS、GEO、内容、AI 视频或销售入口。' },
  ja: { open: 'Nova AI を開く', collapse: 'Nova AI を閉じる', hint: 'NovaOS、GEO、コンテンツ、AI 動画、営業相談について質問できます。' },
  ko: { open: 'Nova AI 열기', collapse: 'Nova AI 접기', hint: 'NovaOS, GEO, 콘텐츠, AI 영상, 영업 문의를 질문할 수 있습니다.' },
} as const;

function AssistantMark() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 shadow-xl backdrop-blur-xl">
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/35 to-blue-300/10" />
      <span className="absolute h-8 w-8 rounded-full border border-white/35" />
      <span className="relative text-3xl leading-none text-white">✦</span>
    </div>
  );
}

export function AIAssistantBar() {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [showPrompts, setShowPrompts] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const prompts = assistantPrompts[lang];
  const ui = assistantUi[lang];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('Nova AI assistant: ' + (query || t.ai.input));
  }

  if (!expanded) {
    return (
      <section className="bg-white px-5 pb-3 pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] justify-end">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="group inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-lg shadow-blue-900/8 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-violet-500 text-white shadow-md shadow-blue-700/20">✦</span>
            <span>{ui.open}</span>
            <span className="text-blue-500 transition group-hover:translate-y-0.5">⌄</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-5 pb-8 pt-28 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] items-start gap-7 lg:grid-cols-[0.25fr_0.75fr]">
        <div className="flex items-center gap-4">
          <AssistantMark />
          <div>
            <p className="text-xl font-semibold">{t.ai.title}</p>
            <p className="mt-1 text-sm text-white/80">{t.ai.subtitle}</p>
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-xl font-semibold">{t.hero.ask}</p>
            <button type="button" onClick={() => setExpanded(false)} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/85 transition hover:bg-white/10 hover:text-white">{ui.collapse} ↑</button>
          </div>
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
          <p className="mt-3 text-xs text-white/70">{t.ai.note} {ui.hint}</p>
        </div>
      </div>
    </section>
  );
}
