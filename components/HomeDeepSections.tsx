'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { ScrollStack, type StackItem } from '@/components/ScrollStack';

const copy = {
  en: {
    scenarioLabel: 'Business scenarios',
    scenarioTitle: 'Solutions for the business scenarios that decide growth.',
    scenarioBody: 'NovaStudio connects content, campaigns, AI search visibility, lead capture and customer operations into one AI-native marketing workflow powered by NovaOS.',
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
    stackTitle: 'Scroll through the AI Marketing OS behind NovaStudio.',
    stackBody: 'As you scroll, completed modules collapse into compact layers and the current module expands. This shows how NovaOS organizes brand memory, campaigns, content, search, leads, customer records, marketplace assets and Academy workflows.',
    stack: [
      { no: '01', title: 'Brand Brain', color: 'bg-[#d9c2ff]', points: ['Brand memory', 'Approved claims', 'Audience map', 'Positioning library'] },
      { no: '02', title: 'Campaign Builder', color: 'bg-[#b9e7ff]', points: ['Campaign brief', '30-day calendar', 'Core message', 'CTA path'] },
      { no: '03', title: 'Content Engine', color: 'bg-[#a8f0ae]', points: ['Articles', 'Short-video scripts', 'Social posts', 'Email sequences'] },
      { no: '04', title: 'Lead Capture Kit', color: 'bg-[#cbd2ff]', points: ['Lead magnet', 'Forms', 'Follow-up sequence', 'CRM handoff'] },
      { no: '05', title: 'GEO / AEO + Compliance', color: 'bg-[#ffe0b7]', points: ['AI-search pages', 'FAQs', 'Risk-aware wording', 'Authority content'] },
      { no: '06', title: 'Marketplace and Academy', color: 'bg-[#f3d6ff]', points: ['Campaign packs', 'Creator rewards', 'Case challenges', 'Learning paths'] },
    ],
    resourcesTitle: 'Resources for AI-native marketing teams.',
    resources: [['Industry insights', 'How AI search changes business discovery'], ['Product tools', 'Campaign briefs, calendars and landing-page checklists'], ['Growth playbooks', 'Web3, fintech, SaaS and SME growth systems']],
    casesTitle: 'Example systems NovaStudio can build.',
    cases: [['Fintech merchant acquisition', 'Education content, landing assets and merchant onboarding.'], ['Web3 onboarding campaign', 'Registration guidance, KYC education and conversion follow-up.'], ['AI SaaS authority engine', 'Product explainers, comparison pages and GEO articles.']],
    faqTitle: 'Frequently asked questions.',
    faqs: [['What does NovaStudio do?', 'NovaStudio is the enterprise front door for NovaOS. It helps companies build AI-powered marketing workflows for campaigns, content, leads, GEO, customer operation and growth.'], ['What is NovaOS?', 'NovaOS is the AI Marketing Operating System behind NovaStudio, connecting Brand Brain, Campaign Builder, Content Engine, Lead Capture Kit, GEO/AEO, Marketplace and Academy.'], ['Why does the NovaOS button show an update message?', 'The public NovaOS interface is being updated. The website keeps NovaOS as the special entry point while NovaStudio continues to explain the platform and collect strategy calls.'], ['Which companies is this suitable for?', 'Fintech, Web3, AI SaaS, SMEs, education, clinics and local-service businesses.']],
  },
  zh: {
    scenarioLabel: '关键业务场景',
    scenarioTitle: '围绕真正决定增长的业务场景提供解决方案。',
    scenarioBody: 'NovaStudio 把内容、活动、AI 搜索曝光、线索捕获和客户运营连接成一套由 NovaOS 驱动的 AI 原生营销工作流。',
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
    stackTitle: '滚动浏览 NovaStudio 背后的 AI Marketing OS。',
    stackBody: '向下滑动时，已经看过的模块会收成顶部小层，当前模块展开。这个效果展示 NovaOS 如何组织品牌记忆、活动、内容、搜索、线索、客户记录、市场资产和学院工作流。',
    stack: [
      { no: '01', title: '品牌大脑', color: 'bg-[#d9c2ff]', points: ['品牌记忆', '合规话术', '受众地图', '定位资料库'] },
      { no: '02', title: '活动构建器', color: 'bg-[#b9e7ff]', points: ['活动 brief', '30 天内容日历', '核心信息', 'CTA 路径'] },
      { no: '03', title: '内容引擎', color: 'bg-[#a8f0ae]', points: ['文章内容', '短视频脚本', '社媒帖子', '邮件序列'] },
      { no: '04', title: '线索获取工具包', color: 'bg-[#cbd2ff]', points: ['Lead magnet', '表单', '跟进序列', 'CRM 交接'] },
      { no: '05', title: 'GEO / AEO 与合规文案', color: 'bg-[#ffe0b7]', points: ['AI 搜索页面', 'FAQ', '风险表达检查', '权威内容'] },
      { no: '06', title: '市场与学院', color: 'bg-[#f3d6ff]', points: ['Campaign packs', '创作者奖励', '案例挑战', '学习路径'] },
    ],
    resourcesTitle: '给 AI 原生营销团队的资源中心。',
    resources: [['行业资讯', 'AI 搜索如何改变业务发现'], ['产品工具', '活动 brief、内容日历和落地页检查清单'], ['增长手册', 'Web3、金融科技、SaaS 和 SME 增长系统']],
    casesTitle: 'NovaStudio 可以搭建的系统案例。',
    cases: [['金融科技商户获客', '教育内容、落地页资产和商户入驻流程。'], ['Web3 注册转化活动', '注册引导、KYC 教育和转化跟进。'], ['AI SaaS 权威内容引擎', '产品讲解、对比页面和 GEO 文章。']],
    faqTitle: '常见问题。',
    faqs: [['NovaStudio 是做什么的？', 'NovaStudio 是 NovaOS 的企业级前门，帮助企业搭建活动、内容、线索、GEO、客户运营和增长工作流。'], ['NovaOS 是什么？', 'NovaOS 是 NovaStudio 背后的 AI Marketing Operating System，连接品牌大脑、活动构建器、内容引擎、线索获取、GEO/AEO、市场资产和学院。'], ['为什么点击 NovaOS 会显示更新中？', '当前公开入口正在更新。官网保留 NovaOS 特殊入口，用于塑造平台预期并引导客户预约策略沟通。'], ['适合哪些公司？', '适合金融科技、Web3、AI SaaS、中小企业、教育、诊所和本地服务业务。']],
  },
  ja: {
    scenarioLabel: '業務シナリオ', scenarioTitle: '成長を決める業務シナリオに合わせたソリューション。', scenarioBody: 'NovaStudio は NovaOS によってコンテンツ、キャンペーン、AI 検索露出、リード獲得、顧客運用を接続します。', learn: '詳しく見る',
    scenarios: [['AI コンテンツ制作', '戦略 brief から記事、動画脚本、SNS、メール、LP 資産を作成。'], ['GEO / AEO 露出', 'AI 検索向けページ、FAQ、比較記事、権威資産を構築。'], ['リード獲得システム', 'フォーム、スコアリング、フォローアップ、CRM 連携を設計。'], ['信頼重視の表現', 'Fintech、Web3、決済領域の価値を明確に伝達。'], ['多言語展開', 'APAC とグローバル向けに訴求を調整。'], ['再利用可能な資産', 'テンプレートとプレイブックを資産化。']],
    stackLabel: 'NovaOS レイヤー', stackTitle: 'NovaStudio を支える AI Marketing OS。', stackBody: 'スクロールすると既読モジュールが折りたたまれ、現在のモジュールが展開されます。',
    stack: [{ no: '01', title: 'ブランドブレイン', color: 'bg-[#d9c2ff]', points: ['ブランド記憶', '承認済み表現', '受け手地図', 'ポジショニング'] }, { no: '02', title: 'キャンペーンビルダー', color: 'bg-[#b9e7ff]', points: ['Brief', '30日カレンダー', 'メッセージ', 'CTA'] }, { no: '03', title: 'コンテンツエンジン', color: 'bg-[#a8f0ae]', points: ['記事', '動画脚本', 'SNS', 'メール'] }, { no: '04', title: 'リード獲得キット', color: 'bg-[#cbd2ff]', points: ['Lead magnet', 'Forms', 'Follow-up', 'CRM'] }, { no: '05', title: 'GEO / AEO + Compliance', color: 'bg-[#ffe0b7]', points: ['AI検索ページ', 'FAQ', 'リスク表現', '権威記事'] }, { no: '06', title: '市場と Academy', color: 'bg-[#f3d6ff]', points: ['テンプレート', '報酬', '挑戦', '学習経路'] }],
    resourcesTitle: 'AI マーケティングチーム向けリソース。', resources: [['業界知見', 'AI 検索が発見を変える'], ['製品ツール', 'Brief、カレンダー、LP チェックリスト'], ['成長手册', 'Web3、Fintech、SaaS、SME']], casesTitle: '構築できるシステム例。', cases: [['Fintech 獲得', '教育コンテンツと LP。'], ['Web3 オンボーディング', '登録案内と KYC 教育。'], ['AI SaaS 権威エンジン', '説明、比較、GEO 記事。']], faqTitle: 'よくある質問。', faqs: [['NovaStudio は？', 'NovaOS の企業向け入口です。'], ['NovaOS は？', 'NovaStudio を支える AI Marketing OS です。'], ['なぜ更新中ですか？', '公開インターフェースを更新中です。'], ['向いている会社は？', 'Fintech、Web3、AI SaaS、中小企業など。']],
  },
  ko: {
    scenarioLabel: '비즈니스 시나리오', scenarioTitle: '성장을 결정하는 시나리오를 위한 솔루션.', scenarioBody: 'NovaStudio는 NovaOS를 통해 콘텐츠, 캠페인, AI 검색 노출, 리드 확보, 고객 운영을 연결합니다.', learn: '더 알아보기',
    scenarios: [['AI 콘텐츠 제작', '전략 brief에서 글, 영상 스크립트, SNS, 이메일, 랜딩 자산을 만듭니다.'], ['GEO / AEO 노출', 'AI 검색용 페이지, FAQ, 비교 콘텐츠, 권위 자산을 구축합니다.'], ['리드 확보 시스템', '폼, 점수화, 후속 플로우, CRM 연계를 설계합니다.'], ['신뢰 중심 커뮤니케이션', '핀테크, Web3, 결제 영역의 가치를 명확히 전달합니다.'], ['다국어 확장', 'APAC 및 글로벌 고객에 맞게 메시지를 조정합니다.'], ['재사용 가능한 자산', '템플릿과 플레이북을 성장 자산으로 만듭니다.']],
    stackLabel: 'NovaOS 플랫폼 레이어', stackTitle: 'NovaStudio 뒤의 AI Marketing OS.', stackBody: '스크롤하면 지난 모듈은 접히고 현재 모듈은 펼쳐집니다.',
    stack: [{ no: '01', title: '브랜드 브레인', color: 'bg-[#d9c2ff]', points: ['브랜드 기억', '승인 문구', '고객 지도', '포지셔닝'] }, { no: '02', title: '캠페인 빌더', color: 'bg-[#b9e7ff]', points: ['Brief', '30일 캘린더', '메시지', 'CTA'] }, { no: '03', title: '콘텐츠 엔진', color: 'bg-[#a8f0ae]', points: ['글', '영상 스크립트', 'SNS', '이메일'] }, { no: '04', title: '리드 캡처 키트', color: 'bg-[#cbd2ff]', points: ['Lead magnet', 'Forms', 'Follow-up', 'CRM'] }, { no: '05', title: 'GEO / AEO + Compliance', color: 'bg-[#ffe0b7]', points: ['AI 검색 페이지', 'FAQ', '리스크 문구', '권위 콘텐츠'] }, { no: '06', title: '마켓과 아카데미', color: 'bg-[#f3d6ff]', points: ['템플릿', '보상', '챌린지', '학습 경로'] }],
    resourcesTitle: 'AI 마케팅 팀을 위한 리소스.', resources: [['산업 인사이트', 'AI 검색이 발견을 바꾸는 방식'], ['제품 도구', 'Brief, 캘린더, LP 체크리스트'], ['성장 플레이북', 'Web3, 핀테크, SaaS, SME']], casesTitle: '구축 가능한 시스템 예시.', cases: [['핀테크 획득', '교육 콘텐츠와 랜딩 자산.'], ['Web3 온보딩', '가입 안내와 KYC 교육.'], ['AI SaaS 권위 엔진', '설명, 비교, GEO 글.']], faqTitle: '자주 묻는 질문.', faqs: [['NovaStudio는?', 'NovaOS의 기업용 입구입니다.'], ['NovaOS는?', 'NovaStudio를 지원하는 AI Marketing OS입니다.'], ['왜 업데이트 중인가요?', '공개 인터페이스를 업데이트 중입니다.'], ['어떤 회사에 적합한가요?', '핀테크, Web3, AI SaaS, 중소기업 등에 적합합니다.']],
  },
} as const;

