'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Cases', title: 'Growth systems that show how NovaOS thinking works.', body: 'Cases are not just portfolio items. Each case should prove a repeatable NovaOS workflow: problem, strategy, campaign assets, lead path, customer follow-up and growth review.', badges: ['Case templates', 'System demos', 'NovaOS proof', 'Video-ready'], metrics: [['3', 'Case categories'], ['6+', 'Asset types'], ['4', 'Journey stages'], ['30+', 'Reusable templates'], ['CRM', 'Follow-up logic'], ['GEO', 'Search authority']],
    cardsTitle: 'Case formats for different proof points.', cardsBody: 'Every case should show the problem, workflow, assets delivered, customer journey, outcome signals and which NovaOS modules were used.',
    cards: [{ kicker: 'Fintech', title: 'Merchant acquisition system', body: 'A complete system for educating merchants, explaining payment benefits, collecting leads and routing follow-up.', points: ['Landing page', 'Merchant education', 'Follow-up scripts'] }, { kicker: 'Web3', title: 'User onboarding campaign', body: 'A conversion path for registration, product education, KYC explanation, community distribution and retention messaging.', points: ['Tutorial scripts', 'Mobile UI flow', 'Community assets'] }, { kicker: 'AI SaaS', title: 'Authority content engine', body: 'A GEO-ready content system for explainers, comparison pages, FAQ clusters and sales enablement.', points: ['GEO articles', 'Comparison pages', 'Sales assets'] }, { kicker: 'Local service', title: 'Consultation lead system', body: 'A local demand capture workflow for clinics, education providers and professional services.', points: ['FAQ pages', 'Consultation form', 'WhatsApp routing'] }, { kicker: 'Retail', title: 'Campaign calendar system', body: 'A repeatable launch calendar for promotions, seasonal campaigns, influencer content and retention messages.', points: ['Offer angles', 'Short videos', 'Loyalty messaging'] }, { kicker: 'Enterprise', title: 'B2B narrative system', body: 'A product education and lead generation system for complex B2B, trade and industrial services.', points: ['Buyer education', 'Service explainers', 'Lead scoring'] }],
    featureTitle: 'Cases become NovaOS assets.', featureBody: 'A strong case can become a template, playbook, campaign pack, challenge brief or Academy teaching asset inside the NovaOS ecosystem.', featurePoints: ['Client logo area', 'Video thumbnail area', 'Outcome metrics area', 'Downloadable case PDF area'],
    processTitle: 'Case study structure.', process: [{ kicker: 'Problem', title: 'What blocked growth?', body: 'Define the market, audience, conversion blocker and trust gap.' }, { kicker: 'System', title: 'What did we build?', body: 'Show the workflow, pages, content, campaign logic and follow-up mechanism.' }, { kicker: 'Assets', title: 'What was delivered?', body: 'List scripts, landing pages, articles, templates, emails, dashboards and playbooks.' }, { kicker: 'Outcome', title: 'What changed?', body: 'Add metrics, client feedback, learnings and next-step expansion plan.' }],
    faqTitle: 'Case questions.', faqs: [['Can we publish real client names?', 'Only after client permission. Until then, use anonymized case types.'], ['What proof should we collect?', 'Screenshots, videos, engagement data, conversion data, client feedback and before-after comparisons.'], ['How do cases connect to NovaOS?', 'Each case should map back to NovaOS modules such as Campaign Builder, Content Engine, Lead Capture Kit and GEO/AEO Engine.'], ['Should every project become a case?', 'No. Prioritize projects with clear problem, visible deliverables and measurable outcome.']],
    ctaTitle: 'Turn your project into a NovaOS case asset.', ctaBody: 'Start with a clear business problem and measurable output. NovaStudio can structure the system and convert it into proof content.', ctaLabel: 'Discuss a case project',
  },
  zh: {
    eyebrow: '案例', title: '展示 NovaOS 思维如何落地的增长系统。', body: '案例不只是作品展示。每个案例都应该证明一套可复用 NovaOS 工作流：问题、策略、campaign 资产、线索路径、客户跟进和增长复盘。', badges: ['案例模板', '系统 Demo', 'NovaOS 证明', '视频预留'], metrics: [['3', '案例类别'], ['6+', '资产类型'], ['4', '客户路径阶段'], ['30+', '可复用模板'], ['CRM', '跟进逻辑'], ['GEO', '搜索权威']],
    cardsTitle: '适合不同证明点的案例格式。', cardsBody: '每个案例都应该展示问题、工作流、交付资产、客户路径、结果信号，以及用了哪些 NovaOS 模块。',
    cards: [{ kicker: '金融科技', title: '商户获客系统', body: '面向商户教育、支付价值说明、线索收集和销售跟进的完整系统。', points: ['落地页', '商户教育', '跟进脚本'] }, { kicker: 'Web3', title: '用户注册转化活动', body: '覆盖注册、产品教育、KYC 说明、社群分发和留存沟通的转化路径。', points: ['教程脚本', '移动端流程', '社群素材'] }, { kicker: 'AI SaaS', title: '权威内容引擎', body: '面向解释页、对比页、FAQ 集群和销售赋能的 GEO 内容系统。', points: ['GEO 文章', '对比页面', '销售素材'] }, { kicker: '本地服务', title: '咨询线索系统', body: '适用于诊所、教育和专业服务的本地需求捕获流程。', points: ['FAQ 页面', '咨询表单', 'WhatsApp 分流'] }, { kicker: '零售消费', title: '活动日历系统', body: '用于促销、节日活动、达人内容和会员留存沟通的可重复 launch 日历。', points: ['活动角度', '短视频', '会员沟通'] }, { kicker: '企业服务', title: 'B2B 叙事系统', body: '适用于复杂 B2B、贸易和工业服务的产品教育与线索生成系统。', points: ['买家教育', '服务解释', '线索评分'] }],
    featureTitle: '案例可以变成 NovaOS 资产。', featureBody: '强案例可以进入 NovaOS 生态，变成模板、playbook、campaign pack、挑战赛 brief 或 Academy 教学资产。', featurePoints: ['客户 Logo 区', '视频缩略图区', '结果数据区', '可下载案例 PDF 区'],
    processTitle: '案例内容结构。', process: [{ kicker: '问题', title: '增长卡在哪里？', body: '定义市场、受众、转化阻碍和信任缺口。' }, { kicker: '系统', title: '我们搭建了什么？', body: '展示工作流、页面、内容、活动逻辑和跟进机制。' }, { kicker: '资产', title: '交付了什么？', body: '列出脚本、落地页、文章、模板、邮件、dashboard 和手册。' }, { kicker: '结果', title: '发生了什么变化？', body: '加入数据、反馈、经验总结和下一步扩展计划。' }],
    faqTitle: '案例常见问题。', faqs: [['可以公开真实客户名吗？', '需要客户授权。未授权前建议使用匿名行业案例。'], ['应该收集什么证明？', '截图、视频、互动数据、转化数据、客户反馈和前后对比。'], ['案例如何连接 NovaOS？', '每个案例都要对应到 NovaOS 模块，例如 Campaign Builder、Content Engine、Lead Capture Kit 和 GEO/AEO Engine。'], ['每个项目都要做案例吗？', '不用。优先选择问题清楚、交付可见、结果可衡量的项目。']],
    ctaTitle: '把你的项目变成 NovaOS 案例资产。', ctaBody: '从清楚的问题和可衡量结果开始，NovaStudio 可以搭建系统，并把它转化为证明内容。', ctaLabel: '讨论案例项目',
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
