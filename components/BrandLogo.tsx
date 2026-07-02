const LOGO_SRC = 'https://www.novastudio.world/favicon.png';

type BrandLogoProps = {
  compact?: boolean;
  darkText?: boolean;
};

export function BrandLogo({ compact = false, darkText = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-5">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] bg-[#0f1b5f] shadow-xl shadow-blue-950/18">
        <img src={LOGO_SRC} alt="NovaStudio logo" className="block h-full w-full object-contain" />
      </span>
      {compact ? null : (
        <span className={`text-3xl font-semibold tracking-tight ${darkText ? 'text-slate-950' : 'text-white'}`}>
          Nova<span className="text-blue-700">Studio</span>
        </span>
      )}
    </div>
  );
}
