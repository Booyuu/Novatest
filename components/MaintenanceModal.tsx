'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const modalCopy = {
  en: {
    eyebrow: 'NovaOS access', title: 'Welcome back!', subtitle: 'Please enter your details', illustrationTitle: 'NovaOS login',
    google: 'Sign in with Google', apple: 'Sign in with Apple', phone: 'Phone number', country: 'Country / region', code: 'Verification code', sendCode: 'Send code', submit: 'Sign in to NovaOS', close: 'Close',
    terms: 'No account yet?', register: 'Create access', remember: 'Remember me', forgot: 'Forgot access?', privacy: 'Privacy', termsLink: 'Terms', connect: 'Connect',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms',
    mascotReady: 'Move your mouse — they will follow', mascotTyping: 'Looking at the input', mascotCover: 'Looking left for privacy', mascotCheck: 'Code looks short',
  },
  zh: {
    eyebrow: 'NovaOS 入口', title: '欢迎回来！', subtitle: '请填写登录信息', illustrationTitle: '登录',
    google: '使用 Google 登录', apple: '使用 Apple 登录', phone: '手机号', country: '国家 / 地区', code: '验证码', sendCode: '发送验证码', submit: '进入 NovaOS', close: '关闭',
    terms: '还没有账号？', register: '立即注册', remember: '记住 30 天', forgot: '忘记权限？', privacy: '隐私政策', termsLink: '服务条款', connect: '接入',
    agreePrefix: '我已阅读并同意', agreeAnd: '和', privacyPolicy: 'NovaStudio 隐私政策', serviceTerms: '服务条款',
    mascotReady: '移动鼠标，他们会跟着看', mascotTyping: '正在看你的输入', mascotCover: '验证码隐私模式，集体看向左边', mascotCheck: '验证码还不完整',
  },
  ja: {
    eyebrow: 'NovaOS access', title: 'おかえりなさい', subtitle: 'ログイン情報を入力してください', illustrationTitle: 'NovaOS login',
    google: 'Google でログイン', apple: 'Apple でログイン', phone: '電話番号', country: '国 / 地域', code: '認証コード', sendCode: 'コードを送信', submit: 'NovaOS に入る', close: '閉じる',
    terms: 'アカウントがありませんか？', register: 'アクセス作成', remember: '30日間記憶', forgot: 'アクセスを忘れた？', privacy: 'Privacy', termsLink: 'Terms', connect: 'Connect',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms',
    mascotReady: 'Move your mouse — they will follow', mascotTyping: 'Looking at the input', mascotCover: 'Looking left for privacy', mascotCheck: 'Code looks short',
  },
  ko: {
    eyebrow: 'NovaOS access', title: '다시 오신 것을 환영합니다', subtitle: '로그인 정보를 입력하세요', illustrationTitle: 'NovaOS login',
    google: 'Google로 로그인', apple: 'Apple로 로그인', phone: '전화번호', country: '국가 / 지역', code: '인증 코드', sendCode: '코드 보내기', submit: 'NovaOS 보기', close: '닫기',
    terms: '계정이 없나요?', register: '접근 만들기', remember: '30일 기억', forgot: '접근을 잊으셨나요?', privacy: 'Privacy', termsLink: 'Terms', connect: 'Connect',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms',
    mascotReady: 'Move your mouse — they will follow', mascotTyping: 'Looking at the input', mascotCover: 'Looking left for privacy', mascotCheck: 'Code looks short',
  },
} as const;

