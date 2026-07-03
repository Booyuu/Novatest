import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ResourcesHubContent } from '@/components/ResourcesHubContent';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'AI Marketing, GEO and AEO Resources',
  description: 'NovaStudio resources for GEO, AEO, AI marketing operations, brand entity cleanup, AI video workflows, lead capture and NovaOS growth systems.',
  alternates: { canonical: `${siteUrl}/resources` },
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <ResourcesHubContent />
    </PageShell>
  );
}
