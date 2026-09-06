import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function BlogPage() {
  const articles = getArticles();

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
          Blog
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          Practical frameworks, honest lessons, and the occasional hot take — from a PM who's been in the trenches.
        </p>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 card-hover"
            >
              <div className="flex flex-col md:flex-row gap-0">
                {article.image && (
                  <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
                    <span className="text-xs text-gray-300 dark:text-gray-600">·</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
