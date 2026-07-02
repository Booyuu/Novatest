'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Company', title: 'NovaStudio builds AI marketing operations for global growth teams.', body: 'NovaStudio is positioned as an AI-powered marketing operations company. The long-term direction is to turn high-quality marketing service delivery into repeatable AI workflows, marketplace assets and the NovaOS operating system.', badges: ['Singapore-based', 'AI-native', 'APAC + global', 'Productized services'], metrics: [['AI', 'Marketing operations'], ['APAC', 'Market perspective'], ['NovaOS', 'Long-term product'], ['GEO', 'Search-ready'], ['CRM', 'Customer records reserved'], ['Global', 'Client-facing']],
    cardsTitle: 'What makes NovaStudio different.', cardsBody: 'The company should not look like a normal video agency or a generic AI tool. It sits between strategy, content production, campaign execution and productized marketing systems.',
    cards: [{ kicker: 'Positioning', title: 'AI marketing operations company', body: 'NovaStudio focuses on business execution, not only design. The output should support acquisition, trust, conversion and customer follow-up.', points: ['Strategy', 'Execution', 'Measurement'] }, { kicker: 'Product direction', title: 'Service to system', body: 'Every useful workflow should be structured so it can become a repeatable module, template or NovaOS product layer.', points: ['Workflow design', 'Reusable assets', 'NovaOS-ready'] }, { kicker: 'Market', title: 'Built from Singapore for APAC and global teams', body: 'The brand should feel international, clean and enterprise-ready, while still understanding Asian market execution.', points: ['Singapore base', 'APAC context', 'Global clients'] }, { kicker: 'Delivery', title: 'AI speed with human strategy', body: 'AI accelerates production, but positioning, judgment, compliance awareness and business logic still need human direction.', points: ['AI workflow', 'Human review', 'Business logic'] }, { kicker: 'Trust', title: 'Clear communication for high-trust markets', body: 'Fintech, Web3 and B2B buyers need clarity, credibility and careful claims, not hype or messy AI content.', points: ['Trust content', 'Compliance-aware', 'Authority building'] }, { kicker: 'Future', title: 'Creator and marketplace ecosystem', body: 'NovaStudio can later connect Academy, creators, templates and marketplace assets into the NovaOS ecosystem.', points: ['Academy', 'Marketplace', 'Creator layer'] }],
    featureTitle: 'From agency work to AI operating infrastructure.', featureBody: 'The company story should show a clear evolution: first deliver high-quality marketing systems, then turn the best workflows into repeatable NovaOS modules.', featurePoints: ['Strategy-led service delivery', 'Workflow standardization', 'Template and marketplace assets', 'Future NovaOS productization'],
    processTitle: 'Operating principles.', process: [{ kicker: 'Principle', title: 'Business first', body: 'Every page, video, campaign and workflow should connect to a business outcome.' }, { kicker: 'Principle', title: 'System thinking', body: 'Avoid one-off deliverables. Build repeatable assets and operating structures.' }, { kicker: 'Principle', title: 'Global clarity', body: 'Use clean international language, simple positioning and market-specific localization.' }, { kicker: 'Principle', title: 'Trust by design', body: 'For high-trust industries, avoid reckless claims and build credibility step by step.' }],
    faqTitle: 'Company questions.', faqs: [['Is NovaStudio an agency or SaaS?', 'Today it can operate as a productized service company. The long-term direction is NovaOS as a software ecosystem.'], ['Where is NovaStudio positioned?', 'Singapore-based, APAC-aware, and designed for global-facing businesses.'], ['What should the website communicate?', 'Enterprise trust, AI-native capability, multi-industry growth systems and a clear NovaOS direction.'], ['What content do we need later?', 'Founder story, real team photos, client proof, project videos and stronger brand assets.']],
    ctaTitle: 'Build NovaStudio as a platform brand.', ctaBody: 'The website should become the front door to strategy, service delivery, NovaOS, Academy and future marketplace assets.', ctaLabel: 'Talk to NovaStudio',
  },
  zh: {
    eyebrow: '公司', title: 'NovaStudio 为全球增长团队搭建 AI 营销运营系统。', body: 'NovaStudio 的定位是 AI 驱动的营销运营公司。长期方向是把高质量营销服务交付，沉淀成可重复的 AI 工作流、市场资产和 NovaOS 操作系统。', badges: ['新加坡视角', 'AI 原生', 'APAC + 全球', '产品化服务'], metrics: [['AI', '营销运营'], ['APAC', '市场视角'], ['NovaOS', '长期产品'], ['GEO', '搜索准备'], ['CRM', '客户记录预留'], ['Global', '面向全球客户']],
    cardsTitle: 'NovaStudio 的差异化。', cardsBody: 'NovaStudio 不应该看起来像普通视频公司，也不应该像泛泛的 AI 工具。它应该站在策略、内容生产、活动执行和产品化营销系统之间。',
    cards: [{ kicker: '定位', title: 'AI 营销运营公司', body: 'NovaStudio 关注商业执行，而不只是设计。输出应该支持获客、信任、转化和客户跟进。', points: ['策略', '执行', '衡量'] }, { kicker: '产品方向', title: '从服务到系统', body: '每个有效工作流都应该结构化，未来变成模块、模板或 NovaOS 产品层。', points: ['工作流设计', '可复用资产', 'NovaOS 准备'] }, { kicker: '市场', title: '从新加坡面向 APAC 与全球团队', body: '品牌应该有国际感、清爽和企业级信任，同时理解亚洲市场执行。', points: ['新加坡基础', 'APAC 语境', '全球客户'] }, { kicker: '交付', title: 'AI 速度与人工策略', body: 'AI 提升生产效率，但定位、判断、合规感和商业逻辑仍需要人工主导。', points: ['AI 工作流', '人工审核', '商业逻辑'] }, { kicker: '信任', title: '服务高信任市场的清晰表达', body: '金融科技、Web3 和 B2B 买家需要清楚、可信和谨慎的表达，而不是廉价 AI 内容。', points: ['信任内容', '合规感', '权威建设'] }, { kicker: '未来', title: '创作者与市场生态', body: 'NovaStudio 后续可以把 Academy、创作者、模板和市场资产连接到 NovaOS 生态。', points: ['学院', '市场', '创作者层'] }],
    featureTitle: '从 agency 交付到 AI 运营基础设施。', featureBody: '公司故事应该展示清楚的进化路径：先交付高质量营销系统，再把最佳工作流沉淀成 NovaOS 模块。', featurePoints: ['策略驱动交付', '工作流标准化', '模板与市场资产', '未来 NovaOS 产品化'],
    processTitle: '运营原则。', process: [{ kicker: '原则', title: '业务优先', body: '每个页面、视频、活动和工作流都要连接到业务结果。' }, { kicker: '原则', title: '系统思维', body: '避免一次性交付，沉淀可复用资产和运营结构。' }, { kicker: '原则', title: '全球清晰度', body: '使用干净的国际化语言、清晰定位和本地化表达。' }, { kicker: '原则', title: '信任设计', body: '面对高信任行业，避免夸张承诺，逐步建立可信度。' }],
    faqTitle: '公司常见问题。', faqs: [['NovaStudio 是 agency 还是 SaaS？', '当前可以作为产品化服务公司运营。长期方向是 NovaOS 软件生态。'], ['NovaStudio 的市场定位是什么？', '基于新加坡、理解 APAC，并面向全球业务。'], ['网站应该传达什么？', '企业级信任、AI 原生能力、多行业增长系统和清晰的 NovaOS 方向。'], ['后续还需要补什么？', '创始人故事、真实团队照片、客户证明、项目视频和更强品牌素材。']],
    ctaTitle: '把 NovaStudio 打造成平台型品牌。', ctaBody: '官网应该成为策略、服务交付、NovaOS、Academy 和未来市场资产的前门。', ctaLabel: '联系 NovaStudio',
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
