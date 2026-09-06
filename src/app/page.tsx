"use client";

import Link from "next/link";
import { getArticles } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const articles = getArticles();
  const latest = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0F2740] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2740] via-[#173B57] to-[#1E4D7B]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative text-center px-6 max-w-5xl mx-auto py-32 md:py-40">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E87532] animate-pulse" />
              <span className="text-sm text-white/90 font-medium">Product Management Insights</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white mb-6 tracking-tight leading-none">
              Jot<span className="text-[#E87532]">PM</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Product management insights, growth strategy frameworks, and lessons from the trenches of building products that matter.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/blog"
                className="px-8 py-4 rounded-full bg-[#E87532] text-white font-medium text-base hover:bg-[#C05E28] transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
              >
                Read the Blog
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-base hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                About Me
              </Link>
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Blog Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-medium text-[#E87532] mb-2 uppercase tracking-wide">Writing</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#17202A] tracking-tight">
                  Latest Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm text-[#E87532] font-medium hover:underline"
              >
                View all →
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 100}>
                <Link
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0F2740] py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-[#E87532] mb-4 uppercase tracking-wide">About</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
              The intersection of product, growth, and execution
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              I've spent my career at the intersection of product management and growth strategy — the place where user needs, business goals, and technical reality collide. That vantage point changes how you see problems.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Product Strategy", desc: "From vision to roadmap" },
              { num: "02", title: "Growth Loops", desc: "Compound, don't leak" },
              { num: "03", title: "User Research", desc: "Evidence over opinion" },
              { num: "04", title: "Execution", desc: "Ship, measure, learn" },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-xs font-medium text-[#E87532]">{item.num}</span>
                  <h3 className="font-semibold text-white mt-2 mb-1">{item.title}</h3>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#F8FAFC] py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#17202A] mb-8 tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-[#4A5568] max-w-lg mx-auto mb-12">
              Have a growth challenge, want to collaborate, or just want to talk product? I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:aksharjothi@gmail.com"
              className="inline-block px-8 py-4 rounded-full bg-[#E87532] text-white font-medium text-base hover:bg-[#C05E28] transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
            >
              Get in Touch
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
