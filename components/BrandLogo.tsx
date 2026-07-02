type BrandLogoProps = {
  compact?: boolean;
  darkText?: boolean;
};

export function BrandLogo({ compact = false, darkText = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-5">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#0f1b5f] p-3 shadow-xl shadow-blue-950/18">
        <svg viewBox="0 0 140 100" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <ellipse cx="70" cy="52" rx="35" ry="30" fill="white" />
          <path d="M10 66 C38 46 78 31 130 20" stroke="white" strokeWidth="11" strokeLinecap="round" fill="none" />
          <path d="M22 64 C48 54 84 37 118 25" stroke="#0f1b5f" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M42 59 C67 47 91 38 108 32" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      </span>
      {compact ? null : (
        <span className={`text-3xl font-semibold tracking-tight ${darkText ? 'text-slate-950' : 'text-white'}`}>
          Nova<span className="text-blue-700">Studio</span>
        </span>
      )}
    </div>
  );
}
