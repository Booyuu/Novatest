'use client';

import { X } from 'lucide-react';

export function MaintenanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#080b13]/95 p-8 shadow-glow">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-slate-200" />
        <button onClick={onClose} className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-slate-300 hover:bg-white/10" aria-label="Close modal">
          <X size={18} />
        </button>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">Coming soon</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white">NovaOS is currently under maintenance.</h2>
        <p className="mt-5 text-base leading-7 text-slate-300">
          We are building the AI Marketing Operating System for content, campaigns, marketplace assets, creator learning, and business growth. Please check back soon.
        </p>
        <button onClick={onClose} className="mt-8 w-full rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
          Back to NovaStudio
        </button>
      </div>
    </div>
  );
}
