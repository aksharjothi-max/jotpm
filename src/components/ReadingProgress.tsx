"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (top / height) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "47px",
        left: 0,
        right: 0,
        height: "4px",
        zIndex: 9999,
        background: "rgba(200, 200, 200, 0.3)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #0071E3 0%, #2997FF 100%)",
          boxShadow: "0 0 12px rgba(0, 113, 227, 0.8), 0 0 20px rgba(0, 113, 227, 0.4)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}
