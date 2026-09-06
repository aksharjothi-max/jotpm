import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function Home() {
  const articles = getArticles();
  const latest = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero - Apple-style dark section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-semibold text-white mb-6 tracking-tight">
            Jot<span className="text-[#E87532]">PM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Product management insights, growth strategy frameworks, and lessons from the trenches.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/blog"
              className="px-8 py-4 rounded-full bg-white text-black font-medium text-base hover:bg-gray-100 transition-all"
            >
              Read the Blog
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-base hover:bg-white/10 transition-all"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article - Full-width hero card */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Latest Writing</h2>
            <Link href="/blog" className="text-sm text-[#E87532] font-medium hover:underline">View all →</Link>
          </div>

          <Link href={`/blog/${latest.slug}`} className="group block rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300">
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
                <span className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{latest.date} · {latest.readTime}</span>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 group-hover:text-[#E87532] transition-colors leading-tight">
                  {latest.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{latest.excerpt}</p>
                <span className="text-sm text-[#E87532] font-medium">Read more →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Articles - Apple-style grid */}
      <section className="bg-[#F8FAFC] pb-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
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
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{article.date}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-[#E87532] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}