export function HomeDeepSections({ onOpenModal }: { onOpenModal: () => void }) {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <div className="bg-white text-slate-950">
      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">{c.scenarioLabel}</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.scenarioTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{c.scenarioBody}</p>
            <a href="/solutions" className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20">{c.learn}</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {c.scenarios.map(([title, body], index) => <article key={title} className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">{index + 1}</div><h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px] text-center">
          <p className="eyebrow">{c.stackLabel}</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950">{c.stackTitle}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{c.stackBody}</p>
        </div>
        <ScrollStack items={c.stack as readonly StackItem[]} onOpenModal={onOpenModal} />
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.resourcesTitle}</h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {c.resources.map(([title, body]) => <article key={title} className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-900/5"><div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8"><h3 className="text-3xl font-semibold text-slate-950">{title}</h3></div><p className="p-8 leading-8 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9ff] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.casesTitle}</h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {c.cases.map(([title, body], index) => <article key={title} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/5"><div className="mb-6 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 text-5xl font-semibold text-blue-600">0{index + 1}</div><h3 className="text-2xl font-semibold text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-5 text-center text-5xl font-semibold tracking-[-0.05em] text-slate-950">{c.faqTitle}</h2>
          <div className="mt-12 divide-y divide-blue-100">
            {c.faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold text-slate-900"><span>{question}</span><span className="text-indigo-500 group-open:rotate-180">⌄</span></summary><p className="mt-4 leading-8 text-slate-600">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </div>
  );
}
