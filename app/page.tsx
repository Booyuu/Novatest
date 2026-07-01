'use client';

import { useState } from 'react';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { ProductCards } from '@/components/ProductCards';
import { SolutionCards } from '@/components/SolutionCards';
import { academyItems, marketplaceFeatures, whatWeDoCards, whyNovaStudio } from '@/lib/content';

function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-shell">
      <div className="mb-12 max-w-4xl">
        <p className="eyebrow">What we do</p>
        <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">From Content Production to AI-Powered Marketing Operations</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          NovaStudio is not just an AI video or creative studio. We help businesses build repeatable marketing execution systems through AI workflows, content systems, campaign planning, lead generation, and business growth strategy.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {whatWeDoCards.map((item) => (
          <div key={item.title} className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-blue-300/45 hover:bg-white/[0.075]">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NovaEntrySection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="novaos" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Command center</p>
          <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Enter NovaOS</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            NovaOS will be the AI marketing command center where businesses can plan campaigns, generate content, buy proven marketing assets, learn from creators, and track growth in one ecosystem.
          </p>
        </div>
        <button type="button" onClick={onOpenModal} className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-white/[0.05] p-8 text-left shadow-glow transition hover:-translate-y-1 hover:border-blue-200/45 sm:p-10">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          <span className="relative text-sm uppercase tracking-[0.3em] text-blue-200">Future product entry</span>
          <div className="relative mt-6 flex items-center justify-between gap-6 text-4xl font-semibold text-white">
            <span>Enter NovaOS</span>
            <span className="transition group-hover:translate-x-2">→</span>
          </div>
          <p className="relative mt-5 max-w-2xl text-slate-300">Clicking this card opens the current maintenance message instead of a separate NovaOS website.</p>
        </button>
      </div>
    </section>
  );
}

function MarketplaceSection() {
  return (
    <section id="resources" className="section-shell">
      <div className="mb-12 max-w-4xl">
        <p className="eyebrow">Marketplace / Creator Economy</p>
        <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Marketing Knowledge Should Become Tradable Assets</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          NovaOS will not only be a tool. It will also become a marketing asset marketplace where creators can publish campaign templates, content packs, positioning frameworks, funnel templates, GEO/AEO kits, and industry playbooks. Businesses will be able to buy, redeem, customize, and apply these assets inside NovaOS.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {marketplaceFeatures.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.07]">
            <p className="font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AcademySection() {
  return (
    <section id="academy" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Academy and community</p>
          <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Learn, Compete, and Grow with the NovaOS Ecosystem</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {academyItems.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">✓ {item}</div>
          ))}
          <div className="glass-card rounded-3xl p-6 sm:col-span-2">
            <p className="eyebrow">Example challenge</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">NovaOS 7-Day AI Marketing Challenge</h3>
            <p className="mt-4 leading-7 text-slate-300">Participants use NovaOS to build a 30-day campaign for a real or sample business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="company" className="section-shell">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-panel sm:p-12">
        <div className="mb-10 max-w-4xl">
          <p className="eyebrow">Why NovaStudio</p>
          <h2 className="gradient-text mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">AI Speed. Human Strategy. Business Growth.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyNovaStudio.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-[#090d18] p-5 text-slate-200">✓ {item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="overflow-hidden bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <WhatWeDoSection />
      <NovaEntrySection onOpenModal={openModal} />
      <ProductCards />
      <SolutionCards />
      <MarketplaceSection />
      <AcademySection />
      <WhySection />
      {/* Placeholder area above can be extended with a launch video, customer logos, or product screenshots. */}
      <CTA onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
