'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type AuthMode = 'login' | 'register';
type LoginMethod = 'email' | 'phone';

const modalCopy = {
  en: {
    eyebrow: 'NovaOS access', close: 'Close',
    loginTitle: 'Welcome back!', loginSubtitle: 'Sign in with email or phone', loginSubmit: 'Sign in to NovaOS',
    registerTitle: 'Create NovaOS access', registerSubtitle: 'Set up your workspace in a few steps', registerSubmit: 'Create account',
    loginVisualTitle: 'Your growth workspace is ready', loginVisualBody: 'Continue campaigns, content queues, AI search visibility, leads and reporting from one NovaOS command center.',
    registerVisualTitle: 'Build your AI marketing system', registerVisualBody: 'Create a workspace for brand memory, GEO/AEO, content planning, video workflow, publishing and lead capture.',
    commandTitle: 'Command center', commandSubtitle: 'Live marketing operations', setupTitle: 'Workspace setup', setupSubtitle: 'Create your operating layer', stepCaption: 'NovaOS onboarding step', visualBadge: 'GEO · Content · Leads', footerPrivacy: 'Privacy', footerTerms: 'Terms', footerContact: 'Contact',
    email: 'Email', loginByEmail: 'Email', loginByPhone: 'Phone', phoneNumber: 'Phone number', countryCode: 'Country / region code', countrySearch: 'Search country or code', password: 'Password', confirmPassword: 'Confirm password',
    google: 'Sign in with Google', apple: 'Sign in with Apple', code: 'Verification code', sendCode: 'Send code', noResults: 'No matching country',
    noAccount: 'No account yet?', haveAccount: 'Already have an account?', register: 'Create access', login: 'Sign in', remember: 'Remember me', forgot: 'Forgot password?',
    agreePrefix: 'I agree to the', agreeAnd: 'and', privacyPolicy: 'NovaStudio Privacy Policy', serviceTerms: 'Service Terms', or: 'OR', showPassword: 'Show password', hidePassword: 'Hide password',
    loginModules: ['GEO visibility', 'Content queue', 'Lead inbox', 'Growth report'], registerModules: ['Brand memory', 'First GEO audit', 'Content plan', 'Lead capture'], visualTags: ['Brand', 'GEO', 'Leads'],
  },
  zh: {
    eyebrow: 'NovaOS 入口', close: '关闭', loginTitle: '欢迎回来！', loginSubtitle: '使用邮箱或手机号登录', loginSubmit: '进入 NovaOS', registerTitle: '创建 NovaOS 账号', registerSubtitle: '几步完成你的工作台设置', registerSubmit: '创建账号',
    loginVisualTitle: '你的增长工作台已准备好', loginVisualBody: '继续管理营销活动、内容队列、AI 搜索可见度、线索和增长报告。', registerVisualTitle: '搭建你的 AI 营销系统', registerVisualBody: '创建一个工作台，用于品牌资料、AI 搜索诊断、内容计划、视频流程、内容发布和线索获取。',
    commandTitle: '指挥中心', commandSubtitle: '实时营销运营', setupTitle: '工作台设置', setupSubtitle: '创建你的运营系统', stepCaption: 'NovaOS 设置步骤', visualBadge: '诊断 · 内容 · 线索', footerPrivacy: '隐私政策', footerTerms: '服务条款', footerContact: '联系',
    email: '邮箱', loginByEmail: '邮箱登录', loginByPhone: '手机号登录', phoneNumber: '手机号', countryCode: '国家 / 地区码', countrySearch: '搜索国家或区号', password: '密码', confirmPassword: '确认密码',
    google: '使用 Google 登录', apple: '使用 Apple 登录', code: '验证码', sendCode: '发送验证码', noResults: '没有匹配的国家', noAccount: '还没有账号？', haveAccount: '已经有账号？', register: '立即注册', login: '去登录', remember: '记住 30 天', forgot: '忘记密码？',
    agreePrefix: '我已阅读并同意', agreeAnd: '和', privacyPolicy: 'NovaStudio 隐私政策', serviceTerms: '服务条款', or: '或', showPassword: '显示密码', hidePassword: '隐藏密码',
    loginModules: ['AI 搜索可见度', '内容队列', '线索收件箱', '增长报告'], registerModules: ['品牌资料', '首次诊断', '内容计划', '线索获取'], visualTags: ['品牌', '诊断', '线索'],
  },
  ja: {
    eyebrow: 'NovaOS access', close: '閉じる', loginTitle: 'おかえりなさい', loginSubtitle: 'メールまたは電話番号でログイン', loginSubmit: 'NovaOS に入る', registerTitle: 'NovaOS access を作成', registerSubtitle: '数ステップでワークスペースを設定', registerSubmit: 'アカウント作成',
    loginVisualTitle: '成長ワークスペースの準備ができています', loginVisualBody: 'キャンペーン、コンテンツキュー、AI検索可視性、リード、レポートを一つの NovaOS で管理します。', registerVisualTitle: 'AIマーケティングシステムを構築', registerVisualBody: 'ブランド情報、GEO/AEO、コンテンツ計画、動画ワークフロー、配信、リード獲得のためのワークスペースを作成します。',
    commandTitle: 'コマンドセンター', commandSubtitle: 'リアルタイム運用', setupTitle: 'ワークスペース設定', setupSubtitle: '運用レイヤーを作成', stepCaption: 'NovaOS 初期設定', visualBadge: 'GEO · コンテンツ · リード', footerPrivacy: 'プライバシー', footerTerms: '利用規約', footerContact: 'お問い合わせ',
    email: 'メール', loginByEmail: 'メール', loginByPhone: '電話番号', phoneNumber: '電話番号', countryCode: '国 / 地域コード', countrySearch: '国またはコードを検索', password: 'パスワード', confirmPassword: 'パスワード確認',
    google: 'Google でログイン', apple: 'Apple でログイン', code: '認証コード', sendCode: 'コードを送信', noResults: '該当する国がありません', noAccount: 'アカウントがありませんか？', haveAccount: 'すでにアカウントをお持ちですか？', register: 'アクセス作成', login: 'ログイン', remember: '30日間記憶', forgot: 'パスワードをお忘れですか？',
    agreePrefix: '同意します：', agreeAnd: 'および', privacyPolicy: 'NovaStudio プライバシーポリシー', serviceTerms: '利用規約', or: 'または', showPassword: 'パスワードを表示', hidePassword: 'パスワードを隠す',
    loginModules: ['GEO可視性', 'コンテンツキュー', 'リード受信箱', '成長レポート'], registerModules: ['ブランド情報', '初回GEO診断', 'コンテンツ計画', 'リード獲得'], visualTags: ['ブランド', 'GEO', 'リード'],
  },
  ko: {
    eyebrow: 'NovaOS access', close: '닫기', loginTitle: '다시 오신 것을 환영합니다', loginSubtitle: '이메일 또는 전화번호로 로그인하세요', loginSubmit: 'NovaOS 보기', registerTitle: 'NovaOS 접근 만들기', registerSubtitle: '몇 단계로 워크스페이스를 설정하세요', registerSubmit: '계정 만들기',
    loginVisualTitle: '성장 워크스페이스가 준비되었습니다', loginVisualBody: '캠페인, 콘텐츠 큐, AI 검색 가시성, 리드, 리포트를 하나의 NovaOS에서 관리합니다.', registerVisualTitle: 'AI 마케팅 시스템 구축', registerVisualBody: '브랜드 메모리, GEO/AEO, 콘텐츠 계획, 영상 워크플로, 게시, 리드 확보를 위한 워크스페이스를 만듭니다.',
    commandTitle: '커맨드 센터', commandSubtitle: '실시간 마케팅 운영', setupTitle: '워크스페이스 설정', setupSubtitle: '운영 레이어 만들기', stepCaption: 'NovaOS 온보딩 단계', visualBadge: 'GEO · 콘텐츠 · 리드', footerPrivacy: '개인정보', footerTerms: '이용약관', footerContact: '문의',
    email: '이메일', loginByEmail: '이메일', loginByPhone: '전화번호', phoneNumber: '전화번호', countryCode: '국가 / 지역 코드', countrySearch: '국가 또는 번호 검색', password: '비밀번호', confirmPassword: '비밀번호 확인',
    google: 'Google로 로그인', apple: 'Apple로 로그인', code: '인증 코드', sendCode: '코드 보내기', noResults: '일치하는 국가가 없습니다', noAccount: '계정이 없나요?', haveAccount: '이미 계정이 있나요?', register: '접근 만들기', login: '로그인', remember: '30일 기억', forgot: '비밀번호를 잊으셨나요?',
    agreePrefix: '동의합니다:', agreeAnd: '및', privacyPolicy: 'NovaStudio 개인정보 처리방침', serviceTerms: '이용약관', or: '또는', showPassword: '비밀번호 표시', hidePassword: '비밀번호 숨기기',
    loginModules: ['GEO 가시성', '콘텐츠 큐', '리드 받은함', '성장 리포트'], registerModules: ['브랜드 메모리', '첫 GEO 진단', '콘텐츠 계획', '리드 확보'], visualTags: ['브랜드', 'GEO', '리드'],
  },
} as const;

