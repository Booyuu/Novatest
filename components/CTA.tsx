export function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-blue-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.22),transparent_24rem),linear-gradient(135deg,#f8fbff,#eef6ff)] p-8 text-center shadow-2xl shadow-blue-900/10 sm:p-14 lg:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">Final call to action / 行动入口</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">Build Your AI-Powered Marketing Engine</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Whether you are a startup, SME, fintech company, Web3 project, or B2B brand, NovaStudio helps you move from scattered content to repeatable marketing execution.
        </p>
        <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-500">无论你是初创公司、中小企业、金融科技、Web3 项目或 B2B 品牌，NovaStudio 都能帮助你从零散内容走向可复制的营销执行系统。</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={onOpenModal} className="rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800">Explore NovaOS</button>
          <a href="/contact" className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:border-blue-200">Book a Strategy Call</a>
        </div>
      </div>
    </section>
  );
}
