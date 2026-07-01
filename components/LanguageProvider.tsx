'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'zh' | 'ja' | 'ko';

const labels: Record<Lang, string> = {
  en: 'EN',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

export const copy = {
  en: {
    nav: { products: 'Products', solutions: 'Solutions', cases: 'Cases', novaos: 'NovaOS', marketplace: 'Marketplace', academy: 'Academy', resources: 'Resources', company: 'Company', contact: 'Contact', cta: 'Book a Strategy Call' },
    hero: { badge: 'AI application platform for marketing growth', title: 'NovaStudio AI Application Platform', subtitle: 'Cover marketing, sales, service, content, leads and growth operations. Build AI agents and workflows for high-growth businesses.', ask: 'Ask Nova AI anything about your marketing system', quick1: 'Ask about product cases', quick2: 'Ask about growth solutions', quick3: 'Ask about GEO and AI search', demo: 'Book a demo', consult: 'Consult solutions', more: 'Learn more' },
    directory: { eyebrow: 'Website directory', title: 'Choose the business area you want to explore.', subtitle: 'The homepage is now only the front door. Each major section has its own page and can grow into a full website module.' },
    ai: { title: 'Nova AI Assistant', subtitle: 'Placeholder interface. Connect your real AI assistant API later.', input: 'How can NovaStudio help my business grow?', send: 'Send' },
    cta: { eyebrow: 'Action entry', title: 'Build your AI-powered marketing engine', body: 'Move from scattered content to repeatable marketing execution with NovaStudio.', primary: 'Explore NovaOS', secondary: 'Contact NovaStudio' },
    footer: { body: 'NovaStudio is building the AI Marketing OS for high-growth businesses.' },
  },
  zh: {
    nav: { products: '产品与服务', solutions: '行业解决方案', cases: '案例', novaos: 'NovaOS', marketplace: '市场', academy: '学院', resources: '资源', company: '公司', contact: '联系', cta: '立即咨询' },
    hero: { badge: '面向营销增长的 AI 应用平台', title: 'NovaStudio AI 应用平台', subtitle: '覆盖营销、销售、服务、内容、线索和增长运营，为高增长企业搭建 AI Agent 与自动化工作流。', ask: '你可以问 Nova AI 任何营销系统问题', quick1: '咨询产品和案例', quick2: '咨询增长解决方案', quick3: '咨询 GEO 与 AI 搜索', demo: '预约演示', consult: '咨询方案', more: '了解更多' },
    directory: { eyebrow: '网站目录', title: '选择你想了解的业务板块。', subtitle: '首页现在只是门面入口。每个主要栏目都有自己的页面，后续可以扩展成完整网站模块。' },
    ai: { title: 'Nova AI 助手', subtitle: '这是预留接口。后续可接入你自己的真实 AI 助手 API。', input: 'NovaStudio 如何帮助我的业务增长？', send: '发送' },
    cta: { eyebrow: '行动入口', title: '搭建你的 AI 营销增长引擎', body: 'NovaStudio 帮你从零散内容走向可复制的营销执行系统。', primary: '进入 NovaOS', secondary: '联系 NovaStudio' },
    footer: { body: 'NovaStudio 正在打造面向高增长企业的 AI 营销操作系统。' },
  },
  ja: {
    nav: { products: '製品とサービス', solutions: '業界ソリューション', cases: '事例', novaos: 'NovaOS', marketplace: 'マーケット', academy: 'アカデミー', resources: 'リソース', company: '会社情報', contact: 'お問い合わせ', cta: '相談する' },
    hero: { badge: 'マーケティング成長のための AI アプリケーション基盤', title: 'NovaStudio AI アプリケーションプラットフォーム', subtitle: 'マーケティング、営業、サービス、コンテンツ、リード獲得、成長運用を支える AI エージェントとワークフローを構築します。', ask: 'Nova AI にマーケティングについて質問できます', quick1: '製品と事例を相談', quick2: '成長施策を相談', quick3: 'GEO と AI 検索を相談', demo: 'デモを予約', consult: '相談する', more: '詳しく見る' },
    directory: { eyebrow: 'サイトメニュー', title: '知りたい領域を選択してください。', subtitle: 'トップページは入口です。各主要セクションは独立ページとして拡張できます。' },
    ai: { title: 'Nova AI アシスタント', subtitle: '仮のインターフェースです。後で実際の AI API に接続できます。', input: 'NovaStudio は私のビジネス成長にどう役立ちますか？', send: '送信' },
    cta: { eyebrow: 'アクション', title: 'AI マーケティングエンジンを構築する', body: '散発的なコンテンツから再現性のあるマーケティング運用へ移行します。', primary: 'NovaOS を見る', secondary: '問い合わせる' },
    footer: { body: 'NovaStudio は高成長企業向け AI マーケティング OS を構築しています。' },
  },
  ko: {
    nav: { products: '제품 및 서비스', solutions: '산업 솔루션', cases: '사례', novaos: 'NovaOS', marketplace: '마켓플레이스', academy: '아카데미', resources: '리소스', company: '회사', contact: '문의', cta: '상담하기' },
    hero: { badge: '마케팅 성장을 위한 AI 애플리케이션 플랫폼', title: 'NovaStudio AI 애플리케이션 플랫폼', subtitle: '마케팅, 세일즈, 서비스, 콘텐츠, 리드, 성장 운영을 위한 AI 에이전트와 워크플로를 구축합니다.', ask: 'Nova AI에게 마케팅 시스템에 대해 물어보세요', quick1: '제품과 사례 문의', quick2: '성장 솔루션 문의', quick3: 'GEO와 AI 검색 문의', demo: '데모 예약', consult: '솔루션 상담', more: '더 알아보기' },
    directory: { eyebrow: '사이트 디렉토리', title: '확인할 비즈니스 영역을 선택하세요.', subtitle: '홈페이지는 입구입니다. 주요 섹션은 각각 별도 페이지로 확장됩니다.' },
    ai: { title: 'Nova AI 어시스턴트', subtitle: '임시 인터페이스입니다. 나중에 실제 AI API를 연결할 수 있습니다.', input: 'NovaStudio가 우리 비즈니스 성장에 어떻게 도움이 되나요?', send: '보내기' },
    cta: { eyebrow: '액션', title: 'AI 기반 마케팅 엔진 구축', body: '흩어진 콘텐츠를 반복 가능한 마케팅 실행 시스템으로 전환합니다.', primary: 'NovaOS 보기', secondary: '문의하기' },
    footer: { body: 'NovaStudio는 고성장 기업을 위한 AI Marketing OS를 구축하고 있습니다.' },
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
  const [lang, setLang] = useState<Lang>('en');
  const value = useMemo(() => ({ lang, setLang, label: labels[lang], t: copy[lang], labels }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
