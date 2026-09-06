import { getArticleBySlug } from "@/lib/data";

export default function ArticleJsonLd({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Akshar Jothi",
    },
    publisher: {
      "@type": "Organization",
      name: "JotPM",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
