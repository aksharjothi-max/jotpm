import Link from "next/link";

const articles = [
  {
    slug: "growth-loops-not-funnels",
    title: "Growth Loops, Not Funnels: A Product Manager's Reframe",
    excerpt:
      "Funnels leak. Loops compound. Why the most resilient growth strategies abandon the linear pipeline in favor of self-reinforcing systems.",
    date: "2026-09-02",
    readTime: "6 min read",
  },
  {
    slug: "north-star-metric",
    title: "Finding Your North Star: One Metric That Actually Matters",
    excerpt:
      "Most teams drown in dashboards. The best ones align around a single measure of customer value. Here's how to find yours.",
    date: "2026-09-02",
    readTime: "5 min read",
  },
  {
    slug: "shipping-is-a-skill",
    title: "Shipping Is a Skill, Not a Phase",
    excerpt:
      "The gap between a good idea and a live feature is where most PMs stall. A practical framework for getting from spec to shipped.",
    date: "2026-09-02",
    readTime: "7 min read",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-grid">
        <div className="max-w-6xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--accent)] mb-4 animate-fade-in">
              Product Management · Growth Strategy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[var(--primary)] animate-fade-in animate-delay-100">
              Turning complexity into{" "}
              <span className="text-[var(--accent)]">actionable clarity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl animate-fade-in animate-delay-200">
              I'm Akshar Jothi — a product manager specializing in growth
              strategy. I write about the frameworks, decisions, and hard-won
              lessons behind building products that grow.
            </p>
            <div className="flex items-center gap-4 animate-fade-in animate-delay-300">
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Read the Blog
              </Link>
              <Link
                href="/#about"
                className="px-6 py-3 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-white transition-all"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "4", label: "Articles Published" },
            { value: "3", label: "Frameworks Shared" },
            { value: "Daily", label: "Publishing Cadence" },
            { value: "Growth", label: "Specialty" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[var(--primary)]">
              The intersection of product, growth, and execution
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I've spent my career at the intersection of product management and
              growth strategy — the place where user needs, business goals, and
              technical reality collide. That vantage point changes how you see
              problems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What looks like a growth plateau is often a product-market fit
              problem. What looks like a feature gap is often a positioning
              problem. The work is finding the root cause — and shipping the fix.
            </p>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--accent)] hover:text-orange-600 transition-colors"
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
                className="p-6 rounded-xl border border-gray-200 bg-white card-hover"
              >
                <span className="text-xs font-medium text-[var(--accent)]">
                  {item.num}
                </span>
                <h3 className="font-semibold mt-2 mb-1 text-[var(--primary)]">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-[var(--accent)] mb-4">
                Blog
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--primary)]">
                Latest Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-500 hover:text-[var(--primary)] transition-colors hidden md:block"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 rounded-xl border border-gray-200 bg-white card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-gray-500">
                    {article.date}
                  </span>
                  <span className="text-xs text-[var(--accent)]">·</span>
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug text-[var(--primary)]">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--primary)]">
            Let's connect
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-8">
            Have a growth challenge, want to collaborate, or just want to talk
            product? I'd love to hear from you.
          </p>
          <a
            href="mailto:aksharjothi@gmail.com"
            className="inline-block px-8 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
