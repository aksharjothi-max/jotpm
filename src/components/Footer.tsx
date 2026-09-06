import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2740] py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Jot<span className="text-[#E87532]">PM</span>
            </Link>
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} Akshar Jothi
            </span>
          </div>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              About
            </Link>
            <a
              href="https://github.com/aksharjothi-max"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
