import { dashboardModules, trustSignals } from '@/lib/content';

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-radial-stage pt-28">
      <div className="absolute inset-0 bg-grid-lines bg-[length:58px_58px] opacity-35" />
      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-[34rem] w-[34rem] rounded-full bg-purple-600/10 blur-3xl" />

      <div className="section-shell relative pb-12 pt-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm text-slate-300 backdrop-blur-xl">
          <span className="text-white">NovaStudio</span>
          <span className="hidden h-1 w-1 rounded-full bg-blue-300 sm:block" />
          <span>AI Marketing Operations Platform</span>
          <span className="ml-auto rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Singapore · APAC · Global</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 shadow-glow">
              Enterprise AI marketing infrastructure
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              AI Marketing Operating System for High-Growth Businesses
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              NovaStudio helps companies automate content production, campaign execution, customer acquisition, multilingual localization, GEO/SEO, and brand growth through AI-powered marketing workflows.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={onOpenModal} className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-slate-200">
                Explore NovaOS
              </button>
              <a href="#contact" className="rounded-full border border-white/15 px-8 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Book a Strategy Call
              </a>
              <a href="#scenarios" className="rounded-full border border-transparent px-8 py-4 text-center font-semibold text-slate-300 transition hover:text-white">
                View solutions
              </a>
            </div>
          </div>

          {/* Placeholder product visual: replace this dashboard mockup with real NovaOS screenshots or a video demo later. */}
          <div className="relative motion-safe:animate-float-slow">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-[2.2rem] p-4">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />
              <div className="rounded-[1.7rem] border border-white/10 bg-[#070b14]/95 p-5">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">NovaOS Command Center</p>
                    <p className="mt-1 text-2xl font-semibold text-white">AI Growth Control Room</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">Coming soon</span>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Operating map</p>
                    <div className="mt-5 space-y-3">
                      {['Strategy', 'Content', 'Campaign', 'Lead', 'Insight'].map((item, index) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d1324] p-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-xs text-blue-200">{index + 1}</span>
                          <span className="text-sm text-slate-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {dashboardModules.map((module, index) => (
                      <div key={module} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.025] p-4 transition hover:-translate-y-1 hover:border-blue-300/45">
                        <div className="mb-5 h-16 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-transparent" />
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-white">{module}</p>
                          <span className="text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">Workflow module for repeatable growth.</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {trustSignals.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
