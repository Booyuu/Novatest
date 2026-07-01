import { solutionCards } from '@/lib/content';

export function SolutionCards() {
  return (
    <section id="solutions" className="section-shell">
      <div className="mb-12 max-w-4xl">
        <p className="eyebrow">Solutions</p>
        <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Built for High-Growth Industries</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutionCards.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-7 shadow-panel transition hover:-translate-y-1 hover:border-slate-200/35">
            <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
