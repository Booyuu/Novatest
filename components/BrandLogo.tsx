const LOGO_SRC = 'data:image/png;base64,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';

type BrandLogoProps = {
  compact?: boolean;
  darkText?: boolean;
};

export function BrandLogo({ compact = false, darkText = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-5">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#0f1b5f] p-3 shadow-xl shadow-blue-950/18">
        <img src={LOGO_SRC} alt="NovaStudio logo" className="block h-auto max-h-11 w-auto max-w-12 object-contain" />
      </span>
      {compact ? null : (
        <span className={`text-3xl font-semibold tracking-tight ${darkText ? 'text-slate-950' : 'text-white'}`}>
          Nova<span className="text-blue-700">Studio</span>
        </span>
      )}
    </div>
  );
}
