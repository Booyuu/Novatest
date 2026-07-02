'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage } from '@/components/LanguageProvider';

const footerCopy = {
  en: {
    contact: 'Contact Us', consultation: 'Consultation', demo: 'Book Demo', follow: 'WhatsApp Consultation', more: 'More', privacy: 'Privacy Policy', legal: 'Legal Statement', copyright: '© 2026 NovaStudio. NovaStudio is the enterprise front door for NovaOS, with AI assistant and customer data interfaces structured for CRM integration.',
    qrText: 'Scan to contact NovaStudio on WhatsApp', socialText: 'Social channels',
    groups: [
      { title: 'Products', links: ['NovaOS Core', 'AI Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO Engine', 'Compliance Copy Checker', 'Growth Dashboard'] },
      { title: 'Solutions', links: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'] },
      { title: 'Company', links: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Join Us', 'Partner Network'] },
      { title: 'NovaOS Ecosystem', links: ['Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators'] },
    ],
    recommended: ['AI Campaign Builder', 'Brand Brain', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO', 'Compliance Copy Checker', 'Growth Dashboard', 'AI Academy', 'Creator Center', 'AI Workflow'],
  },
  zh: {
    contact: '联系我们', consultation: '咨询方案', demo: '预约试用', follow: 'WhatsApp 咨询', more: '更多推荐', privacy: '隐私保护', legal: '法律声明', copyright: '© 2026 NovaStudio. NovaStudio 是 NovaOS 的企业级前门，AI 助手与客户数据接口按 CRM 集成方向设计。',
    qrText: '扫码通过 WhatsApp 联系 NovaStudio', socialText: '社媒渠道',
    groups: [
      { title: '产品', links: ['NovaOS 核心', 'AI 活动构建器', '品牌大脑', '内容引擎', '线索获取工具包', 'GEO / AEO 引擎', '合规文案检查', '增长仪表盘'] },
      { title: '解决方案', links: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育培训', '诊所与本地服务', '零售与消费', '专业服务'] },
      { title: '关于我们', links: ['了解 NovaStudio', '案例', '资源', '联系我们', '加入我们', '合作网络'] },
      { title: 'NovaOS 生态', links: ['模板市场', '创作者奖励', '学院', '案例挑战', '积分与额度', '认证创作者'] },
    ],
    recommended: ['AI 活动构建器', '品牌大脑', '内容引擎', '线索获取工具包', 'GEO / AEO', '合规文案检查', '增长仪表盘', 'AI 学院', '创作者中心', 'AI 工作流'],
  },
  ja: null,
  ko: null,
} as const;

const socials = ['X', 'in', 'IG', 'TG', 'YT'] as const;

function WhatsAppQr({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
      <div className="mx-auto h-32 w-32 rounded-xl bg-[linear-gradient(45deg,#dcfce7_25%,transparent_25%),linear-gradient(-45deg,#dcfce7_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#dcfce7_75%),linear-gradient(-45deg,transparent_75%,#dcfce7_75%)] bg-[length:18px_18px]" />
      <p className="mt-4 text-sm leading-6 text-slate-500">{label}</p>
    </div>
  );
}

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = footerCopy[lang] ?? footerCopy.en;

  return (
    <footer className="border-t border-blue-100 bg-[#f6f9ff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-blue-100 pb-12 lg:grid-cols-[0.9fr_2.3fr_0.9fr]">
          <div>
            <BrandLogo />
            <p className="mt-8 text-lg font-semibold text-slate-800">{c.contact}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">hello@novastudio.world</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
              <a href="/contact" className="hover:text-blue-700">{c.consultation}</a>
              <button onClick={onOpenModal} className="hover:text-blue-700">NovaOS</button>
              <a href="/contact" className="hover:text-blue-700">{c.demo}</a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.groups.map((group) => <div key={group.title}><h3 className="text-lg font-semibold text-slate-950">{group.title}</h3><div className="mt-5 grid gap-3">{group.links.map((link) => <a key={link} href={group.title.includes('NovaOS') ? '#' : group.title.includes('Solution') || group.title.includes('解决') ? '/solutions' : group.title.includes('Company') || group.title.includes('关于') ? '/company' : '/products'} onClick={(event) => { if (group.title.includes('NovaOS')) { event.preventDefault(); onOpenModal(); } }} className="text-sm text-slate-500 transition hover:text-blue-700">{link}</a>)}</div></div>)}
          </div>
          <div><h3 className="text-lg font-semibold text-slate-950">{c.follow}</h3><div className="mt-5"><WhatsAppQr label={c.qrText} /></div></div>
        </div>
        <div className="grid gap-4 border-b border-blue-100 py-10 lg:grid-cols-[0.14fr_0.86fr]"><p className="font-semibold text-slate-800">{c.more}</p><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">{c.recommended.map((item) => <a key={item} href="/products" className="hover:text-blue-700">{item}</a>)}</div></div>
        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>{c.copyright}</p>
          <div className="flex flex-wrap items-center gap-4"><span>{c.socialText}</span>{socials.map((item) => <a key={item} href="#" aria-label={item} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-500 transition hover:border-blue-300 hover:text-blue-700">{item}</a>)}<a href="#" className="hover:text-blue-700">{c.privacy}</a><a href="#" className="hover:text-blue-700">{c.legal}</a></div>
        </div>
      </div>
    </footer>
  );
}
