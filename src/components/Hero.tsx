"use client";

const modules = ["Brand Brain", "Campaign Builder", "Content Engine", "Lead Capture Kit", "Growth Dashboard", "Marketplace", "Academy"];

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="top" className="section-shell grid min-h-screen items-center gap-12 pt-32 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">Enterprise AI marketing infrastructure</p>
        <h1 className="gradient-text text-5xl font-semibold tracking-tight sm:text-7xl">Build, launch, and scale every growth motion from one AI studio.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">NovaStudio unifies content, campaigns, marketplace assets, creator learning, and business growth in a premium operating layer for modern teams.</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <button onClick={onOpenModal} className="rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-blue-100">Explore NovaOS</button>
          <a href="#what-we-do" className="rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10">See what we do</a>
        </div>
      </div>
      {/* Product screenshot/dashboard placeholder: replace this mockup with real NovaStudio product imagery. */}
      <div className="glass-card relative overflow-hidden rounded-[2rem] p-5">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-5">
          <div className="mb-5 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-yellow-300"/><span className="h-3 w-3 rounded-full bg-green-400"/></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((item, i) => <div key={item} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-blue-300/40"><p className="text-sm text-slate-400">0{i + 1}</p><h3 className="mt-8 font-semibold text-white">{item}</h3></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
