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
            Jot<span className="text-[#0071E3]">PM</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#86868B] mb-8 max-w-2xl mx-auto font-light">
            Product management insights, growth strategy frameworks, and lessons from the trenches.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-full bg-[#0071E3] text-white font-medium text-sm hover:bg-blue-600 transition-all"
            >
              Read the Blog
            </Link>
            <Link
              href="/#about"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBFBFD]" />
      </section>

      {/* Featured Latest Article */}
      <section className="bg-[#FBFBFD] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-12 tracking-tight">
            Latest Writing
          </h2>

          {/* Latest Article - Large Hero Style */}
          <Link
            href={`/blog/${latest.slug}`}
            className="group block rounded-3xl overflow-hidden bg-white border border-[#D2D2D7] card-hover mb-8"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100">
                {latest.image && (
                  <img
                    src={latest.image}
                    alt={latest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs text-[#86868B] mb-3">{latest.date} · {latest.readTime}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] mb-4 group-hover:text-[#0071E3] transition-colors">
                  {latest.title}
                </h3>
                <p className="text-[#424245] leading-relaxed mb-6">
                  {latest.excerpt}
                </p>
                <span className="text-sm text-[#0071E3] font-medium">
                  Read more →
                </span>
              </div>
            </div>
          </Link>

          {/* Other Articles - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-[#D2D2D7] card-hover"
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
                  <span className="text-xs text-[#86868B]">{article.date} · {article.readTime}</span>
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mt-2 mb-2 group-hover:text-[#0071E3] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#424245] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-[#86868B] leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            I've spent my career at the intersection of product management and growth strategy — the place where user needs, business goals, and technical reality collide. That vantage point changes how you see problems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Product Strategy" },
              { num: "02", title: "Growth Loops" },
              { num: "03", title: "User Research" },
              { num: "04", title: "Execution" },
            ].map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-xs font-medium text-[#0071E3]">{item.num}</span>
                <h3 className="font-semibold text-white mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#FBFBFD] py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-8 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-[#86868B] max-w-lg mx-auto mb-12">
            Have a growth challenge, want to collaborate, or just want to talk product? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:aksharjothi@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-[#0071E3] text-white font-medium text-base hover:bg-blue-600 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
