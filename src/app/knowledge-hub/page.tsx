import type { Metadata } from "next";
import { getSortedArticlesMetadata } from '@/logic/cms-logic';
import ArticlesClient from './ArticlesClient';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
    title: "Solar Intelligence Hub – Expert Research & Payback Analysis",
    description: "Deep-dive technical guides, regulatory updates, and financial analysis to master your solar investment. 30+ expert-vetted research articles.",
    keywords: ["solar intelligence", "solar research", "solar payback guides", "solar investment analysis", "solar regulatory updates"],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://solar-payback.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://solar-payback.com/knowledge-hub"
        }
    ]
};

export default async function ArticlesPage() {
    const articles = getSortedArticlesMetadata();

    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            <ArticlesClient articles={articles} />
        </>
    );
}
