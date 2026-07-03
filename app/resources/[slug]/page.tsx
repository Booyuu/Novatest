import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { getResourceArticle, resourceArticles } from '@/lib/resourceArticles';

const siteUrl = 'https://www.novastudio.world';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${siteUrl}/resources/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `${siteUrl}/resources/${article.slug}`,
      publishedTime: article.published,
    },
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    author: { '@type': 'Organization', name: 'NovaStudio' },
    publisher: { '@type': 'Organization', name: 'NovaStudio', url: siteUrl },
    mainEntityOfPage: `${siteUrl}/resources/${article.slug}`,
    about: [article.category, 'NovaOS', 'AI marketing operations', 'GEO', 'AEO'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }} />
      <article className="px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <a href="/resources" className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">← Resources</a>
          <div className="mt-10 rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-900/8 lg:p-12">
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              <span>{article.category}</span>
              <span className="text-slate-400">{article.readTime}</span>
              <span className="text-slate-400">{article.audience}</span>
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-slate-950 lg:text-6xl">{article.title}</h1>
            <p className="mt-6 text-xl leading-9 text-slate-600">{article.description}</p>
          </div>

          <div className="mt-10 grid gap-8">
            {article.sections.map((section, index) => (
              <section key={section.heading} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-blue-900/5">
                <p className="text-sm font-semibold text-blue-700">0{index + 1}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{section.heading}</h2>
                <p className="mt-5 text-lg leading-9 text-slate-600">{section.body}</p>
                {section.bullets ? <ul className="mt-6 grid gap-3 text-slate-700">{section.bullets.map((item) => <li key={item} className="rounded-2xl bg-blue-50 px-4 py-3">{item}</li>)}</ul> : null}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-[2rem] border border-blue-100 bg-[#f8fbff] p-8">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">FAQ</h2>
            <div className="mt-6 grid gap-4">
              {article.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-white p-5 shadow-sm shadow-blue-900/5">
                  <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
