import { productModules } from '@/lib/content';

export function ProductCards() {
  return (
    <section id="products" className="section-shell">
      <div className="mb-12 max-w-4xl">
        <p className="eyebrow">Products</p>
        <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">One Ecosystem for AI Marketing Execution</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {productModules.map((item) => (
          <div key={item.title} className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-blue-300/45 hover:bg-white/[0.075]">
            <div className="mb-5 h-12 w-12 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-purple-500/15" />
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
