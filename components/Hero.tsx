import { dashboardModules } from '@/lib/content';

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-radial-stage pt-28">
      <div className="absolute inset-0 bg-grid-lines bg-[length:56px_56px] opacity-45" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="section-shell relative grid min-h-[860px] items-center gap-12 pb-24 pt-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 shadow-glow">
            AI-native marketing operations for global teams
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            AI Marketing Operating System for High-Growth Businesses
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            NovaStudio helps companies automate content production, campaign execution, customer acquisition, multilingual localization, GEO/SEO, and brand growth through AI-powered marketing workflows.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={onOpenModal} className="rounded-full bg-white px-7 py-4 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-slate-200">
              Explore NovaOS
            </button>
            <a href="#contact" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
              Book a Strategy Call
            </a>
          </div>
        </div>

        {/* Placeholder product visual: replace this dashboard mockup with real NovaOS screenshots or a video demo later. */}
        <div className="motion-safe:animate-float-slow">
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070b14]/95 p-5">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">NovaOS Command Preview</p>
                  <p className="mt-1 text-xl font-semibold text-white">Marketing Operations Layer</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">Preview UI</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {dashboardModules.map((module, index) => (
                  <div key={module} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.025] p-4 transition hover:-translate-y-1 hover:border-blue-300/45">
                    <div className="mb-5 h-20 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-transparent" />
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-white">{module}</p>
                      <span className="text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">AI workflow module for repeatable growth execution.</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span>Growth signal</span>
                  <span>Live pipeline placeholder</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
