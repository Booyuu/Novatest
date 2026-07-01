'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { academyItems } from '@/lib/content';

export default function AcademyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="bg-radial-stage px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Academy / 学院</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Learn, compete, and grow with NovaOS.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A future education layer for AI marketing operators, creators, and growth teams.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">未来这里会成为 AI 营销运营者、创作者和增长团队的学习平台。</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {academyItems.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">Academy module placeholder for future courses, challenges, and creator programs.</p>
              <p className="mt-2 leading-7 text-slate-500">未来课程、挑战赛和创作者计划的占位模块。</p>
            </div>
          ))}
        </div>
      </section>
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
