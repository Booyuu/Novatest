import { solutionCards } from '@/lib/content';

export function SolutionCards() {
  return (
    <section id="solutions" className="section-shell">
      <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow">Industry solutions</p>
          <h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">Built for High-Growth Industries</h2>
        </div>
        <p className="text-lg leading-8 text-slate-300">Different markets need different positioning, proof, funnel design, and content rhythm. NovaStudio turns that into repeatable execution.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutionCards.map((item, index) => (
          <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d18] p-7 shadow-panel transition hover:-translate-y-1 hover:border-slate-200/35 hover:bg-[#0b1222]">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-purple-500/20" />
            <div className="relative mb-7 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.26em] text-blue-200">Sector</span>
              <span className="text-sm text-slate-500">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="relative text-2xl font-semibold text-white">{item.title}</h3>
            <p className="relative mt-4 leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
