'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const modalCopy = {
  en: {
    eyebrow: 'NovaOS entry',
    title: 'NovaOS is being updated.',
    body: 'NovaOS is the AI Marketing OS behind Brand Brain, Campaign Builder, Content Engine, Lead Capture Kit, GEO/AEO, Marketplace, Academy and customer growth workflows. The public interface is currently being updated. Please check back soon.',
    button: 'Back to NovaStudio',
    close: 'Close',
  },
  zh: {
    eyebrow: 'NovaOS 入口',
    title: 'NovaOS 正在更新中。',
    body: 'NovaOS 是承载品牌大脑、活动构建器、内容引擎、线索获取、GEO/AEO、市场资产、学院和客户增长工作流的 AI Marketing OS。当前公开入口正在更新，请稍后再进入。',
    button: '返回 NovaStudio',
    close: '关闭',
  },
  ja: {
    eyebrow: 'NovaOS 入口',
    title: 'NovaOS は更新中です。',
    body: 'NovaOS は Brand Brain、Campaign Builder、Content Engine、Lead Capture Kit、GEO/AEO、Marketplace、Academy を支える AI Marketing OS です。現在、公開インターフェースを更新中です。',
    button: 'NovaStudio に戻る',
    close: '閉じる',
  },
  ko: {
    eyebrow: 'NovaOS entry',
    title: 'NovaOS가 업데이트 중입니다.',
    body: 'NovaOS는 Brand Brain, Campaign Builder, Content Engine, Lead Capture Kit, GEO/AEO, Marketplace, Academy 및 고객 성장 워크플로를 연결하는 AI Marketing OS입니다. 현재 공개 인터페이스를 업데이트 중입니다.',
    button: 'NovaStudio로 돌아가기',
    close: '닫기',
  },
} as const;

export function MaintenanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { lang } = useLanguage();
  const copy = modalCopy[lang];

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
        <button type="button" onClick={onClose} className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label={copy.close}>
          {copy.close}
        </button>
        <p className="eyebrow mb-4">{copy.eyebrow}</p>
        <h2 id="maintenance-title" className="pr-16 text-3xl font-semibold tracking-tight text-white">{copy.title}</h2>
        <p id="maintenance-description" className="mt-5 text-base leading-7 text-slate-300">{copy.body}</p>
        <button type="button" onClick={onClose} className="mt-8 w-full rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
          {copy.button}
        </button>
      </div>
    </div>
  );
}
