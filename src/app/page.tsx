import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function Home() {
  const articles = getArticles();
  const latest = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero - Clean Apple-style */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white mb-6 tracking-tight">
            Jot<span className="text-[#E87532]">PM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
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

      {/* Latest Article - Full-width card */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#173B57] tracking-tight">Latest Writing</h2>
            <Link href="/blog" className="text-sm text-[#E87532] font-medium hover:underline">View all →</Link>
          </div>

          <Link href={`/blog/${latest.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                {latest.image && (
                  <img
                    src={latest.image}
                    alt={latest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs text-gray-500 mb-2">{latest.date} · {latest.readTime}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#173B57] mb-3 group-hover:text-[#E87532] transition-colors">
                  {latest.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{latest.excerpt}</p>
                <span className="text-sm text-[#E87532] font-medium">Read more →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Articles - 3 Column Grid */}
      <section className="bg-[#F8FAFC] pb-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
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
                <div className="p-5">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <h3 className="text-base font-semibold text-[#173B57] mt-1 mb-2 group-hover:text-[#E87532] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Clean Apple-style */}
      <section className="bg-black py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto mb-10">
            Have a growth challenge, want to collaborate, or just want to talk product? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:aksharjothi@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-white text-black font-medium text-base hover:bg-gray-100 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
