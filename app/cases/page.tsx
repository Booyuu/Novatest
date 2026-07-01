'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const cases = [
  {
    title: 'Fintech merchant acquisition system',
    zh: '金融科技商户获客系统',
    result: 'Merchant education content, onboarding explainers, trust-building assets, and lead follow-up logic.',
    zhResult: '商户教育内容、入驻讲解、信任背书素材和线索跟进逻辑。',
  },
  {
    title: 'Web3 onboarding and KYC campaign',
    zh: 'Web3 注册与 KYC 转化活动',
    result: 'Tutorial scripts, mobile UI guidance, social distribution, and community-ready campaign assets.',
    zhResult: '教程脚本、移动端 UI 引导、社媒分发和社区活动素材。',
  },
  {
    title: 'AI SaaS authority content engine',
    zh: 'AI SaaS 权威内容引擎',
    result: 'LinkedIn posts, product explainers, comparison content, GEO/AEO articles, and sales enablement assets.',
    zhResult: 'LinkedIn 内容、产品讲解、对比内容、GEO/AEO 文章和销售赋能素材。',
  },
];

export default function CasesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="bg-radial-stage px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Cases / 案例</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Example marketing systems NovaStudio can build.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use this page later for real client case studies, project screenshots, metrics, and video demos.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">后续可以把这里替换成真实客户案例、项目截图、关键数据和视频 Demo。</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Case template</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-lg text-slate-500">{item.zh}</p>
              <p className="mt-6 leading-7 text-slate-700">{item.result}</p>
              <p className="mt-3 leading-7 text-slate-500">{item.zhResult}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
