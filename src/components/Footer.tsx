import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
            Jot<span className="text-blue-600">PM</span>
          </Link>
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} Akshar Jothi
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
          <a
            href="mailto:aksharjothi@gmail.com"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com/aksharjothi-max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
