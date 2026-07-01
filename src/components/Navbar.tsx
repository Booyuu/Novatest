"use client";

const links = [
  ["Products", "#products"], ["Solutions", "#solutions"], ["NovaOS", "modal"], ["Marketplace", "modal"],
  ["Academy", "modal"], ["Resources", "#resources"], ["Company", "#why"], ["Contact", "#contact"],
];

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-white">
          {/* Logo placeholder: replace this mark with the final NovaStudio logo asset. */}
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-slate-200 to-purple-500 text-slate-950">N</span>
          <span>NovaStudio</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {links.map(([label, href]) => href === "modal" ? (
            <button key={label} onClick={onOpenModal} className="transition hover:text-white">{label}</button>
          ) : (
            <a key={label} href={href} className="transition hover:text-white">{label}</a>
          ))}
        </div>
        <button onClick={onOpenModal} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">Enter NovaOS</button>
      </nav>
    </header>
  );
}
