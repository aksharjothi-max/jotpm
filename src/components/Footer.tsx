import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Jot<span className="text-[var(--accent)]">PM</span>
          </Link>
          <span className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Akshar Jothi
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://github.com/aksharjothi-max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
