"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const articles = [
  {
    slug: "growth-loops-not-funnels",
    title: "Growth Loops, Not Funnels",
    excerpt: "Why the most resilient growth strategies abandon the linear pipeline in favor of self-reinforcing systems.",
    image: "/images/blog/growth-loops-not-funnels.png",
  },
  {
    slug: "north-star-metric",
    title: "Finding Your North Star",
    excerpt: "Most teams drown in dashboards. The best ones align around a single measure of customer value.",
    image: "/images/blog/north-star-metric.png",
  },
  {
    slug: "shipping-is-a-skill",
    title: "Shipping Is a Skill",
    excerpt: "The gap between a good idea and a live feature is where most PMs stall.",
    image: "/images/blog/shipping-is-a-skill.png",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <div className={`text-center px-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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

      {/* Featured Article */}
      <section className="bg-[#FBFBFD] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-12 tracking-tight">
            Featured Writing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={`/blog/${articles[0].slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 card-hover"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {articles[0].title}
                </h3>
                <p className="text-sm text-white/80">{articles[0].excerpt}</p>
              </div>
            </Link>
            <div className="flex flex-col gap-8">
              {articles.slice(1).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex gap-6 items-start p-4 rounded-2xl hover:bg-white transition-all"
                >
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2 group-hover:text-[#0071E3] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#86868B] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
