const footerLinks = [
  'Products',
  'Solutions',
  'NovaOS',
  'Marketplace',
  'Academy',
  'Resources',
  'Company',
  'Contact',
  'LinkedIn',
  'X',
  'Instagram',
  'YouTube / Vimeo',
];

const maintenanceLinks = new Set(['NovaOS', 'Marketplace', 'Academy']);

export function Footer({ onModal }: { onModal: () => void }) {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <div className="text-xl font-semibold">
            Nova<span className="text-slate-300">Studio</span>
          </div>
          <p className="mt-4 max-w-sm text-slate-400">
            NovaStudio is building the AI Marketing OS for high-growth businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={maintenanceLinks.has(link) ? '#' : '#top'}
              onClick={(event) => {
                if (maintenanceLinks.has(link)) {
                  event.preventDefault();
                  onModal();
                }
              }}
              className="text-sm text-slate-400 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl text-xs text-slate-500">
        © 2026 NovaStudio. Placeholder website content for the corporate front door.
      </p>
    </footer>
  );
}
