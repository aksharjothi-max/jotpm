import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FBFBFD]/80 border-b border-[#D2D2D7]">
      <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[#1D1D1F]">
          Jot<span className="text-[#0071E3]">PM</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xs text-[#424245] hover:text-[#1D1D1F] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-xs text-[#424245] hover:text-[#1D1D1F] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-xs text-[#424245] hover:text-[#1D1D1F] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-medium px-3 py-1 rounded-full bg-[#0071E3] text-white hover:bg-blue-600 transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
