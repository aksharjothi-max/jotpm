import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Jot<span className="text-blue-600 dark:text-blue-400">PM</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            About
          </Link>
          <DarkModeToggle />
          <Link href="/#contact" className="text-xs font-medium px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
