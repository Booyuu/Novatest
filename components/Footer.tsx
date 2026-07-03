'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage } from '@/components/LanguageProvider';
import { WhatsAppQrImage } from '@/components/WhatsAppQrImage';

const businessAddress = '41 Woodlands Avenue 9, #05-00, Republic Polytechnic, Singapore 737728';
const businessEmail = 'hello@novastudio.world';

const footerCopy = {
  en: {
    contact: 'Contact', emailLabel: 'Enterprise email', addressLabel: 'Business address', consultation: 'Consultation', privacy: 'Privacy Policy', legal: 'Service Terms', copyright: '© 2026 NovaStudio. NovaOS is the AI Marketing OS for high-growth businesses.',
    body: 'NovaStudio builds NovaOS for AI marketing operations, GEO/AEO, content, AI video workflows, publishing and lead capture.', ctaTitle: 'Ready to build your AI marketing operating layer?', ctaBody: 'Use NovaOS to plan campaigns, generate content, improve AI search visibility, create video workflows, publish content and capture leads.', ctaPrimary: 'Enter NovaOS', ctaSecondary: 'Contact Sales', qrTitle: 'WhatsApp Consultation', qrText: 'Scan to contact NovaStudio on WhatsApp', socialText: 'Social channels',
    groups: [
      { title: 'Product', links: [{ label: 'NovaOS', href: '/novaos' }, { label: 'Products & Services', href: '/products' }, { label: 'Solutions', href: '/solutions' }] },
      { title: 'Resources', links: [{ label: 'Resource Hub', href: '/resources' }, { label: 'Media Kit', href: '/media-kit' }, { label: 'Academy', href: '/academy' }] },
      { title: 'Enterprise', links: [{ label: 'About', href: '/company' }, { label: 'Cases', href: '/cases' }, { label: 'Contact', href: '/contact' }] },
    ],
  },
  zh: {
    contact: '联系', emailLabel: '企业邮箱', addressLabel: '企业地址', consultation: '咨询方案', privacy: '隐私政策', legal: '服务条款', copyright: '© 2026 NovaStudio. NovaOS 是面向高增长企业的 AI Marketing OS。',
    body: 'NovaStudio 打造 NovaOS，用于 AI 营销运营、GEO/AEO、内容、AI 视频工作流、内容发布和线索获取。', ctaTitle: '准备搭建你的 AI 营销操作层了吗？', ctaBody: '用 NovaOS 完成活动策划、内容生成、AI 搜索优化、视频工作流、内容发布和线索获取。', ctaPrimary: '进入 NovaOS', ctaSecondary: '联系销售', qrTitle: 'WhatsApp 咨询', qrText: '扫码通过 WhatsApp 联系 NovaStudio', socialText: '社媒渠道',
    groups: [
      { title: '产品', links: [{ label: 'NovaOS', href: '/novaos' }, { label: '产品与服务', href: '/products' }, { label: '解决方案', href: '/solutions' }] },
      { title: '资源', links: [{ label: '资源中心', href: '/resources' }, { label: '媒体包', href: '/media-kit' }, { label: '学院', href: '/academy' }] },
      { title: '企业', links: [{ label: '关于我们', href: '/company' }, { label: '案例', href: '/cases' }, { label: '联系', href: '/contact' }] },
    ],
  },
  ja: {
    contact: 'お問い合わせ', emailLabel: '企業メール', addressLabel: '事業所在地', consultation: '相談する', privacy: 'プライバシー', legal: '利用規約', copyright: '© 2026 NovaStudio. NovaOS は高成長企業向けの AI Marketing OS です。',
    body: 'NovaStudio は GEO/AEO、コンテンツ、AI動画ワークフロー、配信、リード獲得のための NovaOS を構築しています。', ctaTitle: 'AIマーケティング運用レイヤーを構築しますか？', ctaBody: 'NovaOS でキャンペーン、コンテンツ、AI検索可視性、動画ワークフロー、配信、リード獲得を管理します。', ctaPrimary: 'NovaOS に入る', ctaSecondary: '営業に相談', qrTitle: 'WhatsApp 相談', qrText: 'WhatsApp で NovaStudio に連絡', socialText: 'ソーシャル',
    groups: [
      { title: '製品', links: [{ label: 'NovaOS', href: '/novaos' }, { label: '製品とサービス', href: '/products' }, { label: 'ソリューション', href: '/solutions' }] },
      { title: 'リソース', links: [{ label: 'リソース', href: '/resources' }, { label: 'メディアキット', href: '/media-kit' }, { label: 'アカデミー', href: '/academy' }] },
      { title: '企業', links: [{ label: '会社情報', href: '/company' }, { label: '事例', href: '/cases' }, { label: 'お問い合わせ', href: '/contact' }] },
    ],
  },
  ko: {
    contact: '문의', emailLabel: '기업 이메일', addressLabel: '사업장 주소', consultation: '상담하기', privacy: '개인정보', legal: '이용약관', copyright: '© 2026 NovaStudio. NovaOS는 고성장 기업을 위한 AI Marketing OS입니다.',
    body: 'NovaStudio는 GEO/AEO, 콘텐츠, AI 영상 워크플로, 게시, 리드 확보를 위한 NovaOS를 구축합니다.', ctaTitle: 'AI 마케팅 운영 레이어를 구축할 준비가 되었나요?', ctaBody: 'NovaOS로 캠페인, 콘텐츠, AI 검색 가시성, 영상 워크플로, 게시, 리드 확보를 관리하세요.', ctaPrimary: 'NovaOS 보기', ctaSecondary: '영업 문의', qrTitle: 'WhatsApp 상담', qrText: 'WhatsApp으로 NovaStudio에 문의하세요', socialText: '소셜 채널',
    groups: [
      { title: '제품', links: [{ label: 'NovaOS', href: '/novaos' }, { label: '제품 및 서비스', href: '/products' }, { label: '솔루션', href: '/solutions' }] },
      { title: '리소스', links: [{ label: '리소스 허브', href: '/resources' }, { label: '미디어 키트', href: '/media-kit' }, { label: '아카데미', href: '/academy' }] },
      { title: '기업', links: [{ label: '회사 정보', href: '/company' }, { label: '사례', href: '/cases' }, { label: '문의', href: '/contact' }] },
    ],
  },
} as const;

