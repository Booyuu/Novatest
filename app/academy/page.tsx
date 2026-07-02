'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Academy', title: 'Learn, compete and grow inside the NovaOS ecosystem.', body: 'Academy is the education and creator layer for future NovaOS users. It turns marketing knowledge into guided learning, practical challenges, template assets and creator rewards.', badges: ['Learning paths', 'Challenges', 'Creator rewards', 'Template assets'], metrics: [['4', 'Learning tracks'], ['7-day', 'Challenge format'], ['30+', 'Template topics'], ['Creator', 'Reward layer'], ['Points', 'Credit system'], ['NovaOS', 'Future integration']],
    cardsTitle: 'Academy tracks.', cardsBody: 'The Academy should help founders, operators, creators and sales teams learn by building real marketing systems.',
    cards: [{ kicker: 'Track 01', title: 'AI Marketing Operator', body: 'Learn how to use AI to build content systems, campaign plans, lead paths and reporting loops.', points: ['AI workflow', 'Campaign operations', 'Growth dashboard'] }, { kicker: 'Track 02', title: 'GEO and AI Search', body: 'Learn how to structure authority content for search engines and AI answer engines.', points: ['FAQ clusters', 'Comparison pages', 'Answer-ready content'] }, { kicker: 'Track 03', title: 'Creator Template Builder', body: 'Teach creators how to package prompts, playbooks and campaign templates into reusable assets.', points: ['Prompt systems', 'Template packs', 'Creator rewards'] }, { kicker: 'Track 04', title: 'Business Growth Challenge', body: 'Short challenge formats that help teams build one complete marketing workflow in seven days.', points: ['7-day sprint', 'Case submission', 'Points and credits'] }, { kicker: 'Community', title: 'Case challenges', body: 'Turn real business problems into public or private challenges that generate reusable solutions.', points: ['Briefs', 'Submissions', 'Review system'] }, { kicker: 'Certification', title: 'Certified creators', body: 'A future recognition layer for creators who can deliver useful NovaOS-compatible assets.', points: ['Creator profile', 'Asset quality', 'Marketplace readiness'] }],
    featureTitle: 'Marketing knowledge can become tradable assets.', featureBody: 'Academy is not just courses. It is the future bridge between learning, creator production, template marketplace and NovaOS workflow adoption.', featurePoints: ['Learning paths', 'Challenge missions', 'Creator asset packs', 'Points and rewards'],
    processTitle: 'Academy operating model.', process: [{ kicker: 'Learn', title: 'Understand the system', body: 'Study AI marketing concepts through practical examples and templates.' }, { kicker: 'Build', title: 'Create a workflow', body: 'Apply the lesson to a real campaign, content system or lead funnel.' }, { kicker: 'Submit', title: 'Turn work into assets', body: 'Package outputs into templates, playbooks or case submissions.' }, { kicker: 'Grow', title: 'Earn recognition', body: 'Future creator rewards, certifications and marketplace distribution.' }],
    faqTitle: 'Academy questions.', faqs: [['Is Academy live now?', 'Not yet. It is a planned ecosystem layer and can start as content, challenges and templates.'], ['Can creators participate?', 'Yes. The structure is designed for future creator rewards and template contribution.'], ['Can companies use Academy internally?', 'Yes. Training tracks can become onboarding material for marketing and sales teams.'], ['How does Academy connect to NovaOS?', 'Courses and challenges can produce workflows that later become NovaOS assets.']],
    ctaTitle: 'Build the first NovaOS learning challenge.', ctaBody: 'A 7-day AI marketing challenge can become your first community, content and creator acquisition engine.', ctaLabel: 'Plan Academy launch',
  },
  zh: {
    eyebrow: '学院', title: '在 NovaOS 生态中学习、挑战和增长。', body: 'Academy 是未来 NovaOS 用户的教育与创作者层。它把营销知识变成学习路径、实战挑战、模板资产和创作者奖励。', badges: ['学习路径', '挑战赛', '创作者奖励', '模板资产'], metrics: [['4', '学习轨道'], ['7-day', '挑战形式'], ['30+', '模板主题'], ['Creator', '奖励层'], ['Points', '积分系统'], ['NovaOS', '未来接入']],
    cardsTitle: '学院学习轨道。', cardsBody: 'Academy 应该帮助创始人、运营者、创作者和销售团队通过真实系统学习。',
    cards: [{ kicker: '轨道 01', title: 'AI 营销运营者', body: '学习如何用 AI 搭建内容系统、活动计划、线索路径和数据反馈循环。', points: ['AI 工作流', '活动运营', '增长看板'] }, { kicker: '轨道 02', title: 'GEO 与 AI 搜索', body: '学习如何为搜索引擎和 AI 答案引擎构建权威内容。', points: ['FAQ 集群', '对比页面', '答案型内容'] }, { kicker: '轨道 03', title: '创作者模板构建', body: '教创作者把 prompt、playbook 和 campaign 模板打包成可复用资产。', points: ['Prompt 系统', '模板包', '创作者奖励'] }, { kicker: '轨道 04', title: '业务增长挑战', body: '通过短挑战帮助团队在 7 天内搭建完整营销工作流。', points: ['7 天冲刺', '案例提交', '积分与额度'] }, { kicker: '社区', title: '案例挑战赛', body: '把真实业务问题变成公开或私密挑战，产出可复用方案。', points: ['Brief', '提交', '评审系统'] }, { kicker: '认证', title: '认证创作者', body: '未来用于识别能交付高质量 NovaOS 兼容资产的创作者。', points: ['创作者档案', '资产质量', '市场准备'] }],
    featureTitle: '营销知识可以变成可交易资产。', featureBody: 'Academy 不只是课程，而是学习、创作者生产、模板市场和 NovaOS 工作流采用之间的桥梁。', featurePoints: ['学习路径', '挑战任务', '创作者资产包', '积分与奖励'],
    processTitle: '学院运营模型。', process: [{ kicker: '学习', title: '理解系统', body: '通过实用案例和模板学习 AI 营销概念。' }, { kicker: '搭建', title: '创建工作流', body: '把课程应用到真实 campaign、内容系统或线索漏斗。' }, { kicker: '提交', title: '把成果变成资产', body: '把输出打包成模板、手册或案例提交。' }, { kicker: '增长', title: '获得认可', body: '未来可以连接创作者奖励、认证和市场分发。' }],
    faqTitle: '学院常见问题。', faqs: [['Academy 现在上线了吗？', '还没有。它是规划中的生态层，可以先从内容、挑战赛和模板开始。'], ['创作者可以参与吗？', '可以。结构已经为创作者奖励和模板贡献预留。'], ['企业可以内部使用吗？', '可以。学习轨道可以变成市场和销售团队的培训材料。'], ['Academy 如何连接 NovaOS？', '课程和挑战产出的工作流后续可以变成 NovaOS 资产。']],
    ctaTitle: '设计第一个 NovaOS 学习挑战。', ctaBody: '一个 7 天 AI 营销挑战，可以成为最早的社区、内容和创作者获客引擎。', ctaLabel: '规划 Academy 启动',
  },
  ja: null,
  ko: null,
} as const;

export default function AcademyPage() {
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
