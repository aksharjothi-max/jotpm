"use client";

import { useState } from "react";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  const suffix = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  
  return `${month} ${day}${suffix(day)}, ${year}`;
}

export default function BlogPageClient({ articles }: { articles: Article[] }) {
  const [filtered, setFiltered] = useState(articles);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFiltered(articles);
      return;
    }
    const q = query.toLowerCase();
    setFiltered(
      articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q)
      )
    );
  };

  return (
    <section className="min-h-screen bg-[#FBFBFD] py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
          Blog
        </h1>
        <p className="text-lg text-[#86868B] mb-8">
          Practical frameworks, honest lessons, and the occasional hot take — from a PM who's been in the trenches.
        </p>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0071E3] focus:outline-none text-sm"
          />
        </div>

        <div className="space-y-6">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white border border-[#D2D2D7] card-hover"
            >
              <div className="flex flex-col md:flex-row gap-0">
                {article.image && (
                  <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[#86868B]">{formatDate(article.date)}</span>
                    <span className="text-xs text-[#D2D2D7]">·</span>
                    <span className="text-xs text-[#86868B]">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors mb-2">
                    {article.title}
                  </h2>
                  <p className="text-[#424245] leading-relaxed line-clamp-2">
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
