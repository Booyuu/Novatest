import type { Metadata } from 'next';
import { NovaOSContent } from '@/components/NovaOSContent';
import { PageShell } from '@/components/PageShell';

const siteUrl = 'https://www.novastudio.world';

export const metadata: Metadata = {
  title: 'NovaOS AI Marketing OS',
  description: 'NovaOS by NovaStudio is an AI Marketing Operating System for Brand Brain, Campaign Builder, GEO/AEO, AI content, AI video workflows, publishing, lead capture and growth dashboards.',
  alternates: { canonical: `${siteUrl}/novaos` },
};

const modules = ['Brand Brain', 'Campaign Builder', 'GEO / AEO Engine', 'Content Engine', 'AI Video Workflow', 'Publishing Hub', 'Lead Capture Kit', 'Growth Dashboard'];

export default function NovaOSPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NovaOS by NovaStudio',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${siteUrl}/novaos`,
    creator: { '@type': 'Organization', name: 'NovaStudio', url: siteUrl },
    description: 'NovaOS is an AI Marketing Operating System for GEO/AEO, content, AI video workflows, publishing, lead capture and growth operations.',
    featureList: modules,
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <NovaOSContent />
    </PageShell>
  );
}