type ModalCopy = (typeof modalCopy)[keyof typeof modalCopy];
const countries = ['+65 Singapore', '+86 China', '+852 Hong Kong', '+886 Taiwan', '+81 Japan', '+82 Korea', '+1 United States', '+44 United Kingdom', '+61 Australia', '+971 UAE'];
type ActiveField = 'idle' | 'phone' | 'code';
type MouseVector = { x: number; y: number };
type EyeMode = 'dark' | 'white';

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function Eye({ side, mode, eyeX, eyeY }: { side: 'left' | 'right'; mode: EyeMode; eyeX: number; eyeY: number }) {
  const sideClass = side === 'left' ? 'left-[29%]' : 'right-[29%]';
  if (mode === 'white') {
    return (
      <span className={`absolute ${sideClass} top-[25%] h-5 w-5 overflow-hidden rounded-full bg-white shadow-sm transition-transform duration-200 ease-out`}>
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 transition-transform duration-200 ease-out" style={{ transform: `translate(calc(-50% + ${eyeX * 0.36}px), calc(-50% + ${eyeY * 0.34}px))` }} />
      </span>
    );
  }

  return <span className={`absolute ${sideClass} top-[27%] h-3.5 w-3.5 rounded-full bg-slate-800 transition-transform duration-200 ease-out`} style={{ transform: `translate(${eyeX * 0.75}px, ${eyeY * 0.55}px)` }} />;
}

function Character({ className, color, height, width, rounded = 'rounded-t-[5rem]', mouseVector, activeField, sad = false, intensity = 1, eyeMode = 'dark' }: { className: string; color: string; height: string; width: string; rounded?: string; mouseVector: MouseVector; activeField: ActiveField; sad?: boolean; intensity?: number; eyeMode?: EyeMode }) {
  const isPhone = activeField === 'phone';
  const isCode = activeField === 'code';
  const eyeX = isCode ? -12 : isPhone ? 8 : mouseVector.x * intensity;
  const eyeY = isCode ? -1 : isPhone ? 1 : mouseVector.y * intensity;
  const bodyX = isCode ? -10 : isPhone ? 5 : mouseVector.x * 0.42 * intensity;
  const bodyY = isCode ? 0 : mouseVector.y * 0.18 * intensity;
  const bodyRotate = isCode ? -5 : isPhone ? 2 : mouseVector.x * 0.32 * intensity;

  return (
    <div className={`absolute bottom-0 ${className}`}>
      <div
        className={`${width} ${height} ${rounded} ${color} relative shadow-xl shadow-slate-900/10 transition-transform duration-300 ease-out`}
        style={{ transform: `translate(${bodyX}px, ${bodyY}px) rotate(${bodyRotate}deg)` }}
      >
        <Eye side="left" mode={eyeMode} eyeX={eyeX} eyeY={eyeY} />
        <Eye side="right" mode={eyeMode} eyeX={eyeX} eyeY={eyeY} />
        <span className={`absolute left-1/2 top-[47%] h-1 w-12 -translate-x-1/2 rounded-full bg-slate-800/80 transition-all duration-300 ${sad ? 'top-[52%] rotate-180' : ''}`} />
      </div>
    </div>
  );
}

