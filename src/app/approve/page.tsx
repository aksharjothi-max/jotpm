"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function ApproveContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [token, setToken] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    const s = searchParams.get("slug");
    const t = searchParams.get("token");
    if (!s || !t) {
      setStatus("error");
      return;
    }
    setSlug(s);
    setToken(t);

    // Fetch draft info
    fetch(`/api/approve?slug=${s}&token=${t}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Approved" || data.message === "Already approved") {
          setStatus("success");
          setTitle(data.title);
        } else if (data.error === "Draft not found") {
          setStatus("error");
        } else {
          setStatus("success");
          setTitle(data.title);
        }
      })
      .catch(() => setStatus("error"));
  }, [searchParams]);

  const handleApprove = async () => {
    const res = await fetch(`/api/approve?slug=${slug}&token=${token}`);
    const data = await res.json();
    if (data.message === "Approved" || data.message === "Already approved") {
      setStatus("success");
      setTitle(data.title);
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("token", token);
    formData.append("image", image);

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setUploaded(true);
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] text-[#17202A]">
      <div className="max-w-md mx-auto p-8 rounded-xl border border-gray-200 bg-white text-center shadow-sm">
        {status === "loading" && (
          <div className="animate-pulse text-[var(--accent)] text-lg">Loading...</div>
        )}

        {status === "success" && (
          <div>
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-2xl font-bold mb-2 text-green-600">Article Approved</h1>
            <p className="text-gray-600 mb-4">
              &ldquo;{title}&rdquo; has been approved and will be published shortly.
            </p>
            <p className="text-sm text-gray-500">
              The blog will update automatically within a few minutes.
            </p>
          </div>
        )}

        {status === "error" && (
          <div>
            <div className="text-5xl mb-4">📝</div>
            <h1 className="text-2xl font-bold mb-4 text-[#173B57]">Review Draft</h1>
            <p className="text-gray-600 mb-6">
              This is where you can review the article, optionally add an image, and approve it for publication.
            </p>

            <div className="space-y-4 text-left mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Header Image (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
                {image && (
                  <p className="text-xs text-gray-500 mt-1">{image.name}</p>
                )}
              </div>

              {image && !uploaded && (
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50"
                >
                  {uploading ? "Uploading..." : "Upload Image"}
                </button>
              )}

              {uploaded && (
                <p className="text-sm text-green-600">✅ Image uploaded successfully</p>
              )}
            </div>

            <button
              onClick={handleApprove}
              className="w-full px-6 py-3 bg-[#E87532] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Approve & Publish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ApprovePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] text-[#17202A]">Loading...</div>}>
      <ApproveContent />
    </Suspense>
  );
}
