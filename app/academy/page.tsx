'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Academy', title: 'Learn, compete and grow inside the NovaOS ecosystem.', body: 'Nova Academy is the education and creator layer of NovaOS. It turns AI marketing knowledge into learning paths, 7-day challenges, certified operator tracks, creator assets and repeatable campaign playbooks.', badges: ['Learning paths', '7-day challenge', 'Certified operators', 'Creator rewards'], metrics: [['4', 'Learning tracks'], ['7-day', 'Challenge format'], ['30+', 'Template topics'], ['Creator', 'Reward layer'], ['Points', 'Credit system'], ['NovaOS', 'Ecosystem layer']],
    cardsTitle: 'Academy tracks.', cardsBody: 'The Academy helps founders, operators, creators and sales teams learn by building real marketing systems, not by watching passive lessons.',
    cards: [{ kicker: 'Track 01', title: 'AI Marketing Operator', body: 'Learn how to use NovaOS to build content systems, campaign plans, lead paths and reporting loops.', points: ['AI workflow', 'Campaign operations', 'Growth dashboard'] }, { kicker: 'Track 02', title: 'GEO and AI Search', body: 'Learn how to structure authority content for search engines and AI answer engines.', points: ['FAQ clusters', 'Comparison pages', 'Answer-ready content'] }, { kicker: 'Track 03', title: 'Creator Template Builder', body: 'Teach creators how to package prompts, playbooks and campaign templates into reusable NovaOS assets.', points: ['Prompt systems', 'Template packs', 'Creator rewards'] }, { kicker: 'Track 04', title: 'Business Growth Challenge', body: 'A 7-day challenge format where users build a complete 30-day marketing campaign with NovaOS.', points: ['Brand Brain', 'Content calendar', 'Lead path'] }, { kicker: 'Community', title: 'Case challenges', body: 'Turn real business problems into challenge briefs that generate templates, cases and social distribution.', points: ['Briefs', 'Submissions', 'Review system'] }, { kicker: 'Certification', title: 'Certified creators', body: 'Recognition for creators who can deliver useful NovaOS-compatible assets and campaign systems.', points: ['Creator profile', 'Asset quality', 'Marketplace readiness'] }],
    featureTitle: 'Marketing knowledge becomes tradable assets.', featureBody: 'Academy is not just education. It feeds the NovaOS marketplace with templates, campaign packs, positioning packs, creator submissions and certified playbooks.', featurePoints: ['Learning paths', 'Challenge missions', 'Creator asset packs', 'Credits and reputation points'],
    processTitle: 'Academy operating model.', process: [{ kicker: 'Learn', title: 'Understand the system', body: 'Study AI marketing concepts through practical examples and templates.' }, { kicker: 'Build', title: 'Create a workflow', body: 'Apply the lesson to a real campaign, content system or lead funnel.' }, { kicker: 'Submit', title: 'Turn work into assets', body: 'Package outputs into templates, playbooks or case submissions.' }, { kicker: 'Grow', title: 'Earn recognition', body: 'Gain creator reputation, certification signals and marketplace visibility.' }],
    faqTitle: 'Academy questions.', faqs: [['What is Nova Academy?', 'Nova Academy is the learning and certification layer of NovaOS.'], ['Can creators participate?', 'Yes. Creators can contribute templates, campaign packs, playbooks and challenge submissions.'], ['Can companies use Academy internally?', 'Yes. Training tracks can become onboarding material for marketing and sales teams.'], ['How does Academy connect to NovaOS?', 'Courses and challenges produce workflows that become NovaOS assets.']],
    ctaTitle: 'Launch a NovaOS learning challenge.', ctaBody: 'A 7-day AI marketing challenge can become a community, content and creator acquisition engine.', ctaLabel: 'Plan Academy launch',
  },
  zh: {
    eyebrow: '学院', title: '在 NovaOS 生态中学习、挑战和增长。', body: 'Nova Academy 是 NovaOS 的教育与创作者层。它把 AI 营销知识变成学习路径、7 天挑战、认证操盘手体系、创作者资产和可复用 campaign playbook。', badges: ['学习路径', '7 天挑战', '认证操盘手', '创作者奖励'], metrics: [['4', '学习轨道'], ['7-day', '挑战形式'], ['30+', '模板主题'], ['Creator', '奖励层'], ['Points', '积分系统'], ['NovaOS', '生态层']],
    cardsTitle: '学院学习轨道。', cardsBody: 'Academy 帮助创始人、运营者、创作者和销售团队通过真实系统学习，而不是只看课程。',
    cards: [{ kicker: '轨道 01', title: 'AI 营销运营者', body: '学习如何用 NovaOS 搭建内容系统、活动计划、线索路径和数据反馈循环。', points: ['AI 工作流', '活动运营', '增长看板'] }, { kicker: '轨道 02', title: 'GEO 与 AI 搜索', body: '学习如何为搜索引擎和 AI 答案引擎构建权威内容。', points: ['FAQ 集群', '对比页面', '答案型内容'] }, { kicker: '轨道 03', title: '创作者模板构建', body: '教创作者把 prompt、playbook 和 campaign 模板打包成 NovaOS 可复用资产。', points: ['Prompt 系统', '模板包', '创作者奖励'] }, { kicker: '轨道 04', title: '业务增长挑战', body: '用户通过 7 天挑战，用 NovaOS 搭建完整 30 天营销活动。', points: ['品牌大脑', '内容日历', '线索路径'] }, { kicker: '社区', title: '案例挑战赛', body: '把真实业务问题变成挑战 brief，产出模板、案例和社媒传播。', points: ['Brief', '提交', '评审系统'] }, { kicker: '认证', title: '认证创作者', body: '识别能交付高质量 NovaOS 兼容资产和 campaign 系统的创作者。', points: ['创作者档案', '资产质量', '市场准备'] }],
    featureTitle: '营销知识变成可交易资产。', featureBody: 'Academy 不只是教育，它会为 NovaOS 市场提供模板、campaign pack、定位包、创作者作品和认证 playbook。', featurePoints: ['学习路径', '挑战任务', '创作者资产包', 'Credits 与声望积分'],
    processTitle: '学院运营模型。', process: [{ kicker: '学习', title: '理解系统', body: '通过实用案例和模板学习 AI 营销概念。' }, { kicker: '搭建', title: '创建工作流', body: '把课程应用到真实 campaign、内容系统或线索漏斗。' }, { kicker: '提交', title: '把成果变成资产', body: '把输出打包成模板、手册或案例提交。' }, { kicker: '增长', title: '获得认可', body: '获得创作者声望、认证信号和市场曝光。' }],
    faqTitle: '学院常见问题。', faqs: [['Nova Academy 是什么？', 'Nova Academy 是 NovaOS 的学习与认证层。'], ['创作者可以参与吗？', '可以。创作者可以贡献模板、campaign pack、playbook 和挑战赛作品。'], ['企业可以内部使用吗？', '可以。学习轨道可以变成市场和销售团队的培训材料。'], ['Academy 如何连接 NovaOS？', '课程和挑战产出的工作流会成为 NovaOS 资产。']],
    ctaTitle: '启动 NovaOS 学习挑战。', ctaBody: '一个 7 天 AI 营销挑战，可以成为社区、内容和创作者获客引擎。', ctaLabel: '规划 Academy 启动',
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
