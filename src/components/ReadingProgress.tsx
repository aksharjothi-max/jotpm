"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-12 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      {/* Track - subtle dark/light line */}
      <div className="absolute inset-0 bg-gray-300/50 dark:bg-gray-700/50" />
      {/* Progress fill - accent blue with glow */}
      <div
        className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.7)] dark:shadow-[0_0_10px_rgba(96,165,250,0.7)] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
