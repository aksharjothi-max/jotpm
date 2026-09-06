import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function BlogPage() {
  const articles = getArticles();
  const latest = articles[0];
  const rest = articles.slice(1);

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium text-[#E87532] mb-2 uppercase tracking-wide">Blog</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#17202A] tracking-tight mb-4">
            Writing on Product & Growth
          </h1>
          <p className="text-lg text-[#4A5568] max-w-2xl">
            Practical frameworks, honest lessons, and the occasional hot take — from a PM who's been in the trenches.
          </p>
        </div>

        {/* Featured Article - Magazine Style */}
        <Link
          href={`/blog/${latest.slug}`}
          className="group block rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 featured-card mb-12"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-full overflow-hidden bg-gray-100">
              {latest.image && (
                <img
                  src={latest.image}
                  alt={latest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs text-[#8492A6] mb-3 uppercase tracking-wide font-medium">
                {latest.date} · {latest.readTime}
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#17202A] mb-4 group-hover:text-[#E87532] transition-colors leading-tight">
                {latest.title}
              </h3>
              <p className="text-[#4A5568] leading-relaxed mb-6 text-lg">
                {latest.excerpt}
              </p>
              <span className="text-sm text-[#E87532] font-medium">Read more →</span>
            </div>
          </div>
        </Link>

        {/* Other Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 article-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6">
                <span className="text-xs text-[#8492A6] uppercase tracking-wide font-medium">{article.date}</span>
                <h3 className="text-lg font-semibold text-[#17202A] mt-2 mb-2 group-hover:text-[#E87532] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
