'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const modalCopy = {
  en: {
    eyebrow: 'NovaOS access',
    title: 'Sign in to NovaOS',
    body: 'Use NovaOS to run GEO audits, generate content, build AI video workflows, publish campaigns, capture leads and manage customer growth.',
    google: 'Continue with Google', apple: 'Continue with Apple', phone: 'Phone number', country: 'Country / region', code: 'Verification code', sendCode: 'Send code', submit: 'Enter NovaOS', close: 'Close',
    terms: 'By continuing, you agree to NovaStudio access terms. This front-end login is ready for a real auth provider integration.',
    progress: 'Access setup', mascotReady: 'Ready when you are', mascotTyping: 'I am following your input', mascotCheck: 'Code looks short', sms: 'SMS verification',
    features: ['GEO / AEO audit', 'Content engine', 'AI video workflow', 'Publishing hub', 'Lead capture CRM'],
  },
  zh: {
    eyebrow: 'NovaOS 入口',
    title: '登录 / 注册 NovaOS',
    body: '进入 NovaOS，完成 GEO 诊断、内容生成、AI 视频工作流、内容发布、线索获取和客户增长管理。',
    google: '使用 Google 登录', apple: '使用 Apple 登录', phone: '手机号', country: '国家 / 地区', code: '验证码', sendCode: '发送验证码', submit: '进入 NovaOS', close: '关闭',
    terms: '继续即代表同意 NovaStudio 访问条款。当前登录界面已按真实鉴权接入方式预留。',
    progress: '访问进度', mascotReady: '准备好了，开始吧', mascotTyping: '我在跟着你的输入看', mascotCheck: '验证码好像还不完整', sms: '短信验证',
    features: ['GEO / AEO 诊断', '内容引擎', 'AI 视频工作流', '内容发布中心', '线索获取 CRM'],
  },
  ja: {
    eyebrow: 'NovaOS access',
    title: 'NovaOS にログイン',
    body: 'NovaOS で GEO 診断、コンテンツ生成、AI 動画ワークフロー、配信、リード獲得を管理します。',
    google: 'Google で続行', apple: 'Apple で続行', phone: '電話番号', country: '国 / 地域', code: '認証コード', sendCode: 'コードを送信', submit: 'NovaOS に入る', close: '閉じる',
    terms: '続行すると NovaStudio のアクセス条件に同意したものとみなされます。',
    progress: 'Access setup', mascotReady: 'Ready when you are', mascotTyping: 'I am following your input', mascotCheck: 'Code looks short', sms: 'SMS verification',
    features: ['GEO / AEO audit', 'Content engine', 'AI video workflow', 'Publishing hub', 'Lead capture CRM'],
  },
  ko: {
    eyebrow: 'NovaOS access',
    title: 'NovaOS 로그인',
    body: 'NovaOS에서 GEO 진단, 콘텐츠 생성, AI 영상 워크플로, 게시, 리드 확보를 관리합니다.',
    google: 'Google로 계속', apple: 'Apple로 계속', phone: '전화번호', country: '국가 / 지역', code: '인증 코드', sendCode: '코드 보내기', submit: 'NovaOS 보기', close: '닫기',
    terms: '계속하면 NovaStudio 접근 약관에 동의하는 것입니다.',
    progress: 'Access setup', mascotReady: 'Ready when you are', mascotTyping: 'I am following your input', mascotCheck: 'Code looks short', sms: 'SMS verification',
    features: ['GEO / AEO audit', 'Content engine', 'AI video workflow', 'Publishing hub', 'Lead capture CRM'],
  },
} as const;

const countries = ['+65 Singapore', '+86 China', '+852 Hong Kong', '+886 Taiwan', '+81 Japan', '+82 Korea', '+1 United States', '+44 United Kingdom', '+61 Australia', '+971 UAE'];

type ActiveField = 'idle' | 'phone' | 'code';

