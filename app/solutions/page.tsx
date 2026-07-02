'use client';

import { useState } from 'react';
import { DeepPageTemplate } from '@/components/DeepPageTemplate';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

const copy = {
  en: {
    eyebrow: 'Solutions', title: 'AI marketing systems for every growth scenario.', body: 'NovaStudio does not lock itself into one vertical. The same AI marketing foundation can be adapted to fintech, Web3, SaaS, education, clinics, retail, local services, creators and almost any business that needs content, trust, leads and customer follow-up.', badges: ['20+ industry scenarios', 'APAC-ready', 'Trust-focused', 'GEO-ready'], metrics: [['20+', 'Industry scenarios'], ['6', 'Growth layers'], ['4', 'Languages'], ['30+', 'Workflow templates'], ['24/7', 'Assistant entry'], ['Global', 'Market coverage']],
    cardsTitle: 'Industry solutions designed around how customers decide.', cardsBody: 'Different industries need different trust signals, offers, education content and conversion paths. The system changes by market, but the operating logic stays consistent.',
    cards: [
      { kicker: 'High-trust markets', title: 'Fintech, Payments and Web3', body: 'Build clearer education content, onboarding flows, KYC guidance, merchant acquisition pages and compliance-aware messaging.', points: ['Trust content', 'Onboarding', 'Merchant acquisition'] },
      { kicker: 'B2B growth', title: 'AI, SaaS and professional services', body: 'Create authority content, product explainers, comparison pages, lead magnets and sales enablement assets.', points: ['GEO articles', 'Product pages', 'Sales assets'] },
      { kicker: 'Local demand', title: 'Clinics, education and local services', body: 'Turn local search demand and customer questions into landing pages, FAQs, consultation flows and follow-up scripts.', points: ['Local landing pages', 'FAQ systems', 'Consultation flow'] },
      { kicker: 'Consumer growth', title: 'Retail, F&B and lifestyle brands', body: 'Create campaign calendars, offer pages, influencer scripts, short-video angles and loyalty communication.', points: ['Campaign calendar', 'Offer pages', 'Video scripts'] },
      { kicker: 'Enterprise operations', title: 'Manufacturing, trade and supply chain', body: 'Translate complex services into simple product narratives, buyer education and B2B lead-generation workflows.', points: ['B2B explainers', 'Buyer education', 'Lead routing'] },
      { kicker: 'Creator economy', title: 'Media, creators and knowledge businesses', body: 'Productize knowledge, templates, challenge formats, newsletters and reusable content assets.', points: ['Templates', 'Challenges', 'Creator packs'] },
    ],
    featureTitle: 'One AI operating layer, many industry surfaces.', featureBody: 'The front-end message changes by industry, but the core system remains content → campaign → lead → follow-up → learning loop.', featurePoints: ['Industry-specific messaging', 'Reusable workflow logic', 'Localized language and offer adaptation', 'Customer journey and CRM handoff'],
    processTitle: 'Solution design process.', process: [{ kicker: 'Research', title: 'Understand the buying situation', body: 'Map customer pain, trust blockers, decision points and search behavior.' }, { kicker: 'Structure', title: 'Build the offer and journey', body: 'Design the landing path, content sequence, lead capture and follow-up logic.' }, { kicker: 'Produce', title: 'Create the campaign assets', body: 'Generate pages, posts, scripts, emails, FAQs and explainers.' }, { kicker: 'Operate', title: 'Measure and improve', body: 'Use feedback, conversion data and customer records to refine the system.' }],
    faqTitle: 'Solution questions.', faqs: [['Can NovaStudio work for any industry?', 'In theory yes, as long as the business needs content, acquisition, trust-building and customer follow-up. Some industries need more careful messaging.'], ['Which industries should we focus on first?', 'Fintech, Web3, AI SaaS, SMEs, education, clinics and professional services are strong first markets.'], ['Can we build a custom industry page later?', 'Yes. Each industry card can later become a full solution page.'], ['Can solutions connect to NovaOS?', 'Yes. The solution logic is designed to become reusable NovaOS workflows later.']],
    ctaTitle: 'Map your industry growth system.', ctaBody: 'Tell us your industry, customer type and conversion goal. We will map the right AI marketing workflow.', ctaLabel: 'Book a solutions call',
  },
  zh: {
    eyebrow: '解决方案', title: '面向各类增长场景的 AI 营销系统。', body: 'NovaStudio 不应该被限制在某一个行业。只要业务需要内容、信任、线索和客户跟进，同一套 AI 营销底层能力就可以适配到金融科技、Web3、SaaS、教育、诊所、零售、本地服务、创作者等多种行业。', badges: ['20+ 行业场景', '适配 APAC', '信任建设', 'GEO 准备'], metrics: [['20+', '行业场景'], ['6', '增长层'], ['4', '语言'], ['30+', '工作流模板'], ['24/7', 'AI 助手入口'], ['Global', '市场覆盖']],
    cardsTitle: '围绕客户决策方式设计行业解决方案。', cardsBody: '不同行业需要不同的信任机制、offer、教育内容和转化路径。市场表达会变，但底层运营逻辑保持一致。',
    cards: [{ kicker: '高信任市场', title: '金融科技、支付与 Web3', body: '搭建教育内容、注册路径、KYC 指南、商户获客页面和更稳妥的合规感表达。', points: ['信任内容', '注册转化', '商户获客'] }, { kicker: 'B2B 增长', title: 'AI、SaaS 与专业服务', body: '建立权威内容、产品解释页、对比页、线索磁铁和销售赋能资产。', points: ['GEO 文章', '产品页面', '销售素材'] }, { kicker: '本地需求', title: '诊所、教育与本地服务', body: '把本地搜索需求和客户问题变成落地页、FAQ、咨询流程和跟进脚本。', points: ['本地落地页', 'FAQ 系统', '咨询路径'] }, { kicker: '消费增长', title: '零售、餐饮与生活方式品牌', body: '创建活动日历、offer 页面、达人脚本、短视频角度和会员沟通。', points: ['活动日历', '优惠页面', '视频脚本'] }, { kicker: '企业运营', title: '工业、贸易与供应链', body: '把复杂服务翻译成清晰产品叙事、买家教育和 B2B 线索流程。', points: ['B2B 解释页', '买家教育', '线索分配'] }, { kicker: '创作者经济', title: '媒体、创作者与知识业务', body: '把知识、模板、挑战赛、newsletter 和内容资产产品化。', points: ['模板', '挑战赛', '创作者资产'] }],
    featureTitle: '一套 AI 运营底层，适配多种行业表层。', featureBody: '行业前台表达可以不同，但核心系统始终是内容 → 活动 → 线索 → 跟进 → 学习循环。', featurePoints: ['行业化表达', '可复用工作流', '多语言与 offer 适配', '客户路径与 CRM 交接'],
    processTitle: '解决方案设计流程。', process: [{ kicker: '研究', title: '理解购买场景', body: '梳理客户痛点、信任阻碍、决策节点和搜索行为。' }, { kicker: '结构', title: '设计 offer 与路径', body: '规划落地路径、内容序列、线索捕获和跟进逻辑。' }, { kicker: '生产', title: '创建 campaign 资产', body: '生成页面、帖子、脚本、邮件、FAQ 和解释内容。' }, { kicker: '运营', title: '衡量与优化', body: '根据反馈、转化数据和客户记录持续改进系统。' }],
    faqTitle: '解决方案常见问题。', faqs: [['NovaStudio 可以做任何行业吗？', '理论上可以，只要业务需要内容、获客、信任建设和客户跟进。有些行业需要更谨慎的表达。'], ['优先适合哪些行业？', '金融科技、Web3、AI SaaS、中小企业、教育、诊所和专业服务是比较适合先切入的市场。'], ['后续可以做行业专属页面吗？', '可以。每个行业卡片后续都可以变成完整解决方案页面。'], ['解决方案可以接入 NovaOS 吗？', '可以。解决方案逻辑会按可复用工作流设计，后续可进入 NovaOS。']],
    ctaTitle: '规划你的行业增长系统。', ctaBody: '告诉我们你的行业、客户类型和转化目标，我们会设计对应的 AI 营销工作流。', ctaLabel: '预约解决方案沟通',
  },
  ja: null,
  ko: null,
} as const;

export default function SolutionsPage() {
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
