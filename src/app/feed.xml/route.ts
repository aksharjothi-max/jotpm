import path from "path";
import fs from "fs";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

function getArticles(): Article[] {
  const PUBLISHED_FILE = path.join(process.cwd(), "src/lib/published.json");
  if (!fs.existsSync(PUBLISHED_FILE)) return [];
  return JSON.parse(fs.readFileSync(PUBLISHED_FILE, "utf-8"));
}

export async function GET() {
  const articles = getArticles();
  const siteUrl = "https://jotpm.vercel.app";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JotPM — Product Management &amp; Growth Strategy</title>
    <link>${siteUrl}</link>
    <description>Product management insights, growth strategy frameworks, and lessons from the trenches of building products that matter.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description><![CDATA[${article.excerpt}]]></description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
