const entries = [
  { title: 'Products', zh: '产品', href: '/products' },
  { title: 'Solutions', zh: '解决方案', href: '/solutions' },
  { title: 'Cases', zh: '案例', href: '/cases' },
  { title: 'Marketplace', zh: '市场', href: '/marketplace' },
  { title: 'Academy', zh: '学院', href: '/academy' },
  { title: 'Company', zh: '公司', href: '/company' },
];

export function HomeDirectory() {
  return (
    <section id="scenarios" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">Website directory / 网站目录</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">A real website structure, not a single long homepage.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Homepage is now the front door. Main topics have their own pages.</p>
        <p className="mt-3 max-w-3xl leading-8 text-slate-500">首页现在只是入口，主要内容已经拆成独立页面。</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((item) => (
            <a key={item.title} href={item.href} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-slate-400 hover:bg-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{item.zh}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-5 text-sm font-semibold text-slate-950">Open page</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
