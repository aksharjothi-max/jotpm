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
            <span className="text-sm text-[#86868B]">{article.date}</span>
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
      </div>
    </article>
  );
}
