'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="bg-radial-stage px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Contact / 联系</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Book a strategy call with NovaStudio.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Tell us your business, market, and growth goal. We will map the right content, campaign, GEO, and acquisition system.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">告诉我们你的业务、市场和增长目标，我们会规划合适的内容、活动、GEO 和获客系统。</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Start with a clear brief.</h2>
            <p className="mt-5 leading-8 text-slate-600">Replace this placeholder with your real booking link, WhatsApp, Telegram, email, or CRM form later.</p>
            <p className="mt-3 leading-8 text-slate-500">后续可以把这里替换成真实预约链接、WhatsApp、Telegram、邮箱或 CRM 表单。</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Name / 姓名', 'Company / 公司', 'Email / 邮箱', 'Budget / 预算'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-500">{item}</div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-500">Project brief / 项目需求</div>
            <a href="mailto:hello@novastudio.world" className="mt-6 inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white">Email NovaStudio</a>
          </div>
        </div>
      </section>
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
