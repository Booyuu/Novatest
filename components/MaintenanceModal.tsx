'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const modalCopy = {
  en: {
    eyebrow: 'NovaOS access', title: 'Welcome back!', subtitle: 'Please enter your details', illustrationTitle: 'NovaOS',
    leftTitle: 'AI Marketing OS for growth teams',
    leftBody: 'Use NovaOS to turn GEO, content, AI video workflow, publishing and lead capture into one operating system.',
    previewTitle: 'NovaOS workspace', previewBody: 'Campaigns · Content · GEO · Leads',
    google: 'Sign in with Google', apple: 'Sign in with Apple', phone: 'Phone number', country: 'Country / region', code: 'Verification code', sendCode: 'Send code', submit: 'Sign in to NovaOS', close: 'Close',
    terms: 'No account yet?', register: 'Create access', remember: 'Remember me', forgot: 'Forgot access?', privacy: 'Privacy', termsLink: 'Terms', connect: 'Connect',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms',
    modules: ['GEO / AEO audit', 'Content engine', 'AI video workflow', 'Publishing hub', 'Lead capture CRM'],
  },
  zh: {
    eyebrow: 'NovaOS 入口', title: '欢迎回来！', subtitle: '请填写登录信息', illustrationTitle: 'NovaOS',
    leftTitle: '给增长团队用的 AI Marketing OS',
    leftBody: '用 NovaOS 把 GEO、内容、AI 视频工作流、内容发布和线索获取整合成一套营销操作系统。',
    previewTitle: 'NovaOS 工作台', previewBody: '活动 · 内容 · GEO · 线索',
    google: '使用 Google 登录', apple: '使用 Apple 登录', phone: '手机号', country: '国家 / 地区', code: '验证码', sendCode: '发送验证码', submit: '进入 NovaOS', close: '关闭',
    terms: '还没有账号？', register: '立即注册', remember: '记住 30 天', forgot: '忘记权限？', privacy: '隐私政策', termsLink: '服务条款', connect: '接入',
    agreePrefix: '我已阅读并同意', agreeAnd: '和', privacyPolicy: 'NovaStudio 隐私政策', serviceTerms: '服务条款',
    modules: ['GEO / AEO 诊断', '内容引擎', 'AI 视频工作流', '内容发布中心', '线索获取 CRM'],
  },
  ja: {
    eyebrow: 'NovaOS access', title: 'おかえりなさい', subtitle: 'ログイン情報を入力してください', illustrationTitle: 'NovaOS',
    leftTitle: 'AI Marketing OS for growth teams',
    leftBody: 'Use NovaOS to turn GEO, content, AI video workflow, publishing and lead capture into one operating system.',
    previewTitle: 'NovaOS workspace', previewBody: 'Campaigns · Content · GEO · Leads',
    google: 'Google でログイン', apple: 'Apple でログイン', phone: '電話番号', country: '国 / 地域', code: '認証コード', sendCode: 'コードを送信', submit: 'NovaOS に入る', close: '閉じる',
    terms: 'アカウントがありませんか？', register: 'アクセス作成', remember: '30日間記憶', forgot: 'アクセスを忘れた？', privacy: 'Privacy', termsLink: 'Terms', connect: 'Connect',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms',
    modules: ['GEO / AEO audit', 'Content engine', 'AI video workflow', 'Publishing hub', 'Lead capture CRM'],
  },
  ko: {
    eyebrow: 'NovaOS access', title: '다시 오신 것을 환영합니다', subtitle: '로그인 정보를 입력하세요', illustrationTitle: 'NovaOS',
    leftTitle: 'AI Marketing OS for growth teams',
    leftBody: 'Use NovaOS to turn GEO, content, AI video workflow, publishing and lead capture into one operating system.',
    previewTitle: 'NovaOS workspace', previewBody: 'Campaigns · Content · GEO · Leads',
    google: 'Google로 로그인', apple: 'Apple로 로그인', phone: '전화번호', country: '국가 / 지역', code: '인증 코드', sendCode: '코드 보내기', submit: 'NovaOS 보기', close: '닫기',
    terms: '계정이 없나요?', register: '접근 만들기', remember: '30일 기억', forgot: '접근을 잊으셨나요?', privacy: 'Privacy', termsLink: 'Terms', connect: 'Connect',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms',
    modules: ['GEO / AEO audit', 'Content engine', 'AI video workflow', 'Publishing hub', 'Lead capture CRM'],
  },
} as const;

type ModalCopy = (typeof modalCopy)[keyof typeof modalCopy];
const countries = ['+65 Singapore', '+86 China', '+852 Hong Kong', '+886 Taiwan', '+81 Japan', '+82 Korea', '+1 United States', '+44 United Kingdom', '+61 Australia', '+971 UAE'];

function NovaOsIntroPanel({ copy }: { copy: ModalCopy }) {
  return (
    <div className="relative hidden min-h-[650px] overflow-hidden bg-[radial-gradient(circle_at_30%_18%,rgba(59,130,246,0.28),transparent_22rem),radial-gradient(circle_at_72%_78%,rgba(125,92,255,0.20),transparent_24rem),linear-gradient(135deg,#eef3ff_0%,#e7e7f2_48%,#f6f8ff_100%)] p-10 lg:block">
      <div className="absolute inset-0 bg-grid-lines bg-[length:56px_56px] opacity-35" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/50 text-blue-700 shadow-sm backdrop-blur-xl">✦</span>
            <span>{copy.illustrationTitle}</span>
          </div>
          <h3 className="mt-12 max-w-md text-5xl font-semibold tracking-[-0.06em] text-slate-950">{copy.leftTitle}</h3>
          <p className="mt-5 max-w-md text-base leading-8 text-slate-600">{copy.leftBody}</p>
        </div>

        <div className="relative mx-auto my-10 w-full max-w-[30rem] rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
          <div className="rounded-[1.4rem] bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{copy.previewTitle}</p>
                <p className="mt-2 text-sm text-slate-300">{copy.previewBody}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-bold">OS</div>
            </div>
            <div className="mt-6 grid gap-3">
              {copy.modules.slice(0, 4).map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-semibold text-blue-200">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-7 -right-6 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-blue-700 shadow-xl shadow-blue-900/10">GEO · Content · Leads</div>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="/privacy">{copy.privacy}</a>
          <a href="/privacy#terms">{copy.termsLink}</a>
          <a href="/contact">{copy.connect}</a>
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
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [agreed, setAgreed] = useState(false);

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agreed) return;
    window.alert('NovaOS auth provider placeholder. Connect Google, Apple and SMS verification provider here.');
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
        className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl shadow-slate-950/30 outline-none lg:grid-cols-[1.08fr_1fr]"
      >
        <button type="button" onClick={onClose} className="absolute right-5 top-5 z-20 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label={copy.close}>{copy.close}</button>

        <NovaOsIntroPanel copy={copy} />

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
                <input value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" inputMode="tel" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {copy.code}
                  <input value={code} maxLength={6} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
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