const socials = [
  { label: 'Facebook', href: '#', icon: 'facebook' }, { label: 'LinkedIn', href: '#', icon: 'linkedin' }, { label: 'Instagram', href: '#', icon: 'instagram' }, { label: 'X', href: '#', icon: 'x' }, { label: 'YouTube', href: '#', icon: 'youtube' }, { label: 'TikTok', href: '#', icon: 'tiktok' }, { label: 'WeChat', href: '#', icon: 'wechat' },
] as const;

function SocialIcon({ icon }: { icon: (typeof socials)[number]['icon'] }) {
  if (icon === 'facebook') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M14 8h3V4h-3c-3.4 0-5.3 2-5.3 5.3V11H6v4h2.7v7H13v-7h3.2l.7-4H13V9.6c0-1.1.4-1.6 1-1.6Z" /></svg>;
  if (icon === 'linkedin') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.2 0H13v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" /></svg>;
  if (icon === 'instagram') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 12 16.2 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8Zm5.5-3.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></svg>;
  if (icon === 'x') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M18.9 2h3.3l-7.3 8.3L23.5 22h-6.8l-5.3-6.9L5.3 22H2l7.8-8.9L1.5 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.8L7.5 3.9h-2L17.7 20Z" /></svg>;
  if (icon === 'youtube') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31.6 31.6 0 0 0 .5 12 31.6 31.6 0 0 0 1 16.9 3 3 0 0 0 3.1 19C5 19.5 12 19.5 12 19.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-4.9 31.6 31.6 0 0 0-.5-4.9ZM9.8 15.2V8.8l5.8 3.2-5.8 3.2Z" /></svg>;
  if (icon === 'tiktok') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M17 3c.3 2.2 1.7 4 4 4.6v3.5a7.1 7.1 0 0 1-4-1.2v5.9A6.1 6.1 0 1 1 10.9 9.7c.4 0 .8 0 1.1.1v3.7a2.5 2.5 0 1 0 1.6 2.3V3h3.4Z" /></svg>;
  return <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M9.2 4C5.2 4 2 6.7 2 10c0 1.9 1.1 3.6 2.8 4.7L4 17.5l3.1-1.6c.7.1 1.4.2 2.1.2 4 0 7.2-2.7 7.2-6S13.2 4 9.2 4Zm-2.5 5.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.7 1.8c3.2.2 5.6 2.4 5.6 5.1 0 1.5-.8 2.9-2.1 3.8l.6 2.2-2.5-1.3c-.6.1-1.2.2-1.8.2-3.5 0-6.3-2.3-6.3-5.1v-.1c3.7-.2 6.6-2.6 6.6-5.6v-.2Z" /></svg>;
}

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = footerCopy[lang];

  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,0.14),transparent_28rem),radial-gradient(circle_at_82%_0%,rgba(125,92,255,0.12),transparent_30rem),linear-gradient(180deg,#ffffff_0%,#f3f7ff_48%,#eef4ff_100%)] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-35" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-10 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-10">
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">NovaOS</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] lg:text-5xl">{c.ctaTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-300">{c.ctaBody}</p></div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0"><button type="button" onClick={onOpenModal} className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-100">{c.ctaPrimary}</button><a href="/contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">{c.ctaSecondary}</a></div>
        </div>
        <div className="rounded-[2.5rem] border border-blue-100 bg-white/90 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur-xl lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.45fr_0.85fr]">
            <div>
              <BrandLogo />
              <p className="mt-6 max-w-sm text-base leading-7 text-slate-600">{c.body}</p>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{c.emailLabel}</p>
              <a href={`mailto:${businessEmail}`} className="mt-2 block break-words text-2xl font-semibold tracking-tight text-slate-950 transition hover:text-blue-700">{businessEmail}</a>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{c.addressLabel}</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{businessAddress}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold"><a href="/contact" className="rounded-full bg-blue-700 px-4 py-2 text-white">{c.consultation}</a><button type="button" onClick={onOpenModal} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-700">NovaOS</button></div>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {c.groups.map((group) => <div key={group.title}><h3 className="text-base font-semibold text-slate-950">{group.title}</h3><div className="mt-5 grid gap-3">{group.links.map((link) => <a key={link.label} href={link.href} className="text-sm leading-6 text-slate-500 transition hover:text-blue-700">{link.label}</a>)}</div></div>)}
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-950">{c.qrTitle}</h3>
              <div className="mt-5 rounded-[1.5rem] border border-blue-100 bg-white p-4 text-center shadow-sm shadow-blue-900/5"><div className="flex justify-center"><WhatsAppQrImage /></div><p className="mx-auto mt-3 max-w-48 text-xs leading-5 text-slate-500">{c.qrText}</p></div>
              <p className="mt-7 text-sm font-semibold text-slate-950">{c.socialText}</p>
              <div className="mt-4 flex flex-nowrap items-center gap-2 overflow-x-auto pb-1">{socials.map((item) => <a key={item.label} href={item.href} aria-label={item.label} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-slate-950 text-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-700"><SocialIcon icon={item.icon} /></a>)}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-2 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between"><p>{c.copyright}</p><div className="flex flex-wrap gap-5"><a href="/privacy" className="hover:text-blue-700">{c.privacy}</a><a href="/privacy#terms" className="hover:text-blue-700">{c.legal}</a></div></div>
      </div>
    </footer>
  );
}
