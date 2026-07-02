'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { ScrollStack, type StackItem } from '@/components/ScrollStack';

const copy = {
  en: {
    scenarioLabel: 'Business scenarios',
    scenarioTitle: 'Solutions for the business scenarios that decide growth.',
    scenarioBody: 'NovaStudio connects content, campaigns, AI search visibility, lead capture and customer operations into one AI-native marketing workflow.',
    learn: 'Learn more',
    scenarios: [
      ['AI content production', 'Articles, short-video scripts, social posts, email sequences and landing assets from one strategy brief.'],
      ['GEO / AEO visibility', 'Answer-ready pages, FAQs, comparison content and authority assets for AI search discovery.'],
      ['Lead capture system', 'Landing offers, forms, scoring, follow-up flows and CRM-ready customer handoff.'],
      ['Compliance-aware communication', 'Clear business messaging for fintech, Web3, payments and high-trust markets.'],
      ['Multilingual expansion', 'Positioning, offers and campaigns adapted for Singapore, APAC and global audiences.'],
      ['Reusable marketing assets', 'Turn winning templates, playbooks and campaigns into repeatable growth assets.'],
    ],
    stackLabel: 'NovaOS platform layer',
    stackTitle: 'Scroll through the future AI Marketing OS.',
    stackBody: 'As you scroll, completed modules collapse into compact layers and the current module expands. This mirrors how NovaOS can organize brand memory, content, campaigns, search, leads and customer records.',
    stack: [
      { no: '01', title: 'Brand Brain', color: 'bg-[#d9c2ff]', points: ['Brand memory', 'Approved claims', 'Audience map', 'Positioning library'] },
      { no: '02', title: 'Content Engine', color: 'bg-[#b9e7ff]', points: ['Articles', 'Short-video scripts', 'Social posts', 'Email sequences'] },
      { no: '03', title: 'Campaign Builder', color: 'bg-[#a8f0ae]', points: ['Campaign brief', 'Launch checklist', 'Channel plan', 'Creative variants'] },
      { no: '04', title: 'GEO / AEO Engine', color: 'bg-[#cbd2ff]', points: ['AI-search pages', 'FAQs', 'Comparison assets', 'Authority content'] },
      { no: '05', title: 'CRM Customer Records', color: 'bg-[#ffe0b7]', points: ['Lead history', 'Customer notes', 'Follow-up status', 'Personalized suggestions'] },
      { no: '06', title: 'Marketplace and Academy', color: 'bg-[#f3d6ff]', points: ['Template assets', 'Creator rewards', 'Case challenges', 'Learning paths'] },
    ],
    metricsTitle: 'Platform capability indicators',
    metrics: [['8+', 'Core modules'], ['30+', 'Workflow templates'], ['4', 'Languages'], ['6', 'Industry scenarios'], ['24/7', 'AI assistant interface']],
    resourcesTitle: 'Resources for AI-native marketing teams.',
    resources: [['Industry insights', 'How AI search changes business discovery'], ['Product tools', 'Campaign briefs, calendars and landing-page checklists'], ['Growth playbooks', 'Web3, fintech, SaaS and SME growth systems']],
    casesTitle: 'Example systems NovaStudio can build.',
    cases: [['Fintech merchant acquisition', 'Education content, landing assets and merchant onboarding.'], ['Web3 onboarding campaign', 'Registration guidance, KYC education and conversion follow-up.'], ['AI SaaS authority engine', 'Product explainers, comparison pages and GEO articles.']],
    faqTitle: 'Frequently asked questions.',
    faqs: [['What does NovaStudio do?', 'NovaStudio builds AI-powered marketing workflows for content, campaigns, lead generation, GEO, customer operation and growth.'], ['What is NovaOS?', 'NovaOS is the future AI Marketing Operating System. The website keeps it as an entry point while development continues.'], ['Can it connect with CRM and customer records?', 'Yes. The assistant and data interface are reserved for future database, CRM and customer-record integration.'], ['Which companies is this suitable for?', 'Fintech, Web3, AI SaaS, SMEs, education, clinics and local-service businesses.']],
  },
  zh: {
    scenarioLabel: '关键业务场景',
    scenarioTitle: '围绕真正决定增长的业务场景提供解决方案。',
    scenarioBody: 'NovaStudio 把内容、活动、AI 搜索曝光、线索捕获和客户运营连接成一套 AI 原生营销工作流。',
    learn: '了解更多',
    scenarios: [
      ['AI 内容生产', '从一个策略 brief 延展出文章、短视频脚本、社媒内容、邮件序列和落地页资产。'],
      ['GEO / AEO 曝光', '为 AI 搜索发现构建可被回答引擎理解的页面、FAQ、对比内容和权威资产。'],
      ['线索捕获系统', '搭建落地页 offer、表单、评分、跟进流程和可交接给 CRM 的客户路径。'],
      ['合规感沟通', '为金融科技、Web3、支付和高信任行业提供清楚、稳妥的商业表达。'],
      ['多语言扩张', '为新加坡、APAC 和全球受众调整定位、卖点和营销活动。'],
      ['可复用营销资产', '把有效模板、增长手册和 campaign 沉淀为可重复使用的业务资产。'],
    ],
    stackLabel: 'NovaOS 平台层',
    stackTitle: '滚动浏览未来的 AI Marketing OS。',
    stackBody: '向下滑动时，已经看过的模块会逐渐收成顶部小层，当前模块展开；向上滑动时会重新展开。这个效果展示 NovaOS 如何组织品牌记忆、内容、活动、搜索、线索和客户记录。',
    stack: [
      { no: '01', title: '品牌大脑', color: 'bg-[#d9c2ff]', points: ['品牌记忆', '合规话术', '受众地图', '定位资料库'] },
      { no: '02', title: '内容引擎', color: 'bg-[#b9e7ff]', points: ['文章内容', '短视频脚本', '社媒帖子', '邮件序列'] },
      { no: '03', title: '活动构建器', color: 'bg-[#a8f0ae]', points: ['活动 brief', '上线清单', '渠道计划', '创意变体'] },
      { no: '04', title: 'GEO / AEO 引擎', color: 'bg-[#cbd2ff]', points: ['AI 搜索页面', 'FAQ', '对比资产', '权威内容'] },
      { no: '05', title: 'CRM 客户记录', color: 'bg-[#ffe0b7]', points: ['线索历史', '客户备注', '跟进状态', '个性化建议'] },
      { no: '06', title: '市场与学院', color: 'bg-[#f3d6ff]', points: ['模板资产', '创作者奖励', '案例挑战', '学习路径'] },
    ],
    metricsTitle: '平台能力指标',
    metrics: [['8+', '核心模块'], ['30+', '工作流模板'], ['4', '语言'], ['6', '行业场景'], ['24/7', 'AI 助手接口']],
    resourcesTitle: '给 AI 原生营销团队的资源中心。',
    resources: [['行业资讯', 'AI 搜索如何改变业务发现'], ['产品工具', '活动 brief、内容日历和落地页检查清单'], ['增长手册', 'Web3、金融科技、SaaS 和 SME 增长系统']],
    casesTitle: 'NovaStudio 可以搭建的系统案例。',
    cases: [['金融科技商户获客', '教育内容、落地页资产和商户入驻流程。'], ['Web3 注册转化活动', '注册引导、KYC 教育和转化跟进。'], ['AI SaaS 权威内容引擎', '产品讲解、对比页面和 GEO 文章。']],
    faqTitle: '常见问题。',
    faqs: [['NovaStudio 是做什么的？', 'NovaStudio 为内容、活动、线索获取、GEO、客户运营和增长搭建 AI 驱动的营销工作流。'], ['NovaOS 是什么？', 'NovaOS 是未来的 AI Marketing Operating System。当前官网保留入口，产品系统继续开发中。'], ['可以连接 CRM 和客户记录吗？', '可以。AI 助手和数据接口已经预留，后续可接入数据库、CRM 和客户记录。'], ['适合哪些公司？', '适合金融科技、Web3、AI SaaS、中小企业、教育、诊所和本地服务业务。']],
  },
  ja: {
    scenarioLabel: '業務シナリオ', scenarioTitle: '成長を決める業務シナリオに合わせたソリューション。', scenarioBody: 'NovaStudio はコンテンツ、キャンペーン、AI 検索露出、リード獲得、顧客運用を AI ネイティブなワークフローに接続します。', learn: '詳しく見る',
    scenarios: [['AI コンテンツ制作', '戦略 brief から記事、動画脚本、SNS、メール、LP 資産を作成。'], ['GEO / AEO 露出', 'AI 検索向けページ、FAQ、比較記事、権威資産を構築。'], ['リード獲得システム', 'フォーム、スコアリング、フォローアップ、CRM 連携を設計。'], ['信頼重視の表現', 'Fintech、Web3、決済領域の価値を明確に伝達。'], ['多言語展開', 'APAC とグローバル向けに訴求を調整。'], ['再利用可能な資産', 'テンプレートとプレイブックを資産化。']],
    stackLabel: 'NovaOS レイヤー', stackTitle: '未来の AI Marketing OS をスクロールで体験。', stackBody: 'スクロールすると既読モジュールが折りたたまれ、現在のモジュールが展開されます。',
    stack: [{ no: '01', title: 'ブランドブレイン', color: 'bg-[#d9c2ff]', points: ['ブランド記憶', '承認済み表現', '受け手地図', 'ポジショニング'] }, { no: '02', title: 'コンテンツエンジン', color: 'bg-[#b9e7ff]', points: ['記事', '動画脚本', 'SNS', 'メール'] }, { no: '03', title: 'キャンペーンビルダー', color: 'bg-[#a8f0ae]', points: ['Brief', 'チェックリスト', 'チャネル計画', 'クリエイティブ'] }, { no: '04', title: 'GEO / AEO', color: 'bg-[#cbd2ff]', points: ['AI 検索ページ', 'FAQ', '比較資産', '権威記事'] }, { no: '05', title: 'CRM 顧客記録', color: 'bg-[#ffe0b7]', points: ['履歴', 'メモ', '状態', '提案'] }, { no: '06', title: '市場と Academy', color: 'bg-[#f3d6ff]', points: ['テンプレート', '報酬', '挑戦', '学習経路'] }],
    metricsTitle: 'プラットフォーム能力指標', metrics: [['8+', 'コア'], ['30+', 'テンプレート'], ['4', '言語'], ['6', '業界'], ['24/7', 'AI assistant']],
    resourcesTitle: 'AI マーケティングチーム向けリソース。', resources: [['業界知見', 'AI 検索が発見を変える'], ['製品ツール', 'Brief、カレンダー、LP チェックリスト'], ['成長手册', 'Web3、Fintech、SaaS、SME']],
    casesTitle: '構築できるシステム例。', cases: [['Fintech 獲得', '教育コンテンツと LP。'], ['Web3 オンボーディング', '登録案内と KYC 教育。'], ['AI SaaS 権威エンジン', '説明、比較、GEO 記事。']],
    faqTitle: 'よくある質問。', faqs: [['NovaStudio は？', 'AI マーケティングワークフローを構築します。'], ['NovaOS は？', '将来の AI Marketing OS です。'], ['CRM と接続できますか？', '将来の接続接口を予約しています。'], ['向いている会社は？', 'Fintech、Web3、AI SaaS、中小企業など。']],
  },
  ko: {
    scenarioLabel: '비즈니스 시나리오', scenarioTitle: '성장을 결정하는 시나리오를 위한 솔루션.', scenarioBody: 'NovaStudio는 콘텐츠, 캠페인, AI 검색 노출, 리드 확보, 고객 운영을 하나의 AI 네이티브 워크플로로 연결합니다.', learn: '더 알아보기',
    scenarios: [['AI 콘텐츠 제작', '전략 brief에서 글, 영상 스크립트, SNS, 이메일, 랜딩 자산을 만듭니다.'], ['GEO / AEO 노출', 'AI 검색용 페이지, FAQ, 비교 콘텐츠, 권위 자산을 구축합니다.'], ['리드 확보 시스템', '폼, 점수화, 후속 플로우, CRM 연계를 설계합니다.'], ['신뢰 중심 커뮤니케이션', '핀테크, Web3, 결제 영역의 가치를 명확히 전달합니다.'], ['다국어 확장', 'APAC 및 글로벌 고객에 맞게 메시지를 조정합니다.'], ['재사용 가능한 자산', '템플릿과 플레이북을 성장 자산으로 만듭니다.']],
    stackLabel: 'NovaOS 플랫폼 레이어', stackTitle: '스크롤로 경험하는 미래 AI Marketing OS.', stackBody: '스크롤하면 지난 모듈은 접히고 현재 모듈은 펼쳐집니다.',
    stack: [{ no: '01', title: '브랜드 브레인', color: 'bg-[#d9c2ff]', points: ['브랜드 기억', '승인 문구', '고객 지도', '포지셔닝'] }, { no: '02', title: '콘텐츠 엔진', color: 'bg-[#b9e7ff]', points: ['글', '영상 스크립트', 'SNS', '이메일'] }, { no: '03', title: '캠페인 빌더', color: 'bg-[#a8f0ae]', points: ['Brief', '체크리스트', '채널 계획', '크리에이티브'] }, { no: '04', title: 'GEO / AEO', color: 'bg-[#cbd2ff]', points: ['AI 검색 페이지', 'FAQ', '비교 자산', '권위 콘텐츠'] }, { no: '05', title: 'CRM 고객 기록', color: 'bg-[#ffe0b7]', points: ['히스토리', '메모', '상태', '추천'] }, { no: '06', title: '마켓과 아카데미', color: 'bg-[#f3d6ff]', points: ['템플릿', '보상', '챌린지', '학습 경로'] }],
    metricsTitle: '플랫폼 역량 지표', metrics: [['8+', '모듈'], ['30+', '템플릿'], ['4', '언어'], ['6', '산업'], ['24/7', 'AI assistant']],
    resourcesTitle: 'AI 마케팅 팀을 위한 리소스.', resources: [['산업 인사이트', 'AI 검색이 발견을 바꾸는 방식'], ['제품 도구', 'Brief, 캘린더, LP 체크리스트'], ['성장 플레이북', 'Web3, 핀테크, SaaS, SME']],
    casesTitle: '구축 가능한 시스템 예시.', cases: [['핀테크 획득', '교육 콘텐츠와 랜딩 자산.'], ['Web3 온보딩', '가입 안내와 KYC 교육.'], ['AI SaaS 권위 엔진', '설명, 비교, GEO 글.']],
    faqTitle: '자주 묻는 질문.', faqs: [['NovaStudio는?', 'AI 마케팅 워크플로를 구축합니다.'], ['NovaOS는?', '미래의 AI Marketing OS입니다.'], ['CRM과 연결되나요?', '향후 연결 인터페이스가 예약되어 있습니다.'], ['어떤 회사에 적합한가요?', '핀테크, Web3, AI SaaS, 중소기업 등에 적합합니다.']],
  },
} as const;

