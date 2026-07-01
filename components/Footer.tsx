import { footerLinks } from '@/lib/content';

const modalLabels = ['NovaOS', 'Marketplace', 'Academy'];

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          {/* Replace this text logo with the official NovaStudio logo asset later. */}
          <p className="text-xl font-semibold text-white">Nova<span className="text-slate-300">Studio</span></p>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">NovaStudio is building the AI Marketing OS for high-growth businesses.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {footerLinks.map((label) => {
            const isModal = modalLabels.includes(label);
            return (
              <a
                key={label}
                href={isModal ? '#' : '#top'}
                onClick={(event) => {
                  if (isModal) {
                    event.preventDefault();
                    onOpenModal();
                  }
                }}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-slate-500">© 2026 NovaStudio. Placeholder social links can be replaced later.</p>
    </footer>
  );
}
