import { footerLinks } from '@/lib/content';

const modalLabels = ['NovaOS'];
const pagePaths: Record<string, string> = {
  Products: '/products',
  Solutions: '/solutions',
  Cases: '/cases',
  Marketplace: '/marketplace',
  Academy: '/academy',
  Resources: '/resources',
  Company: '/company',
  Contact: '/contact',
};

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="border-t border-blue-100 bg-white px-5 py-12 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xl font-semibold text-slate-950">Nova<span className="text-blue-700">Studio</span></p>
          <p className="mt-4 max-w-sm leading-7 text-slate-600">NovaStudio is building the AI Marketing OS for high-growth businesses.</p>
          <p className="mt-2 max-w-sm leading-7 text-slate-500">NovaStudio 正在打造面向高增长企业的 AI 营销操作系统。</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {footerLinks.map((label) => {
            const isModal = modalLabels.includes(label);
            const href = isModal ? '#' : pagePaths[label] ?? '#';
            return (
              <a
                key={label}
                href={href}
                onClick={(event) => {
                  if (isModal) {
                    event.preventDefault();
                    onOpenModal();
                  }
                }}
                className="text-sm font-medium text-slate-500 transition hover:text-blue-700"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-slate-400">© 2026 NovaStudio. Placeholder social links can be replaced later.</p>
    </footer>
  );
}
