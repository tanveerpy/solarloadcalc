import { MetadataRoute } from 'next';

export const dynamic = "force-static";
import { getSortedArticlesMetadata } from '@/logic/cms-logic';

export default function sitemap(): MetadataRoute.Sitemap {
    const articles = getSortedArticlesMetadata();
    const baseUrl = 'https://solar-payback.com';

    const articleEntries = articles.map((article) => ({
        url: `${baseUrl}/knowledge-hub/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/knowledge-hub`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...articleEntries,
    ];
}
