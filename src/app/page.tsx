import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function Home() {
  const articles = getArticles();
  const latest = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-4 tracking-tight">
            Jot<span className="text-blue-400">PM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light">
            Product management insights, growth strategy frameworks, and lessons from the trenches.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all"
            >
              Read the Blog
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-950" />
      </section>

      {/* Featured Latest Article */}
      <section className="bg-white dark:bg-gray-950 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
              Latest Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              View all →
            </Link>
          </div>

          {/* Latest Article - Image + Text Side by Side */}
          <Link
            href={`/blog/${latest.slug}`}
            className="group block rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 card-hover mb-8"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                {latest.image && (
                  <img
                    src={latest.image}
                    alt={latest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-3">{latest.date} · {latest.readTime}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {latest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {latest.excerpt}
                </p>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Read more →
                </span>
              </div>
            </div>
          </Link>

          {/* Other Articles - 3 Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 card-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto mb-12">
            Have a growth challenge, want to collaborate, or just want to talk product? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:aksharjothi@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-base hover:bg-blue-700 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
