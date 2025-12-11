import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // refresh daily

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://onyebftech.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}

