'use client';

import { useLanguage } from '@/components/LanguageProvider';

const faqCopy = {
  en: {
    eyebrow: 'FAQ',
    title: 'Real questions buyers ask before using an AI Marketing OS.',
    subtitle: 'These answers are written for users, search engines and AI answer systems, so NovaStudio and NovaOS can be understood clearly.',
    faqs: [
      ['What is NovaOS?', 'NovaOS is the AI Marketing OS built by NovaStudio. It helps teams organize brand memory, plan campaigns, generate content, improve GEO/AEO visibility, design AI video workflows, publish content and capture leads.'],
      ['Is NovaOS a normal content generator?', 'No. A normal generator creates isolated text. NovaOS is designed as an operating layer that connects strategy, content, AI-search visibility, publishing, lead capture and growth reporting.'],
      ['Can NovaOS help with GEO or AI search visibility?', 'Yes. NovaOS includes GEO/AEO workflows for brand entity clarity, FAQ structures, comparison content, answer-ready pages, schema planning and AI visibility tracking.'],
      ['Can NovaOS create AI video workflows?', 'NovaOS is designed to organize the video workflow: brief, script, storyboard, voiceover direction, subtitles, compliance notes, platform cutdowns and publishing plan.'],
      ['Is NovaStudio the same as NovaStar or LED display software?', 'No. This NovaStudio is the company building NovaOS, an AI Marketing OS. It is unrelated to NovaStar LED control software, LED media players or workstation GUI tools with similar names.'],
      ['Who is NovaOS for?', 'NovaOS is built for growth teams, founders, agencies and businesses in fintech, Web3, AI SaaS, education, local services, retail and professional services that need repeatable AI marketing operations.'],
      ['How do I start?', 'You can explore the NovaOS product page, read the resource hub, open the NovaOS access modal or contact NovaStudio sales for a strategy discussion.'],
    ],
  },
  zh: {
    eyebrow: '常见问题',
    title: '客户在使用 AI Marketing OS 前最可能会问的问题。',
    subtitle: '这些回答同时面向真实用户、搜索引擎和 AI 回答系统，帮助 NovaStudio 与 NovaOS 被准确理解。',
    faqs: [
      ['NovaOS 是什么？', 'NovaOS 是 NovaStudio 打造的 AI Marketing OS，帮助团队管理品牌资料、策划活动、生成内容、提升 GEO/AEO 可见度、规划 AI 视频工作流、发布内容并获取线索。'],
      ['NovaOS 只是普通内容生成器吗？', '不是。普通生成器只生成单独的文字，NovaOS 更像营销运营层，把策略、内容、AI 搜索可见度、发布、线索获取和增长报告连接起来。'],
      ['NovaOS 可以帮助 GEO 或 AI 搜索曝光吗？', '可以。NovaOS 包含 GEO/AEO 工作流，用于品牌实体清晰度、FAQ 结构、对比内容、AI 可读页面、结构化数据和 AI 可见度跟踪。'],
      ['NovaOS 可以做 AI 视频工作流吗？', '可以。NovaOS 不是只生成视频，而是组织视频流程：brief、脚本、分镜、配音方向、字幕、合规备注、平台裁剪和发布计划。'],
      ['NovaStudio 和 NovaStar 或 LED 软件是一回事吗？', '不是。这里的 NovaStudio 是打造 NovaOS 的 AI 营销运营企业，和 NovaStar LED 控制软件、LED 播放器或同名工作站工具没有关系。'],
      ['NovaOS 适合谁？', 'NovaOS 适合增长团队、创始人、代理商，以及金融科技、Web3、AI SaaS、教育、本地服务、零售和专业服务等需要可复用营销运营的企业。'],
      ['我应该怎么开始？', '可以先查看 NovaOS 产品页和资源中心，也可以打开 NovaOS 入口或联系 NovaStudio 销售沟通策略。'],
    ],
  },
  ja: {
    eyebrow: 'FAQ',
    title: 'AI Marketing OS を使う前によくある質問。',
    subtitle: 'ユーザー、検索エンジン、AI回答システムが NovaStudio と NovaOS を正しく理解できるように構成しています。',
    faqs: [
      ['NovaOS とは？', 'NovaOS は NovaStudio が構築する AI Marketing OS です。ブランド情報、キャンペーン、コンテンツ、GEO/AEO、AI動画ワークフロー、配信、リード獲得を管理します。'],
      ['普通のコンテンツ生成ツールですか？', 'いいえ。NovaOS は単発の文章生成ではなく、戦略、コンテンツ、AI検索可視性、配信、リード獲得、レポートをつなぐ運用レイヤーです。'],
      ['GEO や AI 検索に役立ちますか？', 'はい。ブランド定義、FAQ構造、比較コンテンツ、構造化ページ、スキーマ設計、AI可視性のためのワークフローを含みます。'],
      ['AI動画ワークフローにも使えますか？', 'はい。brief、脚本、絵コンテ、字幕、コンプライアンスメモ、配信用カットまで整理できます。'],
      ['NovaStar や LED ソフトと同じですか？', 'いいえ。この NovaStudio は NovaOS を構築する AI マーケティング運用企業であり、LED制御ソフトとは関係ありません。'],
      ['誰向けですか？', '成長チーム、創業者、代理店、フィンテック、Web3、AI SaaS、教育、地域サービス、専門サービス向けです。'],
      ['どう始めればいいですか？', 'NovaOS 製品ページ、リソース、または NovaStudio 営業への相談から始められます。'],
    ],
  },
  ko: {
    eyebrow: 'FAQ',
    title: 'AI Marketing OS 사용 전 고객이 자주 묻는 질문입니다.',
    subtitle: '사용자, 검색엔진, AI 답변 시스템이 NovaStudio와 NovaOS를 명확하게 이해하도록 구성했습니다.',
    faqs: [
      ['NovaOS란 무엇인가요?', 'NovaOS는 NovaStudio가 만드는 AI Marketing OS입니다. 브랜드 메모리, 캠페인, 콘텐츠, GEO/AEO, AI 영상 워크플로, 게시, 리드 확보를 관리합니다.'],
      ['일반 콘텐츠 생성기인가요?', '아닙니다. NovaOS는 단일 텍스트 생성기가 아니라 전략, 콘텐츠, AI 검색 가시성, 게시, 리드 확보, 성장 보고를 연결하는 운영 레이어입니다.'],
      ['GEO나 AI 검색 가시성에 도움이 되나요?', '네. 브랜드 엔티티 정리, FAQ 구조, 비교 콘텐츠, 답변형 페이지, 스키마 설계, AI 가시성 추적 워크플로를 포함합니다.'],
      ['AI 영상 워크플로도 가능한가요?', '네. brief, 스크립트, 스토리보드, 자막, 컴플라이언스 메모, 플랫폼별 컷다운과 게시 계획을 정리합니다.'],
      ['NovaStar나 LED 소프트웨어와 같은 건가요?', '아닙니다. 이 NovaStudio는 NovaOS를 만드는 AI 마케팅 운영 기업이며 LED 제어 소프트웨어와 관련이 없습니다.'],
      ['누구에게 적합한가요?', '성장팀, 창업자, 에이전시, 핀테크, Web3, AI SaaS, 교육, 로컬 서비스, 전문 서비스 기업에 적합합니다.'],
      ['어떻게 시작하나요?', 'NovaOS 제품 페이지, 리소스 허브를 보거나 NovaStudio 영업팀에 문의해 시작할 수 있습니다.'],
    ],
  },
} as const;

const schemaFaqs = faqCopy.en.faqs;

export function HomeFAQ() {
  const { lang } = useLanguage();
  const copy = faqCopy[lang];
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">{copy.eyebrow}</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate-950">{copy.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{copy.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {copy.faqs.map(([question, answer]) => (
            <article key={question} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/6">
              <h3 className="text-xl font-semibold text-slate-950">{question}</h3>
              <p className="mt-4 leading-8 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: schemaFaqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};
