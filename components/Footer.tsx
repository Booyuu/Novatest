'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage } from '@/components/LanguageProvider';

const footerCopy = {
  en: {
    contact: 'Contact Us', consultation: 'Consultation', demo: 'Book Demo', follow: 'Follow Us', more: 'More', privacy: 'Privacy Policy', legal: 'Legal Statement', copyright: '© 2026 NovaStudio. AI assistant and customer data interface reserved for future integration.',
    groups: [
      { title: 'Products', links: ['NovaOS Core', 'AI Agent Center', 'Brand Brain', 'Content Engine', 'Campaign Builder', 'GEO / AEO Engine', 'Data & CRM Layer', 'AI Analytics'] },
      { title: 'Solutions', links: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'] },
      { title: 'Company', links: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Join Us', 'Partner Network'] },
      { title: 'NovaOS Ecosystem', links: ['Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators'] },
    ],
    recommended: ['Marketing AI Agent', 'Sales AI Agent', 'Customer Service AI', 'Data Agent', 'GEO', 'AI CRM', 'AI Analytics', 'AI Academy', 'Private Domain', 'AI Workflow'],
  },
  zh: {
    contact: '联系我们', consultation: '咨询方案', demo: '预约试用', follow: '关注我们', more: '更多推荐', privacy: '隐私保护', legal: '法律声明', copyright: '© 2026 NovaStudio. AI 助手、数据库和客户记录接口已预留，后续可接入真实系统。',
    groups: [
      { title: '产品', links: ['NovaOS 核心', '智能体中心', '品牌大脑', '内容引擎', '活动构建器', 'GEO / AEO 引擎', '数据与 CRM 层', 'AI 分析'] },
      { title: '解决方案', links: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育培训', '诊所与本地服务', '零售与消费', '专业服务'] },
      { title: '关于我们', links: ['了解 NovaStudio', '案例', '资源', '联系我们', '加入我们', '合作网络'] },
      { title: 'NovaOS 生态', links: ['模板市场', '创作者奖励', '学院', '案例挑战', '积分与额度', '认证创作者'] },
    ],
    recommended: ['营销智能体', '销售智能体', '客服智能体', '数据智能体', 'GEO', 'AI CRM', 'AI 分析', 'AI 学院', '私域电商', 'AI 工作流'],
  },
  ja: {
    contact: 'お問い合わせ', consultation: '相談する', demo: 'デモ予約', follow: 'フォロー', more: 'おすすめ', privacy: 'プライバシー', legal: '法的表示', copyright: '© 2026 NovaStudio. AI アシスタントと顧客データ連携の接口を将来用に予約しています。',
    groups: [
      { title: '製品', links: ['NovaOS コア', 'AI エージェントセンター', 'ブランドブレイン', 'コンテンツエンジン', 'キャンペーンビルダー', 'GEO / AEO エンジン', 'データと CRM', 'AI 分析'] },
      { title: 'ソリューション', links: ['フィンテックと決済', 'Web3 と暗号資産', 'AI と B2B SaaS', '中小企業', '教育', 'クリニックと地域サービス', '小売と消費', '専門サービス'] },
      { title: '会社情報', links: ['NovaStudio について', '事例', 'リソース', 'お問い合わせ', '採用', 'パートナー'] },
      { title: 'NovaOS エコシステム', links: ['テンプレート市場', 'クリエイター報酬', 'アカデミー', 'ケースチャレンジ', 'ポイントとクレジット', '認定クリエイター'] },
    ],
    recommended: ['マーケティング AI', '営業 AI', '客服 AI', 'データ Agent', 'GEO', 'AI CRM', 'AI 分析', 'AI Academy', 'プライベートドメイン', 'AI Workflow'],
  },
  ko: {
    contact: '문의하기', consultation: '솔루션 상담', demo: '데모 예약', follow: '팔로우', more: '추천', privacy: '개인정보 보호', legal: '법적 고지', copyright: '© 2026 NovaStudio. AI 어시스턴트와 고객 데이터 인터페이스는 향후 연동을 위해 예약되어 있습니다.',
    groups: [
      { title: '제품', links: ['NovaOS 코어', 'AI 에이전트 센터', '브랜드 브레인', '콘텐츠 엔진', '캠페인 빌더', 'GEO / AEO 엔진', '데이터 및 CRM 레이어', 'AI 분석'] },
      { title: '솔루션', links: ['핀테크 및 결제', 'Web3 및 크립토', 'AI 및 B2B SaaS', '중소기업', '교육', '클리닉 및 로컬 서비스', '리테일 및 소비재', '전문 서비스'] },
      { title: '회사', links: ['NovaStudio 소개', '사례', '리소스', '문의', '채용', '파트너 네트워크'] },
      { title: 'NovaOS 생태계', links: ['템플릿 마켓', '크리에이터 보상', '아카데미', '사례 챌린지', '포인트 및 크레딧', '인증 크리에이터'] },
    ],
    recommended: ['마케팅 AI', '세일즈 AI', '고객 서비스 AI', '데이터 Agent', 'GEO', 'AI CRM', 'AI 분석', 'AI Academy', '프라이빗 도메인', 'AI Workflow'],
  },
} as const;

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = footerCopy[lang];

  return (
    <footer className="border-t border-blue-100 bg-[#f6f9ff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-blue-100 pb-12 lg:grid-cols-[0.9fr_2.4fr_0.8fr]">
          <div><BrandLogo /><p className="mt-8 text-lg font-semibold text-slate-800">{c.contact}</p><p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">hello@novastudio.world</p><div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500"><a href="/contact" className="hover:text-blue-700">{c.consultation}</a><button onClick={onOpenModal} className="hover:text-blue-700">NovaOS</button><a href="/contact" className="hover:text-blue-700">{c.demo}</a></div></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{c.groups.map((group) => <div key={group.title}><h3 className="text-lg font-semibold text-slate-950">{group.title}</h3><div className="mt-5 grid gap-3">{group.links.map((link) => <a key={link} href={group.title.includes('Solution') || group.title.includes('解决') || group.title.includes('ソリューション') || group.title.includes('솔루션') ? '/solutions' : group.title.includes('Company') || group.title.includes('关于') || group.title.includes('会社') || group.title.includes('회사') ? '/company' : group.title.includes('NovaOS') ? '#' : '/products'} onClick={(event) => { if (group.title.includes('NovaOS')) { event.preventDefault(); onOpenModal(); } }} className="text-sm text-slate-500 transition hover:text-blue-700">{link}</a>)}</div></div>)}</div>
          <div><h3 className="text-lg font-semibold text-slate-950">{c.follow}</h3><div className="mt-5 grid grid-cols-2 gap-4"><div className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm"><div className="mx-auto h-24 w-24 rounded-xl bg-[linear-gradient(45deg,#dbeafe_25%,transparent_25%),linear-gradient(-45deg,#dbeafe_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#dbeafe_75%),linear-gradient(-45deg,transparent_75%,#dbeafe_75%)] bg-[length:18px_18px]" /><p className="mt-3 text-sm text-slate-500">LinkedIn</p></div><div className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm"><div className="mx-auto h-24 w-24 rounded-xl bg-[linear-gradient(90deg,#e0f2fe_50%,transparent_50%),linear-gradient(#e0f2fe_50%,transparent_50%)] bg-[length:16px_16px]" /><p className="mt-3 text-sm text-slate-500">X / YouTube</p></div></div></div>
        </div>
        <div className="grid gap-4 border-b border-blue-100 py-10 lg:grid-cols-[0.14fr_0.86fr]"><p className="font-semibold text-slate-800">{c.more}</p><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">{c.recommended.map((item) => <a key={item} href="/products" className="hover:text-blue-700">{item}</a>)}</div></div>
        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between"><p>{c.copyright}</p><div className="flex gap-8"><a href="#" className="hover:text-blue-700">{c.privacy}</a><a href="#" className="hover:text-blue-700">{c.legal}</a></div></div>
      </div>
    </footer>
  );
}
