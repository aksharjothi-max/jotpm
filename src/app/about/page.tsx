export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#F8FAFC] py-24">
      <div className="max-w-[680px] mx-auto px-6">
        <p className="text-sm font-medium text-[#E87532] mb-2 uppercase tracking-wide">About</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#17202A] tracking-tight mb-8">
          Akshar Jothi
        </h1>

        {/* Headshot Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
          <div className="aspect-[16/10] bg-gradient-to-br from-[#173B57] to-[#E87532] flex items-center justify-center">
            <span className="text-white/60 text-sm">Headshot placeholder</span>
          </div>
        </div>

        <div className="prose">
          <p>
            I'm a product manager specializing in growth strategy — the place where user needs, business goals, and technical reality collide. That vantage point changes how you see problems.
          </p>
          <p>
            What looks like a growth plateau is often a product-market fit problem. What looks like a feature gap is often a positioning problem. The work is finding the root cause — and shipping the fix.
          </p>

          <h2>What I Believe About Product Management</h2>
          <p>
            The best PMs don't just ship features — they change behavior. They understand that the product is never "done" and that every metric tells a story about real humans trying to get something done.
          </p>
          <p>
            I started this blog to share the frameworks, decisions, and hard-won lessons behind building products that grow — without the fluff.
          </p>

          <h2>Background</h2>
          <p>
            Currently studying at UT Dallas. Previously worked on growth systems, product analytics, and the messy intersection of engineering and business strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
