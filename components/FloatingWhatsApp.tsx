'use client';

import { useLanguage } from '@/components/LanguageProvider';

const copy = {
  en: {
    label: 'Contact sales',
    subtitle: 'WhatsApp Business',
    aria: 'Open NovaStudio WhatsApp Business chat',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
  zh: {
    label: '联系销售',
    subtitle: 'WhatsApp Business',
    aria: '打开 NovaStudio WhatsApp Business 聊天',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
  ja: {
    label: '営業に相談',
    subtitle: 'WhatsApp Business',
    aria: 'NovaStudio WhatsApp Business チャットを開く',
    message: 'Hi NovaStudio, I would like to discuss an AI marketing system for my business.',
  },
  ko: {
    label: '영업 문의',
    subtitle: 'WhatsApp Business',
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
      className="group fixed right-5 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center overflow-hidden rounded-full border border-emerald-200 bg-white/95 text-slate-950 shadow-2xl shadow-emerald-900/15 backdrop-blur-xl transition-all duration-300 hover:w-56 hover:-translate-x-1 hover:border-emerald-300 hover:bg-white"
    >
      <span className="relative ml-1.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/25">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 blur-md transition group-hover:opacity-60" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6" aria-hidden="true">
          <path fill="currentColor" d="M16 3.2A12.3 12.3 0 0 0 5.3 21.6L4 28l6.5-1.3A12.3 12.3 0 1 0 16 3.2Zm0 22.3c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8.8.8-3.7-.2-.4A10 10 0 1 1 16 25.5Zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.9.3 1.7.2 2.3.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </span>
      <span className="ml-3 min-w-0 whitespace-nowrap pr-4 opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="block text-sm font-semibold leading-5 text-slate-950">{c.label}</span>
        <span className="block text-xs text-slate-500">{c.subtitle}</span>
      </span>
    </a>
  );
}
