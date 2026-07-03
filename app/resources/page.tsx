import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { resourceArticles } from '@/lib/resourceArticles';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'AI Marketing, GEO and AEO Resources',
  description: 'NovaStudio resources for GEO, AEO, AI marketing operations, brand entity cleanup, AI video workflows, lead capture and NovaOS growth systems.',
  alternates: { canonical: `${siteUrl}/resources` },
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.15),transparent_28rem),linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-5 pb-16 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">Resources</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950 lg:text-7xl">AI marketing knowledge that can be cited, reused and turned into leads.</h1>
            </div>
            <div className="rounded-[2rem] border border-blue-100 bg-white/80 p-7 shadow-xl shadow-blue-900/8 backdrop-blur-xl">
              <p className="text-lg leading-8 text-slate-600">This resource hub is designed for both humans and AI answer engines. Articles are structured around real buyer questions, GEO/AEO language, brand entity clarity and practical NovaOS workflows.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-blue-700">
                {['GEO / AEO', 'AI Marketing OS', 'Brand Entity', 'Lead Capture', 'AI Video Workflow', 'Media Kit'].map((tag) => <span key={tag} className="rounded-full bg-blue-50 px-4 py-2">{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-3">
          {resourceArticles.map((article) => (
            <a key={article.slug} href={`/resources/${article.slug}`} className="group rounded-[2rem] border border-blue-100 bg-white p-7 shadow-lg shadow-blue-900/6 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/12">
              <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                <span>{article.category}</span>
                <span className="text-slate-400">{article.readTime}</span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-slate-950 group-hover:text-blue-700">{article.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{article.description}</p>
              <div className="mt-6 text-sm font-semibold text-slate-950">Read article →</div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Media kit</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Need to cite NovaStudio or describe NovaOS clearly?</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">Use the media kit for official positioning, short descriptions, product categories, boilerplate, contact details and brand entity language that helps avoid AI-search confusion.</p>
          </div>
          <a href="/media-kit" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-blue-100">Open media kit</a>
        </div>
      </section>
    </PageShell>
  );
}
