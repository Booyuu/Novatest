'use client';

export type DeepPageCard = {
  kicker: string;
  title: string;
  body: string;
  points?: readonly string[];
};

export type DeepPageMetric = readonly [string, string];
export type DeepPageFaq = readonly [string, string];

export type DeepPageCopy = {
  eyebrow: string;
  title: string;
  body: string;
  badges: readonly string[];
  metrics: readonly DeepPageMetric[];
  cardsTitle: string;
  cardsBody: string;
  cards: readonly DeepPageCard[];
  featureTitle: string;
  featureBody: string;
  featurePoints: readonly string[];
  processTitle: string;
  process: readonly DeepPageCard[];
  faqTitle: string;
  faqs: readonly DeepPageFaq[];
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
};

export function DeepPageTemplate({ copy, onOpenModal }: { copy: DeepPageCopy; onOpenModal: () => void }) {
  return (
    <div className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.18),transparent_28rem),radial-gradient(circle_at_82%_8%,rgba(125,92,255,0.16),transparent_30rem),linear-gradient(180deg,#ffffff_0%,#f3f7ff_100%)] px-5 pb-24 pt-40 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-45" />
        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-slate-950 sm:text-7xl">{copy.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">{copy.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {copy.badges.map((badge) => <span key={badge} className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-xl">{badge}</span>)}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-blue-100 bg-white/80 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-2xl">
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
              <div className="mb-6 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
              <div className="grid gap-4">
                {copy.metrics.slice(0, 4).map(([value, label]) => <div key={label} className="rounded-2xl bg-white/8 p-4"><p className="text-3xl font-semibold text-blue-200">{value}</p><p className="mt-1 text-sm text-slate-300">{label}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-3 lg:grid-cols-6">
          {copy.metrics.map(([value, label]) => <div key={label} className="rounded-3xl border border-blue-100 bg-white p-6 text-center shadow-sm shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"><p className="text-4xl font-semibold text-indigo-500">{value}</p><p className="mt-2 text-sm leading-6 text-slate-500">{label}</p></div>)}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-4xl"><h2 className="text-5xl font-semibold tracking-[-0.055em] text-slate-950">{copy.cardsTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{copy.cardsBody}</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {copy.cards.map((card) => <article key={card.title} className="group rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">{card.kicker}</p><h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3><p className="mt-4 leading-7 text-slate-600">{card.body}</p>{card.points ? <div className="mt-6 grid gap-2">{card.points.map((point) => <span key={point} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">✓ {point}</span>)}</div> : null}</article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_26rem),linear-gradient(135deg,#eff6ff,#ffffff_55%,#eef2ff)] p-8 shadow-xl shadow-blue-950/5 lg:grid-cols-[0.42fr_0.58fr] lg:p-12">
          <div>
            <h2 className="text-5xl font-semibold tracking-[-0.055em] text-slate-950">{copy.featureTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{copy.featureBody}</p>
            <button type="button" onClick={onOpenModal} className="mt-8 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white">NovaOS</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.featurePoints.map((point, index) => <div key={point} className="rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-sm"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-sm font-semibold text-indigo-600">{index + 1}</div><p className="font-semibold text-slate-800">{point}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9ff] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-center text-5xl font-semibold tracking-[-0.055em] text-slate-950">{copy.processTitle}</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {copy.process.map((step, index) => <article key={step.title} className="rounded-[2rem] bg-white p-7 shadow-sm shadow-blue-900/5"><p className="text-5xl font-semibold text-indigo-200">0{index + 1}</p><p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">{step.kicker}</p><h3 className="mt-4 text-2xl font-semibold text-slate-950">{step.title}</h3><p className="mt-4 leading-7 text-slate-600">{step.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-5xl font-semibold tracking-[-0.055em] text-slate-950">{copy.faqTitle}</h2>
          <div className="mt-12 divide-y divide-blue-100 rounded-[2rem] border border-blue-100 bg-white px-7 shadow-xl shadow-blue-900/5">
            {copy.faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-slate-900"><span>{question}</span><span className="text-indigo-500 transition group-open:rotate-180">⌄</span></summary><p className="mt-4 leading-8 text-slate-600">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px] rounded-[2.5rem] bg-slate-950 p-10 text-center text-white shadow-2xl shadow-slate-950/20">
          <h2 className="text-5xl font-semibold tracking-[-0.055em]">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.ctaBody}</p>
          <a href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold text-white">{copy.ctaLabel}</a>
        </div>
      </section>
    </div>
  );
}