function AuthMascot({ activeField, progress, codeShort, copy }: { activeField: ActiveField; progress: number; codeShort: boolean; copy: (typeof modalCopy)['en'] }) {
  const eyeShift = activeField === 'phone' ? Math.min(6, progress / 9) : activeField === 'code' ? -4 : 0;
  const label = codeShort ? copy.mascotCheck : activeField === 'idle' ? copy.mascotReady : copy.mascotTyping;

  return (
    <div className={`rounded-[1.6rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl ${codeShort ? 'nova-shake' : ''}`}>
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 rounded-[1.6rem] bg-gradient-to-br from-blue-300 via-white to-cyan-200 shadow-2xl shadow-blue-900/20">
          <div className="absolute left-4 top-5 h-4 w-4 rounded-full bg-slate-950 transition-transform duration-300" style={{ transform: `translateX(${eyeShift}px)` }} />
          <div className="absolute right-4 top-5 h-4 w-4 rounded-full bg-slate-950 transition-transform duration-300" style={{ transform: `translateX(${eyeShift}px)` }} />
          <div className="absolute left-1/2 top-12 h-2 w-8 -translate-x-1/2 rounded-full bg-slate-950/80" />
          <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">OS</div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{label}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-300 to-cyan-200 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-slate-300">{copy.progress}: {progress}%</p>
        </div>
      </div>
    </div>
  );
}

export function MaintenanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { lang } = useLanguage();
  const copy = modalCopy[lang];
  const [activeField, setActiveField] = useState<ActiveField>('idle');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const progress = useMemo(() => Math.min(100, Math.round((phone.replace(/\D/g, '').length / 10) * 55 + (code.length / 6) * 45)), [phone, code]);
  const codeShort = code.length > 0 && code.length < 6;

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
      setActiveField('idle');
    };
  }, [open, onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('NovaOS auth provider placeholder. Connect Google, Apple and SMS verification provider here.');
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="novaos-login-title"
        aria-describedby="novaos-login-description"
        className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-2xl shadow-blue-950/25 outline-none lg:grid-cols-[0.95fr_1.05fr]"
      >
        <button type="button" onClick={onClose} className="absolute right-5 top-5 z-10 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label={copy.close}>
          {copy.close}
        </button>

        <div className="relative overflow-hidden bg-slate-950 p-8 text-white lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(37,99,235,0.55),transparent_22rem),radial-gradient(circle_at_80%_76%,rgba(14,165,233,0.35),transparent_24rem)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">{copy.eyebrow}</p>
            <h2 id="novaos-login-title" className="mt-5 text-4xl font-semibold tracking-[-0.055em]">{copy.title}</h2>
            <p id="novaos-login-description" className="mt-5 leading-8 text-slate-300">{copy.body}</p>
            <div className="mt-8"><AuthMascot activeField={activeField} progress={progress} codeShort={codeShort} copy={copy} /></div>
            <div className="mt-7 grid gap-3 text-sm text-slate-200">
              {copy.features.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 lg:p-10">
          <div className="grid gap-3">
            <button type="button" className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg shadow-sm">G</span>
              {copy.google}
            </button>
            <button type="button" className="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700">
              <span className="text-xl"></span>
              {copy.apple}
            </button>
          </div>

          <div className="my-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"><span className="h-px flex-1 bg-slate-200" />{copy.sms}<span className="h-px flex-1 bg-slate-200" /></div>

          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              {copy.country}
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
                {countries.map((country) => <option key={country}>{country}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              {copy.phone}
              <input value={phone} onFocus={() => setActiveField('phone')} onBlur={() => setActiveField('idle')} onChange={(event) => setPhone(event.target.value)} type="tel" inputMode="tel" placeholder="8123 4567" className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
            </label>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                {copy.code}
                <input value={code} maxLength={6} onFocus={() => setActiveField('code')} onBlur={() => setActiveField('idle')} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" placeholder="000000" className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
              </label>
              <button type="button" className="self-end rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">{copy.sendCode}</button>
            </div>
          </div>

          <button type="submit" className="mt-6 w-full rounded-2xl bg-blue-700 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
            {copy.submit}
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">{copy.terms}</p>
        </form>
      </div>
    </div>
  );
}
