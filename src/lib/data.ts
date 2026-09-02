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

export interface Draft extends Article {
  status: "pending" | "approved" | "published";
  createdAt: string;
}

const DRAFTS_FILE = path.join(process.cwd(), "src/lib/drafts.json");

export function getDrafts(): Draft[] {
  if (!fs.existsSync(DRAFTS_FILE)) return [];
  return JSON.parse(fs.readFileSync(DRAFTS_FILE, "utf-8"));
}

export function getDraftBySlug(slug: string): Draft | undefined {
  return getDrafts().find((d) => d.slug === slug);
}

export function saveDraft(draft: Draft): void {
  const drafts = getDrafts();
  const existing = drafts.findIndex((d) => d.slug === draft.slug);
  if (existing >= 0) {
    drafts[existing] = draft;
  } else {
    drafts.push(draft);
  }
  fs.writeFileSync(DRAFTS_FILE, JSON.stringify(drafts, null, 2));
}

export function getArticles(): Article[] {
  // Read from published articles file or fall back to articles.ts
  const publishedFile = path.join(process.cwd(), "src/lib/published.json");
  if (fs.existsSync(publishedFile)) {
    return JSON.parse(fs.readFileSync(publishedFile, "utf-8"));
  }
  return [];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}
