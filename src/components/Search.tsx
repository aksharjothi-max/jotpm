"use client";

import { useState, useEffect, useMemo } from "react";
import { getArticles } from "@/lib/data";

export default function Search({ onResults }: { onResults: (results: any[]) => void }) {
  const [query, setQuery] = useState("");
  const articles = getArticles();

  const results = useMemo(() => {
    if (!query.trim()) return articles;
    const q = query.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q)
    );
  }, [query, articles]);

  useEffect(() => {
    onResults(results);
  }, [results, onResults]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0071E3] focus:outline-none text-sm"
      />
      {query && (
        <span className="absolute right-3 top-2 text-xs text-gray-400">
          {results.length} result{results.length !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
