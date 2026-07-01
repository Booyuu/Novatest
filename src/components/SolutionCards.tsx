const solutions = ["B2B SaaS", "Agencies", "Creator Brands", "Local Services", "Ecommerce", "Enterprise Teams"];

export function SolutionCards() {
  return (
    <section id="solutions" className="section-shell">
      <p className="text-sm uppercase tracking-[0.3em] text-purple-200">Industry solutions</p>
      <h2 className="gradient-text mt-3 text-4xl font-semibold">Purpose-built growth systems for ambitious operators.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => <article key={solution} className="glass-card rounded-3xl p-7 transition hover:bg-white/[0.08]"><h3 className="text-2xl font-semibold text-white">{solution}</h3><p className="mt-4 text-slate-400">Launch tailored campaigns, content engines, funnels, and analytics with enterprise-grade consistency.</p></article>)}
      </div>
    </section>
  );
}
