"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-[#17202A]">Jot</span>
          <span className="text-[#173B57]">PM</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-[#4A5568] hover:text-[#17202A] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[#4A5568] hover:text-[#17202A] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-[#173B57] text-white text-sm font-medium hover:bg-[#0F2740] transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
