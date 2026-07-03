'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type AuthMode = 'login' | 'register';

const modalCopy = {
  en: {
    eyebrow: 'NovaOS access', close: 'Close', illustrationTitle: 'NovaOS',
    loginTitle: 'Welcome back!', loginSubtitle: 'Sign in with your account and password', loginSubmit: 'Sign in to NovaOS',
    registerTitle: 'Create NovaOS access', registerSubtitle: 'Set up your workspace in a few steps', registerSubmit: 'Create account',
    loginLeftTitle: 'NovaOS Growth Workspace',
    loginLeftBody: 'Return to your campaigns, content queue, GEO audits, publishing plans, lead inbox and growth dashboard.',
    registerLeftTitle: 'Build your AI marketing system',
    registerLeftBody: 'Create a workspace for brand memory, AI search visibility, content planning, video workflow and lead capture.',
    previewTitle: 'Workspace preview', previewBody: 'Marketing operations in one place',
    account: 'Email or phone number', password: 'Password', confirmPassword: 'Confirm password',
    google: 'Sign in with Google', apple: 'Sign in with Apple', phone: 'Phone number', country: 'Country / region', code: 'Verification code', sendCode: 'Send code',
    noAccount: 'No account yet?', haveAccount: 'Already have an account?', register: 'Create access', login: 'Sign in', remember: 'Remember me', forgot: 'Forgot password?', privacy: 'Privacy', termsLink: 'Terms', contact: 'Contact',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms', or: 'OR', showPassword: 'Show password', hidePassword: 'Hide password',
    loginModules: ['Resume GEO audit', 'Review content queue', 'Open lead inbox', 'Check growth dashboard'],
    registerModules: ['Create brand memory', 'Run first GEO audit', 'Build content plan', 'Launch lead capture'],
  },
  zh: {
    eyebrow: 'NovaOS 入口', close: '关闭', illustrationTitle: 'NovaOS',
    loginTitle: '欢迎回来！', loginSubtitle: '使用账号和密码登录', loginSubmit: '进入 NovaOS',
    registerTitle: '创建 NovaOS 账号', registerSubtitle: '几步完成你的工作台设置', registerSubmit: '创建账号',
    loginLeftTitle: 'NovaOS 增长工作台',
    loginLeftBody: '回到你的营销活动、内容队列、AI 搜索诊断、发布计划、线索收件箱和增长看板。',
    registerLeftTitle: '搭建你的 AI 营销系统',
    registerLeftBody: '创建一个工作台，用于品牌资料、AI 搜索可见度、内容计划、视频流程和线索获取。',
    previewTitle: '工作台预览', previewBody: '把营销运营集中到一个地方',
    account: '邮箱或手机号', password: '密码', confirmPassword: '确认密码',
    google: '使用 Google 登录', apple: '使用 Apple 登录', phone: '手机号', country: '国家 / 地区', code: '验证码', sendCode: '发送验证码',
    noAccount: '还没有账号？', haveAccount: '已经有账号？', register: '立即注册', login: '去登录', remember: '记住 30 天', forgot: '忘记密码？', privacy: '隐私政策', termsLink: '服务条款', contact: '联系',
    agreePrefix: '我已阅读并同意', agreeAnd: '和', privacyPolicy: 'NovaStudio 隐私政策', serviceTerms: '服务条款', or: 'OR', showPassword: '显示密码', hidePassword: '隐藏密码',
    loginModules: ['继续 AI 搜索诊断', '查看内容队列', '打开线索收件箱', '检查增长看板'],
    registerModules: ['创建品牌资料', '完成首次诊断', '生成内容计划', '启动线索获取'],
  },
  ja: {
    eyebrow: 'NovaOS access', close: '閉じる', illustrationTitle: 'NovaOS',
    loginTitle: 'おかえりなさい', loginSubtitle: 'アカウントとパスワードでログイン', loginSubmit: 'NovaOS に入る',
    registerTitle: 'NovaOS access を作成', registerSubtitle: '数ステップでワークスペースを設定', registerSubmit: 'アカウント作成',
    loginLeftTitle: 'NovaOS Growth Workspace', loginLeftBody: 'Return to your campaigns, content queue, GEO audits, publishing plans, lead inbox and growth dashboard.',
    registerLeftTitle: 'Build your AI marketing system', registerLeftBody: 'Create a workspace for brand memory, AI search visibility, content planning, video workflow and lead capture.',
    previewTitle: 'Workspace preview', previewBody: 'Marketing operations in one place',
    account: 'Email or phone number', password: 'Password', confirmPassword: 'Confirm password',
    google: 'Google でログイン', apple: 'Apple でログイン', phone: '電話番号', country: '国 / 地域', code: '認証コード', sendCode: 'コードを送信',
    noAccount: 'アカウントがありませんか？', haveAccount: 'Already have an account?', register: 'アクセス作成', login: 'Sign in', remember: '30日間記憶', forgot: 'Forgot password?', privacy: 'Privacy', termsLink: 'Terms', contact: 'Contact',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms', or: 'OR', showPassword: 'Show password', hidePassword: 'Hide password',
    loginModules: ['Resume GEO audit', 'Review content queue', 'Open lead inbox', 'Check growth dashboard'],
    registerModules: ['Create brand memory', 'Run first GEO audit', 'Build content plan', 'Launch lead capture'],
  },
  ko: {
    eyebrow: 'NovaOS access', close: '닫기', illustrationTitle: 'NovaOS',
    loginTitle: '다시 오신 것을 환영합니다', loginSubtitle: '계정과 비밀번호로 로그인하세요', loginSubmit: 'NovaOS 보기',
    registerTitle: 'NovaOS 접근 만들기', registerSubtitle: '몇 단계로 워크스페이스를 설정하세요', registerSubmit: '계정 만들기',
    loginLeftTitle: 'NovaOS Growth Workspace', loginLeftBody: 'Return to your campaigns, content queue, GEO audits, publishing plans, lead inbox and growth dashboard.',
    registerLeftTitle: 'Build your AI marketing system', registerLeftBody: 'Create a workspace for brand memory, AI search visibility, content planning, video workflow and lead capture.',
    previewTitle: 'Workspace preview', previewBody: 'Marketing operations in one place',
    account: 'Email or phone number', password: 'Password', confirmPassword: 'Confirm password',
    google: 'Google로 로그인', apple: 'Apple로 로그인', phone: '전화번호', country: '국가 / 지역', code: '인증 코드', sendCode: '코드 보내기',
    noAccount: '계정이 없나요?', haveAccount: 'Already have an account?', register: '접근 만들기', login: 'Sign in', remember: '30일 기억', forgot: 'Forgot password?', privacy: 'Privacy', termsLink: 'Terms', contact: 'Contact',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms', or: 'OR', showPassword: 'Show password', hidePassword: 'Hide password',
    loginModules: ['Resume GEO audit', 'Review content queue', 'Open lead inbox', 'Check growth dashboard'],
    registerModules: ['Create brand memory', 'Run first GEO audit', 'Build content plan', 'Launch lead capture'],
  },
} as const;

