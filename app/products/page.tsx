'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Products',
    title: 'NovaOS product modules for AI marketing operations.',
    body: 'NovaOS is the operating system behind NovaStudio. It turns strategy, brand memory, campaign planning, content generation, GEO/AEO, lead capture, compliance-aware copy and growth review into one modular marketing workflow.',
    badges: ['NovaOS Core', 'AI Campaign Builder', 'Brand Brain', 'Growth Dashboard'],
    metrics: [['8+', 'Product modules'], ['30+', 'Workflow templates'], ['4', 'Language markets'], ['6', 'Operating layers'], ['24/7', 'Assistant interface'], ['Global', 'Growth-ready']],
    cardsTitle: 'Product modules built around the marketing operating cycle.',
    cardsBody: 'Each module supports a real part of the growth workflow. Together, they make NovaOS more than a content generator: it becomes the operating layer for marketing execution.',
    cards: [
      { kicker: 'Strategy layer', title: 'Brand Brain', body: 'A structured brand memory for positioning, approved claims, audience segments, offers, tone, competitors and market-specific messaging.', points: ['Brand memory', 'Claim library', 'Audience map'] },
      { kicker: 'Campaign layer', title: 'AI Campaign Builder', body: 'Build a complete campaign from business goal, product, target customer, channel selection and marketing objective.', points: ['Campaign idea', '30-day content calendar', 'KPI checklist'] },
      { kicker: 'Production layer', title: 'Content Engine', body: 'Generate full-funnel content assets from one brief: LinkedIn, X, Instagram, blog, video scripts, email and landing-page copy.', points: ['Posts', 'Video scripts', 'Email sequences'] },
      { kicker: 'Conversion layer', title: 'Lead Capture Kit', body: 'Connect content with lead magnets, forms, WhatsApp or Telegram routing, consultation copy and sales follow-up.', points: ['Lead magnet', 'Forms', 'Follow-up sequence'] },
      { kicker: 'Discovery layer', title: 'GEO / AEO Engine', body: 'Create AI-search friendly FAQs, comparison pages, authority articles and brand entity content.', points: ['FAQ clusters', 'Comparison pages', 'Authority content'] },
      { kicker: 'Trust layer', title: 'Compliance Copy Checker', body: 'Flag risky wording for fintech, Web3, payment, trading, healthcare and other sensitive industries.', points: ['Risk-aware copy', 'Safer wording', 'Sensitive industry support'] },
      { kicker: 'Review layer', title: 'Growth Dashboard', body: 'Track content plans, publishing status, leads, CTA performance and weekly optimization recommendations.', points: ['Content status', 'Lead view', 'Optimization checklist'] },
      { kicker: 'Ecosystem layer', title: 'Marketplace, Academy and Creator Center', body: 'Turn marketing knowledge into tradable assets, certified learning paths, creator packs and challenge submissions.', points: ['Campaign packs', 'Creator rewards', 'Academy tracks'] },
    ],
    featureTitle: 'NovaOS is the product container for NovaStudio.',
    featureBody: 'NovaStudio delivers the front-door trust and service layer. NovaOS holds the repeatable system: tools, templates, Academy, marketplace assets, creator economy and customer growth data.',
    featurePoints: ['Brand Brain and customer records', 'AI Campaign Builder for 30-day campaigns', 'Marketplace assets and creator packs', 'Academy and challenge workflows'],
    processTitle: 'How a NovaOS workflow operates.',
    process: [
      { kicker: '01', title: 'Build Brand Brain', body: 'Collect product information, customer profile, tone, selling points, competitors and restricted wording.' },
      { kicker: '02', title: 'Create campaign strategy', body: 'Generate positioning, campaign theme, core message, channel plan, CTA and KPI checklist.' },
      { kicker: '03', title: 'Generate assets and lead path', body: 'Create posts, scripts, emails, landing copy, lead magnet, form copy and follow-up sequence.' },
      { kicker: '04', title: 'Review growth loop', body: 'Use dashboard logic, customer records and performance signals to improve the next campaign cycle.' },
    ],
    faqTitle: 'Product questions.',
    faqs: [['Why does the NovaOS entry show an update message?', 'The public interface is being updated. The website still presents NovaOS as the core system and routes users through the special NovaOS entry.'], ['Is NovaOS just an AI writing tool?', 'No. The product architecture starts from business goals and connects strategy, content, channels, leads and review.'], ['Can we add templates and creator assets?', 'Yes. Marketplace assets, campaign packs, positioning packs, playbooks and creator packs are part of the NovaOS ecosystem.'], ['Can this connect to CRM and customer records?', 'Yes. Customer records and the AI assistant interface are structured for CRM and database integration.']],
    ctaTitle: 'Design your first NovaOS marketing workflow.',
    ctaBody: 'Start with one business goal, one target customer and one conversion path. NovaStudio can translate it into NovaOS-ready operating modules.',
    ctaLabel: 'Book a product strategy call',
  },
  zh: {
    eyebrow: '产品与服务', title: 'NovaOS 的 AI 营销运营产品模块。', body: 'NovaOS 是 NovaStudio 背后的操作系统。它把策略、品牌记忆、活动策划、内容生成、GEO/AEO、线索获取、合规感文案和增长复盘整合成一套模块化营销工作流。', badges: ['NovaOS 核心', 'AI 活动构建器', '品牌大脑', '增长仪表盘'], metrics: [['8+', '产品模块'], ['30+', '工作流模板'], ['4', '语言市场'], ['6', '运营层'], ['24/7', 'AI 助手接口'], ['Global', '全球增长准备']],
    cardsTitle: '围绕营销运营周期搭建的产品模块。', cardsBody: '每个模块都对应真实增长工作流的一环。组合起来，NovaOS 不只是内容生成器，而是营销执行的操作层。',
    cards: [
      { kicker: '策略层', title: '品牌大脑', body: '结构化管理品牌定位、合规话术、受众、offer、语气、竞品和不同市场表达。', points: ['品牌记忆', '话术库', '受众地图'] },
      { kicker: '活动层', title: 'AI 活动构建器', body: '从业务目标、产品、目标客户、行业、平台和营销目标生成完整 campaign。', points: ['活动主题', '30 天内容日历', 'KPI 清单'] },
      { kicker: '生产层', title: '内容引擎', body: '从一个 brief 生成 LinkedIn、X、Instagram、blog、视频脚本、邮件和落地页文案。', points: ['帖子', '视频脚本', '邮件序列'] },
      { kicker: '转化层', title: '线索获取工具包', body: '把内容连接到 lead magnet、表单、WhatsApp/Telegram 引导、预约咨询和销售跟进。', points: ['Lead magnet', '表单', '跟进序列'] },
      { kicker: '发现层', title: 'GEO / AEO 引擎', body: '生成 AI 搜索友好的 FAQ、对比页、权威文章和品牌实体内容。', points: ['FAQ 集群', '对比页面', '权威内容'] },
      { kicker: '信任层', title: '合规文案检查', body: '提示金融、Web3、支付、交易、医疗等敏感行业中的高风险表达。', points: ['风险表达', '更稳妥措辞', '敏感行业支持'] },
      { kicker: '复盘层', title: '增长仪表盘', body: '展示内容计划、发布状态、线索、CTA 表现和每周优化建议。', points: ['内容状态', '线索视图', '优化清单'] },
      { kicker: '生态层', title: '市场、学院与创作者中心', body: '把营销知识变成可交易资产、认证课程、创作者包和挑战赛作品。', points: ['Campaign packs', '创作者奖励', '学院轨道'] },
    ],
    featureTitle: 'NovaOS 是 NovaStudio 的产品容器。', featureBody: 'NovaStudio 负责企业级前门、信任和服务交付；NovaOS 承载可重复系统：工具、模板、学院、市场资产、创作者经济和客户增长数据。', featurePoints: ['品牌大脑与客户记录', '30 天 campaign 活动构建器', '市场资产与创作者包', '学院与挑战赛工作流'],
    processTitle: 'NovaOS 工作流如何运转。', process: [{ kicker: '01', title: '建立品牌大脑', body: '收集产品信息、客户画像、语气、卖点、竞品和禁用表达。' }, { kicker: '02', title: '生成活动策略', body: '生成定位、活动主题、核心信息、渠道计划、CTA 和 KPI 清单。' }, { kicker: '03', title: '生成资产与线索路径', body: '创建帖子、脚本、邮件、落地页文案、lead magnet、表单和跟进序列。' }, { kicker: '04', title: '复盘增长循环', body: '通过 dashboard、客户记录和表现信号优化下一轮 campaign。' }],
    faqTitle: '产品常见问题。', faqs: [['为什么进入 NovaOS 会显示更新中？', '当前公开入口正在更新。官网仍然把 NovaOS 作为核心系统展示，并通过特殊入口引导用户。'], ['NovaOS 只是 AI 写作工具吗？', '不是。NovaOS 从业务目标出发，连接策略、内容、渠道、线索和复盘。'], ['可以添加模板和创作者资产吗？', '可以。市场资产、campaign pack、定位包、playbook 和创作者包都是 NovaOS 生态的一部分。'], ['可以连接 CRM 和客户记录吗？', '可以。客户记录和 AI 助手接口按 CRM 与数据库集成方向设计。']],
    ctaTitle: '设计你的第一个 NovaOS 营销工作流。', ctaBody: '从一个业务目标、一个目标客户和一条转化路径开始，NovaStudio 可以把它转化为 NovaOS-ready 运营模块。', ctaLabel: '预约产品策略沟通',
  },
  ja: null,
  ko: null,
} as const;

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const { lang } = useLanguage();
  const page = (copy[lang] ?? copy.en) || copy.en;

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={modalOpen ? () => undefined : openModal} />
      <DeepPageTemplate copy={page} onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
