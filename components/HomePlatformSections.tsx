'use client';

import { useLanguage } from '@/components/LanguageProvider';

const homeCopy = {
  en: {
    scenariosTitle: 'Solutions for the business scenarios that decide growth.',
    scenariosBody: 'NovaStudio connects content, campaigns, search visibility, leads and customer operations into one AI-native marketing workflow.',
    learn: 'Learn more',
    scenarios: [
      ['AI content production', 'Turn a single strategy brief into articles, scripts, social posts, email sequences and landing-page assets.'],
      ['GEO and AI search visibility', 'Build answer-ready pages, comparison content, FAQs and authority signals for search engines and AI answer engines.'],
      ['Lead capture and customer follow-up', 'Create offers, forms, scoring logic, follow-up flows and CRM-ready customer handoff.'],
      ['Compliance-aware communication', 'Help fintech, Web3, payments and trading-related businesses communicate without messy or reckless claims.'],
      ['Multilingual market expansion', 'Adapt positioning, offers and campaigns for Singapore, APAC and global audiences.'],
      ['Creator and asset operations', 'Turn useful templates, campaigns and playbooks into reusable business assets.'],
    ],
    stackEyebrow: 'NovaOS platform layer',
    stackTitle: 'From marketing ideas to operating system modules.',
    stackBody: 'These stacked modules show how NovaStudio can evolve from service delivery into a repeatable AI Marketing OS. Each layer can become a product, workflow or customer data module later.',
    stack: [
      { no: '01', title: 'Brand Brain', color: 'bg-[#d9c2ff]', points: ['Brand memory', 'Approved claims', 'Audience and offer map', 'Positioning library'] },
      { no: '02', title: 'Content Engine', color: 'bg-[#b9e7ff]', points: ['Long-form articles', 'Short-video scripts', 'Social posts', 'Email sequences'] },
      { no: '03', title: 'Campaign Builder', color: 'bg-[#a8f0ae]', points: ['Campaign brief', 'Launch checklist', 'Channel plan', 'Creative variants'] },
      { no: '04', title: 'GEO / AEO Engine', color: 'bg-[#cbd2ff]', points: ['AI-search pages', 'FAQs', 'Comparison assets', 'Authority content'] },
      { no: '05', title: 'CRM Customer Records', color: 'bg-[#ffe0b7]', points: ['Lead history', 'Customer notes', 'Follow-up status', 'Personalized suggestions'] },
      { no: '06', title: 'Marketplace and Academy', color: 'bg-[#f3d6ff]', points: ['Template assets', 'Creator rewards', 'Case challenges', 'Learning paths'] },
    ],
    metricsTitle: 'Platform capability indicators',
    metrics: [['8+', 'Core modules'], ['30+', 'Workflow templates'], ['4', 'Languages supported'], ['6', 'Industry scenarios'], ['24/7', 'AI assistant interface']],
    resourcesTitle: 'Resources for AI-native marketing teams.',
    resources: [
      ['Industry insights', ['How AI search changes B2B marketing', 'Why GEO needs structured authority content', 'How fintech brands build trust content']],
      ['Product tools', ['Campaign brief generator', 'Landing page checklist', 'Content calendar template']],
      ['Playbooks', ['Web3 onboarding playbook', 'SME lead capture playbook', 'AI SaaS launch playbook']],
    ],
    casesTitle: 'Example systems NovaStudio can build.',
    cases: [
      ['Fintech merchant acquisition system', 'Education content, landing assets, merchant onboarding and trust-building workflows.'],
      ['Web3 onboarding campaign', 'Registration guidance, KYC education, community content and conversion follow-up.'],
      ['AI SaaS authority engine', 'Product explainers, comparison pages, GEO articles and sales enablement assets.'],
    ],
    faqTitle: 'Frequently asked questions.',
    faqs: [
      ['What does NovaStudio do?', 'NovaStudio builds AI-powered marketing workflows for content, campaigns, lead generation, GEO, customer operation and business growth.'],
      ['What is NovaOS?', 'NovaOS is the future AI Marketing Operating System. The current website keeps it as an entry point while the product system is under development.'],
      ['Can it connect with CRM and customer records?', 'Yes. The assistant and customer data interface are reserved for future database, CRM and customer-record integration.'],
      ['Which companies is this suitable for?', 'It is suitable for fintech, Web3, AI SaaS, SMEs, education, clinics and local-service businesses that need repeatable growth systems.'],
    ],
  },
  zh: {
    scenariosTitle: '围绕真正决定增长的业务场景提供解决方案。',
    scenariosBody: 'NovaStudio 把内容、活动、AI 搜索曝光、线索和客户运营连接成一套 AI 原生营销工作流。',
    learn: '了解更多',
    scenarios: [
      ['AI 内容生产', '把一个策略 brief 延展成文章、脚本、社媒内容、邮件序列和落地页资产。'],
      ['GEO 与 AI 搜索曝光', '构建适合搜索引擎和 AI 答案引擎理解的页面、FAQ、对比内容和权威内容。'],
      ['线索捕获与客户跟进', '搭建 offer、表单、评分逻辑、跟进流程和可交接给 CRM 的客户路径。'],
      ['合规感沟通', '帮助金融科技、Web3、支付和交易相关业务清楚表达价值，避免混乱和夸张承诺。'],
      ['多语言市场扩张', '为新加坡、APAC 和全球客户调整定位、卖点和活动内容。'],
      ['创作者与资产运营', '把模板、活动和增长手册沉淀成可重复使用的业务资产。'],
    ],
    stackEyebrow: 'NovaOS 平台层',
    stackTitle: '从营销想法到操作系统模块。',
    stackBody: '这些重叠模块展示 NovaStudio 如何从服务交付进化为可复制的 AI Marketing OS。每一层后续都可以变成产品、工作流或客户数据模块。',
    stack: [
      { no: '01', title: '品牌大脑', color: 'bg-[#d9c2ff]', points: ['品牌记忆', '合规话术', '受众与 offer 地图', '定位资料库'] },
      { no: '02', title: '内容引擎', color: 'bg-[#b9e7ff]', points: ['长文内容', '短视频脚本', '社媒帖子', '邮件序列'] },
      { no: '03', title: '活动构建器', color: 'bg-[#a8f0ae]', points: ['活动 brief', '上线清单', '渠道计划', '创意变体'] },
      { no: '04', title: 'GEO / AEO 引擎', color: 'bg-[#cbd2ff]', points: ['AI 搜索页面', 'FAQ', '对比资产', '权威内容'] },
      { no: '05', title: 'CRM 客户记录', color: 'bg-[#ffe0b7]', points: ['线索历史', '客户备注', '跟进状态', '个性化建议'] },
      { no: '06', title: '市场与学院', color: 'bg-[#f3d6ff]', points: ['模板资产', '创作者奖励', '案例挑战', '学习路径'] },
    ],
    metricsTitle: '平台能力指标',
    metrics: [['8+', '核心模块'], ['30+', '工作流模板'], ['4', '支持语言'], ['6', '行业场景'], ['24/7', 'AI 助手接口']],
    resourcesTitle: '给 AI 原生营销团队的资源中心。',
    resources: [
      ['行业资讯', ['AI 搜索如何改变 B2B 营销', '为什么 GEO 需要结构化权威内容', '金融科技品牌如何建立信任内容']],
      ['产品工具', ['活动 brief 生成器', '落地页检查清单', '内容日历模板']],
      ['增长手册', ['Web3 注册转化手册', 'SME 线索捕获手册', 'AI SaaS 上线手册']],
    ],
    casesTitle: 'NovaStudio 可以搭建的系统案例。',
    cases: [
      ['金融科技商户获客系统', '教育内容、落地页资产、商户入驻流程和信任建设工作流。'],
      ['Web3 注册转化活动', '注册引导、KYC 教育、社区内容和转化跟进。'],
      ['AI SaaS 权威内容引擎', '产品讲解、对比页面、GEO 文章和销售赋能资产。'],
    ],
    faqTitle: '常见问题。',
    faqs: [
      ['NovaStudio 是做什么的？', 'NovaStudio 为内容、活动、线索获取、GEO、客户运营和业务增长搭建 AI 驱动的营销工作流。'],
      ['NovaOS 是什么？', 'NovaOS 是未来的 AI Marketing Operating System。当前官网只保留入口，产品系统仍在开发中。'],
      ['可以连接 CRM 和客户记录吗？', '可以。AI 助手和客户数据接口已经预留，后续可接入数据库、CRM 和客户记录。'],
      ['适合哪些公司？', '适合金融科技、Web3、AI SaaS、中小企业、教育、诊所和本地服务等需要可复制增长系统的业务。'],
    ],
  },
  ja: {
    scenariosTitle: '成長を決める業務シナリオに合わせたソリューション。',
    scenariosBody: 'NovaStudio はコンテンツ、キャンペーン、AI 検索露出、リード、顧客運用を AI ネイティブなワークフローに接続します。',
    learn: '詳しく見る',
    scenarios: [['AI コンテンツ制作', '戦略 brief を記事、脚本、SNS、メール、LP 資産へ展開します。'], ['GEO と AI 検索露出', 'AI が理解しやすいページ、FAQ、比較記事、権威コンテンツを構築します。'], ['リード獲得と顧客フォロー', 'フォーム、スコアリング、フォローアップ、CRM 連携を設計します。'], ['信頼重視のコミュニケーション', 'Fintech、Web3、決済関連の価値を明確に伝えます。'], ['多言語市場展開', 'シンガポール、APAC、グローバル向けに訴求を調整します。'], ['資産化とクリエイター運用', 'テンプレートやプレイブックを再利用可能な資産にします。']],
    stackEyebrow: 'NovaOS プラットフォーム層', stackTitle: 'マーケティングのアイデアから OS モジュールへ。', stackBody: '各レイヤーは将来の製品、ワークフロー、顧客データモジュールへ発展できます。',
    stack: [{ no: '01', title: 'ブランドブレイン', color: 'bg-[#d9c2ff]', points: ['ブランド記憶', '承認済み表現', '受け手と offer', 'ポジショニング'] }, { no: '02', title: 'コンテンツエンジン', color: 'bg-[#b9e7ff]', points: ['記事', '動画脚本', 'SNS 投稿', 'メール'] }, { no: '03', title: 'キャンペーンビルダー', color: 'bg-[#a8f0ae]', points: ['Brief', 'チェックリスト', 'チャネル計画', 'クリエイティブ'] }, { no: '04', title: 'GEO / AEO', color: 'bg-[#cbd2ff]', points: ['AI 検索ページ', 'FAQ', '比較資産', '権威記事'] }, { no: '05', title: 'CRM 顧客記録', color: 'bg-[#ffe0b7]', points: ['リード履歴', '顧客メモ', 'フォロー状態', '提案'] }, { no: '06', title: '市場と Academy', color: 'bg-[#f3d6ff]', points: ['テンプレート', '報酬', 'ケース挑戦', '学習経路'] }],
    metricsTitle: 'プラットフォーム能力指標', metrics: [['8+', 'コアモジュール'], ['30+', 'テンプレート'], ['4', '対応言語'], ['6', '業界シナリオ'], ['24/7', 'AI アシスタント']],
    resourcesTitle: 'AI ネイティブなマーケティングチーム向けリソース。', resources: [['業界知見', ['AI 検索が B2B を変える', 'GEO に必要な権威構造', 'Fintech の信頼コンテンツ']], ['製品ツール', ['Campaign brief', 'LP チェックリスト', 'コンテンツカレンダー']], ['プレイブック', ['Web3 オンボーディング', 'SME リード獲得', 'AI SaaS ローンチ']]],
    casesTitle: 'NovaStudio が構築できるシステム例。', cases: [['Fintech 獲得システム', '教育コンテンツ、LP、オンボーディング、信頼構築。'], ['Web3 オンボーディング', '登録案内、KYC 教育、コミュニティ、フォロー。'], ['AI SaaS 権威エンジン', '製品説明、比較ページ、GEO 記事、営業支援。']],
    faqTitle: 'よくある質問。', faqs: [['NovaStudio は何をしますか？', 'AI を活用したマーケティングワークフローを構築します。'], ['NovaOS とは？', '将来の AI Marketing Operating System です。'], ['CRM と接続できますか？', '将来の DB、CRM、顧客記録連携のための接口を予約しています。'], ['どんな会社に向いていますか？', 'Fintech、Web3、AI SaaS、中小企業、教育、地域サービスに適しています。']],
  },
  ko: {
    scenariosTitle: '성장을 결정하는 비즈니스 시나리오를 위한 솔루션.', scenariosBody: 'NovaStudio는 콘텐츠, 캠페인, AI 검색 노출, 리드, 고객 운영을 하나의 AI 네이티브 마케팅 워크플로로 연결합니다.', learn: '더 알아보기',
    scenarios: [['AI 콘텐츠 제작', '전략 brief를 글, 스크립트, SNS, 이메일, 랜딩페이지 자산으로 확장합니다.'], ['GEO 및 AI 검색 노출', 'AI가 이해하기 쉬운 페이지, FAQ, 비교 콘텐츠, 권위 콘텐츠를 만듭니다.'], ['리드 확보와 고객 후속관리', '오퍼, 폼, 점수화, 후속 플로우, CRM 연계를 설계합니다.'], ['신뢰 중심 커뮤니케이션', '핀테크, Web3, 결제 관련 비즈니스의 가치를 명확히 전달합니다.'], ['다국어 시장 확장', '싱가포르, APAC, 글로벌 고객에 맞게 포지셔닝을 조정합니다.'], ['자산화와 크리에이터 운영', '템플릿과 플레이북을 재사용 가능한 자산으로 만듭니다.']],
    stackEyebrow: 'NovaOS 플랫폼 레이어', stackTitle: '마케팅 아이디어에서 운영체제 모듈까지.', stackBody: '각 레이어는 향후 제품, 워크플로, 고객 데이터 모듈로 확장될 수 있습니다.',
    stack: [{ no: '01', title: '브랜드 브레인', color: 'bg-[#d9c2ff]', points: ['브랜드 기억', '승인 문구', '고객과 오퍼', '포지셔닝'] }, { no: '02', title: '콘텐츠 엔진', color: 'bg-[#b9e7ff]', points: ['글', '영상 스크립트', 'SNS', '이메일'] }, { no: '03', title: '캠페인 빌더', color: 'bg-[#a8f0ae]', points: ['Brief', '체크리스트', '채널 계획', '크리에이티브'] }, { no: '04', title: 'GEO / AEO', color: 'bg-[#cbd2ff]', points: ['AI 검색 페이지', 'FAQ', '비교 자산', '권위 콘텐츠'] }, { no: '05', title: 'CRM 고객 기록', color: 'bg-[#ffe0b7]', points: ['리드 히스토리', '고객 메모', '후속 상태', '추천'] }, { no: '06', title: '마켓과 아카데미', color: 'bg-[#f3d6ff]', points: ['템플릿', '보상', '사례 챌린지', '학습 경로'] }],
    metricsTitle: '플랫폼 역량 지표', metrics: [['8+', '핵심 모듈'], ['30+', '워크플로 템플릿'], ['4', '지원 언어'], ['6', '산업 시나리오'], ['24/7', 'AI 어시스턴트']],
    resourcesTitle: 'AI 네이티브 마케팅 팀을 위한 리소스.', resources: [['산업 인사이트', ['AI 검색이 B2B를 바꾸는 방식', 'GEO에 필요한 권위 구조', '핀테크 신뢰 콘텐츠']], ['제품 도구', ['캠페인 brief', '랜딩페이지 체크리스트', '콘텐츠 캘린더']], ['플레이북', ['Web3 온보딩', 'SME 리드 확보', 'AI SaaS 런칭']]],
    casesTitle: 'NovaStudio가 구축할 수 있는 시스템 예시.', cases: [['핀테크 가맹점 확보 시스템', '교육 콘텐츠, 랜딩 자산, 온보딩, 신뢰 구축.'], ['Web3 온보딩 캠페인', '가입 안내, KYC 교육, 커뮤니티 콘텐츠, 후속 관리.'], ['AI SaaS 권위 엔진', '제품 설명, 비교 페이지, GEO 글, 세일즈 자산.']],
    faqTitle: '자주 묻는 질문.', faqs: [['NovaStudio는 무엇을 하나요?', 'AI 기반 마케팅 워크플로를 구축합니다.'], ['NovaOS는 무엇인가요?', '미래의 AI Marketing Operating System입니다.'], ['CRM과 연결할 수 있나요?', '향후 DB, CRM, 고객 기록 연동을 위한 인터페이스를 예약했습니다.'], ['어떤 회사에 적합한가요?', '핀테크, Web3, AI SaaS, 중소기업, 교육, 로컬 서비스에 적합합니다.']],
  },
} as const;