export function HomeDeepSections({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <div className="bg-white text-slate-950">
      <section className="px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.42fr_0.58fr]"><div className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow">{c.scenarioLabel}</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.scenarioTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{c.scenarioBody}</p><a href="/solutions" className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20">{c.learn}</a></div><div className="grid gap-6 md:grid-cols-2">{c.scenarios.map(([title, body], index) => <article key={title} className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">{index + 1}</div><h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}</div></div></section>
      <section className="px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px] text-center"><p className="eyebrow">{c.stackLabel}</p><h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.stackTitle}</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.stackBody}</p></div><ScrollStack items={c.stack as readonly StackItem[]} onOpenModal={onOpenModal} /></section>
      <section className="bg-[#f6f9ff] px-5 py-20 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px] text-center"><h2 className="text-4xl font-semibold tracking-tight text-slate-950">{c.metricsTitle}</h2><div className="mt-12 grid gap-6 md:grid-cols-5">{c.metrics.map(([value, label]) => <div key={label} className="rounded-3xl bg-white p-8 shadow-sm"><p className="text-5xl font-semibold text-indigo-500">{value}</p><p className="mt-3 text-sm text-slate-500">{label}</p></div>)}</div></div></section>
      <section className="px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px]"><h2 className="text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.resourcesTitle}</h2><div className="mt-14 grid gap-8 lg:grid-cols-3">{c.resources.map(([title, body]) => <article key={title} className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-900/5"><div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8"><h3 className="text-3xl font-semibold text-slate-950">{title}</h3></div><p className="p-8 leading-8 text-slate-600">{body}</p></article>)}</div></div></section>
      <section className="bg-[#f6f9ff] px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px]"><h2 className="text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.casesTitle}</h2><div className="mt-14 grid gap-8 lg:grid-cols-3">{c.cases.map(([title, body], index) => <article key={title} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/5"><div className="mb-6 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 text-5xl font-semibold text-blue-600">0{index + 1}</div><h3 className="text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}</div></div></section>
      <section className="px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-4xl"><p className="eyebrow text-center">FAQ</p><h2 className="mt-5 text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.faqTitle}</h2><div className="mt-12 divide-y divide-blue-100">{c.faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-slate-900"><span>{question}</span><span className="text-indigo-500 group-open:rotate-180">⌄</span></summary><p className="mt-4 leading-8 text-slate-600">{answer}</p></details>)}</div></div></section>
    </div>
  );
}
