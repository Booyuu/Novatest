import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { LanguageProvider } from '@/components/LanguageProvider';
import './globals.css';

const faviconUrl = 'https://www.novastudio.world/favicon.png';

export const metadata: Metadata = {
  title: 'NovaStudio | AI Marketing Operating System',
  description: 'NovaStudio is an AI-powered marketing operations company building the AI Marketing Operating System for high-growth businesses.',
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
  openGraph: {
    title: 'NovaStudio | AI Marketing Operating System',
    description: 'NovaStudio is building the AI Marketing OS for high-growth businesses.',
    images: [faviconUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaStudio | AI Marketing Operating System',
    description: 'NovaStudio is building the AI Marketing OS for high-growth businesses.',
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
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
