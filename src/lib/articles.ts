export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}

const articles: Article[] = [
  {
    slug: "growth-loops-not-funnels",
    title: "Growth Loops, Not Funnels: A Product Manager's Reframe",
    excerpt:
      "Funnels leak. Loops compound. Why the most resilient growth strategies abandon the linear pipeline in favor of self-reinforcing systems.",
    date: "2026-09-02",
    readTime: "6 min read",
    image: "/images/blog/growth-loops-not-funnels.png",
    content: `
<p>The funnel is the most dangerous metaphor in product management. It's elegant, intuitive, and quietly wrong about how growth actually works.</p>

<p>A funnel implies a one-way trip: awareness → interest → conversion → done. Users enter at the top, pass through stages, and either convert or fall out. The job, the metaphor suggests, is to widen the top and patch the leaks.</p>

<p>But real growth doesn't work like that. Real growth compounds. One user brings another. A feature creates data that improves the product, which brings more users, which creates more data. The output of one cycle becomes the input of the next.</p>

<h2>What a Loop Actually Looks Like</h2>

<p>A growth loop is any system where the output feeds back into the input. The classic example is a collaboration tool: one user invites a teammate, the teammate experiences value and invites their own teammates, and so on. Each new user is both the result of the loop and the engine of the next iteration.</p>

<p>Contrast this with a funnel. In a funnel, you spend a dollar on acquisition and get a customer. In a loop, you spend a dollar on acquisition and get a customer <em>who brings more customers</em>. The math is fundamentally different.</p>

<h2>How to Find Your Loops</h2>

<p>Start by mapping how your current users actually discover and share your product. Ask three questions:</p>

<ol>
<li><strong>Where do new users come from today?</strong> Not where you <em>think</em> they come from — where the data says they come from.</li>
<li><strong>What action correlates with a user inviting others?</strong> Is it completing onboarding? Hitting a usage threshold? Receiving their first piece of value?</li>
<li><strong>What's the conversion rate on that invitation?</strong> If 100 users invite someone and 5 accept, your loop has a 5% compounding rate. That's your growth engine.</li>
</ol>

<p>The loop you're looking for is the one where step three is highest. Double down there.</p>

<h2>The PM's Job: Design the Loop, Don't Just Feed the Funnel</h2>

<p>Most PMs spend their time optimizing funnel stages — improving onboarding conversion, reducing churn at month one, A/B testing pricing pages. These aren't bad things to do. But they're <em>local optima</em>.</p>

<p>The higher-leverage work is designing the loop itself:</p>

<ul>
<li><strong>Make sharing a natural outcome of value</strong>, not a separate action. The best loops are invisible — users don't think "I'm referring someone," they think "I need my teammate to see this."</li>
<li><strong>Reduce time-to-loop</strong>. How quickly does a new user reach the moment where they'd naturally invite someone? Every day you shatter off that timeline is a compounding day gained.</li>
<li><strong>Measure loop efficiency, not just funnel conversion</strong>. Track invitations sent per active user, acceptance rate, and time-to-second-invitation. These are your compounding metrics.</li>
</ul>

<h2>A Word of Caution</h2>

<p>Loops aren't magic. They require real value at the center. A loop built on a mediocre product just accelerates the rate at which people discover it's mediocre. Get the value right first. Then build the loop to spread it.</p>

<p>Funnels leak. Loops compound. Start designing for compounding.</p>
`,
  },
  {
    slug: "north-star-metric",
    title: "Finding Your North Star: One Metric That Actually Matters",
    excerpt:
      "Most teams drown in dashboards. The best ones align around a single measure of customer value. Here's how to find yours.",
    date: "2026-09-02",
    readTime: "5 min read",
    image: "/images/blog/north-star-metric.png",
    content: `
<p>I once joined a team that tracked 47 KPIs. Forty-seven. Every Monday, the leadership meeting was a parade of dashboards — DAU, MAU, session duration, NPS, churn rate, expansion revenue, CAC, LTV, activation rate, time-to-value, and thirty-seven more.</p>

<p>The problem wasn't that these metrics were wrong. Most of them were useful signals. The problem was that when everything is the priority, nothing is. Teams optimized for whatever metric was mentioned in the last meeting, then pivoted when a different metric took the spotlight.</p>

<p>What this team needed — what most teams need — was a North Star.</p>

<h2>What a North Star Is (and Isn't)</h2>

<p>A North Star is a single metric that captures the core value your product delivers to customers. It's not a financial metric (revenue, profit). It's not a vanity metric (downloads, signups). It's a measure of <em>customer value delivered</em> that, when it grows, tends to pull financial results along with it.</p>

<p>Think of it this way: if you could only move one number, which one would you choose? The answer is your North Star candidate.</p>

<p>Some examples:</p>

<ul>
<li><strong>Spotify:</strong> Time spent listening</li>
<li><strong>Airbnb:</strong> Nights booked</li>
<li><strong>Slack:</strong> Messages sent (within an organization)</li>
<li><strong>Zoom:</strong> Meeting minutes</li>
</ul>

<p>Notice the pattern: each measures the moment a customer actually <em>received value</em> from the product.</p>

<h2>The Framework: How to Find Yours</h2>

<p>Finding your North Star is a three-step process:</p>

<h3>1. Define your product's core value</h3>
<p>Complete this sentence: "Our product helps customers _____." The verb matters. If you can't fill in the blank clearly, you don't have a North Star problem — you have a product clarity problem. Solve that first.</p>

<h3>2. Identify the moment of value delivery</h3>
<p>When does a customer actually experience that core value? Not when they sign up. Not when they pay. When they <em>experience</em> it. For a project management tool, it might be "completing a task." For a marketplace, it might be "a successful transaction."</p>

<h3>3. Make it measurable and directional</h3>
<p>Your North Star should be a count (not a ratio), measured per relevant unit (per customer, per team), and trending upward when you're delivering more value. "Weekly active teams who complete 5+ tasks" is better than "task completion rate."</p>

<h2>The Hard Part: Saying No</h2>

<p>The real value of a North Star isn't the metric you choose — it's the metrics you <em>don't</em> choose. Every team has a list of things that matter. The North Star forces you to rank that list.</p>

<p>When a stakeholder asks "but what about measuring X?", the answer isn't "we don't care about X." It's "X is a supporting metric. We'll watch it, but we won't let it override the North Star."</p>

<p>That discipline — holding the line on what matters most — is the entire point.</p>

<h2>Start Small</h2>

<p>You don't need to get it perfect on day one. Pick a candidate, align the team around it, and commit to revisiting it quarterly. The North Star should evolve as your product does.</p>

<p>But start. One metric. One direction. One team pulling together.</p>
`,
  },
  {
    slug: "shipping-is-a-skill",
    title: "Shipping Is a Skill, Not a Phase",
    excerpt:
      "The gap between a good idea and a live feature is where most PMs stall. A practical framework for getting from spec to shipped.",
    date: "2026-09-02",
    readTime: "7 min read",
    image: "/images/blog/shipping-is-a-skill.png",
    content: `
<p>There's a quiet crisis in product management: PMs who can write a brilliant spec but can't get a feature shipped. They research, they strategize, they produce beautiful documents — and then the feature dies in the gap between "approved" and "live."</p>

<p>I've been that PM. And I've learned, slowly and painfully, that shipping is not the last step of the process. It's a skill unto itself — one that can be practiced, improved, and systematized.</p>

<h2>Why Shipping Is Hard</h2>

<p>Shipping is hard because it requires a different cognitive mode than strategy. Strategy is expansive — you're exploring possibilities, considering trade-offs, imagining futures. Shipping is reductive — you're cutting scope, making irreversible decisions, and accepting that the thing you're releasing is not the thing you imagined.</p>

<p>Most PMs are better at the first mode than the second. Our training rewards exploration. Our tools (PRDs, strategy docs, opportunity assessments) are built for thinking, not doing. And so we over-invest in planning and under-invest in the messy work of getting something out the door.</p>

<h2>The Shipping Framework</h2>

<p>Here's the framework I use to close the gap between spec and shipped. It has four steps:</p>

<h3>1. Define "Done" Before You Start</h3>

<p>Before a single line of code is written, answer this question: <em>What does "shipped" actually look like?</em> Not "feature complete." Not "all the things in the spec." The minimum version that delivers real value to real users.</p>

<p>Write it down. Make it specific. "Users can export their data as a CSV" is a definition of done. "Build the export feature" is not.</p>

<h3>2. Cut Scope Ruthlessly</h3>

<p>Here's a rule I live by: <strong>cut your scope in half, then cut it again.</strong> Whatever you think is the minimum viable version of your feature — it's still too big.</p>

<p>The reason is simple: the second half of any feature takes twice as long as the first half and delivers half the value. The polish, the edge cases, the error states, the loading skeletons — they matter, but they matter <em>after</em> the core value is live.</p>

<p>Ship the 80% version. Learn from real usage. Then decide if the remaining 20% is worth building.</p>

<h3>3. Make the Work Visible</h3>

<p>Shipping stalls when work is invisible. A feature that's "90% done" for three weeks is a feature that's stuck — and you can't unstick what you can't see.</p>

<p>Break the remaining work into tasks that can be completed in a day or two. Put them on a board. Move them across daily. The act of making work visible creates momentum — and exposes the hidden blockers that are actually causing the delay.</p>

<h3>4. Set a Ship Date (and Defend It)</h3>

<p>Without a date, work expands to fill the available time. This is Parkinson's Law, and it will kill your features.</p>

<p>Set a ship date that feels slightly uncomfortable. Then defend it by cutting scope — not by adding people, not by asking for more time, not by working weekends. Cut scope. Ship what you have. Call it a beta if the name helps.</p>

<h2>The Mindset Shift</h2>

<p>The most important thing about shipping is the mindset: <strong>done is better than perfect, and shipped is better than done.</strong></p>

<p>A shipped feature teaches you things no amount of planning can. You learn what users actually do (not what they say they'll do). You learn what breaks at scale. You learn what matters and what doesn't.</p>

<p>Every feature I've shipped has taught me something I didn't expect. Every feature I've polished in perpetuity has taught me nothing.</p>

<h2>Start Your Shipping Practice</h2>

<p>If you want to get better at shipping, treat it like any other skill: practice deliberately. Pick a small feature. Set a two-week deadline. Cut the scope in half. Ship it. Reflect on what you learned. Repeat.</p>

<p>The gap between a good idea and a live feature is where product managers earn their salary. Close it.</p>
`,
  },
];

export function getArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