export function HomePlatformSections({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = homeCopy[lang];

  return (
    <div className="bg-white text-slate-950">
      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Business scenarios</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.scenariosTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{c.scenariosBody}</p>
            <a href="/solutions" className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20">{c.learn}</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {c.scenarios.map(([title, body], index) => (
              <article key={title} className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">{index + 1}</div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px] text-center"><p className="eyebrow">{c.stackEyebrow}</p><h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.stackTitle}</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.stackBody}</p></div>
        <div className="mx-auto mt-16 max-w-[1200px]">
          {c.stack.map((item, index) => (
            <article key={item.no} className={`relative grid min-h-[360px] gap-8 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/8 lg:sticky lg:grid-cols-[0.46fr_0.54fr] ${item.color}`} style={{ top: `${120 + index * 18}px`, marginTop: index === 0 ? 0 : -42 }}>
              <div><p className="text-4xl font-semibold text-slate-500/40">{item.no}</p><h3 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h3><ul className="mt-8 grid gap-4 text-slate-700">{item.points.map((point) => <li key={point} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-slate-700/50" />{point}</li>)}</ul>{index === 5 ? <button onClick={onOpenModal} className="mt-8 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">NovaOS</button> : null}</div>
              <div className="self-center rounded-3xl border border-white/60 bg-white/70 p-5 shadow-xl"><div className="mb-4 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div><div className="rounded-2xl bg-slate-950 p-6 text-left font-mono text-sm leading-8 text-blue-100"><p>module: {item.title}</p><p>status: ready</p><p>workflow: strategy → execution → insight</p></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f9ff] px-5 py-20 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px] text-center"><h2 className="text-4xl font-semibold tracking-tight text-slate-950">{c.metricsTitle}</h2><div className="mt-12 grid gap-6 md:grid-cols-5">{c.metrics.map(([value, label]) => <div key={label} className="rounded-3xl bg-white p-8 shadow-sm"><p className="text-5xl font-semibold text-indigo-500">{value}</p><p className="mt-3 text-sm text-slate-500">{label}</p></div>)}</div></div></section>

      <section className="px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px]"><h2 className="text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.resourcesTitle}</h2><div className="mt-14 grid gap-8 lg:grid-cols-3">{c.resources.map(([title, links]) => <article key={title} className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-900/5"><div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8"><h3 className="text-3xl font-semibold text-slate-950">{title}</h3></div><div className="grid gap-4 p-8">{links.map((link) => <a href="/resources" key={link} className="border-b border-slate-100 pb-4 text-slate-600 transition hover:text-blue-700">▪ {link}</a>)}</div></article>)}</div></div></section>

      <section className="bg-[#f6f9ff] px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-[1500px]"><h2 className="text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.casesTitle}</h2><div className="mt-14 grid gap-8 lg:grid-cols-3">{c.cases.map(([title, body], index) => <article key={title} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/5"><div className="mb-6 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 text-5xl font-semibold text-blue-600">0{index + 1}</div><h3 className="text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}</div></div></section>

      <section className="px-5 py-24 sm:px-8 lg:px-10"><div className="mx-auto max-w-4xl"><p className="eyebrow text-center">FAQ</p><h2 className="mt-5 text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.faqTitle}</h2><div className="mt-12 divide-y divide-blue-100">{c.faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-slate-900"><span>{question}</span><span className="text-indigo-500 group-open:rotate-180">⌄</span></summary><p className="mt-4 leading-8 text-slate-600">{answer}</p></details>)}</div></div></section>
    </div>
  );
}
