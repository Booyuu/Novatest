"use client";

export function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact" className="section-shell">
      <div className="glass-card overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/10 via-blue-500/10 to-purple-500/10 p-10 text-center sm:p-16">
        <h2 className="gradient-text text-4xl font-semibold sm:text-6xl">Ready to orchestrate growth with NovaStudio?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">Join the next wave of AI-powered teams building brands, campaigns, learning, and marketplace-ready assets.</p>
        <button onClick={onOpenModal} className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-blue-100">Enter NovaOS</button>
      </div>
    </section>
  );
}