type ModalCopy = (typeof modalCopy)[keyof typeof modalCopy];
type Lang = keyof typeof modalCopy;

type CountryCode = { country: string; zh: string; ja: string; ko: string; code: string };

const countryCodes: CountryCode[] = [
  { country: 'Argentina', zh: '阿根廷', ja: 'アルゼンチン', ko: '아르헨티나', code: '+54' },
  { country: 'Australia', zh: '澳大利亚', ja: 'オーストラリア', ko: '호주', code: '+61' },
  { country: 'Austria', zh: '奥地利', ja: 'オーストリア', ko: '오스트리아', code: '+43' },
  { country: 'Belgium', zh: '比利时', ja: 'ベルギー', ko: '벨기에', code: '+32' },
  { country: 'Brazil', zh: '巴西', ja: 'ブラジル', ko: '브라질', code: '+55' },
  { country: 'Canada', zh: '加拿大', ja: 'カナダ', ko: '캐나다', code: '+1' },
  { country: 'Chile', zh: '智利', ja: 'チリ', ko: '칠레', code: '+56' },
  { country: 'China', zh: '中国大陆', ja: '中国本土', ko: '중국 본토', code: '+86' },
  { country: 'Denmark', zh: '丹麦', ja: 'デンマーク', ko: '덴마크', code: '+45' },
  { country: 'France', zh: '法国', ja: 'フランス', ko: '프랑스', code: '+33' },
  { country: 'Germany', zh: '德国', ja: 'ドイツ', ko: '독일', code: '+49' },
  { country: 'Hong Kong', zh: '中国香港', ja: '香港', ko: '홍콩', code: '+852' },
  { country: 'India', zh: '印度', ja: 'インド', ko: '인도', code: '+91' },
  { country: 'Indonesia', zh: '印度尼西亚', ja: 'インドネシア', ko: '인도네시아', code: '+62' },
  { country: 'Italy', zh: '意大利', ja: 'イタリア', ko: '이탈리아', code: '+39' },
  { country: 'Japan', zh: '日本', ja: '日本', ko: '일본', code: '+81' },
  { country: 'Malaysia', zh: '马来西亚', ja: 'マレーシア', ko: '말레이시아', code: '+60' },
  { country: 'Mexico', zh: '墨西哥', ja: 'メキシコ', ko: '멕시코', code: '+52' },
  { country: 'Netherlands', zh: '荷兰', ja: 'オランダ', ko: '네덜란드', code: '+31' },
  { country: 'New Zealand', zh: '新西兰', ja: 'ニュージーランド', ko: '뉴질랜드', code: '+64' },
  { country: 'Philippines', zh: '菲律宾', ja: 'フィリピン', ko: '필리핀', code: '+63' },
  { country: 'Saudi Arabia', zh: '沙特阿拉伯', ja: 'サウジアラビア', ko: '사우디아라비아', code: '+966' },
  { country: 'Singapore', zh: '新加坡', ja: 'シンガポール', ko: '싱가포르', code: '+65' },
  { country: 'South Africa', zh: '南非', ja: '南アフリカ', ko: '남아프리카', code: '+27' },
  { country: 'South Korea', zh: '韩国', ja: '韓国', ko: '대한민국', code: '+82' },
  { country: 'Spain', zh: '西班牙', ja: 'スペイン', ko: '스페인', code: '+34' },
  { country: 'Sweden', zh: '瑞典', ja: 'スウェーデン', ko: '스웨덴', code: '+46' },
  { country: 'Switzerland', zh: '瑞士', ja: 'スイス', ko: '스위스', code: '+41' },
  { country: 'Taiwan', zh: '中国台湾', ja: '台湾', ko: '대만', code: '+886' },
  { country: 'Thailand', zh: '泰国', ja: 'タイ', ko: '태국', code: '+66' },
  { country: 'Turkey', zh: '土耳其', ja: 'トルコ', ko: '튀르키예', code: '+90' },
  { country: 'United Arab Emirates', zh: '阿联酋', ja: 'アラブ首長国連邦', ko: '아랍에미리트', code: '+971' },
  { country: 'United Kingdom', zh: '英国', ja: 'イギリス', ko: '영국', code: '+44' },
  { country: 'United States', zh: '美国', ja: 'アメリカ', ko: '미국', code: '+1' },
  { country: 'Vietnam', zh: '越南', ja: 'ベトナム', ko: '베트남', code: '+84' },
];

