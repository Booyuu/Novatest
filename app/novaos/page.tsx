import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'NovaOS AI Marketing OS',
  description: 'NovaOS by NovaStudio is an AI Marketing Operating System for Brand Brain, Campaign Builder, GEO/AEO, AI content, AI video workflows, publishing, lead capture and growth dashboards.',
  alternates: { canonical: `${siteUrl}/novaos` },
};

const modules = [
  ['Brand Brain', 'Store positioning, tone, audience, product facts and proof points so every workflow starts from the same memory.'],
  ['Campaign Builder', 'Turn a brief into campaign angles, content calendars, landing copy, offers and KPI checklists.'],
  ['GEO / AEO Engine', 'Create answer-ready pages, FAQ structures, comparison content and brand entity cleanup workflows.'],
  ['Content Engine', 'Generate articles, social posts, short-video scripts, emails and landing content from one strategy layer.'],
  ['AI Video Workflow', 'Plan script, storyboard, voiceover, subtitles, compliance notes and platform cutdowns.'],
  ['Publishing Hub', 'Organize platform-specific assets, scheduling logic and content variations.'],
  ['Lead Capture Kit', 'Connect content to forms, offers, follow-up paths and CRM-ready lead records.'],
  ['Growth Dashboard', 'Track campaigns, content output, GEO progress, leads and operating momentum.'],
];

const steps = [
  ['1', 'Define the business', 'Add brand information, products, target customers, market and positioning.'],
  ['2', 'Build the campaign', 'Generate strategy, content plan, channel plan, landing copy and lead path.'],
  ['3', 'Publish and capture', 'Turn campaign assets into visible pages, posts, videos and lead forms.'],
  ['4', 'Review and improve', 'Use the dashboard to see what should be reused, improved or turned into templates.'],
];

export default function NovaOSPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NovaOS by NovaStudio',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${siteUrl}/novaos`,
    creator: { '@type': 'Organization', name: 'NovaStudio', url: siteUrl },
    description: 'NovaOS is an AI Marketing Operating System for GEO/AEO, content, AI video workflows, publishing, lead capture and growth operations.',
    featureList: modules.map(([name]) => name),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.17),transparent_28rem),radial-gradient(circle_at_82%_8%,rgba(125,92,255,0.14),transparent_30rem),linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-5 pb-20 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">NovaOS by NovaStudio</p>
            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.07em] text-slate-950 lg:text-8xl">The AI Marketing OS for growth teams.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">NovaOS connects brand memory, GEO/AEO, campaign planning, AI content, AI video workflow, publishing, lead capture and growth dashboards in one operating layer.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#modules" className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white">Explore modules</a>
              <a href="/contact" className="rounded-full border border-blue-100 bg-white px-6 py-3 font-semibold text-slate-950">Request access</a>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-blue-100 bg-white/85 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
            <div className="rounded-[1.8rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">NovaOS workspace</p><span className="rounded-2xl bg-blue-600 px-4 py-3 font-bold">OS</span></div>
              <div className="mt-8 grid gap-3">
                {['GEO audit active', 'Content queue prepared', 'AI video workflow drafted', 'Lead capture path connected'].map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-4"><span>{item}</span><span className="text-blue-200">0{index + 1}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">Core modules</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate-950">One system for the work between strategy and revenue.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {modules.map(([name, body]) => <article key={name} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/6"><h3 className="text-xl font-semibold text-slate-950">{name}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:max-w-[1500px] lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Workflow</p>
          <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.055em]">How teams use NovaOS</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([number, title, body]) => <div key={number} className="rounded-[1.8rem] border border-white/10 bg-white/8 p-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">{number}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{body}</p></div>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
