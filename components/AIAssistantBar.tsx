'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export function AIAssistantBar() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('AI assistant API placeholder: ' + (query || t.ai.input));
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-5 pb-7 pt-28 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] items-center gap-6 lg:grid-cols-[0.26fr_0.74fr]">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl shadow-xl backdrop-blur-xl">AI</div>
          <div>
            <p className="text-xl font-semibold">{t.ai.title}</p>
            <p className="mt-1 text-sm text-white/80">{t.ai.subtitle}</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xl font-semibold">{t.hero.ask}</p>
          <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-lg bg-white shadow-xl shadow-blue-950/10">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.ai.input} className="min-w-0 flex-1 px-5 py-4 text-slate-700 outline-none" />
            <button className="bg-blue-700 px-6 font-semibold text-white transition hover:bg-blue-800" type="submit">{t.ai.send}</button>
          </form>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {[t.hero.quick1, t.hero.quick2, t.hero.quick3].map((item) => (
              <button key={item} type="button" onClick={() => setQuery(item)} className="rounded border border-white/50 px-4 py-2 text-white/90 transition hover:bg-white/15">{item}</button>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/70">Reserved for future API, database and customer record integration.</p>
        </div>
      </div>
    </section>
  );
}