function countryName(item: CountryCode, lang: Lang) {
  if (lang === 'zh') return item.zh;
  if (lang === 'ja') return item.ja;
  if (lang === 'ko') return item.ko;
  return item.country;
}

function EyeIcon({ hidden }: { hidden: boolean }) {
  return hidden ? <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M10.7 5.1A10.9 10.9 0 0 1 12 5c5.3 0 8.8 4.6 10 7-.5 1-1.5 2.4-2.9 3.7M6.2 6.5C4.2 7.9 2.8 10.1 2 12c1.2 2.5 4.7 7 10 7 1.8 0 3.4-.5 4.7-1.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 9.5A3.5 3.5 0 0 0 14.5 14.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> : <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>;
}

function CountryCodePicker({ copy, lang, value, onChange }: { copy: ModalCopy; lang: Lang; value: string; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const selected = countryCodes.find((item) => item.code === value) ?? countryCodes[22];
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery ? countryCodes.filter((item) => `${item.country} ${item.zh} ${item.ja} ${item.ko} ${item.code}`.toLowerCase().includes(normalizedQuery)) : countryCodes;

  return (
    <div className="relative grid gap-2 text-sm font-semibold text-slate-700" onBlur={(event) => { const next = event.relatedTarget; if (!(next instanceof Node) || !event.currentTarget.contains(next)) setOpen(false); }}>
      <span>{copy.countryCode}</span>
      <button type="button" onClick={() => setOpen((state) => !state)} className="flex w-full items-center justify-between gap-2 border-0 border-b border-slate-200 bg-white px-0 py-3 text-left text-slate-700 outline-none transition hover:text-blue-700 focus:border-blue-500">
        <span className="truncate">{countryName(selected, lang)} {selected.code}</span>
        <span className="text-slate-400">⌄</span>
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.45rem)] z-40 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl shadow-blue-950/12">
          <input value={query} onChange={(event) => setQuery(event.target.value)} autoFocus placeholder={copy.countrySearch} className="w-full border-b border-slate-100 px-4 py-3 text-sm font-medium text-slate-700 outline-none" />
          <div className="max-h-56 overflow-y-auto py-1">
            {filtered.length ? filtered.map((item) => <button key={`${item.country}-${item.code}`} type="button" onClick={() => { onChange(item.code); setOpen(false); setQuery(''); }} className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"><span className="truncate">{countryName(item, lang)}</span><span className="shrink-0 font-semibold text-slate-900">{item.code}</span></button>) : <p className="px-4 py-4 text-sm font-medium text-slate-400">{copy.noResults}</p>}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PhoneFields({ copy, lang, countryCode, setCountryCode, phone, setPhone }: { copy: ModalCopy; lang: Lang; countryCode: string; setCountryCode: (value: string) => void; phone: string; setPhone: (value: string) => void }) {
  return <div className="grid gap-3 sm:grid-cols-[0.72fr_1.28fr]"><CountryCodePicker copy={copy} lang={lang} value={countryCode} onChange={setCountryCode} /><label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.phoneNumber}<input value={phone} onChange={(event) => setPhone(event.target.value.replace(/[^0-9\s-]/g, ''))} type="tel" inputMode="tel" autoComplete="tel" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" /></label></div>;
}

function NovaOsIntroPanel({ copy, mode }: { copy: ModalCopy; mode: AuthMode }) {
  const modules = mode === 'login' ? copy.loginModules : copy.registerModules;
  const title = mode === 'login' ? copy.loginVisualTitle : copy.registerVisualTitle;
  const body = mode === 'login' ? copy.loginVisualBody : copy.registerVisualBody;
  return <div className="relative hidden min-h-[650px] overflow-hidden bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.22),transparent_20rem),radial-gradient(circle_at_82%_78%,rgba(124,58,237,0.16),transparent_24rem),linear-gradient(135deg,#f5f8ff_0%,#eaf0ff_56%,#fbfdff_100%)] p-10 lg:block"><div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-25" /><div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" /><div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-violet-300/14 blur-3xl" /><div className="relative flex h-full flex-col justify-between"><div><div className="flex items-center gap-3 text-sm font-semibold text-slate-700"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/70 text-blue-700 shadow-sm backdrop-blur-xl">✦</span><span>NovaOS</span></div><h3 className="mt-10 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 lg:text-[2.7rem]">{title}</h3><p className="mt-5 max-w-lg text-[1.05rem] leading-8 text-slate-600">{body}</p></div><div className="relative mx-auto my-8 w-full max-w-[30rem]">{mode === 'login' ? <div className="rounded-[2.2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-blue-900/12 backdrop-blur-xl"><div className="rounded-[1.6rem] bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">{copy.commandTitle}</p><p className="mt-2 text-sm text-slate-300">{copy.commandSubtitle}</p></div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-bold">OS</div></div><div className="mt-6 grid grid-cols-2 gap-3">{modules.map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4"><div className="mb-4 flex items-center justify-between"><span className="h-2 w-2 rounded-full bg-blue-300" /><span className="text-xs font-semibold text-slate-400">0{index + 1}</span></div><p className="text-sm font-semibold text-slate-100">{item}</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><span className="block h-full rounded-full bg-blue-400" style={{ width: `${58 + index * 9}%` }} /></div></div>)}</div><div className="mt-5 rounded-2xl border border-blue-300/20 bg-blue-500/10 p-4"><div className="flex items-end gap-2">{[42, 62, 48, 78, 70, 88, 95].map((height, index) => <span key={index} className="w-full rounded-t-md bg-blue-300/80" style={{ height: `${height}px` }} />)}</div></div></div></div> : <div className="rounded-[2.2rem] border border-white/80 bg-white/78 p-5 shadow-2xl shadow-blue-900/12 backdrop-blur-xl"><div className="rounded-[1.6rem] bg-white p-5 shadow-xl shadow-blue-900/8"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{copy.setupTitle}</p><p className="mt-2 text-sm text-slate-500">{copy.setupSubtitle}</p></div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 font-bold text-white">OS</div></div><div className="mt-7 grid gap-4">{modules.map((item, index) => <div key={item} className="relative rounded-2xl border border-blue-100 bg-[#f8fbff] p-4">{index < modules.length - 1 ? <span className="absolute -bottom-4 left-7 h-4 w-px bg-blue-100" /> : null}<div className="flex items-center gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">{index + 1}</span><div><p className="text-sm font-semibold text-slate-950">{item}</p><p className="mt-1 text-xs text-slate-500">{copy.stepCaption}</p></div></div></div>)}</div><div className="mt-6 grid grid-cols-3 gap-3">{copy.visualTags.map((item) => <div key={item} className="rounded-2xl bg-slate-950 px-3 py-4 text-center text-xs font-semibold text-white">{item}</div>)}</div></div></div>}<div className="absolute -bottom-6 -right-5 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-blue-700 shadow-xl shadow-blue-900/10">{copy.visualBadge}</div></div><div className="flex gap-8 text-sm font-medium text-slate-500"><a href="/privacy">{copy.footerPrivacy}</a><a href="/privacy#terms">{copy.footerTerms}</a><a href="/contact">{copy.footerContact}</a></div></div></div>;
}

export function MaintenanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { lang } = useLanguage();
  const copy = modalCopy[lang];
  const [mode, setMode] = useState<AuthMode>('login');
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');
  const [email, setEmail] = useState('');
  const [loginCountryCode, setLoginCountryCode] = useState('+65');
  const [registerCountryCode, setRegisterCountryCode] = useState('+65');
  const [phone, setPhone] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
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
      if (event.key === 'Escape') { onClose(); return; }
      if (event.key !== 'Tab' || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter((element) => !element.hasAttribute('disabled'));
      if (focusable.length === 0) { event.preventDefault(); dialog.focus(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = originalOverflow; previousFocusRef.current?.focus(); };
  }, [open, onClose]);

  function resetMode(nextMode: AuthMode) { setMode(nextMode); setAgreed(false); setShowPassword(false); }
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!agreed) return; window.alert(mode === 'login' ? 'NovaOS password login placeholder. Connect auth provider here.' : 'NovaOS registration placeholder. Connect SMS, password and auth provider here.'); }
  if (!open) return null;
  const title = mode === 'login' ? copy.loginTitle : copy.registerTitle;
  const subtitle = mode === 'login' ? copy.loginSubtitle : copy.registerSubtitle;
  const submit = mode === 'login' ? copy.loginSubmit : copy.registerSubmit;

  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 backdrop-blur-md" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="novaos-login-title" className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl shadow-slate-950/30 outline-none lg:grid-cols-[1.05fr_1fr]"><button type="button" onClick={onClose} className="absolute right-5 top-5 z-20 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label={copy.close}>{copy.close}</button><NovaOsIntroPanel copy={copy} mode={mode} /><form onSubmit={handleSubmit} className="flex min-h-[650px] items-center justify-center p-8 lg:p-12"><div className="w-full max-w-[28rem]"><div className="mb-8 text-center"><div className="mx-auto mb-7 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-900">✦</div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">{copy.eyebrow}</p><h2 id="novaos-login-title" className="text-3xl font-bold tracking-tight text-slate-950">{title}</h2><p className="mt-3 text-sm text-slate-500">{subtitle}</p></div><div className="grid gap-4">{mode === 'login' ? <><div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1 text-sm font-semibold"><button type="button" onClick={() => setLoginMethod('email')} className={`rounded-xl px-4 py-2.5 transition ${loginMethod === 'email' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'}`}>{copy.loginByEmail}</button><button type="button" onClick={() => setLoginMethod('phone')} className={`rounded-xl px-4 py-2.5 transition ${loginMethod === 'phone' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'}`}>{copy.loginByPhone}</button></div>{loginMethod === 'email' ? <label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.email}<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" /></label> : <PhoneFields copy={copy} lang={lang} countryCode={loginCountryCode} setCountryCode={setLoginCountryCode} phone={phone} setPhone={setPhone} />}<label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.password}<div className="flex border-b border-slate-200 focus-within:border-blue-500"><input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} autoComplete="current-password" className="min-w-0 flex-1 border-0 px-0 py-3 text-slate-700 outline-none" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="flex items-center px-2 text-slate-400 transition hover:text-blue-700" aria-label={showPassword ? copy.hidePassword : copy.showPassword}><EyeIcon hidden={showPassword} /></button></div></label></> : <><label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.email}<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" /></label><PhoneFields copy={copy} lang={lang} countryCode={registerCountryCode} setCountryCode={setRegisterCountryCode} phone={registerPhone} setPhone={setRegisterPhone} /><div className="grid gap-3 sm:grid-cols-[1fr_auto]"><label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.code}<input value={code} maxLength={6} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" /></label><button type="button" className="self-end rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">{copy.sendCode}</button></div><label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.password}<input value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoComplete="new-password" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" /></label><label className="grid gap-2 text-sm font-semibold text-slate-700">{copy.confirmPassword}<input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" autoComplete="new-password" className="border-0 border-b border-slate-200 px-0 py-3 text-slate-700 outline-none transition focus:border-blue-500" /></label></>}</div><div className="mt-5 flex items-center justify-between text-sm"><label className="flex items-center gap-2 text-slate-500"><input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />{copy.remember}</label>{mode === 'login' ? <a href="#" className="font-semibold text-blue-700">{copy.forgot}</a> : null}</div><label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-500"><input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} required className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600" /><span>{copy.agreePrefix} <a href="/privacy" className="font-semibold text-blue-700" target="_blank" rel="noreferrer">{copy.privacyPolicy}</a> {copy.agreeAnd} <a href="/privacy#terms" className="font-semibold text-blue-700" target="_blank" rel="noreferrer">{copy.serviceTerms}</a></span></label><button type="submit" disabled={!agreed} className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-slate-950">{submit}</button><div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"><span className="h-px flex-1 bg-slate-200" />{copy.or}<span className="h-px flex-1 bg-slate-200" /></div><button type="button" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"><span className="text-lg">G</span>{copy.google}</button><button type="button" className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"><span className="text-xl"></span>{copy.apple}</button><p className="mt-8 text-center text-sm text-slate-500">{mode === 'login' ? copy.noAccount : copy.haveAccount}{' '}<button type="button" onClick={() => resetMode(mode === 'login' ? 'register' : 'login')} className="font-semibold text-slate-950">{mode === 'login' ? copy.register : copy.login}</button></p></div></form></div></div>;
}
