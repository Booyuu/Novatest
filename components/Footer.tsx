'use client';

import { BrandLogo } from '@/components/BrandLogo';
import { useLanguage } from '@/components/LanguageProvider';

const footerGroups = [
  {
    title: 'Products',
    links: ['NovaOS Core', 'AI Agent Center', 'Brand Brain', 'Content Engine', 'Campaign Builder', 'GEO / AEO Engine', 'Data & CRM Layer', 'AI Analytics'],
  },
  {
    title: 'Solutions',
    links: ['Fintech & Payments', 'Web3 & Crypto', 'AI & B2B SaaS', 'SMEs', 'Education', 'Clinics & Local Services', 'Retail & Consumer', 'Professional Services'],
  },
  {
    title: 'Company',
    links: ['About NovaStudio', 'Cases', 'Resources', 'Contact', 'Join Us', 'Partner Network'],
  },
  {
    title: 'NovaOS Ecosystem',
    links: ['Template Marketplace', 'Creator Rewards', 'Academy', 'Case Challenges', 'Points & Credits', 'Certified Creators'],
  },
] as const;

const recommended = ['Marketing AI Agent', 'Sales AI Agent', 'Customer Service AI', 'Data Agent', 'GEO', 'AI CRM', 'AI Analytics', 'AI Academy', 'Private Domain', 'AI Workflow'];

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-blue-100 bg-[#f6f9ff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-blue-100 pb-12 lg:grid-cols-[0.9fr_2.4fr_0.8fr]">
          <div>
            <BrandLogo />
            <p className="mt-8 text-lg font-semibold text-slate-800">Contact Us</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">hello@novastudio.world</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
              <a href="/contact" className="hover:text-blue-700">Consultation</a>
              <button onClick={onOpenModal} className="hover:text-blue-700">NovaOS</button>
              <a href="/contact" className="hover:text-blue-700">Book Demo</a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <a key={link} href={group.title === 'Solutions' ? '/solutions' : group.title === 'Company' ? '/company' : group.title === 'NovaOS Ecosystem' ? '#' : '/products'} onClick={(event) => { if (group.title === 'NovaOS Ecosystem') { event.preventDefault(); onOpenModal(); } }} className="text-sm text-slate-500 transition hover:text-blue-700">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-950">Follow Us</h3>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto h-24 w-24 rounded-xl bg-[linear-gradient(45deg,#dbeafe_25%,transparent_25%),linear-gradient(-45deg,#dbeafe_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#dbeafe_75%),linear-gradient(-45deg,transparent_75%,#dbeafe_75%)] bg-[length:18px_18px]" />
                <p className="mt-3 text-sm text-slate-500">LinkedIn</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto h-24 w-24 rounded-xl bg-[linear-gradient(90deg,#e0f2fe_50%,transparent_50%),linear-gradient(#e0f2fe_50%,transparent_50%)] bg-[length:16px_16px]" />
                <p className="mt-3 text-sm text-slate-500">X / YouTube</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-b border-blue-100 py-10 lg:grid-cols-[0.14fr_0.86fr]">
          <p className="font-semibold text-slate-800">More</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            {recommended.map((item) => <a key={item} href="/products" className="hover:text-blue-700">{item}</a>)}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 NovaStudio. AI assistant and customer data interface reserved for future integration.</p>
          <div className="flex gap-8"><a href="#" className="hover:text-blue-700">Privacy Policy</a><a href="#" className="hover:text-blue-700">Legal Statement</a></div>
        </div>
      </div>
    </footer>
  );
}
