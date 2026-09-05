import fs from "fs";
import path from "path";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

const PUBLISHED_FILE = path.join(process.cwd(), "src/lib/published.json");

export function getArticles(): Article[] {
  if (!fs.existsSync(PUBLISHED_FILE)) return [];
  return JSON.parse(fs.readFileSync(PUBLISHED_FILE, "utf-8"));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}
