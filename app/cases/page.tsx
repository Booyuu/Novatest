'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Cases', title: 'Growth systems NovaStudio can build and later replace with real client stories.', body: 'This page is structured for future case studies. Before real client logos and metrics are added, it shows the types of systems NovaStudio can deliver: acquisition funnels, onboarding campaigns, GEO engines and customer follow-up workflows.', badges: ['Case templates', 'System demos', 'Future proof points', 'Video-ready'], metrics: [['3', 'Case categories'], ['6+', 'Asset types'], ['4', 'Journey stages'], ['30+', 'Reusable templates'], ['CRM', 'Follow-up logic'], ['GEO', 'Search authority']],
    cardsTitle: 'Case formats for different proof points.', cardsBody: 'Each case should eventually include problem, system design, assets delivered, customer journey, performance metrics and next-step recommendations.',
    cards: [{ kicker: 'Fintech', title: 'Merchant acquisition system', body: 'A complete system for educating merchants, explaining payment benefits, collecting leads and routing follow-up.', points: ['Landing page', 'Merchant education', 'Follow-up scripts'] }, { kicker: 'Web3', title: 'User onboarding campaign', body: 'A conversion path for registration, product education, KYC explanation, community distribution and retention messaging.', points: ['Tutorial scripts', 'Mobile UI flow', 'Community assets'] }, { kicker: 'AI SaaS', title: 'Authority content engine', body: 'A GEO-ready content system for explainers, comparison pages, FAQ clusters and sales enablement.', points: ['GEO articles', 'Comparison pages', 'Sales assets'] }, { kicker: 'Local service', title: 'Consultation lead system', body: 'A local demand capture workflow for clinics, education providers and professional services.', points: ['FAQ pages', 'Consultation form', 'WhatsApp routing'] }, { kicker: 'Retail', title: 'Campaign calendar system', body: 'A repeatable launch calendar for promotions, seasonal campaigns, influencer content and retention messages.', points: ['Offer angles', 'Short videos', 'Loyalty messaging'] }, { kicker: 'Enterprise', title: 'B2B narrative system', body: 'A product education and lead generation system for complex B2B, trade and industrial services.', points: ['Buyer education', 'Service explainers', 'Lead scoring'] }],
    featureTitle: 'Replace placeholders with proof later.', featureBody: 'The structure is ready for screenshots, videos, client quotes, before-after comparisons, campaign data and measurable business outcomes.', featurePoints: ['Client logo area', 'Video thumbnail area', 'Outcome metrics area', 'Downloadable case PDF area'],
    processTitle: 'Case study structure.', process: [{ kicker: 'Problem', title: 'What blocked growth?', body: 'Define the market, audience, conversion blocker and trust gap.' }, { kicker: 'System', title: 'What did we build?', body: 'Show the workflow, pages, content, campaign logic and follow-up mechanism.' }, { kicker: 'Assets', title: 'What was delivered?', body: 'List scripts, landing pages, articles, templates, emails, dashboards and playbooks.' }, { kicker: 'Outcome', title: 'What changed?', body: 'Add metrics, client feedback, learnings and next-step expansion plan.' }],
    faqTitle: 'Case questions.', faqs: [['Can we publish real client names?', 'Only after client permission. Until then, use anonymized case types.'], ['What proof should we collect?', 'Screenshots, videos, engagement data, conversion data, client feedback and before-after comparisons.'], ['Can case pages support video?', 'Yes. The structure is designed for video thumbnails and demo embeds.'], ['Should every project become a case?', 'No. Prioritize projects with clear problem, visible deliverables and measurable outcome.']],
    ctaTitle: 'Turn your project into a strong case study.', ctaBody: 'Start with a clear business problem and measurable output. NovaStudio can structure the system and later convert it into proof content.', ctaLabel: 'Discuss a case project',
  },
  zh: {
    eyebrow: '案例', title: 'NovaStudio 可以搭建的增长系统，后续可替换成真实客户案例。', body: '这个页面先按照未来案例库来搭建。在还没有放真实客户 Logo 和数据前，先展示 NovaStudio 可交付的系统类型：获客漏斗、注册转化、GEO 内容引擎和客户跟进流程。', badges: ['案例模板', '系统 Demo', '未来背书', '视频预留'], metrics: [['3', '案例类别'], ['6+', '资产类型'], ['4', '客户路径阶段'], ['30+', '可复用模板'], ['CRM', '跟进逻辑'], ['GEO', '搜索权威']],
    cardsTitle: '适合不同证明点的案例格式。', cardsBody: '每个案例后续都应该包含问题、系统设计、交付资产、客户路径、效果数据和下一步建议。',
    cards: [{ kicker: '金融科技', title: '商户获客系统', body: '面向商户教育、支付价值说明、线索收集和销售跟进的完整系统。', points: ['落地页', '商户教育', '跟进脚本'] }, { kicker: 'Web3', title: '用户注册转化活动', body: '覆盖注册、产品教育、KYC 说明、社群分发和留存沟通的转化路径。', points: ['教程脚本', '移动端流程', '社群素材'] }, { kicker: 'AI SaaS', title: '权威内容引擎', body: '面向解释页、对比页、FAQ 集群和销售赋能的 GEO 内容系统。', points: ['GEO 文章', '对比页面', '销售素材'] }, { kicker: '本地服务', title: '咨询线索系统', body: '适用于诊所、教育和专业服务的本地需求捕获流程。', points: ['FAQ 页面', '咨询表单', 'WhatsApp 分流'] }, { kicker: '零售消费', title: '活动日历系统', body: '用于促销、节日活动、达人内容和会员留存沟通的可重复 launch 日历。', points: ['活动角度', '短视频', '会员沟通'] }, { kicker: '企业服务', title: 'B2B 叙事系统', body: '适用于复杂 B2B、贸易和工业服务的产品教育与线索生成系统。', points: ['买家教育', '服务解释', '线索评分'] }],
    featureTitle: '后续用真实证明替换占位。', featureBody: '结构已经为截图、视频、客户评价、前后对比、campaign 数据和业务结果预留位置。', featurePoints: ['客户 Logo 区', '视频缩略图区', '结果数据区', '可下载案例 PDF 区'],
    processTitle: '案例内容结构。', process: [{ kicker: '问题', title: '增长卡在哪里？', body: '定义市场、受众、转化阻碍和信任缺口。' }, { kicker: '系统', title: '我们搭建了什么？', body: '展示工作流、页面、内容、活动逻辑和跟进机制。' }, { kicker: '资产', title: '交付了什么？', body: '列出脚本、落地页、文章、模板、邮件、dashboard 和手册。' }, { kicker: '结果', title: '发生了什么变化？', body: '加入数据、反馈、经验总结和下一步扩展计划。' }],
    faqTitle: '案例常见问题。', faqs: [['可以公开真实客户名吗？', '需要客户授权。未授权前建议使用匿名行业案例。'], ['应该收集什么证明？', '截图、视频、互动数据、转化数据、客户反馈和前后对比。'], ['案例页可以放视频吗？', '可以。结构已经为视频缩略图和 demo 嵌入预留。'], ['每个项目都要做案例吗？', '不用。优先选择问题清楚、交付可见、结果可衡量的项目。']],
    ctaTitle: '把你的项目变成强案例。', ctaBody: '从清楚的问题和可衡量结果开始，NovaStudio 可以搭建系统，并把它转化为案例内容。', ctaLabel: '讨论案例项目',
  },
  ja: null,
  ko: null,
} as const;

export default function CasesPage() {
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
