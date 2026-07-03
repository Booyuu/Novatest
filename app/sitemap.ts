import type { MetadataRoute } from 'next';
import { resourceArticles } from '@/lib/resourceArticles';

const baseUrl = 'https://www.novastudio.world';

const routes = [
  '',
  '/novaos',
  '/products',
  '/solutions',
  '/cases',
  '/academy',
  '/resources',
  '/media-kit',
  '/company',
  '/contact',
  '/privacy',
  ...resourceArticles.map((article) => `/resources/${article.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/resources' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/novaos' || route === '/resources' ? 0.9 : 0.8,
  }));
}
