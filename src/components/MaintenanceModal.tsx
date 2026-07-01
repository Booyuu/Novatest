"use client";

export function MaintenanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="maintenance-title">
      <div className="glass-card relative max-w-xl rounded-3xl p-8 text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-px shadow-lg shadow-blue-500/30">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 text-2xl">✦</div>
        </div>
        <h2 id="maintenance-title" className="text-2xl font-semibold text-white">NovaOS is currently under maintenance.</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">We are building the AI Marketing Operating System for content, campaigns, marketplace assets, creator learning, and business growth. Please check back soon.</p>
        <button onClick={onClose} className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100">Back to NovaStudio</button>
      </div>
    </div>
  );
}
