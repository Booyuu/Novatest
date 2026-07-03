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
  name: 'NovaStudio',
  url: siteUrl,
  logo: faviconUrl,
  description: 'NovaStudio is the enterprise front door for NovaOS, an AI Marketing Operating System for high-growth businesses.',
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
    'Campaign automation',
    'Lead capture systems',
    'AI content engine',
    'Brand Brain',
    'Growth dashboard',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NovaStudio | AI Marketing Operating System',
    template: '%s | NovaStudio',
  },
  description: 'NovaStudio is the enterprise front door for NovaOS, an AI Marketing Operating System for campaigns, content, GEO/AEO, lead capture and customer growth workflows.',
  keywords: ['NovaStudio', 'NovaOS', 'AI Marketing OS', 'AI marketing operations', 'GEO', 'AEO', 'Generative Engine Optimization', 'Answer Engine Optimization', 'AI campaign builder', 'AI content engine', 'lead capture system'],
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
    title: 'NovaStudio | AI Marketing Operating System',
    description: 'NovaStudio connects NovaOS modules for campaigns, content, GEO/AEO, lead capture and customer growth workflows.',
    siteName: 'NovaStudio',
    images: [faviconUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaStudio | AI Marketing Operating System',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
