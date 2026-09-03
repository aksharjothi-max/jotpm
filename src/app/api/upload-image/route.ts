import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = "aksharjothi-max/jotpm";

async function uploadToGitHub(path: string, content: Buffer, message: string) {
  // Check if file exists to get SHA
  const existing = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const sha = existing.ok ? (await existing.json()).sha : undefined;

  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: content.toString("base64"),
      sha,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub upload failed: ${res.status} ${err}`);
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const slug = formData.get("slug") as string;
    const token = formData.get("token") as string;
    const file = formData.get("image") as File;

    if (!slug || !token || !file) {
      return NextResponse.json({ error: "Missing slug, token, or image" }, { status: 400 });
    }

    // Verify token
    const expected = crypto.createHmac("sha256", "jotpm-approval-secret").update(slug).digest("hex").slice(0, 16);
    if (token !== expected) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    // Validate file
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be under 5MB" }, { status: 400 });
    }

    // Convert to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determine extension
    const ext = file.type.split("/")[1] || "png";
    const path = `public/images/blog/${slug}.${ext}`;

    // Upload to GitHub
    await uploadToGitHub(path, buffer, `Add image for ${slug}`);

    return NextResponse.json({ success: true, path: `/images/blog/${slug}.${ext}` });
  } catch (err: any) {
    console.error("Image upload error:", err);
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 });
  }
}
