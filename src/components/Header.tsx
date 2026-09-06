"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`text-xl font-semibold tracking-tight transition-all duration-300 ${
            scrolled ? "text-[#17202A]" : "text-white"
          }`}
        >
          Jot<span className="text-[#E87532]">PM</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "text-[#4A5568] hover:text-[#17202A]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "text-[#4A5568] hover:text-[#17202A]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "text-[#4A5568] hover:text-[#17202A]"
                : "text-white/80 hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-[#E87532] text-white text-sm font-medium hover:bg-[#C05E28] transition-all shadow-sm hover:shadow-md hover:shadow-orange-500/20"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
