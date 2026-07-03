'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage, type Lang } from '@/components/LanguageProvider';
import { navItems } from '@/lib/content';

const navKey: Record<string, keyof ReturnType<typeof useLanguage>['t']['nav']> = {
  Products: 'products', Solutions: 'solutions', Cases: 'cases', Academy: 'academy', Resources: 'resources', Company: 'company', Contact: 'contact',
};

const novaButtonCopy = {
  en: 'Enter NovaOS',
  zh: '进入 NovaOS',
  ja: 'NovaOS に入る',
  ko: 'NovaOS 보기',
} as const;

type MenuName = 'Products' | 'Solutions' | 'Company';
type MenuPanelItem = { label: string; title: string; body: string; href: string };

type MenuLocaleCopy = Record<MenuName, MenuPanelItem[]> & { open: string };

const menuCopy: Record<Lang, MenuLocaleCopy> = {
  en: {
    Products: [
      { label: 'AI Campaign Builder', title: 'Plan full campaigns from one brief.', body: 'Turn business goals, audience, channels and offers into campaign ideas, calendars, landing copy and KPI checklists.', href: '/products' },
      { label: 'Brand Brain', title: 'Store brand memory for every workflow.', body: 'Keep positioning, tone, audience, product notes and proof points ready for repeatable AI marketing execution.', href: '/products' },
      { label: 'Content Engine', title: 'Generate content that can move leads.', body: 'Create articles, short-video scripts, social posts, email sequences and landing-page content from one strategy layer.', href: '/products' },
      { label: 'Lead Capture Kit', title: 'Connect content to lead capture.', body: 'Build forms, offers, follow-up paths and CRM-ready structures so campaigns can collect real sales opportunities.', href: '/products' },
      { label: 'GEO / AEO Engine', title: 'Improve visibility inside AI answers.', body: 'Structure pages, FAQs, comparison content and authority signals for search engines and AI answer systems.', href: '/products' },
      { label: 'Compliance Copy Checker', title: 'Reduce risky claims before publishing.', body: 'Review finance, Web3, payment and high-trust marketing copy for overpromising, weak disclaimers and unclear claims.', href: '/products' },
      { label: 'Growth Dashboard', title: 'Track the marketing system, not just posts.', body: 'See campaigns, content output, lead paths, GEO progress and growth activities in one operating layer.', href: '/products' },
      { label: 'Creator Center', title: 'Turn marketing knowledge into assets.', body: 'Creators and partners can package templates, workflows, campaign packs and education into repeatable NovaOS assets.', href: '/academy' },
    ],
    Solutions: [
      { label: 'Fintech & Payments', title: 'High-trust growth for fintech and payments.', body: 'Build clear product education, acquisition funnels and compliance-aware communication for financial products.', href: '/solutions' },
      { label: 'Web3 & Crypto', title: 'Explain complex Web3 products clearly.', body: 'Create onboarding flows, KYC guides, campaign assets, GEO pages and community-ready content for Web3 teams.', href: '/solutions' },
      { label: 'AI & B2B SaaS', title: 'Make technical products easier to buy.', body: 'Turn product capability, use cases, comparison pages and customer education into a complete growth system.', href: '/solutions' },
      { label: 'SMEs', title: 'Give smaller teams an operating system.', body: 'Help SMEs plan content, generate assets, capture leads and run growth without a full internal marketing department.', href: '/solutions' },
      { label: 'Education', title: 'Package learning into growth assets.', body: 'Create course explainers, student acquisition content, webinars, landing pages and academy-style resource systems.', href: '/solutions' },
      { label: 'Clinics & Local Services', title: 'Local trust, content and lead capture.', body: 'Build service pages, FAQs, appointment funnels and localized content for clinics and service businesses.', href: '/solutions' },
      { label: 'Retail & Consumer', title: 'Turn products into repeatable campaigns.', body: 'Create launch calendars, social content, influencer briefs, offer pages and customer retention content.', href: '/solutions' },
      { label: 'Professional Services', title: 'Make expertise easier to discover.', body: 'Package knowledge, case studies, authority content and consultation flows for legal, consulting and advisory firms.', href: '/solutions' },
    ],
    Company: [
      { label: 'About NovaStudio', title: 'NovaStudio builds NovaOS.', body: 'NovaStudio is an AI marketing operations company focused on turning content, GEO, AI video, publishing and lead capture into a usable growth system.', href: '/company' },
      { label: 'Cases', title: 'See how NovaOS thinking becomes work.', body: 'Explore example systems, campaign structures, landing flows and AI marketing workflows built around real business use cases.', href: '/cases' },
      { label: 'Resources', title: 'Read practical AI marketing resources.', body: 'Learn about GEO/AEO, content systems, AI video workflows, lead capture and how businesses can turn marketing into repeatable assets.', href: '/resources' },
      { label: 'Contact', title: 'Talk to NovaStudio sales.', body: 'Contact the team for NovaOS access, GEO diagnosis, content workflow planning or AI marketing system consultation.', href: '/contact' },
      { label: 'Singapore APAC Growth', title: 'Built from Singapore for APAC growth.', body: 'NovaStudio is positioned for Singapore, APAC and global teams that need multilingual, high-trust AI marketing execution.', href: '/company' },
      { label: 'Partner Network', title: 'Work with NovaStudio as a partner.', body: 'Agencies, creators, studios and consultants can collaborate around templates, campaign packs, production workflows and growth systems.', href: '/contact' },
    ],
    open: 'Learn more',
  },
  zh: {
    Products: [
      { label: 'AI 活动构建器', title: '从一个 brief 生成完整营销活动。', body: '把业务目标、目标客户、渠道和卖点转成活动创意、内容日历、落地页文案和 KPI 清单。', href: '/products' },
      { label: '品牌大脑', title: '把品牌资料沉淀成可复用记忆。', body: '保存定位、语气、受众、产品信息和证明点，让后续内容与活动保持一致。', href: '/products' },
      { label: '内容引擎', title: '从策略生成可获客的内容。', body: '生成文章、短视频脚本、社媒内容、邮件序列和落地页文案，不再每次从零开始。', href: '/products' },
      { label: '线索获取工具包', title: '让内容连接到真实线索。', body: '搭建表单、优惠入口、跟进路径和 CRM 结构，让营销内容产生销售机会。', href: '/products' },
      { label: 'GEO / AEO 引擎', title: '提升品牌在 AI 回答里的可见度。', body: '组织 FAQ、对比页、权威内容和结构化页面，让搜索引擎与 AI 回答更容易理解你。', href: '/products' },
      { label: '合规文案检查', title: '发布前降低高风险表达。', body: '检查金融、Web3、支付和高信任行业文案里的过度承诺、模糊声明和风险表达。', href: '/products' },
      { label: '增长仪表盘', title: '看见整个营销系统的进展。', body: '集中查看活动、内容产出、线索路径、GEO 进度和增长动作，而不是只看单条内容。', href: '/products' },
      { label: '创作者中心', title: '把营销经验变成可交易资产。', body: '创作者和合作伙伴可以沉淀模板、流程、活动包和课程，形成 NovaOS 资产。', href: '/academy' },
    ],
    Solutions: [
      { label: '金融科技与支付', title: '适合高信任行业的增长系统。', body: '为金融科技、支付和卡产品搭建教育内容、获客路径和更稳妥的市场表达。', href: '/solutions' },
      { label: 'Web3 与加密', title: '把复杂 Web3 产品讲清楚。', body: '制作注册/KYC 指南、活动页、GEO 内容、社群资产和用户教育流程。', href: '/solutions' },
      { label: 'AI 与 B2B SaaS', title: '让技术产品更容易被理解和购买。', body: '把产品能力、应用场景、对比页和客户教育组织成完整增长系统。', href: '/solutions' },
      { label: '中小企业', title: '给小团队一个营销操作系统。', body: '帮助中小企业完成内容计划、素材生成、线索获取和增长管理，不必马上搭建完整营销团队。', href: '/solutions' },
      { label: '教育培训', title: '把课程和知识包装成增长资产。', body: '制作课程介绍、招生活动、讲座内容、落地页和学院式资源体系。', href: '/solutions' },
      { label: '诊所与本地服务', title: '本地信任、内容和预约线索。', body: '搭建服务页、FAQ、预约路径和本地化内容，适合诊所和本地服务商。', href: '/solutions' },
      { label: '零售与消费', title: '把产品转成持续活动。', body: '生成新品日历、社媒内容、达人 brief、促销页和复购内容。', href: '/solutions' },
      { label: '专业服务', title: '让专业能力更容易被发现。', body: '为咨询、法律、顾问和服务企业沉淀案例、权威内容和咨询转化路径。', href: '/solutions' },
    ],
    Company: [
      { label: '关于 NovaStudio', title: 'NovaStudio 打造 NovaOS。', body: 'NovaStudio 是 AI 营销运营企业，专注把内容、GEO、AI 视频、发布和线索获取整合成可执行的增长系统。', href: '/company' },
      { label: '案例', title: '查看 NovaOS 思路如何落地。', body: '了解围绕真实业务场景搭建的活动结构、落地页流程和 AI 营销工作流。', href: '/cases' },
      { label: '资源', title: '阅读实用的 AI 营销资源。', body: '了解 GEO/AEO、内容系统、AI 视频工作流、线索获取，以及企业如何把营销变成可复用资产。', href: '/resources' },
      { label: '联系我们', title: '联系 NovaStudio 销售。', body: '你可以咨询 NovaOS 试用、GEO 诊断、内容工作流规划或 AI 营销系统搭建。', href: '/contact' },
      { label: '新加坡与 APAC 增长', title: '从新加坡出发，服务 APAC 增长。', body: 'NovaStudio 面向新加坡、APAC 和全球企业，支持多语言、高信任的 AI 营销执行。', href: '/company' },
      { label: '合作网络', title: '成为 NovaStudio 合作伙伴。', body: '代理商、创作者、制作团队和顾问可以围绕模板、活动包、制作流程和增长系统合作。', href: '/contact' },
    ],
    open: '了解详情',
  },
  ja: {
    Products: [
      { label: 'AI Campaign Builder', title: '1つの brief からキャンペーンを設計。', body: '目標、顧客、チャネル、オファーをコンテンツ計画とKPIに変換します。', href: '/products' },
      { label: 'Brand Brain', title: 'ブランド記憶を保存。', body: 'ポジショニング、トーン、顧客、商品情報を継続的に利用できます。', href: '/products' },
      { label: 'Content Engine', title: '戦略からコンテンツを生成。', body: '記事、動画台本、SNS、メール、LPコピーを作成します。', href: '/products' },
      { label: 'Lead Capture Kit', title: 'コンテンツをリード獲得へ接続。', body: 'フォーム、オファー、フォローアップ、CRM構造を設計します。', href: '/products' },
      { label: 'GEO / AEO Engine', title: 'AI回答での可視性を改善。', body: 'FAQ、比較ページ、構造化コンテンツを整理します。', href: '/products' },
      { label: 'Compliance Copy Checker', title: '公開前にリスク表現を確認。', body: '過度な主張や不明瞭な表現を確認します。', href: '/products' },
      { label: 'Growth Dashboard', title: '成長活動を可視化。', body: 'キャンペーン、コンテンツ、リード、GEO進捗を確認します。', href: '/products' },
      { label: 'Creator Center', title: '知識を資産化。', body: 'テンプレート、ワークフロー、講座を作成できます。', href: '/academy' },
    ],
    Solutions: [
      { label: 'フィンテックと決済', title: '高信頼業界向けの成長設計。', body: '金融・決済商品の教育コンテンツと獲得導線を作ります。', href: '/solutions' },
      { label: 'Web3 と暗号資産', title: 'Web3を分かりやすく説明。', body: 'KYCガイド、キャンペーン、GEOコンテンツを作成します。', href: '/solutions' },
      { label: 'AI と B2B SaaS', title: '技術製品を買いやすく。', body: 'ユースケース、比較、教育コンテンツを整理します。', href: '/solutions' },
      { label: '中小企業', title: '小規模チームに運用基盤を。', body: 'コンテンツ、リード獲得、成長管理を支援します。', href: '/solutions' },
      { label: '教育', title: '学習を成長資産へ。', body: '講座紹介、LP、ウェビナー素材を作成します。', href: '/solutions' },
      { label: 'クリニックと地域サービス', title: '地域信頼と予約導線。', body: 'サービスページ、FAQ、予約導線を整えます。', href: '/solutions' },
      { label: '小売と消費', title: '商品を継続キャンペーンへ。', body: '発売計画、SNS、オファー、顧客維持を設計します。', href: '/solutions' },
      { label: '専門サービス', title: '専門性を発見されやすく。', body: '事例、権威コンテンツ、相談導線を作ります。', href: '/solutions' },
    ],
    Company: [
      { label: 'NovaStudio について', title: 'NovaStudio builds NovaOS.', body: 'NovaStudio は AI マーケティング運用企業です。', href: '/company' },
      { label: '事例', title: '事例を見る。', body: '実際の業務シーンに基づくワークフローを確認できます。', href: '/cases' },
      { label: 'リソース', title: 'AIマーケティング資料。', body: 'GEO、コンテンツ、リード獲得について学べます。', href: '/resources' },
      { label: 'お問い合わせ', title: 'NovaStudioに相談。', body: 'NovaOS、GEO診断、AIマーケティング運用について相談できます。', href: '/contact' },
      { label: 'シンガポールと APAC 成長', title: 'APAC成長を支援。', body: '多言語、高信頼のマーケティング実行を支援します。', href: '/company' },
      { label: 'パートナーネットワーク', title: 'パートナーとして協業。', body: 'テンプレート、制作、成長システムで連携できます。', href: '/contact' },
    ],
    open: '詳しく見る',
  },
  ko: {
    Products: [
      { label: 'AI Campaign Builder', title: 'brief 하나로 캠페인을 설계합니다.', body: '목표, 고객, 채널, 제안을 콘텐츠 계획과 KPI로 전환합니다.', href: '/products' },
      { label: 'Brand Brain', title: '브랜드 기억을 저장합니다.', body: '포지셔닝, 톤, 고객, 제품 정보를 반복 활용합니다.', href: '/products' },
      { label: 'Content Engine', title: '전략에서 콘텐츠를 생성합니다.', body: '기사, 영상 스크립트, SNS, 이메일, 랜딩페이지 카피를 만듭니다.', href: '/products' },
      { label: 'Lead Capture Kit', title: '콘텐츠를 리드 확보로 연결합니다.', body: '폼, 오퍼, 후속 흐름, CRM 구조를 설계합니다.', href: '/products' },
      { label: 'GEO / AEO Engine', title: 'AI 답변 속 가시성을 개선합니다.', body: 'FAQ, 비교 페이지, 구조화 콘텐츠를 정리합니다.', href: '/products' },
      { label: 'Compliance Copy Checker', title: '게시 전 위험 표현을 확인합니다.', body: '과장된 주장이나 불명확한 표현을 점검합니다.', href: '/products' },
      { label: 'Growth Dashboard', title: '성장 활동을 추적합니다.', body: '캠페인, 콘텐츠, 리드, GEO 진행을 확인합니다.', href: '/products' },
      { label: 'Creator Center', title: '지식을 자산화합니다.', body: '템플릿, 워크플로, 교육 자료를 만들 수 있습니다.', href: '/academy' },
    ],
    Solutions: [
      { label: '핀테크 및 결제', title: '고신뢰 산업을 위한 성장 설계.', body: '금융 및 결제 제품의 교육 콘텐츠와 획득 흐름을 만듭니다.', href: '/solutions' },
      { label: 'Web3 및 크립토', title: 'Web3 제품을 명확하게 설명합니다.', body: 'KYC 가이드, 캠페인, GEO 콘텐츠를 제작합니다.', href: '/solutions' },
      { label: 'AI 및 B2B SaaS', title: '기술 제품을 구매하기 쉽게.', body: '유스케이스, 비교, 교육 콘텐츠를 정리합니다.', href: '/solutions' },
      { label: '중소기업', title: '작은 팀을 위한 운영 시스템.', body: '콘텐츠, 리드 확보, 성장 관리를 지원합니다.', href: '/solutions' },
      { label: '교육', title: '학습을 성장 자산으로.', body: '강좌 소개, 랜딩페이지, 웨비나 자료를 만듭니다.', href: '/solutions' },
      { label: '클리닉 및 로컬 서비스', title: '지역 신뢰와 예약 흐름.', body: '서비스 페이지, FAQ, 예약 흐름을 정리합니다.', href: '/solutions' },
      { label: '리테일 및 소비재', title: '제품을 지속 캠페인으로.', body: '출시 계획, SNS, 오퍼, 재구매 콘텐츠를 설계합니다.', href: '/solutions' },
      { label: '전문 서비스', title: '전문성을 쉽게 발견되게.', body: '사례, 권위 콘텐츠, 상담 흐름을 만듭니다.', href: '/solutions' },
    ],
    Company: [
      { label: 'NovaStudio 소개', title: 'NovaStudio builds NovaOS.', body: 'NovaStudio는 AI 마케팅 운영 기업입니다.', href: '/company' },
      { label: '사례', title: '사례 보기.', body: '실제 비즈니스 사용 사례의 워크플로를 확인합니다.', href: '/cases' },
      { label: '리소스', title: 'AI 마케팅 자료.', body: 'GEO, 콘텐츠, 리드 확보를 배울 수 있습니다.', href: '/resources' },
      { label: '문의', title: 'NovaStudio에 문의.', body: 'NovaOS, GEO 진단, AI 마케팅 운영을 상담할 수 있습니다.', href: '/contact' },
      { label: '싱가포르 및 APAC 성장', title: 'APAC 성장을 지원합니다.', body: '다국어 고신뢰 마케팅 실행을 지원합니다.', href: '/company' },
      { label: '파트너 네트워크', title: '파트너 협업.', body: '템플릿, 제작, 성장 시스템에서 협업할 수 있습니다.', href: '/contact' },
    ],
    open: '자세히 보기',
  },
} as const;

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const pathname = usePathname();
  const { lang, setLang, labels, t } = useLanguage();
  const menu = menuCopy[lang];
  const panel = activeMenu ? (menu[activeMenu][activeItemIndex] ?? menu[activeMenu][0]) : null;

  function handleClick(href: string) {
    if (href === 'modal') onOpenModal();
    setIsOpen(false);
  }

  function isActivePath(href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header onMouseLeave={() => { setActiveMenu(null); setActiveItemIndex(0); }} className="fixed inset-x-0 top-0 z-40 border-b border-blue-100/80 bg-white/95 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-5">
        <a href="/" aria-label="NovaStudio home"><BrandLogo /></a>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const hasMenu = item.label === 'Products' || item.label === 'Solutions' || item.label === 'Company';
            const active = isActivePath(item.href);
            return (
              <a key={item.label} href={item.href} onMouseEnter={() => { setActiveMenu(hasMenu ? item.label as MenuName : null); setActiveItemIndex(0); }} onClick={() => handleClick(item.href)} className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition ${active ? 'bg-blue-50 font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100' : 'font-medium text-slate-700 hover:bg-blue-50/70 hover:text-blue-700'}`}>
                <span>{t.nav[navKey[item.label]] ?? item.label}</span>{hasMenu ? <span className={`text-xs leading-none ${active ? 'text-blue-500' : 'text-slate-400'}`}>⌄</span> : null}
              </a>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="rounded-full border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none">
            {(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}
          </select>
          <button type="button" onClick={onOpenModal} onMouseEnter={() => setActiveMenu(null)} className="relative rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700"><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />{novaButtonCopy[lang]}</button>
          <a href="/contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20">{t.nav.cta}</a>
        </div>
        <button type="button" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 lg:hidden" onClick={() => setIsOpen((value) => !value)}>{isOpen ? 'Close' : 'Menu'}</button>
      </nav>

      {activeMenu && panel ? (
        <div className="hidden border-t border-blue-100 bg-white shadow-2xl shadow-blue-950/10 lg:block">
          <div className="mx-auto grid max-w-[1500px] grid-cols-[0.36fr_0.64fr]">
            <div className="px-8 py-10">
              <h3 className="text-4xl font-semibold tracking-tight text-slate-950">{t.nav[navKey[activeMenu]]}</h3>
              <div className="mt-8 grid gap-3">
                {menu[activeMenu].map((item, index) => (
                  <a key={item.label} href={item.href} onMouseEnter={() => setActiveItemIndex(index)} className={`rounded-2xl px-4 py-3 transition ${index === activeItemIndex ? 'bg-blue-50 font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'}`}>{item.label}</a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 px-10 py-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">OS</div>
              <h4 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950">{panel.title}</h4>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">{panel.body}</p>
              <a href={panel.href} className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">{menu.open}</a>
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? <div id="mobile-menu" className="border-t border-blue-100 bg-white px-5 py-5 lg:hidden"><div className="grid gap-2"><select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="mb-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-slate-700">{(Object.keys(labels) as Lang[]).map((key) => <option key={key} value={key}>{labels[key]}</option>)}</select><button type="button" onClick={() => handleClick('modal')} className="rounded-2xl bg-slate-950 px-4 py-3 text-left font-semibold text-white">{novaButtonCopy[lang]}</button>{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => handleClick(item.href)} className={`rounded-2xl px-4 py-3 transition ${isActivePath(item.href) ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'}`}>{t.nav[navKey[item.label]] ?? item.label}</a>)}<a href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">{t.nav.cta}</a></div></div> : null}
    </header>
  );
}
