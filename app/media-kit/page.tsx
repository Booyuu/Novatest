import type { Metadata } from 'next';
import { MediaKitContent } from '@/components/MediaKitContent';
import { PageShell } from '@/components/PageShell';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'NovaStudio Media Kit',
  description: 'Official NovaStudio media kit with brand positioning, NovaOS description, company boilerplate, contact information and AI-search disambiguation language.',
  alternates: { canonical: `${siteUrl}/media-kit` },
};

export default function MediaKitPage() {
  const mediaSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'NovaStudio Media Kit',
    url: `${siteUrl}/media-kit`,
    about: { '@type': 'Organization', name: 'NovaStudio', url: siteUrl },
    description: 'Official media kit for NovaStudio and NovaOS with brand positioning, boilerplate and disambiguation language.',
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaSchema) }} />
      <MediaKitContent />
    </PageShell>
  );
}
