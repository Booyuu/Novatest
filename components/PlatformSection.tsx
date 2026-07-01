import { platformLayers } from '@/lib/content';

export function PlatformSection() {
  return (
    <section id="platform" className="section-shell">
      <div className="mb-12 max-w-4xl">
        <p className="eyebrow">AI-native platform support</p>
        <h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">A marketing operating layer, not another scattered tool stack.</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">NovaStudio separates strategy, execution, and growth into clear layers that can later become NovaOS modules.</p>
      </div>
      <div className="space-y-5">
        {platformLayers.map((layer) => (
          <div key={layer.number} className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel md:grid-cols-[0.35fr_0.65fr] lg:p-8">
            <div>
              <p className="text-6xl font-semibold tracking-[-0.08em] text-white/20">{layer.number}</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{layer.title}</h3>
              <p className="mt-3 text-slate-300">{layer.subtitle}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {layer.points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-[#090d18] p-4 text-slate-200">{point}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
