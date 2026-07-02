'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Contact', title: 'Start with a clear growth brief.', body: 'Tell NovaStudio what you sell, who you want to reach, and where the current bottleneck is. We will map the right content, campaign, GEO, lead capture and customer operation workflow.', badges: ['Strategy call', 'WhatsApp-ready', 'CRM form placeholder', 'APAC + global'],
    leftTitle: 'What to prepare before contacting us.', leftBody: 'A good brief helps us avoid vague design work and move directly into business system design.', items: ['Business model and main offer', 'Target customer and market', 'Current website or social links', 'Main conversion goal', 'Preferred channels: LinkedIn, X, TikTok, Instagram, Google, Telegram or WhatsApp', 'Any compliance, brand or legal restrictions'],
    formTitle: 'Project brief placeholder', fields: ['Name', 'Company', 'Email', 'Website / Social link', 'Industry', 'Target market', 'Main goal', 'Budget range'], message: 'Project background, current problem and expected outcome', button: 'Email NovaStudio',
    routesTitle: 'Best contact route', routes: [['Strategy call', 'For full website, growth system or NovaOS planning.'], ['WhatsApp', 'For quick consultation and file sharing.'], ['Email', 'For formal proposals, project briefs and attachments.']],
  },
  zh: {
    eyebrow: '联系', title: '先从清楚的增长 brief 开始。', body: '告诉 NovaStudio 你卖什么、想触达谁、当前卡点在哪里。我们会规划合适的内容、活动、GEO、线索捕获和客户运营工作流。', badges: ['策略沟通', 'WhatsApp 咨询', 'CRM 表单预留', 'APAC + 全球'],
    leftTitle: '联系前建议准备什么。', leftBody: '好的 brief 可以避免停留在模糊设计需求，直接进入业务系统规划。', items: ['商业模式和核心 offer', '目标客户和市场', '当前官网或社媒链接', '主要转化目标', '偏好的渠道：LinkedIn、X、TikTok、Instagram、Google、Telegram 或 WhatsApp', '合规、品牌或法律限制'],
    formTitle: '项目 brief 占位表单', fields: ['姓名', '公司', '邮箱', '官网 / 社媒链接', '行业', '目标市场', '主要目标', '预算范围'], message: '项目背景、当前问题和希望达成的结果', button: '发送邮件给 NovaStudio',
    routesTitle: '推荐联系路径', routes: [['策略沟通', '适合官网、增长系统或 NovaOS 规划。'], ['WhatsApp', '适合快速咨询和文件沟通。'], ['Email', '适合正式提案、项目 brief 和附件。']],
  },
  ja: null,
  ko: null,
} as const;

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const { lang } = useLanguage();
  const page = (copy[lang] ?? copy.en) || copy.en;

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.18),transparent_28rem),radial-gradient(circle_at_85%_10%,rgba(125,92,255,0.16),transparent_30rem),linear-gradient(180deg,#ffffff,#f3f7ff)] px-5 pb-24 pt-40 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-45" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-slate-950 sm:text-7xl">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">{page.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">{page.badges.map((badge) => <span key={badge} className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">{badge}</span>)}</div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#eff6ff,#ffffff)] p-8 shadow-xl shadow-blue-900/5 lg:p-10">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">{page.leftTitle}</h2>
            <p className="mt-5 leading-8 text-slate-600">{page.leftBody}</p>
            <div className="mt-8 grid gap-3">{page.items.map((item) => <div key={item} className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-slate-600">✓ {item}</div>)}</div>
          </div>
          <div className="rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-950/10 lg:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{page.formTitle}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{page.fields.map((field) => <div key={field} className="rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 text-slate-500">{field}</div>)}</div>
            <div className="mt-4 min-h-32 rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 text-slate-500">{page.message}</div>
            <a href="mailto:hello@novastudio.world" className="mt-6 inline-flex rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20">{page.button}</a>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9ff] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-center text-5xl font-semibold tracking-[-0.055em] text-slate-950">{page.routesTitle}</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{page.routes.map(([title, body]) => <div key={title} className="rounded-[2rem] bg-white p-8 shadow-sm shadow-blue-900/5"><h3 className="text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></div>)}</div>
        </div>
      </section>

      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
