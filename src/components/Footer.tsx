export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
        <div>
          {/* Logo placeholder: replace text lockup with official footer logo. */}
          <p className="font-semibold text-white">NovaStudio</p>
          <p className="mt-2">AI marketing systems for modern enterprises.</p>
        </div>
        <div className="flex flex-wrap gap-5"><a href="#products">Products</a><a href="#solutions">Solutions</a><a href="#resources">Resources</a><a href="#why">Company</a><a href="#contact">Contact</a></div>
      </div>
    </footer>
  );
}
