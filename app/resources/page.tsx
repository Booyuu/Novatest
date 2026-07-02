'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Resources', title: 'A knowledge hub for AI-native marketing operations.', body: 'Resources should not be a random blog. This page is structured as a practical knowledge center for AI search, content systems, campaign operations, trust-building and repeatable growth workflows.', badges: ['Playbooks', 'Templates', 'GEO guides', 'Campaign tools'], metrics: [['4', 'Resource pillars'], ['12+', 'Planned guides'], ['30+', 'Template ideas'], ['6', 'Industry tracks'], ['PDF', 'Download-ready'], ['GEO', 'Authority content']],
    cardsTitle: 'Resource pillars.', cardsBody: 'Each resource category should help buyers understand the problem, trust NovaStudio’s approach and take action.',
    cards: [{ kicker: 'Insights', title: 'AI marketing insights', body: 'Thought leadership on AI search, customer acquisition, market positioning and content operations.', points: ['AI search trends', 'GEO strategy', 'Marketing operations'] }, { kicker: 'Tools', title: 'Product tools', body: 'Practical generators, checklists and templates for campaign planning, landing pages and content calendars.', points: ['Brief generator', 'Landing checklist', 'Content calendar'] }, { kicker: 'Playbooks', title: 'Growth playbooks', body: 'Step-by-step guides for Web3 onboarding, fintech trust content, SaaS authority and SME lead capture.', points: ['Web3 playbook', 'Fintech playbook', 'SaaS playbook'] }, { kicker: 'Reports', title: 'White papers and briefs', body: 'Longer-form reports that can support sales conversations, credibility and GEO authority.', points: ['Industry briefs', 'Methodology docs', 'PDF downloads'] }, { kicker: 'Education', title: 'Operator notes', body: 'Short practical notes that teach founders, marketers and sales teams how to use AI workflows.', points: ['How-to notes', 'Examples', 'Checklists'] }, { kicker: 'Assets', title: 'Template marketplace preview', body: 'A future area for reusable campaign templates, content packs, prompt systems and creator assets.', points: ['Templates', 'Prompts', 'Creator packs'] }],
    featureTitle: 'Resources should support sales, not just traffic.', featureBody: 'Every resource should help explain the problem, build authority, capture demand or move a lead closer to a strategy call.', featurePoints: ['Search and AI-answer visibility', 'Sales enablement assets', 'Lead capture downloads', 'Reusable internal playbooks'],
    processTitle: 'Resource production workflow.', process: [{ kicker: 'Plan', title: 'Choose the topic cluster', body: 'Start from buyer questions, AI search gaps and sales objections.' }, { kicker: 'Structure', title: 'Build the asset format', body: 'Decide whether it should be an article, checklist, PDF, template or playbook.' }, { kicker: 'Publish', title: 'Create the conversion path', body: 'Connect the resource with CTA, download, email follow-up or consultation flow.' }, { kicker: 'Reuse', title: 'Turn content into assets', body: 'Break long resources into posts, scripts, FAQs, comparison pages and sales material.' }],
    faqTitle: 'Resource questions.', faqs: [['Should resources be gated?', 'Some can be public for GEO and SEO authority. Deeper templates and PDFs can be used for lead capture.'], ['Can we add Chinese resources?', 'Yes. The content system supports multiple languages and localized resource tracks.'], ['Can resources become marketplace assets?', 'Yes. Strong templates, guides and playbooks can later become NovaOS marketplace assets.'], ['What should we publish first?', 'Start with GEO/AEO, AI marketing workflow, fintech trust content and Web3 onboarding resources.']],
    ctaTitle: 'Build a resource engine, not just a blog.', ctaBody: 'NovaStudio can help turn your expertise into search visibility, sales material and reusable marketing assets.', ctaLabel: 'Plan resource strategy',
  },
  zh: {
    eyebrow: '资源中心', title: '面向 AI 原生营销运营的知识中心。', body: '资源页不应该只是随便放博客。这里应该成为关于 AI 搜索、内容系统、活动运营、信任建设和可复制增长工作流的实用知识中心。', badges: ['增长手册', '模板', 'GEO 指南', '活动工具'], metrics: [['4', '资源支柱'], ['12+', '计划指南'], ['30+', '模板方向'], ['6', '行业轨道'], ['PDF', '可下载'], ['GEO', '权威内容']],
    cardsTitle: '资源支柱。', cardsBody: '每个资源类别都应该帮助客户理解问题、信任 NovaStudio 的方法，并推动下一步行动。',
    cards: [{ kicker: '洞察', title: 'AI 营销洞察', body: '关于 AI 搜索、获客、市场定位和内容运营的观点内容。', points: ['AI 搜索趋势', 'GEO 策略', '营销运营'] }, { kicker: '工具', title: '产品工具', body: '用于 campaign 规划、落地页和内容日历的生成器、检查清单和模板。', points: ['Brief 生成器', '落地页清单', '内容日历'] }, { kicker: '手册', title: '增长手册', body: 'Web3 注册转化、金融科技信任内容、SaaS 权威内容和 SME 线索捕获的步骤指南。', points: ['Web3 手册', 'Fintech 手册', 'SaaS 手册'] }, { kicker: '报告', title: '白皮书与简报', body: '用于销售沟通、可信度建设和 GEO 权威内容的长篇报告。', points: ['行业简报', '方法论文档', 'PDF 下载'] }, { kicker: '教育', title: '运营者笔记', body: '教创始人、市场和销售团队如何使用 AI 工作流的短内容。', points: ['How-to', '案例', '检查清单'] }, { kicker: '资产', title: '模板市场预览', body: '未来可放可复用 campaign 模板、内容包、prompt 系统和创作者资产。', points: ['模板', 'Prompt', '创作者包'] }],
    featureTitle: '资源应该支持销售，而不只是获取流量。', featureBody: '每个资源都应该帮助解释问题、建立权威、捕获需求，或者把线索推向策略沟通。', featurePoints: ['搜索与 AI 答案曝光', '销售赋能资产', '下载线索捕获', '内部可复用手册'],
    processTitle: '资源生产流程。', process: [{ kicker: '规划', title: '选择主题集群', body: '从买家问题、AI 搜索缺口和销售异议开始。' }, { kicker: '结构', title: '确定资产形式', body: '判断它应该是文章、清单、PDF、模板还是 playbook。' }, { kicker: '发布', title: '设计转化路径', body: '把资源连接到 CTA、下载、邮件跟进或咨询流程。' }, { kicker: '复用', title: '把内容变成资产', body: '把长内容拆成帖子、脚本、FAQ、对比页和销售素材。' }],
    faqTitle: '资源常见问题。', faqs: [['资源要不要留资？', '一部分公开，用于 GEO 和 SEO 权威；更深的模板和 PDF 可以用于线索捕获。'], ['可以做中文资源吗？', '可以。内容系统支持多语言和本地化资源轨道。'], ['资源能变成市场资产吗？', '可以。强模板、指南和手册后续可以进入 NovaOS 市场。'], ['先发布什么？', '建议先做 GEO/AEO、AI 营销工作流、金融科技信任内容和 Web3 注册转化资源。']],
    ctaTitle: '搭建资源引擎，而不是普通博客。', ctaBody: 'NovaStudio 可以把你的专业知识转化成搜索曝光、销售素材和可复用营销资产。', ctaLabel: '规划资源策略',
  },
  ja: null,
  ko: null,
} as const;

export default function ResourcesPage() {
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
