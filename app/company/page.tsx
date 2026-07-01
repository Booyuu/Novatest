'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { whyNovaStudio } from '@/lib/content';

export default function CompanyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="bg-radial-stage px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Company / 公司</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">NovaStudio builds AI marketing operations for global growth.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">We combine AI workflow design, content systems, campaign execution, and business strategy into one repeatable growth layer.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">我们把 AI 工作流、内容系统、活动执行和商业策略整合成可复制的增长层。</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-tight">Why NovaStudio / 为什么选择 NovaStudio</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyNovaStudio.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">✓ {item}</div>
            ))}
          </div>
        </div>
      </section>
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
