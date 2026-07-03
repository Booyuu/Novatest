import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.novastudio.world';

const routes = [
  '',
  '/products',
  '/solutions',
  '/cases',
  '/academy',
  '/resources',
  '/company',
  '/contact',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
