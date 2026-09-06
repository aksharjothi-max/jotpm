export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

export function getArticles(): Article[] {
  if (typeof window !== "undefined") return [];
  
  const fs = require("fs");
  const path = require("path");
  
  const PUBLISHED_FILE = path.join(process.cwd(), "src/lib/published.json");
  if (!fs.existsSync(PUBLISHED_FILE)) return [];
  
  const articles: Article[] = JSON.parse(fs.readFileSync(PUBLISHED_FILE, "utf-8"));
  return articles.sort((a: Article, b: Article) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
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
