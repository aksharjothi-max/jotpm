import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function BlogPage() {
  const articles = getArticles();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-[var(--accent)] mb-4">Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Writing on product & growth
        </h1>
        <p className="text-[var(--muted)] leading-relaxed">
          Practical frameworks, honest lessons, and the occasional hot take —
          from a PM who's been in the trenches.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block p-6 md:p-8 rounded-xl border border-white/5 bg-[var(--card)] card-hover"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[var(--muted)]">
                    {article.date}
                  </span>
                  <span className="text-xs text-[var(--accent)]">·</span>
                  <span className="text-xs text-[var(--muted)]">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold group-hover:text-[var(--accent)] transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <span className="text-[var(--accent)] text-sm font-medium whitespace-nowrap">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
