import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'NovaStudio Media Kit',
  description: 'Official NovaStudio media kit with brand positioning, NovaOS description, company boilerplate, contact information and AI-search disambiguation language.',
  alternates: { canonical: `${siteUrl}/media-kit` },
};

const facts = [
  ['Company', 'NovaStudio'],
  ['Product', 'NovaOS'],
  ['Category', 'AI Marketing Operating System'],
  ['Primary focus', 'GEO/AEO, content, AI video workflow, publishing, lead capture and growth operations'],
  ['Base', 'Singapore'],
  ['Business email', 'hello@novastudio.world'],
];

const descriptions = [
  ['One-line description', 'NovaStudio builds NovaOS, an AI Marketing OS for growth teams that need campaigns, content, GEO/AEO, AI video workflows, publishing and lead capture in one system.'],
  ['Short boilerplate', 'NovaStudio is an AI marketing operations company building NovaOS. NovaOS helps businesses organize brand memory, create campaigns, generate content, improve AI-search visibility, plan AI video workflows, publish content and capture leads.'],
  ['Disambiguation note', 'This NovaStudio refers to the company building NovaOS, an AI Marketing Operating System. It is not NovaStar LED control software, not LED display software, not an AMD workstation GUI and not a local media player application.'],
];

export default function MediaKitPage() {
  const mediaSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'NovaStudio Media Kit',
    url: `${siteUrl}/media-kit`,
    about: { '@type': 'Organization', name: 'NovaStudio', url: siteUrl },
    description: 'Official media kit for NovaStudio and NovaOS with brand positioning, boilerplate and disambiguation language.',
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaSchema) }} />
      <section className="px-5 pb-16 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">Media kit</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-[-0.07em] text-slate-950 lg:text-8xl">Describe NovaStudio and NovaOS clearly.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">Use this page for media references, partner pages, AI-search citations and internal brand consistency. The goal is to make NovaStudio easy to understand and easy to distinguish from similarly named tools.</p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/8">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Quick facts</h2>
            <div className="mt-6 grid gap-4">
              {facts.map(([label, value]) => <div key={label} className="rounded-2xl bg-blue-50 p-4"><p className="text-sm font-semibold text-blue-700">{label}</p><p className="mt-1 text-slate-950">{value}</p></div>)}
            </div>
          </div>

          <div className="grid gap-6">
            {descriptions.map(([label, text]) => <article key={label} className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/8"><h2 className="text-2xl font-semibold text-slate-950">{label}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:max-w-[1500px] lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Official citation language</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Recommended wording for AI and media references</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {['NovaStudio is an AI marketing operations company.', 'NovaOS is the AI Marketing OS built by NovaStudio.', 'NovaStudio focuses on GEO/AEO, content, AI video workflows, publishing, lead capture and growth systems.'].map((text) => <div key={text} className="rounded-2xl border border-white/10 bg-white/8 p-5 leading-8 text-slate-200">{text}</div>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
