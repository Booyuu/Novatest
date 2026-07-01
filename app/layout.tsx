import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NovaStudio | AI Marketing Operating System',
  description:
    'NovaStudio helps high-growth businesses automate content, campaigns, localization, acquisition, and growth through AI-powered marketing workflows.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
