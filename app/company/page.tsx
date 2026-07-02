'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Company', title: 'NovaStudio is the door. NovaOS is the house.', body: 'NovaStudio is the enterprise front door for trust, service delivery, case building and client acquisition. NovaOS is the AI Marketing OS that holds tools, templates, Academy, marketplace assets, creator economy and customer growth workflows.', badges: ['Singapore-based', 'AI-native', 'NovaOS core', 'Productized services'], metrics: [['NovaStudio', 'Enterprise front door'], ['NovaOS', 'Operating system'], ['APAC', 'Market perspective'], ['GEO', 'Search-ready'], ['CRM', 'Customer records'], ['Global', 'Client-facing']],
    cardsTitle: 'Company architecture narrative.', cardsBody: 'The brand should be easy to understand: customers meet NovaStudio first, then enter NovaOS to use the system, buy assets, learn workflows and manage marketing growth.',
    cards: [{ kicker: 'Front door', title: 'NovaStudio', body: 'Builds trust, explains the company, attracts clients, delivers services and turns client work into structured workflows.', points: ['Trust', 'Service delivery', 'Workflow SOP'] }, { kicker: 'Core system', title: 'NovaOS', body: 'Holds Campaign Builder, Brand Brain, Content Engine, Lead Capture Kit, Growth Dashboard, Marketplace and Academy.', points: ['Tools', 'Templates', 'Customer growth data'] }, { kicker: 'Marketplace', title: 'Marketing asset market', body: 'Turns campaign packs, content packs, positioning packs, funnel packs and case study packs into tradable assets.', points: ['Campaign packs', 'Creator assets', 'Template sales'] }, { kicker: 'Education', title: 'Nova Academy', body: 'Trains users, creators and marketing operators through guides, certification, challenges and case-based learning.', points: ['Certification', '7-day challenge', 'Creator training'] }, { kicker: 'Moat', title: 'Workflow and template moat', body: 'The defensibility comes from workflows, industry templates, customer data, Brand Brain, compliance know-how and creator ecosystem.', points: ['Workflow moat', 'Template moat', 'Data moat'] }, { kicker: 'Growth', title: 'Service-led productization', body: 'Service delivery creates cash flow and real cases; NovaOS turns those SOPs into repeatable software and marketplace assets.', points: ['Service proof', 'SOP', 'Product modules'] }],
    featureTitle: 'The business model is service-led, system-powered.', featureBody: 'NovaStudio should not look like a normal video studio. It is the customer-facing operating company behind an AI Marketing OS ecosystem.', featurePoints: ['Service delivery creates proof', 'SOPs become NovaOS modules', 'Templates become marketplace assets', 'Academy and challenges create distribution'],
    processTitle: 'Operating principles.', process: [{ kicker: 'Principle', title: 'Business first', body: 'Every page, video, campaign and workflow should connect to a business outcome.' }, { kicker: 'Principle', title: 'System thinking', body: 'Avoid one-off deliverables. Build repeatable assets and operating structures.' }, { kicker: 'Principle', title: 'Global clarity', body: 'Use clean international language, simple positioning and market-specific localization.' }, { kicker: 'Principle', title: 'Trust by design', body: 'For high-trust industries, avoid reckless claims and build credibility step by step.' }],
    faqTitle: 'Company questions.', faqs: [['Is NovaStudio an agency or SaaS?', 'NovaStudio is an AI-powered marketing operations company. NovaOS is the operating system layer behind it.'], ['Why use the door and house metaphor?', 'It explains the structure clearly: NovaStudio attracts and builds trust; NovaOS holds the product, assets and ecosystem.'], ['What should the website communicate?', 'Enterprise trust, AI-native capability, NovaOS as the core system, multi-industry growth workflows and a clear path to consultation.'], ['What content do we need later?', 'Real team photos, client proof, project videos, service SOPs, case studies and stronger brand assets.']],
    ctaTitle: 'Build NovaStudio around NovaOS.', ctaBody: 'The website should become the front door to the AI Marketing OS, not just a portfolio or service page.', ctaLabel: 'Talk to NovaStudio',
  },
  zh: {
    eyebrow: '公司', title: 'NovaStudio 是门，NovaOS 是屋。', body: 'NovaStudio 是企业级前门，用来建立信任、承接服务、沉淀案例和获取客户。NovaOS 是 AI Marketing OS，承载工具、模板、学院、市场资产、创作者经济和客户增长工作流。', badges: ['新加坡视角', 'AI 原生', 'NovaOS 核心', '产品化服务'], metrics: [['NovaStudio', '企业级前门'], ['NovaOS', '操作系统'], ['APAC', '市场视角'], ['GEO', '搜索准备'], ['CRM', '客户记录'], ['Global', '面向全球客户']],
    cardsTitle: '公司架构叙事。', cardsBody: '品牌必须好理解：客户先通过 NovaStudio 认识我们、信任我们；再进入 NovaOS 使用系统、购买资产、学习工作流和管理营销增长。',
    cards: [{ kicker: '前门', title: 'NovaStudio', body: '负责建立信任、解释公司、吸引客户、提供服务交付，并把客户项目沉淀成结构化工作流。', points: ['信任', '服务交付', '工作流 SOP'] }, { kicker: '核心系统', title: 'NovaOS', body: '承载活动构建器、品牌大脑、内容引擎、线索获取工具、增长看板、市场和学院。', points: ['工具', '模板', '客户增长数据'] }, { kicker: '市场', title: '营销资产市场', body: '把 campaign pack、内容包、定位包、漏斗包和案例包变成可交易资产。', points: ['Campaign packs', '创作者资产', '模板销售'] }, { kicker: '教育', title: 'Nova Academy', body: '通过指南、认证、挑战赛和案例学习培养用户、创作者和营销操盘手。', points: ['认证', '7 天挑战', '创作者培训'] }, { kicker: '护城河', title: '工作流与模板护城河', body: '真正防御力来自工作流、行业模板、客户数据、品牌大脑、合规经验和创作者生态。', points: ['工作流护城河', '模板护城河', '数据护城河'] }, { kicker: '增长', title: '服务驱动产品化', body: '服务交付带来现金流和真实案例；NovaOS 把 SOP 变成可重复的软件与市场资产。', points: ['服务证明', 'SOP', '产品模块'] }],
    featureTitle: '商业模式是服务驱动，系统承载。', featureBody: 'NovaStudio 不应该像普通视频工作室。它是 AI Marketing OS 生态背后的客户面对型运营公司。', featurePoints: ['服务交付产生证明', 'SOP 变成 NovaOS 模块', '模板变成市场资产', '学院与挑战赛带来传播'],
    processTitle: '运营原则。', process: [{ kicker: '原则', title: '业务优先', body: '每个页面、视频、活动和工作流都要连接到业务结果。' }, { kicker: '原则', title: '系统思维', body: '避免一次性交付，沉淀可复用资产和运营结构。' }, { kicker: '原则', title: '全球清晰度', body: '使用干净的国际化语言、清晰定位和本地化表达。' }, { kicker: '原则', title: '信任设计', body: '面对高信任行业，避免夸张承诺，逐步建立可信度。' }],
    faqTitle: '公司常见问题。', faqs: [['NovaStudio 是 agency 还是 SaaS？', 'NovaStudio 是 AI 驱动的市场运营公司，NovaOS 是背后的操作系统层。'], ['为什么用门和屋的比喻？', '这个比喻最清楚：NovaStudio 负责吸引和建立信任；NovaOS 承载产品、资产和生态。'], ['网站应该传达什么？', '企业级信任、AI 原生能力、NovaOS 作为核心系统、多行业增长工作流和清晰咨询路径。'], ['后续还需要补什么？', '真实团队照片、客户证明、项目视频、服务 SOP、案例和更强品牌素材。']],
    ctaTitle: '围绕 NovaOS 建立 NovaStudio。', ctaBody: '官网应该成为 AI Marketing OS 的前门，而不是普通作品集或服务页。', ctaLabel: '联系 NovaStudio',
  },
  ja: null,
  ko: null,
} as const;

export default function CompanyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const { lang } = useLanguage();
  const page = (copy[lang] ?? copy.en) || copy.en;

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      <DeepPageTemplate copy={page} onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
