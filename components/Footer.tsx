'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage } from '@/components/LanguageProvider';

const footerCopy = {
  en: {
    contact: 'Contact', emailLabel: 'Business inquiries', consultation: 'Consultation', demo: 'Book Demo', follow: 'WhatsApp Consultation', more: 'Popular entries', privacy: 'Privacy Policy', legal: 'Legal Statement', copyright: '© 2026 NovaStudio. Enterprise front door for NovaOS, the AI Marketing OS for high-growth businesses.',
    body: 'NovaStudio helps companies move from scattered content to repeatable AI-powered marketing operations.',
    ctaTitle: 'Ready to build your AI marketing operating layer?',
    ctaBody: 'Use NovaStudio as the front door and NovaOS as the system behind campaigns, content, leads, marketplace assets and customer growth workflows.',
    ctaPrimary: 'Enter NovaOS', ctaSecondary: 'Contact NovaStudio',
    qrText: 'WhatsApp contact card', socialText: 'Social',
    groups: [
      { title: 'Products', links: ['NovaOS Core', 'AI Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO Engine', 'Compliance Copy Checker', 'Growth Dashboard'] },
      { title: 'Solutions', links: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'] },
      { title: 'NovaOS Ecosystem', links: ['Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators'] },
      { title: 'Company', links: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Partner Network', 'Singapore / APAC'] },
    ],
    recommended: ['Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO', 'Compliance Checker', 'Growth Dashboard', 'Academy', 'Creator Center', 'AI Workflow'],
  },
  zh: {
    contact: '联系', emailLabel: '商务咨询', consultation: '咨询方案', demo: '预约沟通', follow: 'WhatsApp 咨询', more: '热门入口', privacy: '隐私保护', legal: '法律声明', copyright: '© 2026 NovaStudio. NovaStudio 是 NovaOS 的企业级前门；NovaOS 是面向高增长企业的 AI Marketing OS。',
    body: 'NovaStudio 帮企业从零散内容，升级为可复制的 AI 营销运营系统。',
    ctaTitle: '准备搭建你的 AI 营销操作层了吗？',
    ctaBody: '用 NovaStudio 做企业级前门，用 NovaOS 承载活动、内容、线索、市场资产和客户增长工作流。',
    ctaPrimary: '进入 NovaOS', ctaSecondary: '联系 NovaStudio',
    qrText: 'WhatsApp 联系卡', socialText: '社媒',
    groups: [
      { title: '产品', links: ['NovaOS 核心', 'AI 活动构建器', '品牌大脑', '内容引擎', '线索获取工具包', 'GEO / AEO 引擎', '合规文案检查', '增长仪表盘'] },
      { title: '解决方案', links: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育培训', '诊所与本地服务', '零售与消费', '专业服务'] },
      { title: 'NovaOS 生态', links: ['模板市场', '创作者奖励', '学院', '案例挑战', '积分与额度', '认证创作者'] },
      { title: '公司', links: ['了解 NovaStudio', '案例', '资源', '联系我们', '合作网络', '新加坡 / APAC'] },
    ],
    recommended: ['活动构建器', '品牌大脑', '内容引擎', '线索获取', 'GEO / AEO', '合规检查', '增长仪表盘', '学院', '创作者中心', 'AI 工作流'],
  },
  ja: null,
  ko: null,
} as const;

const socials = ['X', 'in', 'IG', 'TG', 'YT'] as const;

function WhatsAppCard({ label }: { label: string }) {
  return (
    <div className="rounded-[1.6rem] border border-blue-100 bg-white/90 p-4 shadow-sm shadow-blue-900/5 backdrop-blur-xl">
      <div className="grid grid-cols-[3.6rem_1fr] items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-bold text-emerald-600">WA</div>
        <div>
          <p className="text-sm font-semibold text-slate-950">{label}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">hello@novastudio.world</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1 rounded-2xl bg-[#f3fff8] p-3">
        {Array.from({ length: 35 }).map((_, index) => <span key={index} className={`h-2 rounded-sm ${index % 3 === 0 || index % 7 === 0 ? 'bg-emerald-500' : 'bg-emerald-100'}`} />)}
      </div>
    </div>
  );
}

function groupHref(groupTitle: string) {
  if (groupTitle.includes('Solution') || groupTitle.includes('解决')) return '/solutions';
  if (groupTitle.includes('Company') || groupTitle.includes('公司')) return '/company';
  if (groupTitle.includes('NovaOS')) return '#';
  return '/products';
}

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = footerCopy[lang] ?? footerCopy.en;

  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,0.14),transparent_28rem),radial-gradient(circle_at_82%_0%,rgba(125,92,255,0.12),transparent_30rem),linear-gradient(180deg,#ffffff_0%,#f3f7ff_48%,#eef4ff_100%)] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-35" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-10 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">NovaOS</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] lg:text-5xl">{c.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">{c.ctaBody}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <button type="button" onClick={onOpenModal} className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-100">{c.ctaPrimary}</button>
            <a href="/contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">{c.ctaSecondary}</a>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-blue-100 bg-white/82 p-6 shadow-2xl shadow-blue-900/8 backdrop-blur-xl lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_2fr_0.75fr]">
            <div>
              <BrandLogo />
              <p className="mt-6 max-w-sm text-base leading-7 text-slate-600">{c.body}</p>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{c.emailLabel}</p>
              <a href="mailto:hello@novastudio.world" className="mt-2 block break-words text-2xl font-semibold tracking-tight text-slate-950 transition hover:text-blue-700">hello@novastudio.world</a>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <a href="/contact" className="rounded-full bg-blue-700 px-4 py-2 text-white">{c.consultation}</a>
                <button type="button" onClick={onOpenModal} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-700">NovaOS</button>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {c.groups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-base font-semibold text-slate-950">{group.title}</h3>
                  <div className="mt-5 grid gap-3">
                    {group.links.map((link) => {
                      const href = groupHref(group.title);
                      return <a key={link} href={href} onClick={(event) => { if (href === '#') { event.preventDefault(); onOpenModal(); } }} className="text-sm leading-6 text-slate-500 transition hover:text-blue-700">{link}</a>;
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-950">{c.follow}</h3>
              <div className="mt-5"><WhatsAppCard label={c.qrText} /></div>
              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map((item) => <a key={item} href="#" aria-label={item} className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white text-sm font-semibold text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700">{item}</a>)}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-blue-100 pt-8">
            <p className="font-semibold text-slate-800">{c.more}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.recommended.map((item) => <a key={item} href="/products" className="rounded-full border border-blue-100 bg-[#f8fbff] px-4 py-2 text-sm text-slate-500 transition hover:border-blue-300 hover:bg-white hover:text-blue-700">{item}</a>)}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-2 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>{c.copyright}</p>
          <div className="flex flex-wrap gap-5"><a href="#" className="hover:text-blue-700">{c.privacy}</a><a href="#" className="hover:text-blue-700">{c.legal}</a></div>
        </div>
      </div>
    </footer>
  );
}
