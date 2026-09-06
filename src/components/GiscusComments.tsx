"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getArticles } from "@/lib/data";

function Comments() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "aksharjothi-max/jotpm");
    script.setAttribute("data-repo-id", "R_kgDOJbsqfw");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kgDOJbsqf8");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const container = document.getElementById("giscus-container");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

    return () => {
      const existing = document.querySelector("script[src='https://giscus.app/client.js']");
      if (existing) existing.remove();
    };
  }, [slug]);

  return <div id="giscus-container" />;
}

export default function GiscusComments() {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <Comments />
    </Suspense>
  );
}