function LoginIllustration({ activeField, codeShort, copy, mouseVector }: { activeField: ActiveField; codeShort: boolean; copy: ModalCopy; mouseVector: MouseVector }) {
  const isCode = activeField === 'code';
  const status = codeShort ? copy.mascotCheck : isCode ? copy.mascotCover : activeField === 'phone' ? copy.mascotTyping : copy.mascotReady;

  return (
    <div className="relative hidden min-h-[650px] overflow-hidden bg-[#dedee8] lg:block">
      <div className="absolute left-10 top-10 flex items-center gap-3 text-sm font-semibold text-white/95">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10">✦</span>
        <span>{copy.illustrationTitle}</span>
      </div>

      <div className="absolute left-1/2 top-[50%] h-[29rem] w-[34rem] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-x-10 bottom-0 h-1 rounded-full bg-slate-900/10" />
        <Character className="left-16 z-20" color="bg-[#ffa36f]" height="h-44" width="w-56" mouseVector={mouseVector} activeField={activeField} sad={codeShort} intensity={0.8} eyeMode="dark" />
        <Character className="left-40 z-10 -translate-y-28 rotate-2" color="bg-[#6d43f2]" height="h-80" width="w-52" rounded="rounded-t-3xl" mouseVector={mouseVector} activeField={activeField} sad={codeShort} intensity={1.08} eyeMode="white" />
        <Character className="left-60 z-30 -translate-y-12 rotate-1" color="bg-[#2d2f32]" height="h-64" width="w-44" rounded="rounded-t-xl" mouseVector={mouseVector} activeField={activeField} sad={codeShort} intensity={1} eyeMode="white" />
        <Character className="right-8 z-20 -translate-y-1" color="bg-[#eadf55]" height="h-48" width="w-44" mouseVector={mouseVector} activeField={activeField} sad={codeShort} intensity={0.9} eyeMode="dark" />
      </div>

      <div className={`absolute left-1/2 top-[74%] -translate-x-1/2 rounded-full border border-white/40 bg-white/45 px-5 py-2 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl ${codeShort ? 'nova-shake' : ''}`}>{status}</div>

      <div className="absolute bottom-8 left-10 flex gap-8 text-sm font-medium text-slate-500">
        <a href="/privacy">{copy.privacy}</a>
        <a href="/privacy#terms">{copy.termsLink}</a>
        <a href="/contact">{copy.connect}</a>
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
  const [agreed, setAgreed] = useState(false);
  const [mouseVector, setMouseVector] = useState<MouseVector>({ x: 0, y: 0 });

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
    if (!agreed) return;
    window.alert('NovaOS auth provider placeholder. Connect Google, Apple and SMS verification provider here.');
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 18, -9, 9);
    const y = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 10, -5, 5);
    setMouseVector({ x, y });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 backdrop-blur-md" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="novaos-login-title"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouseVector({ x: 0, y: 0 })}
        className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl shadow-slate-950/30 outline-none lg:grid-cols-[1.08fr_1fr]"
      >
        <button type="button" onClick={onClose} className="absolute right-5 top-5 z-20 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label={copy.close}>{copy.close}</button>

        <LoginIllustration activeField={activeField} codeShort={codeShort} copy={copy} mouseVector={mouseVector} />

        <form onSubmit={handleSubmit} className="flex min-h-[650px] items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-[28rem]">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-8 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-900">✦</div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">{copy.eyebrow}</p>
              <h2 id="novaos-login-title" className="text-3xl font-bold tracking-tight text-slate-950">{copy.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{copy.subtitle}</p>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                {copy.country}
                <select className="border-0 border-b border-slate-200 bg-white px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500">
                  {countries.map((country) => <option key={country}>{country}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                {copy.phone}
                <input value={phone} onFocus={() => setActiveField('phone')} onBlur={() => setActiveField('idle')} onChange={(event) => setPhone(event.target.value)} type="tel" inputMode="tel" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {copy.code}
                  <input value={code} maxLength={6} onFocus={() => setActiveField('code')} onBlur={() => setActiveField('idle')} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
                </label>
                <button type="button" className="self-end rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">{copy.sendCode}</button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-500"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />{copy.remember}</label>
              <a href="#" className="font-semibold text-blue-700">{copy.forgot}</a>
            </div>

            <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-500">
              <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} required className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600" />
              <span>{copy.agreePrefix} <a href="/privacy" className="font-semibold text-blue-700" target="_blank" rel="noreferrer">{copy.privacyPolicy}</a> {copy.agreeAnd} <a href="/privacy#terms" className="font-semibold text-blue-700" target="_blank" rel="noreferrer">{copy.serviceTerms}</a></span>
            </label>

            <button type="submit" disabled={!agreed} className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-slate-950">{copy.submit}</button>

            <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"><span className="h-px flex-1 bg-slate-200" />OR<span className="h-px flex-1 bg-slate-200" /></div>

            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"><span className="text-lg">G</span>{copy.google}</button>
            <button type="button" className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"><span className="text-xl"></span>{copy.apple}</button>

            <p className="mt-8 text-center text-sm text-slate-500">{copy.terms} <a href="#" className="font-semibold text-slate-950">{copy.register}</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