type ModalCopy = (typeof modalCopy)[keyof typeof modalCopy];
const countries = ['+65 Singapore', '+86 China', '+852 Hong Kong', '+886 Taiwan', '+81 Japan', '+82 Korea', '+1 United States', '+44 United Kingdom', '+61 Australia', '+971 UAE'];

function EyeIcon({ hidden }: { hidden: boolean }) {
  return hidden ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.7 5.1A10.9 10.9 0 0 1 12 5c5.3 0 8.8 4.6 10 7-.5 1-1.5 2.4-2.9 3.7M6.2 6.5C4.2 7.9 2.8 10.1 2 12c1.2 2.5 4.7 7 10 7 1.8 0 3.4-.5 4.7-1.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 9.5A3.5 3.5 0 0 0 14.5 14.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function NovaOsIntroPanel({ copy, mode }: { copy: ModalCopy; mode: AuthMode }) {
  const title = mode === 'login' ? copy.loginLeftTitle : copy.registerLeftTitle;
  const body = mode === 'login' ? copy.loginLeftBody : copy.registerLeftBody;
  const modules = mode === 'login' ? copy.loginModules : copy.registerModules;

  return (
    <div className="relative hidden min-h-[650px] overflow-hidden bg-[radial-gradient(circle_at_24%_14%,rgba(37,99,235,0.20),transparent_20rem),radial-gradient(circle_at_82%_82%,rgba(125,92,255,0.14),transparent_22rem),linear-gradient(135deg,#f3f7ff_0%,#eef2fb_54%,#f9fbff_100%)] p-9 lg:block">
      <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-25" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/70 text-blue-700 shadow-sm backdrop-blur-xl">✦</span>
            <span>{copy.illustrationTitle}</span>
          </div>
          <h3 className="mt-12 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 lg:text-5xl">{title}</h3>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">{body}</p>
        </div>

        <div className="mx-auto my-8 w-full max-w-[29rem] rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
          <div className="rounded-[1.35rem] bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{copy.previewTitle}</p>
                <p className="mt-2 text-sm text-slate-300">{copy.previewBody}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-bold">OS</div>
            </div>
            <div className="mt-6 grid gap-3">
              {modules.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-semibold text-blue-200">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="/privacy">{copy.privacy}</a>
          <a href="/privacy#terms">{copy.termsLink}</a>
          <a href="/contact">{copy.contact}</a>
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
  const [mode, setMode] = useState<AuthMode>('login');
  const [account, setAccount] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  function resetMode(nextMode: AuthMode) {
    setMode(nextMode);
    setAgreed(false);
    setShowPassword(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agreed) return;
    window.alert(mode === 'login' ? 'NovaOS password login placeholder. Connect auth provider here.' : 'NovaOS registration placeholder. Connect SMS, password and auth provider here.');
  }

  if (!open) return null;

  const title = mode === 'login' ? copy.loginTitle : copy.registerTitle;
  const subtitle = mode === 'login' ? copy.loginSubtitle : copy.registerSubtitle;
  const submit = mode === 'login' ? copy.loginSubmit : copy.registerSubmit;

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
        className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl shadow-slate-950/30 outline-none lg:grid-cols-[1.05fr_1fr]"
      >
        <button type="button" onClick={onClose} className="absolute right-5 top-5 z-20 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label={copy.close}>{copy.close}</button>

        <NovaOsIntroPanel copy={copy} mode={mode} />

        <form onSubmit={handleSubmit} className="flex min-h-[650px] items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-[28rem]">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-7 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-900">✦</div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">{copy.eyebrow}</p>
              <h2 id="novaos-login-title" className="text-3xl font-bold tracking-tight text-slate-950">{title}</h2>
              <p className="mt-3 text-sm text-slate-500">{subtitle}</p>
            </div>

            <div className="grid gap-4">
              {mode === 'login' ? (
                <>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    {copy.account}
                    <input value={account} onChange={(event) => setAccount(event.target.value)} autoComplete="username" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    {copy.password}
                    <div className="flex border-b border-slate-200 focus-within:border-blue-500">
                      <input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} autoComplete="current-password" className="min-w-0 flex-1 border-0 px-0 py-3 text-slate-700 outline-none" />
                      <button type="button" onClick={() => setShowPassword((value) => !value)} className="flex items-center px-2 text-slate-400 transition hover:text-blue-700" aria-label={showPassword ? copy.hidePassword : copy.showPassword}>
                        <EyeIcon hidden={showPassword} />
                      </button>
                    </div>
                  </label>
                </>
              ) : (
                <>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    {copy.country}
                    <select className="border-0 border-b border-slate-200 bg-white px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500">
                      {countries.map((country) => <option key={country}>{country}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    {copy.phone}
                    <input value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" inputMode="tel" autoComplete="tel" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
                  </label>
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      {copy.code}
                      <input value={code} maxLength={6} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
                    </label>
                    <button type="button" className="self-end rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">{copy.sendCode}</button>
                  </div>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    {copy.password}
                    <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoComplete="new-password" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    {copy.confirmPassword}
                    <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" autoComplete="new-password" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" />
                  </label>
                </>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-500"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />{copy.remember}</label>
              {mode === 'login' ? <a href="#" className="font-semibold text-blue-700">{copy.forgot}</a> : null}
            </div>

            <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-500">
              <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} required className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600" />
              <span>{copy.agreePrefix} <a href="/privacy" className="font-semibold text-blue-700" target="_blank" rel="noreferrer">{copy.privacyPolicy}</a> {copy.agreeAnd} <a href="/privacy#terms" className="font-semibold text-blue-700" target="_blank" rel="noreferrer">{copy.serviceTerms}</a></span>
            </label>

            <button type="submit" disabled={!agreed} className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-slate-950">{submit}</button>

            <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"><span className="h-px flex-1 bg-slate-200" />{copy.or}<span className="h-px flex-1 bg-slate-200" /></div>

            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"><span className="text-lg">G</span>{copy.google}</button>
            <button type="button" className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"><span className="text-xl"></span>{copy.apple}</button>

            <p className="mt-8 text-center text-sm text-slate-500">
              {mode === 'login' ? copy.noAccount : copy.haveAccount}{' '}
              <button type="button" onClick={() => resetMode(mode === 'login' ? 'register' : 'login')} className="font-semibold text-slate-950">{mode === 'login' ? copy.register : copy.login}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
