type BrandLogoProps = {
  compact?: boolean;
  darkText?: boolean;
};

export function BrandLogo({ compact = false, darkText = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-2 shadow-lg shadow-blue-900/20">
        <svg viewBox="0 0 120 92" className="h-full w-full" aria-hidden="true">
          <ellipse cx="60" cy="46" rx="35" ry="33" fill="white" />
          <path d="M10 64 C34 46 72 30 110 22" stroke="white" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M18 66 C45 57 82 38 104 26" stroke="#0b1220" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M24 62 C50 49 78 37 96 31" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      </span>
      {compact ? null : (
        <span className={`text-xl font-semibold tracking-tight ${darkText ? 'text-slate-950' : 'text-white'}`}>
          Nova<span className="text-blue-700">Studio</span>
        </span>
      )}
    </div>
  );
}
