import type { Metadata } from 'next';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'Privacy Policy and Service Terms',
  description: 'NovaStudio privacy policy and service terms for NovaOS, AI marketing operations, GEO/AEO, content workflows, AI video workflows and lead capture systems.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

const sections = [
  {
    title: '1. Who we are',
    body: 'NovaStudio builds NovaOS, an AI Marketing Operating System for GEO/AEO optimization, content generation, AI video workflows, content publishing, lead capture and customer growth operations. This policy explains how we handle information when users visit our website, request access, contact sales or use NovaOS-related services.',
  },
  {
    title: '2. Information we may collect',
    body: 'We may collect contact information such as name, email, phone number, company name, job title and country or region. We may also collect account login data, verification records, website usage information, device and browser data, support messages, marketing preferences and information you provide for NovaOS workflows such as brand materials, campaign briefs, website URLs, competitor names, content drafts, lead forms and GEO/AEO audit inputs.',
  },
  {
    title: '3. How we use information',
    body: 'We use information to provide and improve NovaStudio and NovaOS, process login and verification requests, respond to sales inquiries, generate marketing workflows, run GEO/AEO audits, create reports, personalize product experience, maintain security, prevent abuse, measure product performance and comply with applicable legal obligations.',
  },
  {
    title: '4. AI processing and user content',
    body: 'NovaOS may use AI models and automation tools to analyze brand information, generate content, build campaign structures, create AI video workflows, summarize website data and recommend growth actions. User-provided materials may be processed by AI infrastructure or trusted service providers only for the purpose of delivering the requested functionality. Users should only upload content they have the right to use.',
  },
  {
    title: '5. Sharing with service providers',
    body: 'We may share limited information with trusted providers such as hosting platforms, database providers, authentication providers, SMS verification providers, analytics tools, payment providers, customer support tools and AI infrastructure providers. These providers are used to operate, secure and improve NovaStudio and NovaOS. We do not sell personal information to advertisers.',
  },
  {
    title: '6. Cookies and analytics',
    body: 'We may use cookies, local storage and analytics technologies to keep users signed in, remember language preferences, improve page performance, understand website traffic and measure which NovaOS pages, GEO/AEO resources or product areas are most useful. Users may control cookies through their browser settings.',
  },
  {
    title: '7. Data retention',
    body: 'We retain information only for as long as needed for the purposes described in this policy, including providing services, maintaining records, resolving disputes, enforcing agreements, improving security and meeting legal or operational requirements. Users may request deletion or correction of their information by contacting us.',
  },
  {
    title: '8. Security',
    body: 'We use reasonable technical and organizational measures to protect information against unauthorized access, loss, misuse or alteration. No internet service is completely secure, so users should keep login credentials confidential and avoid uploading sensitive data unless it is necessary for the requested NovaOS workflow.',
  },
  {
    title: '9. International operations',
    body: 'NovaStudio is based in Singapore and may work with infrastructure and service providers in other countries. By using the website or NovaOS-related services, users understand that information may be processed in jurisdictions outside their country or region, subject to appropriate safeguards where required.',
  },
  {
    title: '10. Contact',
    body: 'For privacy, access, deletion or business inquiries, contact NovaStudio at hello@novastudio.world. Business address: 41 Woodlands Avenue 9, #05-00, Republic Polytechnic, Singapore 737728.',
  },
];

const terms = [
  {
    title: '1. Access and account responsibility',
    body: 'Users are responsible for keeping account information accurate and secure. NovaOS access may include beta, trial or limited-access features. We may restrict or suspend access if an account is misused, violates these terms or creates security, legal or operational risk.',
  },
  {
    title: '2. Acceptable use',
    body: 'Users must not use NovaStudio or NovaOS to create illegal, deceptive, infringing, harmful or abusive content. Users are responsible for reviewing AI-generated content before publication, especially in regulated sectors such as finance, payments, Web3, healthcare, education or professional services.',
  },
  {
    title: '3. User materials and output',
    body: 'Users keep ownership of their submitted brand materials, business data and customer content. NovaStudio may use submitted materials only to provide, maintain, secure and improve the requested services. AI-generated drafts, reports and workflows should be treated as business assistance and reviewed before use.',
  },
  {
    title: '4. Service availability',
    body: 'NovaOS features may change as the product evolves. We aim to provide reliable access but do not guarantee uninterrupted service, error-free output or specific business results. GEO/AEO and AI visibility outcomes can depend on third-party platforms, search engines, AI systems and user implementation.',
  },
  {
    title: '5. NovaStudio intellectual property',
    body: 'NovaStudio, NovaOS, related product names, interface designs, templates, workflows, documentation and platform structure are protected business assets. Users may not copy, resell, reverse engineer or misuse NovaStudio assets without permission.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.12),transparent_28rem),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] px-5 py-12 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">← Back to NovaStudio</a>
        <section className="mt-10 rounded-[2rem] border border-blue-100 bg-white/90 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur-xl lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">NovaStudio legal center</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate-950">Privacy Policy</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">This page is written for NovaStudio and NovaOS users, customers, prospects and partners. It follows common SaaS privacy-policy structure while adding NovaOS-specific coverage for AI marketing operations, GEO/AEO analysis, content workflows, AI video workflow planning and lead capture systems.</p>
          <p className="mt-4 text-sm text-slate-500">Last updated: July 2026</p>
        </section>

        <section className="mt-8 grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.5rem] border border-blue-100 bg-white/86 p-6 shadow-sm shadow-blue-900/5">
              <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
        </section>

        <section id="terms" className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">NovaStudio service terms</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Service Terms</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">These terms apply to access requests, beta access, trial usage, sales-assisted usage and future NovaOS account access unless a separate written agreement applies.</p>
          <div className="mt-8 grid gap-5">
            {terms.map((term) => (
              <article key={term.title} className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                <h3 className="font-semibold text-white">{term.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{term.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-blue-100 bg-white/90 p-8 text-center shadow-xl shadow-blue-900/5">
          <h2 className="text-2xl font-semibold text-slate-950">Questions about privacy or NovaOS access?</h2>
          <p className="mt-3 text-slate-600">Email hello@novastudio.world or contact NovaStudio sales through the website.</p>
          <a href="/contact" className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white">Contact NovaStudio</a>
        </section>
      </div>
    </main>
  );
}
