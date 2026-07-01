import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { LanguageProvider } from '@/components/LanguageProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'NovaStudio | AI Marketing Operating System',
  description: 'NovaStudio is an AI-powered marketing operations company building the AI Marketing Operating System for high-growth businesses.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f9ff',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
