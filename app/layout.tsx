import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { LanguageProvider } from '@/components/LanguageProvider';
import './globals.css';

const siteUrl = 'https://www.novastudio.world';
const faviconUrl = `${siteUrl}/favicon.png`;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'NovaStudio',
  alternateName: ['NovaStudio AI Marketing OS', 'NovaStudio by NovaOS', 'NovaStudio AI Marketing Operations'],
  url: siteUrl,
  logo: faviconUrl,
  description: 'NovaStudio is the enterprise front door for NovaOS, an AI Marketing Operating System for campaigns, content, GEO/AEO, lead capture and customer growth workflows.',
  disambiguatingDescription: 'This NovaStudio is an AI marketing operations company connected to NovaOS by NovaStudio. It is not NovaStar LED control software, not an LED display media player, not an AMD workstation GUI, and not a general local workstation application.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Singapore',
  },
  sameAs: [
    'https://www.linkedin.com/company/novastudio',
    'https://x.com/novastudio',
    'https://www.instagram.com/novastudio',
    'https://www.youtube.com/@novastudio',
    'https://www.tiktok.com/@novastudio',
  ],
  knowsAbout: [
    'AI marketing operations',
    'Generative engine optimization',
    'Answer engine optimization',
    'AI search optimization',
    'Brand entity cleanliness',
    'Campaign automation',
    'Lead capture systems',
    'AI content engine',
    'Brand Brain',
    'Growth dashboard',
    'Marketing workflow templates',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI Marketing Operations Strategy',
        serviceType: 'AI marketing operations, GEO/AEO, campaign workflow and lead capture system design',
      },
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'NovaStudio',
  alternateName: 'NovaOS by NovaStudio',
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: ['en', 'zh', 'ja', 'ko'],
  description: 'Official website for NovaStudio, the enterprise front door for NovaOS AI Marketing OS.',
  about: [
    'NovaOS by NovaStudio',
    'AI Marketing Operating System',
    'GEO and AEO optimization',
    'AI campaign builder',
    'AI content engine',
    'Lead capture and CRM-ready marketing workflows',
  ],
};

const novaOsSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${siteUrl}/#novaos`,
  name: 'NovaOS by NovaStudio',
  alternateName: ['NovaOS AI Marketing OS', 'NovaOS for AI Marketing Operations', 'NovaOS Marketing Operating System'],
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: siteUrl,
  creator: { '@id': `${siteUrl}/#organization` },
  description: 'NovaOS by NovaStudio is an AI Marketing Operating System for Brand Brain, Campaign Builder, Content Engine, Lead Capture Kit, GEO/AEO Engine, Compliance Copy Checker, Growth Dashboard, Marketplace, Academy and Creator Center workflows.',
  disambiguatingDescription: 'NovaOS by NovaStudio is a web-based AI marketing operating system. It is not a computer operating system, not the historical Nova operating system, not LED control software, and not a workstation GUI.',
  featureList: [
    'Brand Brain',
    'AI Campaign Builder',
    'Content Engine',
    'Lead Capture Kit',
    'GEO / AEO Engine',
    'Compliance Copy Checker',
    'Growth Dashboard',
    'Template Marketplace',
    'Academy',
    'Creator Center',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'High-growth businesses, fintech, Web3, AI SaaS, SMEs, education, clinics, retail and professional services',
  },
};

const geoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#geo-aeo-service`,
  name: 'NovaOS GEO and AEO Optimization',
  provider: { '@id': `${siteUrl}/#organization` },
  serviceType: 'Generative Engine Optimization, Answer Engine Optimization, AI visibility monitoring and brand entity cleanliness analysis',
  areaServed: ['Singapore', 'APAC', 'Global'],
  description: 'NovaOS GEO and AEO workflows help brands improve AI search visibility through answer-ready Q&A, FAQPage schema, Organization schema, comparison pages, authority content, website GEO audits and brand entity disambiguation.',
  knowsAbout: [
    'AI visibility monitoring',
    'brand entity cleanliness',
    'FAQPage JSON-LD',
    'Organization schema',
    'SoftwareApplication schema',
    'AI answer tracking',
    'competitor AI visibility matrix',
  ],
};

const structuredData = [organizationSchema, websiteSchema, novaOsSoftwareSchema, geoServiceSchema];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NovaStudio | NovaOS AI Marketing Operating System',
    template: '%s | NovaStudio',
  },
  description: 'NovaStudio is the enterprise front door for NovaOS by NovaStudio, an AI Marketing Operating System for campaigns, content, GEO/AEO, lead capture and customer growth workflows. This NovaStudio is unrelated to LED control software or workstation GUI products with similar names.',
  keywords: ['NovaStudio', 'NovaOS by NovaStudio', 'NovaOS AI Marketing OS', 'AI Marketing OS', 'AI marketing operations', 'GEO', 'AEO', 'Generative Engine Optimization', 'Answer Engine Optimization', 'AI campaign builder', 'AI content engine', 'lead capture system', 'brand entity cleanliness', 'AI visibility monitoring'],
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      zh: '/?lang=zh',
      ja: '/?lang=ja',
      ko: '/?lang=ko',
    },
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'NovaStudio | NovaOS AI Marketing Operating System',
    description: 'NovaStudio connects NovaOS modules for campaigns, content, GEO/AEO, lead capture and customer growth workflows.',
    siteName: 'NovaStudio',
    images: [faviconUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaStudio | NovaOS AI Marketing Operating System',
    description: 'NovaStudio is the enterprise front door for NovaOS, the AI Marketing OS for high-growth businesses.',
    images: [faviconUrl],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f9ff',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
