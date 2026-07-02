import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

type CardContent = [title: string, text: string];

type ActionButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export const content = {
  what: [
    ['AI Content Engine', 'Generate social posts, articles, short video scripts, product explainers, email copy, and brand content.'],
    ['AI Campaign Engine', 'Plan complete marketing campaigns with content calendars, landing pages, email sequences, and distribution plans.'],
    ['AI Growth System', 'Connect content with lead capture, follow-up workflows, CRM structure, and performance reporting.'],
    ['Compliance-Aware Communication', 'Help fintech, Web3, payment, trading, and regulated businesses communicate clearly without risky overpromising.'],
  ] satisfies CardContent[],
  products: [
    ['Brand Brain', 'Centralize positioning, tone, audience, offers, and approved claims.'],
    ['Campaign Builder', 'Turn growth goals into campaign plans, channels, timelines, and content calendars.'],
    ['Content Engine', 'Draft and adapt articles, posts, scripts, emails, explainers, and brand assets.'],
    ['Lead Capture Kit', 'Create conversion flows, landing page copy, forms, follow-ups, and nurturing logic.'],
    ['GEO / AEO Engine', 'Structure answer-ready content for AI search, GEO, AEO, and SEO discovery.'],
    ['Marketplace', 'Buy and redeem templates, playbooks, funnels, and creator-built assets.'],
    ['Academy', 'Learn AI marketing operations through tutorials, certifications, and challenges.'],
    ['Creator Center', 'Publish assets, enter case challenges, build reputation, and earn rewards.'],
  ] satisfies CardContent[],
  solutions: [
    ['Fintech & Payments', 'Trust-building content, merchant acquisition, user education, and compliance-aware messaging.'],
    ['Web3 & Crypto', 'Product education, onboarding flows, KYC tutorials, community growth, and campaign strategy.'],
    ['AI & B2B SaaS', 'Product explainers, LinkedIn growth, demo content, case studies, and sales enablement.'],
    ['SMEs', 'Affordable AI marketing execution for small teams without a full marketing department.'],
    ['Education & Training', 'Enrollment campaigns, course promotion, student acquisition, and parent communication.'],
    ['Clinics & Local Services', 'Appointment funnels, educational content, review growth, and customer retention.'],
  ] satisfies CardContent[],
  market: [
    'Template Marketplace',
    'Creator Rewards',
    'Points & Credits',
    'Marketing Case Challenges',
    'Certified Creators',
    'Marketplace Commission Model',
  ],
  academy: [
    'NovaOS Academy',
    'Beginner-to-master learning paths',
    'AI marketing certifications',
    'Monthly marketing case competitions',
    'Creator leaderboard',
    'Business growth challenges',
    'Tutorials and playbooks',
  ],
  why: [
    'AI-native marketing workflows',
    'Business-first strategy',
    'Multilingual execution',
    'Compliance-aware communication',
    'Creator marketplace vision',
    'Education and community ecosystem',
    'Built from Singapore for APAC and global businesses',
  ],
};

const dashboardModules = [
  'Brand Brain',
  'Campaign Builder',
  'Content Engine',
  'Lead Capture Kit',
  'Growth Dashboard',
  'Marketplace',
  'Academy',
];

export function ActionButton({ children, href, onClick, variant = 'primary' }: ActionButtonProps) {
  const className =
    variant === 'primary'
      ? 'rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:opacity-90'
      : 'rounded-full border border-white/15 bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200';

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function Hero({ onModal }: { onModal: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-radial-grid pt-32 nova-grid">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-12 lg:grid-cols-[1fr_.92fr] lg:px-8">
        <div className="relative z-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            AI-native marketing operations
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
            AI Marketing Operating System for High-Growth Businesses
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            NovaStudio helps companies automate content production, campaign execution, customer acquisition,
            multilingual localization, GEO/SEO, and brand growth through AI-powered marketing workflows.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ActionButton onClick={onModal}>Explore NovaOS</ActionButton>
            <ActionButton href="#contact" variant="secondary">
              Book a Strategy Call
            </ActionButton>
          </div>
        </div>

        {/* Replace this dashboard placeholder with real NovaOS screenshots or a product demo video later. */}
        <div className="relative z-10 rounded-[2rem] border border-white/15 bg-white/[.06] p-4 shadow-glow backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#070b14] p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-300">NovaOS Command Preview</span>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Placeholder UI</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {dashboardModules.map((module, index) => (
                <div
                  key={module}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.09] to-white/[.025] p-4 transition hover:-translate-y-1 hover:border-blue-400/50"
                >
                  <div className="mb-5 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-transparent" />
                  <p className="font-semibold">{module}</p>
                  <p className="mt-1 text-sm text-slate-400">AI workflow module {String(index + 1).padStart(2, '0')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[.07]">
      <Sparkles className="mb-5 text-blue-300 opacity-70 transition group-hover:opacity-100" size={20} />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

export function NovaEntry({ onModal }: { onModal: () => void }) {
  return (
    <Section id="novaos" eyebrow="Command center" title="Enter NovaOS">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <p className="text-lg leading-8 text-slate-300">
          NovaOS will be the AI marketing command center where businesses can plan campaigns, generate content, buy proven
          marketing assets, learn from creators, and track growth in one ecosystem.
        </p>
        <button
          type="button"
          onClick={onModal}
          className="group rounded-[2rem] border border-white/15 bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-white/[.05] p-10 text-left shadow-glow transition hover:-translate-y-1 hover:border-blue-300/50"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-blue-200">Future product entry</span>
          <span className="mt-6 flex items-center justify-between text-4xl font-semibold">
            Enter NovaOS <ArrowRight className="transition group-hover:translate-x-2" />
          </span>
        </button>
      </div>
    </Section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4">
          <CheckCircle2 className="shrink-0 text-blue-300" size={20} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function FinalCTA({ onModal }: { onModal: () => void }) {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/15 bg-gradient-to-br from-blue-600/25 via-violet-600/20 to-white/[.04] p-10 text-center shadow-glow md:p-16">
        <h2 className="text-4xl font-semibold md:text-6xl">Build Your AI-Powered Marketing Engine</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you are a startup, SME, fintech company, Web3 project, or B2B brand, NovaStudio helps you move from
          scattered content to repeatable marketing execution.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ActionButton onClick={onModal}>Explore NovaOS</ActionButton>
          <ActionButton href="mailto:hello@novastudio.ai" variant="secondary">
            Book a Strategy Call
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
