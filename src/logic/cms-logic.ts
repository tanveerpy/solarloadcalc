import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const articlesDirectory = path.join(process.cwd(), 'articles');

export interface ArticleMetadata {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    category: string;
    banner?: string;
    bannerAlt?: string;
    imagePrompt?: string;
}

export interface ArticleData extends ArticleMetadata {
    contentHtml: string;
}

export function getSortedArticlesMetadata(): ArticleMetadata[] {
    // Get file names under /articles
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the article metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...(matterResult.data as Omit<ArticleMetadata, 'slug'>),
        };
    });

    // Sort articles by date
    return allArticlesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getArticleData(slug: string): Promise<ArticleData> {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the article metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(remarkGfm)
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
        slug,
        contentHtml,
        ...(matterResult.data as Omit<ArticleMetadata, 'slug'>),
    };
}
