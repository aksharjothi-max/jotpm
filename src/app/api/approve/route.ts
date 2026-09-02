import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SECRET = process.env.APPROVAL_SECRET || "jotpm-approval-secret";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = "aksharjothi-max/jotpm";
const DRAFTS_PATH = "src/lib/drafts.json";

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
  if (!res.ok) throw new Error(`Failed to fetch ${filePath}: ${res.status}`);
  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString();
  return { content: JSON.parse(content), sha: data.sha };
}

async function updateFileOnGitHub(filePath: string, content: any, sha: string, message: string) {
  const body = {
    message,
    content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
    sha,
  };
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to update ${filePath}: ${res.status} ${err}`);
  }
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
    const { content: drafts, sha } = await getFileFromGitHub(DRAFTS_PATH);
    const draftIndex = drafts.findIndex((d: any) => d.slug === slug);
    
    if (draftIndex < 0) {
      return NextResponse.json({ error: "Draft not found" }, { status: 404 });
    }

    const draft = drafts[draftIndex];

    if (draft.status === "approved") {
      return NextResponse.json({ message: "Already approved", slug, title: draft.title });
    }

    // Mark as approved
    drafts[draftIndex].status = "approved";
    await updateFileOnGitHub(DRAFTS_PATH, drafts, sha, `Approve: ${draft.title}`);

    return NextResponse.json({ message: "Approved", slug, title: draft.title });
  } catch (err: any) {
    console.error("Approval error:", err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
