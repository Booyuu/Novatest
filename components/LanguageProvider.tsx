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

function getInitialLanguage(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(storageKey);
  return isLang(stored) ? stored : 'en';
}

export const copy = {
  en: {
    nav: { products: 'Products', solutions: 'Solutions', cases: 'Cases', novaos: 'NovaOS', marketplace: 'Marketplace', academy: 'Academy', resources: 'Resources', company: 'Company', contact: 'Contact', cta: 'Book a Strategy Call' },
    hero: { badge: 'AI Marketing OS for high-growth businesses', title: 'NovaStudio AI Marketing OS Platform', subtitle: 'NovaStudio is the front door. NovaOS is the operating layer: Brand Brain, Campaign Builder, Content Engine, Lead Capture Kit, GEO/AEO, Marketplace, Academy and customer growth workflows in one system.', ask: 'Ask Nova AI anything about your marketing system', quick1: 'Ask about NovaOS modules', quick2: 'Ask about growth solutions', quick3: 'Ask about GEO and AI search', demo: 'Enter NovaOS', consult: 'Book strategy call', more: 'Explore solutions' },
    directory: { eyebrow: 'Website directory', title: 'Choose the business area you want to explore.', subtitle: 'NovaStudio is the enterprise front door. NovaOS is the core system behind products, workflows, templates, academy and marketplace assets.' },
    ai: { title: 'Nova AI Assistant', subtitle: 'Customer-record and database-ready assistant interface for NovaOS. Connect the real API and CRM later.', input: 'How can NovaOS help my business grow?', send: 'Send' },
    cta: { eyebrow: 'NovaOS entry', title: 'Build campaigns. Generate content. Capture leads. Grow faster.', body: 'Move from scattered content to a repeatable AI marketing operating system with NovaStudio and NovaOS.', primary: 'Enter NovaOS', secondary: 'Contact NovaStudio' },
    footer: { body: 'NovaStudio is the enterprise front door for NovaOS, the AI Marketing OS for high-growth businesses.' },
  },
  zh: {
    nav: { products: '产品与服务', solutions: '行业解决方案', cases: '案例', novaos: 'NovaOS', marketplace: '市场', academy: '学院', resources: '资源', company: '公司', contact: '联系', cta: '立即咨询' },
    hero: { badge: '面向高增长企业的 AI Marketing OS', title: 'NovaStudio AI Marketing OS 平台', subtitle: 'NovaStudio 是门，NovaOS 是屋。NovaOS 承载品牌大脑、活动构建器、内容引擎、线索获取、GEO/AEO、市场资产、学院和客户增长工作流。', ask: '你可以问 Nova AI 任何营销系统问题', quick1: '咨询 NovaOS 模块', quick2: '咨询增长解决方案', quick3: '咨询 GEO 与 AI 搜索', demo: '进入 NovaOS', consult: '预约策略沟通', more: '查看解决方案' },
    directory: { eyebrow: '网站目录', title: '选择你想了解的业务板块。', subtitle: 'NovaStudio 是企业级前门。NovaOS 是产品、工作流、模板、学院和市场资产背后的核心系统。' },
    ai: { title: 'Nova AI 助手', subtitle: '面向 NovaOS 的客户记录与数据库预留助手界面，后续可连接真实 API 与 CRM。', input: 'NovaOS 如何帮助我的业务增长？', send: '发送' },
    cta: { eyebrow: 'NovaOS 入口', title: '搭建活动，生成内容，捕获线索，更快增长。', body: '通过 NovaStudio 与 NovaOS，把零散内容升级为可复制的 AI 营销操作系统。', primary: '进入 NovaOS', secondary: '联系 NovaStudio' },
    footer: { body: 'NovaStudio 是 NovaOS 的企业级前门；NovaOS 是面向高增长企业的 AI Marketing OS。' },
  },
  ja: {
    nav: { products: '製品とサービス', solutions: '業界ソリューション', cases: '事例', novaos: 'NovaOS', marketplace: 'マーケット', academy: 'アカデミー', resources: 'リソース', company: '会社情報', contact: 'お問い合わせ', cta: '相談する' },
    hero: { badge: '高成長企業向け AI Marketing OS', title: 'NovaStudio AI Marketing OS Platform', subtitle: 'NovaStudio は入口、NovaOS は運用レイヤーです。Brand Brain、Campaign Builder、Content Engine、Lead Capture Kit、GEO/AEO、Marketplace、Academy を一つのシステムで支えます。', ask: 'Nova AI にマーケティングについて質問できます', quick1: 'NovaOS モジュールを相談', quick2: '成長施策を相談', quick3: 'GEO と AI 検索を相談', demo: 'NovaOS に入る', consult: '相談を予約', more: 'ソリューションを見る' },
    directory: { eyebrow: 'サイトメニュー', title: '知りたい領域を選択してください。', subtitle: 'NovaStudio は企業向けの入口であり、NovaOS は製品、ワークフロー、テンプレート、Academy、市場資産の中核です。' },
    ai: { title: 'Nova AI アシスタント', subtitle: 'NovaOS の顧客記録とデータベース接続に対応するアシスタント UI。後で実 API と CRM に接続できます。', input: 'NovaOS は私の事業成長にどう役立ちますか？', send: '送信' },
    cta: { eyebrow: 'NovaOS 入口', title: 'キャンペーンを作り、コンテンツを生成し、リードを獲得する。', body: '散発的なコンテンツから AI マーケティング OS へ移行します。', primary: 'NovaOS に入る', secondary: '問い合わせる' },
    footer: { body: 'NovaStudio は NovaOS の企業向け入口です。NovaOS は高成長企業のための AI Marketing OS です。' },
  },
  ko: {
    nav: { products: '제품 및 서비스', solutions: '산업 솔루션', cases: '사례', novaos: 'NovaOS', marketplace: '마켓플레이스', academy: '아카데미', resources: '리소스', company: '회사', contact: '문의', cta: '상담하기' },
    hero: { badge: '고성장 기업을 위한 AI Marketing OS', title: 'NovaStudio AI Marketing OS Platform', subtitle: 'NovaStudio는 입구이고 NovaOS는 운영 레이어입니다. Brand Brain, Campaign Builder, Content Engine, Lead Capture Kit, GEO/AEO, Marketplace, Academy를 하나의 시스템으로 연결합니다.', ask: 'Nova AI에게 마케팅 시스템에 대해 물어보세요', quick1: 'NovaOS 모듈 문의', quick2: '성장 솔루션 문의', quick3: 'GEO와 AI 검색 문의', demo: 'NovaOS 들어가기', consult: '전략 상담 예약', more: '솔루션 보기' },
    directory: { eyebrow: '사이트 디렉토리', title: '확인할 비즈니스 영역을 선택하세요.', subtitle: 'NovaStudio는 기업용 입구이고 NovaOS는 제품, 워크플로, 템플릿, Academy, 마켓 자산의 핵심 시스템입니다.' },
    ai: { title: 'Nova AI 어시스턴트', subtitle: 'NovaOS 고객 기록과 데이터베이스 연결을 위한 어시스턴트 UI입니다. 이후 실제 API와 CRM에 연결할 수 있습니다.', input: 'NovaOS가 우리 비즈니스 성장에 어떻게 도움이 되나요?', send: '보내기' },
    cta: { eyebrow: 'NovaOS entry', title: '캠페인을 만들고 콘텐츠를 생성하며 리드를 확보하세요.', body: '흩어진 콘텐츠를 반복 가능한 AI 마케팅 운영 시스템으로 전환합니다.', primary: 'NovaOS 보기', secondary: '문의하기' },
    footer: { body: 'NovaStudio는 NovaOS의 기업용 입구입니다. NovaOS는 고성장 기업을 위한 AI Marketing OS입니다.' },
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
  const [lang, setLangState] = useState<Lang>(getInitialLanguage);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    window.localStorage.setItem(storageKey, nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dataset.lang = nextLang;
  };

  useEffect(() => {
    window.localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, label: labels[lang], t: copy[lang], labels }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
