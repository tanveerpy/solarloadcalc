import type { Metadata } from "next";
import { getArticleData, getSortedArticlesMetadata } from '@/logic/cms-logic';
import ArticleClient from '../ArticleClient';
import { JsonLd } from '@/components/JsonLd';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticleData(slug);

    return {
        title: `${article.title} | Solar Payback Intelligence`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            publishedTime: article.date,
            authors: [article.author],
        },
    };
}

export async function generateStaticParams() {
    const articles = getSortedArticlesMetadata();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleData(slug);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "datePublished": article.date,
        "publisher": {
            "@type": "Organization",
            "name": "Solar Payback",
            "logo": {
                "@type": "ImageObject",
                "url": "https://solar-payback.com/sun-icon.png" // Update when available
            }
        }
    };

    return (
        <>
            <JsonLd data={articleSchema} />
            <ArticleClient article={article} />
        </>
    );
}
