import { platformLayers, productModules, scenarioCards } from '@/lib/content';

function ScenarioGrid() {
  return (
    <section id="scenarios" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">Business scenarios</p>
            <h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">We build around the critical growth scenarios that matter.</h2>
          </div>
          <a href="#products" className="inline-flex w-fit rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-300">Explore product layer</a>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {scenarioCards.map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-700">{item.kicker}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformLayers() {
  return (
    <section id="platform" className="bg-[#f5f8ff] px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 max-w-4xl">
          <p className="eyebrow">AI-native platform support</p>
          <h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">A marketing operating layer, not another scattered tool stack.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">NovaStudio separates strategy, execution, and growth into clear layers that can later become NovaOS modules.</p>
        </div>
        <div className="space-y-5">
          {platformLayers.map((layer) => (
            <div key={layer.number} className="grid gap-6 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm md:grid-cols-[0.35fr_0.65fr] lg:p-8">
              <div>
                <p className="text-6xl font-semibold tracking-[-0.08em] text-blue-100">{layer.number}</p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950">{layer.title}</h3>
                <p className="mt-3 text-slate-600">{layer.subtitle}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {layer.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-slate-700">{point}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCards() {
  return (
    <>
      <ScenarioGrid />
      <PlatformLayers />
      <section id="products" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 max-w-4xl">
            <p className="eyebrow">Product matrix</p>
            <h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">One Ecosystem for AI Marketing Execution</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">A modular product vision for strategy, campaign execution, content operations, lead capture, GEO/AEO, marketplace assets, academy learning, and creator enablement.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productModules.map((item, index) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/30 blur-2xl transition group-hover:bg-blue-300/40" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-sm font-semibold text-white">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="relative text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
