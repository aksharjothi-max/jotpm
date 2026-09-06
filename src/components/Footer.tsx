import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-[var(--primary)]">
            Jot<span className="text-[var(--accent)]">PM</span>
          </Link>
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} Akshar Jothi
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-[var(--primary)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-gray-500 hover:text-[var(--primary)] transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://github.com/aksharjothi-max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-[var(--primary)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
