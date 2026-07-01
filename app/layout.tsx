import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NovaStudio | AI Marketing Operating System',
  description: 'NovaStudio builds AI-powered marketing operations for high-growth businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
