import { getArticles, getArticleBySlug, formatDate } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import GiscusComments from "@/components/GiscusComments";
import ArticleJsonLd from "@/components/ArticleJsonLd";

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

  const articles = getArticles();
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const related = articles.filter((_, i) => i !== currentIndex).slice(0, 3);

  return (
    <>
      <ArticleJsonLd slug={slug} />
      <article className="min-h-screen bg-[#FBFBFD] py-12">
        <div className="max-w-[980px] mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#86868B] hover:text-[#0071E3] transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          {article.image && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-[#D2D2D7]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-[#86868B]">{formatDate(article.date)}</span>
              <span className="text-sm text-[#D2D2D7]">·</span>
              <span className="text-sm text-[#86868B]">{article.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#1D1D1F]">
              {article.title}
            </h1>
            <p className="text-lg text-[#424245] leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-8 border-t border-[#D2D2D7]">
              <h2 className="text-xl font-semibold text-[#1D1D1F] mb-6">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-xl overflow-hidden bg-white border border-[#D2D2D7] card-hover"
                  >
                    {r.image && (
                      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                        <img
                          src={r.image}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <span className="text-xs text-[#86868B] mt-1 block">
                        {formatDate(r.date)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments */}
          <div className="mt-16 pt-8 border-t border-[#D2D2D7]">
            <h2 className="text-xl font-semibold text-[#1D1D1F] mb-6">
              Comments
            </h2>
            <GiscusComments />
          </div>
        </div>
      </article>
    </>
  );
}
