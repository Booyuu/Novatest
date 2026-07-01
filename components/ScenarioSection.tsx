import { scenarioCards } from '@/lib/content';

export function ScenarioSection() {
  return (
    <section id="scenarios" className="section-shell">
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-4xl">
          <p className="eyebrow">Business scenarios</p>
          <h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">We build around the critical growth scenarios that matter.</h2>
        </div>
        <a href="#products" className="inline-flex w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">Explore product layer</a>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {scenarioCards.map((item) => (
          <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7 shadow-panel transition hover:-translate-y-1 hover:border-slate-200/35">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-200">{item.kicker}</p>
            <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
