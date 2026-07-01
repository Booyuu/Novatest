'use client';

import { useLanguage } from '@/components/LanguageProvider';

const entries = [
  { key: 'products', title: 'Products', href: '/products' },
  { key: 'solutions', title: 'Solutions', href: '/solutions' },
  { key: 'cases', title: 'Cases', href: '/cases' },
  { key: 'marketplace', title: 'Marketplace', href: '/marketplace' },
  { key: 'academy', title: 'Academy', href: '/academy' },
  { key: 'company', title: 'Company', href: '/company' },
] as const;

export function HomeDirectory() {
  const { t } = useLanguage();

  return (
    <section id="scenarios" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">{t.directory.eyebrow}</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{t.directory.title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t.directory.subtitle}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((item) => (
            <a key={item.key} href={item.href} className="rounded-[2rem] border border-blue-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{t.nav[item.key]}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-5 text-sm font-semibold text-slate-950">Open page</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
