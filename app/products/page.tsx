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
    title: 'The NovaStudio product ecosystem for AI marketing operations.',
    body: 'NovaStudio connects strategy, content, campaigns, GEO, lead capture and customer operation into a modular AI marketing architecture. NovaOS is the future operating system layer; the current product page explains the ecosystem before the full product launch.',
    badges: ['NovaOS Core', 'AI Agents', 'Content Engine', 'CRM-ready'],
    metrics: [['8+', 'Product modules'], ['30+', 'Workflow templates'], ['4', 'Language markets'], ['6', 'Operating layers'], ['24/7', 'Assistant interface'], ['Global', 'Growth-ready']],
    cardsTitle: 'Product modules built around the marketing operating cycle.',
    cardsBody: 'Each module can work alone as a service workflow, or later connect into NovaOS as a reusable product layer.',
    cards: [
      { kicker: 'Strategy layer', title: 'Brand Brain', body: 'A structured brand memory for positioning, approved claims, audience segments, offers, tone and market-specific messaging.', points: ['Brand memory', 'Claim library', 'Audience map'] },
      { kicker: 'Production layer', title: 'Content Engine', body: 'Generate full-funnel content assets from one brief: articles, short-video scripts, social posts, emails, landing copy and localized content.', points: ['Articles', 'Video scripts', 'Email sequences'] },
      { kicker: 'Execution layer', title: 'Campaign Builder', body: 'Plan campaign angles, content calendars, launch checklists, landing-page flows, distribution tasks and creative variants.', points: ['Launch plan', 'Channel calendar', 'Asset checklist'] },
      { kicker: 'Discovery layer', title: 'GEO / AEO Engine', body: 'Prepare pages, FAQs, comparisons and authority content for search engines and AI answer engines.', points: ['AI-search pages', 'FAQs', 'Comparison content'] },
      { kicker: 'Conversion layer', title: 'Lead Capture Kit', body: 'Connect content with offers, forms, scoring, routing and CRM-ready follow-up logic.', points: ['Forms', 'Lead scoring', 'Follow-up flow'] },
      { kicker: 'Operation layer', title: 'CRM Customer Records', body: 'Reserved customer record layer for future database and CRM integration, enabling personalized recommendations and follow-up history.', points: ['Customer notes', 'Lead history', 'Next actions'] },
    ],
    featureTitle: 'NovaOS is the future product container.',
    featureBody: 'The website currently keeps NovaOS as an entry point. Product modules are designed so they can become repeatable software workflows later instead of remaining one-off agency work.',
    featurePoints: ['Modular product architecture', 'Template and marketplace compatibility', 'CRM and database interface reserved', 'Academy and creator layer ready'],
    processTitle: 'How a productized workflow is created.',
    process: [
      { kicker: '01', title: 'Map the growth problem', body: 'Clarify the target market, offer, buyer journey and trust blockers before building any asset.' },
      { kicker: '02', title: 'Create repeatable modules', body: 'Turn the workflow into content blocks, campaign steps, lead logic and data fields.' },
      { kicker: '03', title: 'Package reusable assets', body: 'Convert useful templates, prompts and playbooks into assets that can be reused across clients and industries.' },
      { kicker: '04', title: 'Prepare for NovaOS', body: 'Keep the workflow structured so it can later connect with dashboards, customer records and marketplace assets.' },
    ],
    faqTitle: 'Product questions.',
    faqs: [['Is NovaOS live now?', 'Not yet. NovaOS is kept as a product entry point while the full system is under development.'], ['Can the modules be used before NovaOS launches?', 'Yes. They can be delivered as structured service workflows first, then migrated into productized modules later.'], ['Can we add our own templates?', 'Yes. The future marketplace and academy layers are designed for template assets, creator packs and reusable playbooks.'], ['Can this connect to a CRM?', 'The customer record and assistant interface are reserved for future CRM and database integration.']],
    ctaTitle: 'Design your first AI marketing product workflow.',
    ctaBody: 'Start with one business goal, one target market and one conversion path. NovaStudio can turn it into a structured operating workflow.',
    ctaLabel: 'Book a product strategy call',
  },
  zh: {
    eyebrow: '产品与服务', title: 'NovaStudio AI 营销运营产品生态。', body: 'NovaStudio 把策略、内容、活动、GEO、线索捕获和客户运营连接成模块化 AI 营销架构。NovaOS 是未来的操作系统层；当前产品页先展示整体生态和产品化方向。', badges: ['NovaOS 核心', 'AI 智能体', '内容引擎', 'CRM 预留'], metrics: [['8+', '产品模块'], ['30+', '工作流模板'], ['4', '语言市场'], ['6', '运营层'], ['24/7', 'AI 助手接口'], ['Global', '全球增长准备']],
    cardsTitle: '围绕营销运营周期搭建的产品模块。', cardsBody: '每个模块既可以作为服务工作流独立交付，也可以后续接入 NovaOS，变成可复用的产品层。',
    cards: [
      { kicker: '策略层', title: '品牌大脑', body: '结构化管理品牌定位、合规话术、受众、offer、语气和不同市场的表达方式。', points: ['品牌记忆', '话术库', '受众地图'] },
      { kicker: '生产层', title: '内容引擎', body: '从一个 brief 生成文章、短视频脚本、社媒内容、邮件、落地页文案和本地化内容。', points: ['文章', '视频脚本', '邮件序列'] },
      { kicker: '执行层', title: '活动构建器', body: '规划 campaign 角度、内容日历、上线清单、落地页路径、分发任务和创意变体。', points: ['上线计划', '渠道日历', '素材清单'] },
      { kicker: '发现层', title: 'GEO / AEO 引擎', body: '为搜索引擎和 AI 答案引擎准备页面、FAQ、对比内容和权威内容。', points: ['AI 搜索页面', 'FAQ', '对比内容'] },
      { kicker: '转化层', title: '线索捕获工具', body: '把内容和 offer、表单、评分、分配逻辑、CRM 跟进流程连接起来。', points: ['表单', '线索评分', '跟进流程'] },
      { kicker: '运营层', title: 'CRM 客户记录', body: '为未来数据库和 CRM 连接预留客户记录层，用于个性化建议和跟进历史。', points: ['客户备注', '线索历史', '下一步动作'] },
    ],
    featureTitle: 'NovaOS 是未来的产品容器。', featureBody: '当前官网只保留 NovaOS 入口。所有模块都会按照可产品化的方式设计，避免只停留在一次性的 agency 交付。', featurePoints: ['模块化产品架构', '兼容模板市场', '预留 CRM 与数据库接口', '学院与创作者生态预留'],
    processTitle: '产品化工作流如何形成。', process: [{ kicker: '01', title: '梳理增长问题', body: '先明确目标市场、offer、客户路径和信任阻碍。' }, { kicker: '02', title: '拆成可复用模块', body: '把流程拆成内容块、活动步骤、线索逻辑和数据字段。' }, { kicker: '03', title: '沉淀资产', body: '把模板、prompt 和 playbook 变成可复用资产。' }, { kicker: '04', title: '接入 NovaOS', body: '保持结构化，未来可连接 dashboard、客户记录和市场资产。' }],
    faqTitle: '产品常见问题。', faqs: [['NovaOS 现在上线了吗？', '还没有。当前只保留产品入口，完整系统仍在开发中。'], ['模块可以先用吗？', '可以。可以先作为结构化服务工作流交付，后续再迁移进产品模块。'], ['可以添加自己的模板吗？', '可以。未来市场和学院层会支持模板资产、创作者包和 playbook。'], ['可以连接 CRM 吗？', '客户记录和 AI 助手接口已预留，后续可连接 CRM 与数据库。']],
    ctaTitle: '设计你的第一个 AI 营销产品工作流。', ctaBody: '从一个业务目标、一个目标市场和一条转化路径开始，NovaStudio 可以把它变成结构化运营工作流。', ctaLabel: '预约产品策略沟通',
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
      <Navbar onOpenModal={openModal} />
      <DeepPageTemplate copy={page} onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
