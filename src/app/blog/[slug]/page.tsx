import { getArticles, getArticleBySlug } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="max-w-6xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-[#8492A6] hover:text-[#17202A] transition-colors mb-12"
      >
        ← Back to Blog
      </Link>

      {article.image && (
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto"
          />
        </div>
      )}

      <header className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-[#8492A6]">{article.date}</span>
          <span className="text-sm text-[#E87532]">·</span>
          <span className="text-sm text-[#8492A6]">{article.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#17202A]">
          {article.title}
        </h1>
        <p className="text-lg text-[#4A5568] leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
