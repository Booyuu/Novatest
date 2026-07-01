'use client';

import { useEffect, useRef } from 'react';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MaintenanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.setTimeout(() => dialog?.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialog) return;

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter((element) => !element.hasAttribute('disabled'));
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-md" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="maintenance-title"
        aria-describedby="maintenance-description"
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/15 bg-[#080b13]/95 p-8 shadow-glow outline-none"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-slate-200" />
        <button type="button" onClick={onClose} className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Close maintenance message">
          Close
        </button>
        <p className="eyebrow mb-4">Coming soon</p>
        <h2 id="maintenance-title" className="pr-16 text-3xl font-semibold tracking-tight text-white">NovaOS is currently under maintenance.</h2>
        <p id="maintenance-description" className="mt-5 text-base leading-7 text-slate-300">
          We are building the AI Marketing Operating System for content, campaigns, marketplace assets, creator learning, and business growth. Please check back soon.
        </p>
        <button type="button" onClick={onClose} className="mt-8 w-full rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
          Back to NovaStudio
        </button>
      </div>
    </div>
  );
}
