import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-[var(--primary)]">
          Jot<span className="text-[var(--accent)]">PM</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#about"
            className="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-orange-600 transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
