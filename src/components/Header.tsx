import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div className="max-w-[1000px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-gray-900">
          Jot<span className="text-[#E87532]">PM</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/#contact" className="text-sm font-medium px-4 py-1.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
