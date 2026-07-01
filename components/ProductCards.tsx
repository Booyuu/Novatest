'use client';

import { useLanguage } from '@/components/LanguageProvider';

const content = {
  en: {
    scenarioEyebrow: 'Business scenarios',
    scenarioTitle: 'We build around the critical growth scenarios that matter.',
    scenarioButton: 'Explore product layer',
    platformEyebrow: 'AI-native platform support',
    platformTitle: 'A marketing operating layer, not another scattered tool stack.',
    platformBody: 'NovaStudio separates strategy, execution, and growth into clear layers that can later become NovaOS modules.',
    productEyebrow: 'Product matrix',
    productTitle: 'One Ecosystem for AI Marketing Execution',
    productBody: 'A modular product vision for strategy, campaign execution, content operations, lead capture, GEO/AEO, marketplace assets, academy learning, and creator enablement.',
    scenarios: ['Full-funnel content production', 'AI-search ready discovery', 'Lead capture and nurturing', 'Regulated-market communication', 'Multilingual market expansion', 'Repeatable marketing systems'],
    products: ['Brand Brain', 'Campaign Builder', 'Content Engine', 'Lead Capture Kit', 'GEO / AEO Engine', 'NovaOS Marketplace', 'Academy', 'Creator Center'],
    layers: ['Strategy Layer', 'Execution Layer', 'Growth Layer'],
  },
  zh: {
    scenarioEyebrow: '关键业务场景',
    scenarioTitle: '围绕真正影响增长的核心场景搭建系统。',
    scenarioButton: '查看产品层',
    platformEyebrow: 'AI 原生平台支撑',
    platformTitle: '不是零散工具，而是营销运营层。',
    platformBody: 'NovaStudio 把策略、执行和增长拆成清晰层级，后续可以逐步变成 NovaOS 模块。',
    productEyebrow: '产品矩阵',
    productTitle: '一个面向 AI 营销执行的生态系统',
    productBody: '覆盖策略、活动执行、内容运营、线索获取、GEO/AEO、市场资产、学院学习和创作者生态。',
    scenarios: ['全漏斗内容生产', 'AI 搜索与 GEO 发现', '线索捕获与跟进', '合规市场沟通', '多语言市场扩张', '可复制营销系统'],
    products: ['品牌大脑', '活动构建器', '内容引擎', '线索捕获工具', 'GEO / AEO 引擎', 'NovaOS 市场', '学院', '创作者中心'],
    layers: ['策略层', '执行层', '增长层'],
  },
  ja: {
    scenarioEyebrow: '主要な業務シナリオ',
    scenarioTitle: '成長に直結する重要シナリオを中心に構築します。',
    scenarioButton: '製品レイヤーを見る',
    platformEyebrow: 'AI ネイティブ基盤',
    platformTitle: '散在するツールではなく、マーケティング運用レイヤー。',
    platformBody: '戦略、実行、成長を明確なレイヤーに分け、将来の NovaOS モジュールへ発展させます。',
    productEyebrow: '製品マトリクス',
    productTitle: 'AI マーケティング実行のためのエコシステム',
    productBody: '戦略、キャンペーン、コンテンツ運用、リード獲得、GEO/AEO、マーケット資産、学習、クリエイター支援を含みます。',
    scenarios: ['フルファネルコンテンツ制作', 'AI 検索対応', 'リード獲得と育成', '規制市場向けコミュニケーション', '多言語展開', '再現可能なマーケティングシステム'],
    products: ['ブランドブレイン', 'キャンペーンビルダー', 'コンテンツエンジン', 'リード獲得キット', 'GEO / AEO エンジン', 'NovaOS マーケット', 'アカデミー', 'クリエイターセンター'],
    layers: ['戦略レイヤー', '実行レイヤー', '成長レイヤー'],
  },
  ko: {
    scenarioEyebrow: '핵심 비즈니스 시나리오',
    scenarioTitle: '성장에 중요한 핵심 시나리오를 중심으로 구축합니다.',
    scenarioButton: '제품 레이어 보기',
    platformEyebrow: 'AI 네이티브 플랫폼 지원',
    platformTitle: '흩어진 도구가 아니라 마케팅 운영 레이어입니다.',
    platformBody: 'NovaStudio는 전략, 실행, 성장을 명확한 레이어로 나누고 이후 NovaOS 모듈로 확장합니다.',
    productEyebrow: '제품 매트릭스',
    productTitle: 'AI 마케팅 실행을 위한 하나의 생태계',
    productBody: '전략, 캠페인 실행, 콘텐츠 운영, 리드 확보, GEO/AEO, 마켓 자산, 아카데미, 크리에이터 지원을 포함합니다.',
    scenarios: ['풀퍼널 콘텐츠 제작', 'AI 검색 최적화', '리드 확보와 육성', '규제 시장 커뮤니케이션', '다국어 시장 확장', '반복 가능한 마케팅 시스템'],
    products: ['브랜드 브레인', '캠페인 빌더', '콘텐츠 엔진', '리드 캡처 키트', 'GEO / AEO 엔진', 'NovaOS 마켓', '아카데미', '크리에이터 센터'],
    layers: ['전략 레이어', '실행 레이어', '성장 레이어'],
  },
} as const;

const descriptions = Array.from({ length: 8 }, (_, index) => index);

function ScenarioGrid() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <section id="scenarios" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl"><p className="eyebrow">{c.scenarioEyebrow}</p><h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">{c.scenarioTitle}</h2></div>
          <a href="#products" className="inline-flex w-fit rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-300">{c.scenarioButton}</a>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">{c.scenarios.map((item) => <div key={item} className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm"><p className="text-xs uppercase tracking-[0.24em] text-blue-700">AI Growth</p><h3 className="mt-5 text-2xl font-semibold text-slate-950">{item}</h3><p className="mt-4 leading-7 text-slate-600">NovaStudio builds workflows, assets and execution systems around this scenario.</p></div>)}</div>
      </div>
    </section>
  );
}

function PlatformLayers() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <section id="platform" className="bg-[#f5f8ff] px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="eyebrow">{c.platformEyebrow}</p><h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">{c.platformTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{c.platformBody}</p></div>
      <div className="space-y-5">{c.layers.map((layer, index) => <div key={layer} className="grid gap-6 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm md:grid-cols-[0.35fr_0.65fr] lg:p-8"><div><p className="text-6xl font-semibold tracking-[-0.08em] text-blue-100">0{index + 1}</p><h3 className="mt-4 text-3xl font-semibold text-slate-950">{layer}</h3></div><div className="grid gap-3 sm:grid-cols-2">{['Brand memory', 'Campaign flow', 'Lead handoff', 'Growth insight'].map((point) => <div key={point} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-slate-700">{point}</div>)}</div></div>)}</div></div>
    </section>
  );
}

export function ProductCards() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <><ScenarioGrid /><PlatformLayers /><section id="products" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="eyebrow">{c.productEyebrow}</p><h2 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">{c.productTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{c.productBody}</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{c.products.map((item, index) => <div key={item} className="group relative overflow-hidden rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"><div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/30 blur-2xl" /><div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-sm font-semibold text-white">{String(index + 1).padStart(2, '0')}</div><h3 className="relative text-xl font-semibold text-slate-950">{item}</h3><p className="relative mt-3 text-sm leading-7 text-slate-600">{descriptions[index] !== undefined ? c.productBody : ''}</p></div>)}</div></div></section></>
  );
}
