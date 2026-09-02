import Link from "next/link";
import { getArticles } from "@/lib/data";

export default function Home() {
  const articles = getArticles();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grid">
        <div className="max-w-6xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--accent)] mb-4 animate-fade-in">
              Product Management · Growth Strategy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in animate-delay-100">
              Turning complexity into{" "}
              <span className="text-[var(--accent)]">actionable clarity</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-10 max-w-2xl animate-fade-in animate-delay-200">
              I'm Akshar Jothi — a product manager specializing in growth
              strategy. I write about the frameworks, decisions, and hard-won
              lessons behind building products that grow.
            </p>
            <div className="flex items-center gap-4 animate-fade-in animate-delay-300">
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold text-sm hover:bg-amber-400 transition-colors"
              >
                Read the Blog
              </Link>
              <Link
                href="/#about"
                className="px-6 py-3 rounded-lg border border-white/10 text-sm font-medium hover:border-white/30 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3", label: "Articles Published" },
            { value: "1", label: "Framework Shared" },
            { value: "Daily", label: "Publishing Cadence" },
            { value: "Growth", label: "Specialty" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--muted)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-[var(--accent)] mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              The intersection of product, growth, and execution
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              I've spent my career at the intersection of product management and
              growth strategy — the place where user needs, business goals, and
              technical reality collide. That vantage point changes how you see
              problems.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              What looks like a growth plateau is often a product-market fit
              problem. What looks like a feature gap is often a positioning
              problem. The work is finding the root cause — and shipping the fix.
            </p>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--accent)] hover:text-amber-400 transition-colors"
            >
              Read my writing →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "01", title: "Product Strategy", desc: "From vision to roadmap" },
              { num: "02", title: "Growth Loops", desc: "Compound, don't leak" },
              { num: "03", title: "User Research", desc: "Evidence over opinion" },
              { num: "04", title: "Execution", desc: "Ship, measure, learn" },
            ].map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-xl border border-white/5 bg-[var(--card)] card-hover"
              >
                <span className="text-xs font-medium text-[var(--accent)]">
                  {item.num}
                </span>
                <h3 className="font-semibold mt-2 mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-[var(--accent)] mb-4">
                Blog
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Latest Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors hidden md:block"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 rounded-xl border border-white/5 bg-[var(--card)] card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-[var(--muted)]">
                    {article.date}
                  </span>
                  <span className="text-xs text-[var(--accent)]">·</span>
                  <span className="text-xs text-[var(--muted)]">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let's connect
          </h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto mb-8">
            Have a growth challenge, want to collaborate, or just want to talk
            product? I'd love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold text-sm hover:bg-amber-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
