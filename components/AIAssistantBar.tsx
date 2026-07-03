'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const assistantPrompts = {
  en: ['Contact sales', 'Request NovaOS access', 'Run a GEO audit', 'Build an AI video workflow'],
  zh: ['联系销售', '申请 NovaOS 试用', '做一次 GEO 诊断', '创建 AI 视频工作流'],
  ja: ['営業に相談', 'NovaOS アクセスを申請', 'GEO 診断を行う', 'AI 動画ワークフローを作る'],
  ko: ['영업 문의', 'NovaOS 접근 신청', 'GEO 진단 실행', 'AI 영상 워크플로 만들기'],
} as const;

const assistantUi = {
  en: { open: 'Ask Nova AI', collapse: 'Collapse', hint: 'GEO, content, AI video, publishing, lead capture or NovaOS access.' },
  zh: { open: '问问 Nova AI', collapse: '收起', hint: 'GEO、内容、AI 视频、内容发布、线索获取或 NovaOS 试用。' },
  ja: { open: 'Nova AI に質問', collapse: '閉じる', hint: 'GEO、コンテンツ、AI 動画、配信、リード獲得、NovaOS アクセス。' },
  ko: { open: 'Nova AI에게 묻기', collapse: '접기', hint: 'GEO, 콘텐츠, AI 영상, 게시, 리드 확보, NovaOS 접근.' },
} as const;

function AssistantMark() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-violet-500 text-white shadow-md shadow-blue-700/20">
      <span className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
      <span className="relative text-lg leading-none">✦</span>
    </div>
  );
}

export function AIAssistantBar() {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [showPrompts, setShowPrompts] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const prompts = assistantPrompts[lang];
  const ui = assistantUi[lang];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setShowPrompts(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setShowPrompts(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('Nova AI assistant: ' + (query || t.ai.input));
  }

  return (
    <section className="relative z-20 bg-white px-5 pb-4 pt-28 sm:px-8 lg:px-10">
      <div ref={wrapperRef} className="mx-auto max-w-3xl">
        {!expanded ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/95 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-lg shadow-blue-900/8 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
            >
              <AssistantMark />
              <span>{ui.open}</span>
              <span className="text-blue-500 transition group-hover:translate-y-0.5">⌄</span>
            </button>
          </div>
        ) : (
          <div className="overflow-visible rounded-[1.5rem] border border-blue-100 bg-white/95 p-3 shadow-2xl shadow-blue-950/10 backdrop-blur-xl animate-[nova-drop_0.22s_ease-out]">
            <div className="mb-3 flex items-center justify-between gap-4 px-1">
              <div className="flex items-center gap-3">
                <AssistantMark />
                <div>
                  <p className="text-sm font-semibold text-slate-950">{t.ai.title}</p>
                  <p className="text-xs text-slate-500">{ui.hint}</p>
                </div>
              </div>
              <button type="button" onClick={() => { setExpanded(false); setShowPrompts(false); }} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-950">{ui.collapse} ↑</button>
            </div>

            <div className="relative">
              <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                <input
                  value={query}
                  onFocus={() => setShowPrompts(true)}
                  onClick={() => setShowPrompts(true)}
                  onChange={(event) => { setQuery(event.target.value); setShowPrompts(true); }}
                  placeholder={t.ai.input}
                  className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-700 outline-none"
                />
                <button className="bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800" type="submit">{t.ai.send}</button>
              </form>

              {showPrompts ? (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-blue-100 bg-white text-slate-700 shadow-2xl shadow-blue-950/12">
                  {prompts.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => { setQuery(item); setShowPrompts(false); }}
                      className="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-3 text-left text-sm transition last:border-b-0 hover:bg-blue-50"
                    >
                      <span className="text-base text-blue-400">✦</span>
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
