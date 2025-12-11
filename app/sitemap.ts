import type { MetadataRoute } from 'next';
import servicesData from '../data/services.json';

export const dynamic = 'force-static';
export const revalidate = 86400; // refresh daily

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onyebftech.com';
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/about',
        '/services',
        '/Gallery',
        '/contact',
    ].map((path) => ({
        url: `${baseUrl}${path}/`,
        lastModified: now,
    }));

    const serviceRoutes: MetadataRoute.Sitemap = servicesData.services.map((service) => ({
        url: `${baseUrl}/services/${service.id}/`,
        lastModified: now,
    }));

    return [...staticRoutes, ...serviceRoutes];
}

