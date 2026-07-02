'use client';

import { useLanguage } from '@/components/LanguageProvider';

const strengthCopy = {
  en: {
    eyebrow: 'Enterprise strength',
    title: 'AI-native capability for multi-industry growth.',
    body: 'NovaStudio uses NovaOS as the AI marketing operating layer for high-growth businesses. The same system can adapt content, campaigns, GEO, lead capture and customer operation workflows to many business categories.',
    badge: '20+ industries',
    metrics: [
      ['8+', 'Core NovaOS modules'],
      ['30+', 'Marketing workflow templates'],
      ['4', 'Language markets supported'],
      ['20+', 'Industry scenarios covered'],
      ['24/7', 'AI assistant interface'],
      ['Global', 'APAC and international delivery'],
    ],
    matrixTitle: 'Industry solution matrix',
    matrixBody: 'Different industries need different acquisition language, trust signals, landing-page structure and customer journeys. NovaStudio customizes the same NovaOS operating foundation for different markets.',
    industries: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education & Training', 'Clinics & Local Services', 'E-commerce & Retail', 'Professional Services', 'Real Estate & Premium Services', 'F&B and Chain Brands', 'Travel & Lifestyle', 'Recruitment & HR', 'Industrial & Manufacturing', 'Trade & Supply Chain', 'Consulting & Enterprise Services', 'Creator & Media Businesses', 'Beauty & Wellness', 'Events & Communities', 'Consumer Apps', 'Local Brands'],
  },
  zh: {
    eyebrow: '企业实力',
    title: 'AI 原生能力，覆盖多行业增长场景。',
    body: 'NovaStudio 以 NovaOS 作为面向高增长企业的 AI 营销操作层。同一套系统可以把内容、活动、GEO、线索捕获和客户运营工作流适配到不同业务类型。',
    badge: '20+ 行业场景',
    metrics: [
      ['8+', '核心 NovaOS 模块'],
      ['30+', '营销工作流模板'],
      ['4', '多语言市场支持'],
      ['20+', '可覆盖行业场景'],
      ['24/7', 'AI 助手接口'],
      ['Global', 'APAC 与全球交付能力'],
    ],
    matrixTitle: '行业解决方案矩阵',
    matrixBody: '不同行业需要不同的获客语言、信任机制、落地页结构和客户路径。NovaStudio 可以基于同一套 NovaOS 营销底层能力，为不同市场定制增长系统。',
    industries: ['金融科技与支付', 'Web3 与加密', 'AI 与 B2B SaaS', '中小企业', '教育与培训', '医疗诊所与本地服务', '电商与零售', '专业服务', '地产与高端服务', '餐饮与连锁品牌', '旅游与生活方式', '招聘与人力资源', '工业与制造', '贸易与供应链', '咨询与企业服务', '创作者与内容机构', '美容与健康', '活动与社群', '消费类 App', '本地品牌'],
  },
  ja: {
    eyebrow: '企業力',
    title: '多業界の成長に対応する AI ネイティブ能力。',
    body: 'NovaStudio は NovaOS を高成長企業向けの AI マーケティング運用レイヤーとして活用し、コンテンツ、キャンペーン、GEO、リード獲得、顧客運用を多様な業界に適応します。',
    badge: '20+ 業界',
    metrics: [['8+', 'コアモジュール'], ['30+', 'ワークフロー'], ['4', '対応言語'], ['20+', '業界シナリオ'], ['24/7', 'AI アシスタント'], ['Global', 'APAC と国際展開']],
    matrixTitle: '業界ソリューションマトリクス',
    matrixBody: '業界ごとに獲得メッセージ、信頼形成、LP 構造、顧客導線は異なります。NovaStudio は同じ NovaOS 基盤を各市場に合わせて調整できます。',
    industries: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education & Training', 'Clinics & Local Services', 'E-commerce & Retail', 'Professional Services', 'Real Estate', 'F&B Brands', 'Travel & Lifestyle', 'Recruitment & HR', 'Manufacturing', 'Trade & Supply Chain', 'Consulting', 'Creator & Media', 'Beauty & Wellness', 'Events & Communities', 'Consumer Apps', 'Local Brands'],
  },
  ko: {
    eyebrow: '기업 역량',
    title: '다양한 산업 성장을 위한 AI 네이티브 역량.',
    body: 'NovaStudio는 NovaOS를 고성장 기업을 위한 AI 마케팅 운영 레이어로 사용하며 콘텐츠, 캠페인, GEO, 리드 확보, 고객 운영을 여러 산업에 맞게 적용합니다.',
    badge: '20+ 산업',
    metrics: [['8+', '핵심 모듈'], ['30+', '워크플로'], ['4', '지원 언어'], ['20+', '산업 시나리오'], ['24/7', 'AI 어시스턴트'], ['Global', 'APAC 및 글로벌 제공']],
    matrixTitle: '산업 솔루션 매트릭스',
    matrixBody: '산업마다 고객 확보 언어, 신뢰 신호, 랜딩 구조, 고객 여정이 다릅니다. NovaStudio는 같은 NovaOS 기반을 각 시장에 맞게 조정할 수 있습니다.',
    industries: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education & Training', 'Clinics & Local Services', 'E-commerce & Retail', 'Professional Services', 'Real Estate', 'F&B Brands', 'Travel & Lifestyle', 'Recruitment & HR', 'Manufacturing', 'Trade & Supply Chain', 'Consulting', 'Creator & Media', 'Beauty & Wellness', 'Events & Communities', 'Consumer Apps', 'Local Brands'],
  },
} as const;

export function HomeEnterpriseStrength() {
  const { lang } = useLanguage();
  const c = strengthCopy[lang];

  return (
    <section className="bg-[#f6f9ff] px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.body}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {c.metrics.map(([value, label]) => (
            <div key={label} className="rounded-3xl bg-white p-7 text-center shadow-sm shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
              <p className="text-4xl font-semibold tracking-tight text-indigo-500">{value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-xl shadow-blue-900/5 lg:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight text-slate-950">{c.matrixTitle}</h3>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">{c.matrixBody}</p>
            </div>
            <span className="rounded-full bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700">{c.badge}</span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {c.industries.map((industry) => (
              <a key={industry} href="/solutions" className="rounded-2xl border border-blue-100 bg-[#f8fbff] px-4 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700">
                {industry}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
