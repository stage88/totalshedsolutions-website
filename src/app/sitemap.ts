import type { MetadataRoute } from 'next';

import { siteMetadata } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteMetadata.siteUrl;

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/sheds`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
