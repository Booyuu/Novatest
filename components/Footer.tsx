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
    qrTitle: 'WhatsApp Consultation', qrText: 'Scan to contact NovaStudio on WhatsApp', socialText: 'Social channels',
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
    qrTitle: 'WhatsApp 咨询', qrText: '扫码通过 WhatsApp 联系 NovaStudio', socialText: '社媒渠道',
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

const socials = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'TikTok', href: '#', icon: 'tiktok' },
] as const;

function SocialIcon({ icon }: { icon: (typeof socials)[number]['icon'] }) {
  if (icon === 'facebook') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4h-3c-3.4 0-5.3 2-5.3 5.3V11H6v4h2.7v7H13v-7h3.2l.7-4H13V9.6c0-1.1.4-1.6 1-1.6Z" /></svg>;
  if (icon === 'linkedin') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.2 0H13v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" /></svg>;
  if (icon === 'instagram') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 12 16.2 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8Zm5.5-3.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></svg>;
  if (icon === 'x') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M18.9 2h3.3l-7.3 8.3L23.5 22h-6.8l-5.3-6.9L5.3 22H2l7.8-8.9L1.5 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.8L7.5 3.9h-2L17.7 20Z" /></svg>;
  if (icon === 'youtube') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31.6 31.6 0 0 0 .5 12 31.6 31.6 0 0 0 1 16.9 3 3 0 0 0 3.1 19C5 19.5 12 19.5 12 19.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-4.9 31.6 31.6 0 0 0-.5-4.9ZM9.8 15.2V8.8l5.8 3.2-5.8 3.2Z" /></svg>;
  return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M17 3c.3 2.2 1.7 4 4 4.6v3.5a7.1 7.1 0 0 1-4-1.2v5.9A6.1 6.1 0 1 1 10.9 9.7c.4 0 .8 0 1.1.1v3.7a2.5 2.5 0 1 0 1.6 2.3V3h3.4Z" /></svg>;
}

function QrCodeVisual() {
  const active = new Set([0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 22, 24, 26, 28, 30, 32, 34, 36, 42, 43, 44, 45, 46, 47, 48, 56, 57, 61, 63, 64, 70, 72, 74, 75, 77, 80, 84, 86, 88, 91, 95, 96, 98, 100, 104, 105, 109, 112, 114, 116, 117, 119, 121, 123, 126, 128, 130, 132, 134, 135, 136, 140, 142, 144, 146, 147, 150, 154, 156, 158, 160, 162, 168, 169, 170, 171, 172, 173, 174, 176, 180, 182, 184, 188, 190, 192, 194, 195, 196, 198, 202, 204, 205, 207, 210, 212, 216, 217, 219, 220, 222, 224]);
  return (
    <div className="mx-auto grid h-36 w-36 grid-cols-[repeat(15,1fr)] gap-0.5 rounded-2xl bg-white p-2 shadow-inner">
      {Array.from({ length: 225 }).map((_, index) => <span key={index} className={`rounded-[2px] ${active.has(index) ? 'bg-slate-950' : 'bg-transparent'}`} />)}
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

        <div className="rounded-[2.5rem] border border-blue-100 bg-white/82 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur-xl lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_2fr_0.9fr]">
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
              <h3 className="text-base font-semibold text-slate-950">{c.qrTitle}</h3>
              <div className="mt-5 rounded-[1.7rem] border border-blue-100 bg-white p-5 text-center shadow-sm shadow-blue-900/5">
                <QrCodeVisual />
                <p className="mt-4 text-sm leading-6 text-slate-500">{c.qrText}</p>
              </div>
              <p className="mt-7 text-sm font-semibold text-slate-950">{c.socialText}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((item) => <a key={item.label} href={item.href} aria-label={item.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-slate-950 text-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-700"><SocialIcon icon={item.icon} /></a>)}
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
