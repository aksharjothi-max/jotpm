import { getArticles } from "@/lib/data";
import BlogPageClient from "./BlogPageClient";

export default function BlogPage() {
  const articles = getArticles();

  return <BlogPageClient articles={articles} />;
}
