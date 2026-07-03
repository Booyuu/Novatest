'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'zh' | 'ja' | 'ko';

const storageKey = 'novastudio-language';

const labels: Record<Lang, string> = {
  en: 'EN',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

function isLang(value: string | null): value is Lang {
  return value === 'en' || value === 'zh' || value === 'ja' || value === 'ko';
}

export const copy = {
  en: {
    nav: { products: 'Products', solutions: 'Solutions', cases: 'Cases', novaos: 'NovaOS', marketplace: 'Marketplace', academy: 'Academy', resources: 'Resources', company: 'Company', contact: 'Contact', cta: 'Book a Strategy Call' },
    hero: {
      badge: 'NovaOS is live for AI marketing operations',
      title: 'NovaOS: AI Marketing OS for Growth Teams',
      subtitle: 'NovaOS helps businesses plan campaigns, generate content, run GEO/AEO optimization, create AI video workflows, capture leads and manage customer growth in one system.',
      ask: 'Ask Nova AI what NovaOS can do for your business',
      quick1: 'Run a GEO audit',
      quick2: 'Create a content plan',
      quick3: 'Build an AI video workflow',
      demo: 'Enter NovaOS',
      consult: 'Talk to Sales',
      more: 'See Use Cases',
    },
    directory: { eyebrow: 'Website directory', title: 'Choose the NovaOS area you want to explore.', subtitle: 'NovaOS covers GEO, content, AI video workflow, publishing, lead capture, dashboard and marketplace systems.' },
    ai: {
      title: 'Nova AI Assistant',
      subtitle: 'Ask about GEO, content, AI video, publishing, lead capture or NovaOS access.',
      input: 'How can NovaOS help my business grow?',
      send: 'Send',
      note: 'Nova AI can guide you to sales, trial access, GEO audit and NovaOS modules.',
    },
    cta: { eyebrow: 'NovaOS access', title: 'Use NovaOS to turn marketing work into a system.', body: 'Plan campaigns, generate content, improve AI search visibility, build video workflows and capture leads with NovaStudio and NovaOS.', primary: 'Enter NovaOS', secondary: 'Contact Sales' },
    footer: { body: 'NovaStudio builds NovaOS, the AI Marketing OS for GEO, content, AI video workflows, publishing and lead capture.' },
  },
  zh: {
    nav: { products: '产品与服务', solutions: '行业解决方案', cases: '案例', novaos: 'NovaOS', marketplace: '市场', academy: '学院', resources: '资源', company: '企业', contact: '联系', cta: '立即咨询' },
    hero: {
      badge: 'NovaOS 已上线：AI 营销运营系统',
      title: 'NovaOS：给增长团队用的 AI Marketing OS',
      subtitle: 'NovaOS 帮企业完成营销活动策划、内容生成、GEO/AEO 优化、AI 视频工作流、线索获取和客户增长管理。用户不需要理解复杂概念，直接进入系统完成营销工作。',
      ask: '直接问 Nova AI：NovaOS 能帮你的业务做什么',
      quick1: '做 GEO 诊断',
      quick2: '生成内容计划',
      quick3: '创建 AI 视频流程',
      demo: '进入 NovaOS',
      consult: '联系销售',
      more: '查看应用场景',
    },
    directory: { eyebrow: '网站目录', title: '选择你想了解的 NovaOS 功能。', subtitle: 'NovaOS 覆盖 GEO、内容、AI 视频工作流、内容发布、线索获取、仪表盘和市场系统。' },
    ai: {
      title: 'Nova AI 助手',
      subtitle: '可以咨询 GEO、内容、AI 视频、内容发布、线索获取或 NovaOS 试用。',
      input: 'NovaOS 如何帮助我的业务增长？',
      send: '发送',
      note: 'Nova AI 可以引导你联系销售、申请试用、做 GEO 诊断或了解 NovaOS 模块。',
    },
    cta: { eyebrow: 'NovaOS 入口', title: '用 NovaOS 把营销工作变成系统。', body: '通过 NovaStudio 与 NovaOS，完成活动策划、内容生成、AI 搜索优化、视频工作流和线索获取。', primary: '进入 NovaOS', secondary: '联系销售' },
    footer: { body: 'NovaStudio 打造 NovaOS：面向 GEO、内容、AI 视频工作流、内容发布和线索获取的 AI Marketing OS。' },
  },
  ja: {
    nav: { products: '製品とサービス', solutions: '業界ソリューション', cases: '事例', novaos: 'NovaOS', marketplace: 'マーケット', academy: 'アカデミー', resources: 'リソース', company: '会社情報', contact: 'お問い合わせ', cta: '相談する' },
    hero: {
      badge: 'NovaOS is live for AI marketing operations',
      title: 'NovaOS: AI Marketing OS for Growth Teams',
      subtitle: 'NovaOS helps teams plan campaigns, create content, improve GEO/AEO visibility, build AI video workflows, capture leads and manage growth in one system.',
      ask: 'Ask Nova AI what NovaOS can do for your business',
      quick1: 'Run a GEO audit',
      quick2: 'Create a content plan',
      quick3: 'Build an AI video workflow',
      demo: 'NovaOS に入る',
      consult: '営業に相談',
      more: 'ユースケースを見る',
    },
    directory: { eyebrow: 'サイトメニュー', title: 'NovaOS の機能を選択してください。', subtitle: 'NovaOS covers GEO, content, AI video workflow, publishing, lead capture, dashboard and marketplace systems.' },
    ai: {
      title: 'Nova AI アシスタント',
      subtitle: 'GEO、コンテンツ、AI 動画、配信、リード獲得、NovaOS アクセスについて質問できます。',
      input: 'NovaOS は私の事業成長にどう役立ちますか？',
      send: '送信',
      note: 'Nova AI can guide you to sales, trial access, GEO audit and NovaOS modules.',
    },
    cta: { eyebrow: 'NovaOS access', title: 'Use NovaOS to turn marketing work into a system.', body: 'Plan campaigns, generate content, improve AI search visibility, build video workflows and capture leads with NovaStudio and NovaOS.', primary: 'NovaOS に入る', secondary: '問い合わせる' },
    footer: { body: 'NovaStudio builds NovaOS, the AI Marketing OS for GEO, content, AI video workflows, publishing and lead capture.' },
  },
  ko: {
    nav: { products: '제품 및 서비스', solutions: '산업 솔루션', cases: '사례', novaos: 'NovaOS', marketplace: '마켓플레이스', academy: '아카데미', resources: '리소스', company: '회사', contact: '문의', cta: '상담하기' },
    hero: {
      badge: 'NovaOS is live for AI marketing operations',
      title: 'NovaOS: AI Marketing OS for Growth Teams',
      subtitle: 'NovaOS helps teams plan campaigns, create content, improve GEO/AEO visibility, build AI video workflows, capture leads and manage growth in one system.',
      ask: 'Ask Nova AI what NovaOS can do for your business',
      quick1: 'Run a GEO audit',
      quick2: 'Create a content plan',
      quick3: 'Build an AI video workflow',
      demo: 'NovaOS 보기',
      consult: '영업 문의',
      more: '사용 사례 보기',
    },
    directory: { eyebrow: '사이트 디렉토리', title: '확인할 NovaOS 기능을 선택하세요.', subtitle: 'NovaOS covers GEO, content, AI video workflow, publishing, lead capture, dashboard and marketplace systems.' },
    ai: {
      title: 'Nova AI 어시스턴트',
      subtitle: 'GEO, 콘텐츠, AI 영상, 게시, 리드 확보, NovaOS 접근에 대해 질문할 수 있습니다.',
      input: 'NovaOS가 우리 비즈니스 성장에 어떻게 도움이 되나요?',
      send: '보내기',
      note: 'Nova AI can guide you to sales, trial access, GEO audit and NovaOS modules.',
    },
    cta: { eyebrow: 'NovaOS access', title: 'Use NovaOS to turn marketing work into a system.', body: 'Plan campaigns, generate content, improve AI search visibility, build video workflows and capture leads with NovaStudio and NovaOS.', primary: 'NovaOS 보기', secondary: '문의하기' },
    footer: { body: 'NovaStudio builds NovaOS, the AI Marketing OS for GEO, content, AI video workflows, publishing and lead capture.' },
  },
} as const;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  label: string;
  t: (typeof copy)[Lang];
  labels: typeof labels;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    window.localStorage.setItem(storageKey, nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dataset.lang = nextLang;
  };

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (isLang(stored)) {
      setLangState(stored);
      document.documentElement.lang = stored;
      document.documentElement.dataset.lang = stored;
      return;
    }
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, label: labels[lang], labels, t: copy[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
