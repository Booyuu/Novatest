'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage } from '@/components/LanguageProvider';

const footerCopy = {
  en: {
    contact: 'Contact Us', consultation: 'Consultation', demo: 'Book Demo', follow: 'WhatsApp Consultation', more: 'More', privacy: 'Privacy Policy', legal: 'Legal Statement', copyright: '© 2026 NovaStudio. AI assistant and customer data interface reserved for future integration.',
    qrText: 'Scan to contact NovaStudio on WhatsApp',
    socialText: 'Social channels',
    groups: [
      { title: 'Products', links: ['NovaOS Core', 'AI Agent Center', 'Brand Brain', 'Content Engine', 'Campaign Builder', 'GEO / AEO Engine', 'Data & CRM Layer', 'AI Analytics'] },
      { title: 'Solutions', links: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'] },
      { title: 'Company', links: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Join Us', 'Partner Network'] },
      { title: 'NovaOS Ecosystem', links: ['Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators'] },
    ],
    recommended: ['Marketing AI Agent', 'Sales AI Agent', 'Customer Service AI', 'Data Agent', 'GEO', 'AI CRM', 'AI Analytics', 'AI Academy', 'Private Domain', 'AI Workflow'],
  },
  zh: {
    contact: '联系我们', consultation: '咨询方案', demo: '预约试用', follow: 'WhatsApp 咨询', more: '更多推荐', privacy: '隐私保护', legal: '法律声明', copyright: '© 2026 NovaStudio. AI 助手、数据库和客户记录接口已预留，后续可接入真实系统。',
    qrText: '扫码通过 WhatsApp 联系 NovaStudio',
    socialText: '社媒渠道',
    groups: [
      { title: '产品', links: ['NovaOS 核心', '智能体中心', '品牌大脑', '内容引擎', '活动构建器', 'GEO / AEO 引擎', '数据与 CRM 层', 'AI 分析'] },
      { title: '解决方案', links: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育培训', '诊所与本地服务', '零售与消费', '专业服务'] },
      { title: '关于我们', links: ['了解 NovaStudio', '案例', '资源', '联系我们', '加入我们', '合作网络'] },
      { title: 'NovaOS 生态', links: ['模板市场', '创作者奖励', '学院', '案例挑战', '积分与额度', '认证创作者'] },
    ],
    recommended: ['营销智能体', '销售智能体', '客服智能体', '数据智能体', 'GEO', 'AI CRM', 'AI 分析', 'AI 学院', '私域电商', 'AI 工作流'],
  },
  ja: {
    contact: 'お問い合わせ', consultation: '相談する', demo: 'デモ予約', follow: 'WhatsApp 相談', more: 'おすすめ', privacy: 'プライバシー', legal: '法的表示', copyright: '© 2026 NovaStudio. AI アシスタントと顧客データ連携の接口を将来用に予約しています。',
    qrText: 'WhatsApp で NovaStudio に連絡',
    socialText: 'ソーシャルチャンネル',
    groups: [
      { title: '製品', links: ['NovaOS コア', 'AI エージェントセンター', 'ブランドブレイン', 'コンテンツエンジン', 'キャンペーンビルダー', 'GEO / AEO エンジン', 'データと CRM', 'AI 分析'] },
      { title: 'ソリューション', links: ['フィンテックと決済', 'Web3 と暗号資産', 'AI と B2B SaaS', '中小企業', '教育', 'クリニックと地域サービス', '小売と消費', '専門サービス'] },
      { title: '会社情報', links: ['NovaStudio について', '事例', 'リソース', 'お問い合わせ', '採用', 'パートナー'] },
      { title: 'NovaOS エコシステム', links: ['テンプレート市場', 'クリエイター報酬', 'アカデミー', 'ケースチャレンジ', 'ポイントとクレジット', '認定クリエイター'] },
    ],
    recommended: ['マーケティング AI', '営業 AI', '客服 AI', 'データ Agent', 'GEO', 'AI CRM', 'AI 分析', 'AI Academy', 'プライベートドメイン', 'AI Workflow'],
  },
  ko: {
    contact: '문의하기', consultation: '솔루션 상담', demo: '데모 예약', follow: 'WhatsApp 상담', more: '추천', privacy: '개인정보 보호', legal: '법적 고지', copyright: '© 2026 NovaStudio. AI 어시스턴트와 고객 데이터 인터페이스는 향후 연동을 위해 예약되어 있습니다.',
    qrText: 'WhatsApp으로 NovaStudio에 문의하세요',
    socialText: '소셜 채널',
    groups: [
      { title: '제품', links: ['NovaOS 코어', 'AI 에이전트 센터', '브랜드 브레인', '콘텐츠 엔진', '캠페인 빌더', 'GEO / AEO 엔진', '데이터 및 CRM 레이어', 'AI 분석'] },
      { title: '솔루션', links: ['핀테크 및 결제', 'Web3 및 크립토', 'AI 및 B2B SaaS', '중소기업', '교육', '클리닉 및 로컬 서비스', '리테일 및 소비재', '전문 서비스'] },
      { title: '회사', links: ['NovaStudio 소개', '사례', '리소스', '문의', '채용', '파트너 네트워크'] },
      { title: 'NovaOS 생태계', links: ['템플릿 마켓', '크리에이터 보상', '아카데미', '사례 챌린지', '포인트 및 크레딧', '인증 크리에이터'] },
    ],
    recommended: ['마케팅 AI', '세일즈 AI', '고객 서비스 AI', '데이터 Agent', 'GEO', 'AI CRM', 'AI 분석', 'AI Academy', '프라이빗 도메인', 'AI Workflow'],
  },
} as const;

const socialLinks = [
  { label: 'X', href: '#', icon: 'x' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Telegram', href: '#', icon: 'telegram' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
] as const;

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]['icon'] }) {
  if (icon === 'x') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M18.9 2h3.3l-7.3 8.3L23.5 22h-6.8l-5.3-6.9L5.3 22H2l7.8-8.9L1.5 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.8L7.5 3.9h-2L17.7 20Z" /></svg>;
  if (icon === 'linkedin') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.2 0H13v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" /></svg>;
  if (icon === 'instagram') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 12 16.2 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8ZM17.5 6.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></svg>;
  if (icon === 'telegram') return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M21.8 4.6 18.6 20c-.2 1-.8 1.2-1.6.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.4-.1-.6-.6-.2L6.6 13.8 1.9 12.3c-1-.3-1-1 .2-1.5L20.5 3.7c.9-.3 1.6.2 1.3.9Z" /></svg>;
  return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31.6 31.6 0 0 0 .5 12 31.6 31.6 0 0 0 1 16.9 3 3 0 0 0 3.1 19C5 19.5 12 19.5 12 19.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-4.9 31.6 31.6 0 0 0-.5-4.9ZM9.8 15.2V8.8l5.8 3.2-5.8 3.2Z" /></svg>;
}

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
  const c = footerCopy[lang];

  return (
    <footer className="border-t border-blue-100 bg-[#f6f9ff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-blue-100 pb-12 lg:grid-cols-[0.9fr_2.3fr_0.9fr]">
          <div><BrandLogo /><p className="mt-8 text-lg font-semibold text-slate-800">{c.contact}</p><p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">hello@novastudio.world</p><div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500"><a href="/contact" className="hover:text-blue-700">{c.consultation}</a><button onClick={onOpenModal} className="hover:text-blue-700">NovaOS</button><a href="/contact" className="hover:text-blue-700">{c.demo}</a></div></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{c.groups.map((group) => <div key={group.title}><h3 className="text-lg font-semibold text-slate-950">{group.title}</h3><div className="mt-5 grid gap-3">{group.links.map((link) => <a key={link} href={group.title.includes('Solution') || group.title.includes('解决') || group.title.includes('ソリューション') || group.title.includes('솔루션') ? '/solutions' : group.title.includes('Company') || group.title.includes('关于') || group.title.includes('会社') || group.title.includes('회사') ? '/company' : group.title.includes('NovaOS') ? '#' : '/products'} onClick={(event) => { if (group.title.includes('NovaOS')) { event.preventDefault(); onOpenModal(); } }} className="text-sm text-slate-500 transition hover:text-blue-700">{link}</a>)}</div></div>)}</div>
          <div><h3 className="text-lg font-semibold text-slate-950">{c.follow}</h3><div className="mt-5"><WhatsAppQr label={c.qrText} /></div></div>
        </div>
        <div className="grid gap-4 border-b border-blue-100 py-10 lg:grid-cols-[0.14fr_0.86fr]"><p className="font-semibold text-slate-800">{c.more}</p><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">{c.recommended.map((item) => <a key={item} href="/products" className="hover:text-blue-700">{item}</a>)}</div></div>
        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>{c.copyright}</p>
          <div className="flex flex-wrap items-center gap-4"><span>{c.socialText}</span>{socialLinks.map((item) => <a key={item.label} href={item.href} aria-label={item.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:text-blue-700"><SocialIcon icon={item.icon} /></a>)}<a href="#" className="hover:text-blue-700">{c.privacy}</a><a href="#" className="hover:text-blue-700">{c.legal}</a></div>
        </div>
      </div>
    </footer>
  );
}
