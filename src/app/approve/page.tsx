"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function ApproveContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const slug = searchParams.get("slug");
    const token = searchParams.get("token");

    if (!slug || !token) {
      setStatus("error");
      return;
    }

    fetch(`/api/approve?slug=${slug}&token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Approved" || data.message === "Already approved") {
          setStatus("success");
          setTitle(data.title);
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
      <div className="max-w-md mx-auto p-8 rounded-xl border border-white/10 bg-[#111111] text-center">
        {status === "loading" && (
          <div className="animate-pulse text-[var(--accent)] text-lg">Processing approval...</div>
        )}

        {status === "success" && (
          <div>
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-2xl font-bold mb-2 text-[var(--accent)]">Article Approved</h1>
            <p className="text-[var(--muted)] mb-4">
              &ldquo;{title}&rdquo; has been approved and will be published shortly.
            </p>
            <p className="text-sm text-[var(--muted)]">
              The blog will update automatically within a few minutes.
            </p>
          </div>
        )}

        {status === "error" && (
          <div>
            <div className="text-5xl mb-4">❌</div>
            <h1 className="text-2xl font-bold mb-2 text-red-400">Invalid Link</h1>
            <p className="text-[var(--muted)]">
              This approval link is invalid or has expired.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ApprovePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">Loading...</div>}>
      <ApproveContent />
    </Suspense>
  );
}
