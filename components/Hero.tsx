import { dashboardModules } from '@/lib/content';

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.22),transparent_28rem),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.18),transparent_28rem),linear-gradient(180deg,#ffffff_0%,#eef6ff_58%,#ffffff_100%)] pt-28 text-slate-950">
      <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-40" />
      <div className="section-shell relative grid min-h-[760px] items-center gap-12 pb-20 pt-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-xl">
            <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">NovaStudio</span>
            <span>AI Marketing Operations Platform</span>
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-slate-950 sm:text-7xl lg:text-8xl">
            AI Marketing Operating System for High-Growth Businesses
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            NovaStudio helps companies automate content production, campaign execution, customer acquisition, multilingual localization, GEO/SEO, and brand growth through AI-powered marketing workflows.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
            NovaStudio 帮助企业通过 AI 工作流自动化内容生产、营销活动、客户获取、多语言本地化、GEO/SEO 和品牌增长。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={onOpenModal} className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800">Explore NovaOS</button>
            <a href="/contact" className="rounded-full border border-slate-200 bg-white px-8 py-4 text-center font-semibold text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-blue-200">Book a Strategy Call</a>
            <a href="/solutions" className="rounded-full px-8 py-4 text-center font-semibold text-blue-700 transition hover:text-blue-900">View solutions</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-300/30 via-cyan-200/25 to-white blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-900/10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">NovaOS Command Center</p>
                <p className="text-2xl font-semibold text-slate-950">AI Growth Control Room</p>
              </div>
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">Coming soon</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {dashboardModules.map((module, index) => (
                <div key={module} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-4 transition hover:-translate-y-1 hover:border-blue-300">
                  <div className="mb-5 h-16 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-400 to-sky-100" />
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-950">{module}</p>
                    <span className="text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
