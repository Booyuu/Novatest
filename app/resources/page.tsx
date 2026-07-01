'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const resources = ['AI marketing playbooks', 'GEO / AEO guides', 'Campaign templates', 'Compliance-aware messaging notes'];

export default function ResourcesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="bg-radial-stage px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Resources / 资源</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Operational knowledge for AI-native marketing teams.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This page can host guides, reports, templates, and thought leadership articles.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">这里可以放指南、报告、模板和行业观点文章。</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">Resource placeholder. Replace with real articles or downloads later.</p>
              <p className="mt-2 leading-7 text-slate-500">资源占位。后续可替换成真实文章或下载资料。</p>
            </div>
          ))}
        </div>
      </section>
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
