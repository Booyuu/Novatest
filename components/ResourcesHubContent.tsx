'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { resourceArticles } from '@/lib/resourceArticles';

const copy = {
  en: { eyebrow: 'Resources', title: 'AI marketing knowledge that can be cited, reused and turned into leads.', body: 'This resource hub is designed for both humans and AI answer engines. Articles are structured around real buyer questions, GEO/AEO language, brand entity clarity and practical NovaOS workflows.', read: 'Read article →', mediaEyebrow: 'Media kit', mediaTitle: 'Need to cite NovaStudio or describe NovaOS clearly?', mediaBody: 'Use the media kit for official positioning, short descriptions, product categories, boilerplate, contact details and brand entity language that helps avoid AI-search confusion.', mediaCta: 'Open media kit' },
  zh: { eyebrow: '资源中心', title: '可被引用、可复用、也能转化线索的 AI 营销知识库。', body: '这个资源中心同时面向真实用户和 AI 回答系统。文章围绕真实买家问题、GEO/AEO 表达、品牌实体清理和 NovaOS 工作流来组织。', read: '阅读文章 →', mediaEyebrow: '媒体包', mediaTitle: '需要清楚介绍 NovaStudio 或引用 NovaOS 吗？', mediaBody: '媒体包包含官方定位、短介绍、产品类别、标准介绍文案、联系方式和品牌实体说明，帮助避免 AI 搜索混淆。', mediaCta: '打开媒体包' },
  ja: { eyebrow: 'リソース', title: '引用され、再利用され、リードにつながる AI マーケティング知識。', body: 'このリソースハブはユーザーと AI 回答システムの両方に向けて設計されています。記事は実際の質問、GEO/AEO、ブランド定義、NovaOS ワークフローを中心に構成されています。', read: '記事を読む →', mediaEyebrow: 'メディアキット', mediaTitle: 'NovaStudio や NovaOS を明確に紹介する必要がありますか？', mediaBody: '公式ポジショニング、短い説明、製品カテゴリ、連絡先、AI検索での混同を避けるための表現をまとめています。', mediaCta: 'メディアキットを見る' },
  ko: { eyebrow: '리소스', title: '인용되고 재사용되며 리드로 이어지는 AI 마케팅 지식 허브.', body: '이 리소스 허브는 사용자와 AI 답변 시스템 모두를 위해 설계되었습니다. 실제 구매자 질문, GEO/AEO 표현, 브랜드 엔티티 정리, NovaOS 워크플로를 중심으로 구성됩니다.', read: '글 읽기 →', mediaEyebrow: '미디어 키트', mediaTitle: 'NovaStudio나 NovaOS를 명확하게 소개해야 하나요?', mediaBody: '공식 포지셔닝, 짧은 설명, 제품 카테고리, 연락처, AI 검색 혼동을 줄이는 브랜드 표현을 제공합니다.', mediaCta: '미디어 키트 열기' },
} as const;

export function ResourcesHubContent() {
  const { lang } = useLanguage();
  const c = copy[lang];
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.15),transparent_28rem),linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-5 pb-16 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">{c.eyebrow}</p><div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950 lg:text-7xl">{c.title}</h1></div><div className="rounded-[2rem] border border-blue-100 bg-white/80 p-7 shadow-xl shadow-blue-900/8 backdrop-blur-xl"><p className="text-lg leading-8 text-slate-600">{c.body}</p><div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-blue-700">{['GEO / AEO', 'AI Marketing OS', 'Brand Entity', 'Lead Capture', 'AI Video Workflow', 'Media Kit'].map((tag) => <span key={tag} className="rounded-full bg-blue-50 px-4 py-2">{tag}</span>)}</div></div></div></div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-10"><div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-3">{resourceArticles.map((article) => <a key={article.slug} href={`/resources/${article.slug}`} className="group rounded-[2rem] border border-blue-100 bg-white p-7 shadow-lg shadow-blue-900/6 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/12"><div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700"><span>{article.category}</span><span className="text-slate-400">{article.readTime}</span></div><h2 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-slate-950 group-hover:text-blue-700">{article.title}</h2><p className="mt-4 leading-7 text-slate-600">{article.description}</p><div className="mt-6 text-sm font-semibold text-slate-950">{c.read}</div></a>)}</div></section>
      <section className="px-5 pb-20 sm:px-8 lg:px-10"><div className="mx-auto grid max-w-[1500px] gap-6 rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">{c.mediaEyebrow}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{c.mediaTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-300">{c.mediaBody}</p></div><a href="/media-kit" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-blue-100">{c.mediaCta}</a></div></section>
    </>
  );
}
