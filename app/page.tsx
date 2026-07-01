'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { BulletList, Card, FinalCTA, Hero, NovaEntry, Section, data } from '@/components/Sections';

export default function Home() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  return (
    <main className="min-h-screen overflow-hidden bg-nova-black text-white">
      <Navbar onModal={openModal} />
      <Hero onModal={openModal} />
      <Section id="what" eyebrow="What we do" title="From Content Production to AI-Powered Marketing Operations"><p className="mb-8 max-w-4xl text-lg leading-8 text-slate-300">NovaStudio is not just an AI video or creative studio. We help businesses build repeatable marketing execution systems through AI workflows, content systems, campaign planning, lead generation, and business growth strategy.</p><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{data.what.map(([title,text])=><Card key={title} title={title} text={text}/>)}</div></Section>
      <NovaEntry onModal={openModal} />
      <Section id="products" eyebrow="Product ecosystem" title="One Ecosystem for AI Marketing Execution"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{data.products.map(([title,text])=><Card key={title} title={title} text={text}/>)}</div></Section>
      <Section id="solutions" eyebrow="Industries" title="Built for High-Growth and Compliance-Sensitive Industries"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{data.solutions.map(([title,text])=><Card key={title} title={title} text={text}/>)}</div></Section>
      <Section id="marketplace" eyebrow="Creator economy" title="Marketing Knowledge Should Become Tradable Assets"><p className="mb-8 max-w-4xl text-lg leading-8 text-slate-300">NovaOS will not only be a tool. It will also become a marketing asset marketplace where creators can publish campaign templates, content packs, positioning frameworks, funnel templates, GEO/AEO kits, and industry playbooks. Businesses will be able to buy, redeem, customize, and apply these assets inside NovaOS.</p><BulletList items={data.market}/></Section>
      <Section id="academy" eyebrow="Academy and community" title="Learn, Compete, and Grow with the NovaOS Ecosystem"><div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><BulletList items={['NovaOS Academy','Beginner-to-master learning paths','AI marketing certifications','Monthly marketing case competitions','Creator leaderboard','Business growth challenges','Tutorials and playbooks']}/><div className="rounded-3xl border border-white/10 bg-white/[.05] p-8"><p className="text-sm uppercase tracking-[0.28em] text-blue-300">Example challenge</p><h3 className="mt-4 text-3xl font-semibold">NovaOS 7-Day AI Marketing Challenge</h3><p className="mt-4 leading-7 text-slate-300">Participants use NovaOS to build a 30-day campaign for a real or sample business.</p></div></div></Section>
      <Section id="why" eyebrow="Why NovaStudio" title="AI Speed. Human Strategy. Business Growth."><BulletList items={data.why}/></Section>
      {/* Replace this section with a production video/demo embed or product screenshot when assets are ready. */}
      <FinalCTA onModal={openModal} />
      <Footer onModal={openModal} />
      <MaintenanceModal open={modal} onClose={() => setModal(false)} />
    </main>
  );
}
