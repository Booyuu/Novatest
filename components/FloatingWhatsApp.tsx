'use client';

import { useLanguage } from '@/components/LanguageProvider';

const copy = {
  en: {
    label: 'WhatsApp',
    title: 'Business',
    aria: 'Open NovaStudio WhatsApp Business chat',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
  zh: {
    label: 'WhatsApp',
    title: '咨询',
    aria: '打开 NovaStudio WhatsApp Business 聊天',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
  ja: {
    label: 'WhatsApp',
    title: '相談',
    aria: 'NovaStudio WhatsApp Business チャットを開く',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
  ko: {
    label: 'WhatsApp',
    title: '상담',
    aria: 'NovaStudio WhatsApp Business 채팅 열기',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
} as const;

const whatsappBusinessNumber = '6500000000';

export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const href = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(c.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={c.aria}
      className="group fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-2.5 py-3 text-slate-950 shadow-2xl shadow-emerald-900/15 backdrop-blur-xl transition hover:-translate-x-1 hover:border-emerald-300 hover:bg-white sm:right-5"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/25">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 blur-md transition group-hover:opacity-60" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6" aria-hidden="true">
          <path fill="currentColor" d="M16 3.2A12.3 12.3 0 0 0 5.3 21.6L4 28l6.5-1.3A12.3 12.3 0 1 0 16 3.2Zm0 22.3c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8.8.8-3.7-.2-.4A10 10 0 1 1 16 25.5Zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.9.3 1.7.2 2.3.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </span>
      <span className="flex flex-col items-center gap-1 px-0.5 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-600 [writing-mode:vertical-rl]">{c.label}</span>
        <span className="hidden rounded-full bg-emerald-50 px-1.5 py-1 text-[10px] font-semibold text-emerald-700 sm:block [writing-mode:vertical-rl]">{c.title}</span>
      </span>
    </a>
  );
}
