import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function Home() {
  const articles = getArticles();
  const latest = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero — Compact, editorial */}
      <section className="relative bg-[#0F2740] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2740] via-[#173B57] to-[#1E4D7B]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative text-center px-6 max-w-4xl mx-auto py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E87532] animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Product Management Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-4 tracking-tight leading-none">
            Jot<span className="text-[#E87532]">PM</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Product management insights, growth strategy frameworks, and lessons from the trenches of building products that matter.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-7 py-3 rounded-full bg-[#E87532] text-white font-medium text-sm hover:bg-[#C05E28] transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
            >
              Read the Blog
            </Link>
            <Link
              href="/about"
              className="px-7 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              About Me
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Featured Article — Magazine split, rich */}
      <section className="bg-[#F8FAFC] pt-12 pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm font-medium text-[#E87532] mb-1 uppercase tracking-wide">Featured</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#17202A] tracking-tight">
                Latest Writing
              </h2>
            </div>
            <Link href="/blog" className="text-sm text-[#E87532] font-medium hover:underline">
              View all →
            </Link>
          </div>

          <Link
            href={`/blog/${latest.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 featured-card"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden bg-gray-100">
                {latest.image && (
                  <img
                    src={latest.image}
                    alt={latest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs text-[#8492A6] mb-2 uppercase tracking-wide font-medium">
                  {latest.date} · {latest.readTime}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#17202A] mb-3 group-hover:text-[#E87532] transition-colors leading-tight">
                  {latest.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  {latest.excerpt}
                </p>
                <span className="text-sm text-[#E87532] font-medium">Read more →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid — 2 Column, denser, editorial */}
      <section className="bg-[#F8FAFC] pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 article-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
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

      {/* About — Editorial dark section */}
      <section id="about" className="bg-[#0F2740] py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-[#E87532] mb-3 uppercase tracking-wide">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
            The intersection of product, growth, and execution
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
            I've spent my career at the intersection of product management and growth strategy — the place where user needs, business goals, and technical reality collide. That vantage point changes how you see problems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Product Strategy", desc: "From vision to roadmap" },
              { num: "02", title: "Growth Loops", desc: "Compound, don't leak" },
              { num: "03", title: "User Research", desc: "Evidence over opinion" },
              { num: "04", title: "Execution", desc: "Ship, measure, learn" },
            ].map((item) => (
              <div
                key={item.num}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-xs font-medium text-[#E87532]">{item.num}</span>
                <h3 className="font-semibold text-white mt-2 mb-1">{item.title}</h3>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — Compact, premium */}
      <section id="contact" className="bg-[#F8FAFC] py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#17202A] mb-6 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-[#4A5568] max-w-lg mx-auto mb-8">
            Have a growth challenge, want to collaborate, or just want to talk product? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:aksharjothi@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-[#E87532] text-white font-medium text-base hover:bg-[#C05E28] transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
