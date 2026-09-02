import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Jot<span className="text-[var(--accent)]">PM</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#about"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--accent)]/40 hover:bg-white/10 transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
