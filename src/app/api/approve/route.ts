import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SECRET = process.env.APPROVAL_SECRET || "jotpm-approval-secret";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = "aksharjothi-max/jotpm";
const DRAFTS_PATH = "src/lib/drafts.json";
const PUBLISHED_PATH = "src/lib/published.json";

function generateToken(slug: string): string {
  return crypto.createHmac("sha256", SECRET).update(slug).digest("hex").slice(0, 16);
}

async function getFileFromGitHub(filePath: string) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${filePath}`);
  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString();
  return { content: JSON.parse(content), sha: data.sha };
}

async function updateFileOnGitHub(filePath: string, content: any, sha: string, message: string) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
      sha,
    }),
  });
  if (!res.ok) throw new Error(`Failed to update ${filePath}`);
  return res.json();
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const token = searchParams.get("token");

  if (!slug || !token) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const expected = generateToken(slug);
  if (token !== expected) {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }

  try {
    // Get drafts from GitHub
    const { content: drafts, sha: draftsSha } = await getFileFromGitHub(DRAFTS_PATH);
    const draft = drafts.find((d: any) => d.slug === slug);

    if (!draft) {
      return NextResponse.json({ error: "Draft not found" }, { status: 404 });
    }

    if (draft.status === "approved") {
      return NextResponse.json({ message: "Already approved", slug, title: draft.title });
    }

    // Mark as approved in drafts
    draft.status = "approved";
    await updateFileOnGitHub(DRAFTS_PATH, drafts, draftsSha, `Approve: ${draft.title}`);

    // Get published articles
    const { content: published, sha: publishedSha } = await getFileFromGitHub(PUBLISHED_PATH);

    // Add to published
    published.push({
      slug: draft.slug,
      title: draft.title,
      excerpt: draft.excerpt,
      date: draft.date,
      readTime: draft.readTime,
      content: draft.content,
      image: draft.image || null,
    });

    // Remove from drafts
    const updatedDrafts = drafts.filter((d: any) => d.slug !== slug);

    // Update both files
    await updateFileOnGitHub(DRAFTS_PATH, updatedDrafts, draftsSha, `Remove published draft: ${draft.title}`);
    await updateFileOnGitHub(PUBLISHED_PATH, published, publishedSha, `Publish: ${draft.title}`);

    return NextResponse.json({ message: "Approved", slug, title: draft.title });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
