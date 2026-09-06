"use client";

import { useEffect } from "react";

export default function GiscusComments() {
  useEffect(() => {
    const container = document.getElementById("giscus-container");
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "aksharjothi-max/jotpm");
    script.setAttribute("data-repo-id", "R_kgDOUMcm4A");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_kwDOUMcm4M4DE-Dp");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
  }, []);

  return <div id="giscus-container" />;
}
