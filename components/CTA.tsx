export function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact" className="section-shell">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-blue-500/10 to-purple-500/10 p-8 text-center shadow-glow sm:p-14 lg:p-16">
        <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative">
          <p className="eyebrow">Final call to action</p>
          <h2 className="gradient-text mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Build Your AI-Powered Marketing Engine</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are a startup, SME, fintech company, Web3 project, or B2B brand, NovaStudio helps you move from scattered content to repeatable marketing execution.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button type="button" onClick={onOpenModal} className="rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-slate-200">
              Explore NovaOS
            </button>
            <a href="mailto:hello@novastudio.world" className="rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
