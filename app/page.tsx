'use client';

import { useState } from 'react';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HomeDeepSections } from '@/components/HomeDeepSections';
import { HomeEnterpriseStrength } from '@/components/HomeEnterpriseStrength';
import { HomeFAQ } from '@/components/HomeFAQ';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { PartnerWall } from '@/components/PartnerWall';

function NovaOSTeaser() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-8 rounded-[2.5rem] border border-blue-100 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.16),transparent_24rem),linear-gradient(135deg,#ffffff_0%,#eef5ff_100%)] p-8 shadow-2xl shadow-blue-900/10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">NovaOS product page</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950">The homepage shows the vision. The NovaOS page explains the product.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Explore the dedicated NovaOS page for modules, workflows, dashboard previews and how the system connects GEO, content, AI video, publishing and lead capture.</p>
        </div>
        <a href="/novaos" className="rounded-full bg-blue-700 px-7 py-4 text-center font-semibold text-white shadow-xl shadow-blue-700/20 transition hover:bg-blue-800">Explore NovaOS</a>
      </div>
    </section>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <NovaOSTeaser />
      <HomeDeepSections onOpenModal={openModal} />
      <HomeEnterpriseStrength />
      <PartnerWall />
      <HomeFAQ />
      <CTA onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
