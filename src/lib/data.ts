import publishedData from "./published.json";
import draftsData from "./drafts.json";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

export interface Draft extends Article {
  status: "pending" | "approved" | "published";
  createdAt: string;
}

export function getArticles(): Article[] {
  return publishedData as Article[];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getDrafts(): Draft[] {
  return draftsData as Draft[];
}

export function getDraftBySlug(slug: string): Draft | undefined {
  return getDrafts().find((d) => d.slug === slug);
}
