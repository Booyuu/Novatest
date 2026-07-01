'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { SolutionCards } from '@/components/SolutionCards';

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="relative overflow-hidden bg-radial-stage px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Solutions / 解决方案</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">AI marketing systems for different growth scenarios.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">NovaStudio helps fintech, Web3, SaaS, SMEs, education and local-service brands build repeatable acquisition, content, and trust-building systems.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">NovaStudio 为金融科技、Web3、SaaS、中小企业、教育和本地服务品牌搭建可复制的获客、内容与信任建设系统。</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {['Positioning / 定位', 'Execution / 执行', 'Growth / 增长'].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-slate-600">We turn market-specific needs into campaigns, content systems, lead flows, and measurable marketing operations.</p>
              <p className="mt-2 leading-7 text-slate-500">我们把不同市场的需求转化为活动、内容系统、线索流程和可衡量的营销运营。</p>
            </div>
          ))}
        </div>
      </section>
      <SolutionCards />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
