const products = ["Brand Brain", "Campaign Builder", "Content Engine", "Lead Capture Kit", "Growth Dashboard", "Marketplace", "Academy", "Nova Analytics"];

export function ProductCards() {
  return (
    <section id="products" className="section-shell">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Product ecosystem</p>
      <h2 className="gradient-text mt-3 text-4xl font-semibold">Eight connected modules for the full marketing lifecycle.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => <article key={product} className="glass-card rounded-3xl p-6 transition hover:-translate-y-2 hover:border-purple-300/40"><div className="mb-10 h-12 w-12 rounded-2xl bg-blue-500/15 ring-1 ring-blue-300/20"/><h3 className="text-xl font-semibold text-white">{product}</h3><p className="mt-3 text-sm leading-6 text-slate-400">AI-assisted workflows, governance, asset systems, and performance intelligence.</p></article>)}
      </div>
    </section>
  );
}
