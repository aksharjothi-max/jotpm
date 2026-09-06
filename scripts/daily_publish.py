#!/usr/bin/env python3
"""
JotPM Daily Article Publisher
Generates a product management article daily, saves it locally,
and emails it to aksharjothi@gmail.com for review.

Articles are written in a premium, thoughtful style consistent with
the JotPM brand — growth strategy, product thinking, execution.
"""
import os
import json
import subprocess
import random
import shutil
from datetime import datetime, timedelta

HOME = os.path.expanduser("~")
JOTPM_DIR = os.path.join(HOME, "jotpm")
ARTICLES_DIR = os.path.join(JOTPM_DIR, "articles")
ARTICLES_DATA = os.path.join(JOTPM_DIR, "articles_data.json")

# Find himalaya in PATH
HIMALAYA = shutil.which("himalaya")
if not HIMALAYA:
    HIMALAYA = "/Users/aksharjothi/.local/bin/himalaya"

# Article topics pool — rotates through these
ARTICLE_TOPICS = [
    {
        "title": "The Art of Saying No: How Great PMs Prioritize",
        "category": "Product Thinking",
        "excerpt": "Every feature request sounds reasonable in isolation. Here's the framework that separates good PMs from great ones.",
        "tags": ["prioritization", "strategy", "decision-making"],
        "content_generator": "generate_thinking_content"
    },
    {
        "title": "Retention Before Acquisition: The Growth Sequence",
        "category": "Growth Strategy",
        "excerpt": "Most startups die from leaky buckets, not empty funnels. Why fixing retention first is the smartest growth move.",
        "tags": ["retention", "growth", "metrics"],
        "content_generator": "generate_growth_content"
    },
    {
        "title": "The Feature Trap: When More Becomes Less",
        "category": "Product Thinking",
        "excerpt": "Why adding features can actually hurt your product — and how to know when simplicity is the real innovation.",
        "tags": ["simplicity", "features", "ux"],
        "content_generator": "generate_thinking_content"
    },
    {
        "title": "User Interviews That Actually Change Decisions",
        "category": "Product Thinking",
        "excerpt": "Most user research is theater. Here's how to run interviews that produce real, actionable insights.",
        "tags": ["user-research", "interviews", "discovery"],
        "content_generator": "generate_thinking_content"
    },
    {
        "title": "The Metrics That Don't Matter (And the Ones That Do)",
        "category": "Growth Strategy",
        "excerpt": "Vanity metrics feel good but mislead. How to identify the numbers that actually predict business success.",
        "tags": ["metrics", "analytics", "strategy"],
        "content_generator": "generate_growth_content"
    },
    {
        "title": "Shipping Fast vs. Shipping Right: The PM's Dilemma",
        "category": "Execution & Delivery",
        "excerpt": "Speed and quality aren't opposites — if you know when to optimize for each. A framework for the trade-off.",
        "tags": ["execution", "speed", "quality"],
        "content_generator": "generate_execution_content"
    },
    {
        "title": "The Onboarding Moment: Where Products Win or Lose",
        "category": "Growth Strategy",
        "excerpt": "You have 30 seconds to prove value. How the best products turn first-time users into lifelong customers.",
        "tags": ["onboarding", "activation", "retention"],
        "content_generator": "generate_growth_content"
    },
    {
        "title": "Stakeholder Management as a Superpower",
        "category": "Execution & Delivery",
        "excerpt": "The PM role is 20% product, 80% people. How to align executives, engineers, and designers without authority.",
        "tags": ["stakeholders", "communication", "leadership"],
        "content_generator": "generate_execution_content"
    },
    {
        "title": "Building Products for People Who Don't Care",
        "category": "Product Thinking",
        "excerpt": "Not every user is passionate. How to design for the indifferent majority — and why that's where scale lives.",
        "tags": ["design", "user-experience", "scale"],
        "content_generator": "generate_thinking_content"
    },
    {
        "title": "The Pivot Decision: When to Persevere and When to Fold",
        "category": "Strategy",
        "excerpt": "How to know if your product needs a major change — and the data signals that should trigger the conversation.",
        "tags": ["pivot", "strategy", "data"],
        "content_generator": "generate_strategy_content"
    },
    {
        "title": "Why Your Roadmap Is Lying to You",
        "category": "Execution & Delivery",
        "excerpt": "Roadmaps create false certainty. Better approaches to planning in an uncertain world.",
        "tags": ["roadmap", "planning", "agile"],
        "content_generator": "generate_execution_content"
    },
    {
        "title": "The Psychology of Pricing: It's Not About the Price",
        "category": "Growth Strategy",
        "excerpt": "How framing, anchoring, and perceived value matter more than the number on the price tag.",
        "tags": ["pricing", "psychology", "monetization"],
        "content_generator": "generate_growth_content"
    },
    {
        "title": "From Zero to One: Product Thinking for New Markets",
        "category": "Product Thinking",
        "excerpt": "When there's no playbook, no competitors, and no users yet. How to build when you're truly starting from scratch.",
        "tags": ["innovation", "0-to-1", "new-markets"],
        "content_generator": "generate_thinking_content"
    },
    {
        "title": "The Feedback Loop: Turning Users Into Co-Creators",
        "category": "Product Thinking",
        "excerpt": "Great products are built with users, not for them. How to create feedback loops that drive real innovation.",
        "tags": ["feedback", "community", "co-creation"],
        "content_generator": "generate_thinking_content"
    },
    {
        "title": "Growth Loops vs. Funnels: The Modern Growth Model",
        "category": "Growth Strategy",
        "excerpt": "Funnels end. Loops compound. Why the best growth strategies are circular, not linear.",
        "tags": ["growth-loops", "funnels", "viral"],
        "content_generator": "generate_growth_content"
    }
]

def run(cmd, timeout=30):
    try:
        r = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return r.stdout.strip(), r.stderr.strip(), r.returncode
    except Exception as e:
        return "", str(e), 1

def load_articles_data():
    if os.path.exists(ARTICLES_DATA):
        with open(ARTICLES_DATA, 'r') as f:
            return json.load(f)
    return {"articles": [], "last_index": -1}

def save_articles_data(data):
    with open(ARTICLES_DATA, 'w') as f:
        json.dump(data, f, indent=2)

def generate_article_html(topic, date_str, article_id, content):
    """Generate full HTML article."""
    css_path = "/css/style.css"
    js_path = "/js/app.js"
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{topic['excerpt']} — JotPM">
  <title>{topic['title']} — JotPM | Akshar Jothi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{css_path}">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📝</text></svg>">
</head>
<body>
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="container nav-inner">
      <a href="/" class="nav-logo">JotPM</a>
      <div class="nav-links">
        <a href="/#about" class="nav-link">About</a>
        <a href="/blog.html" class="nav-link">Blog</a>
      </div>
    </div>
  </nav>
  <header class="article-hero">
    <div class="container">
      <div class="article-meta">
        <span class="article-category">{topic['category']}</span>
        <span class="article-date">{date_str}</span>
      </div>
      <h1 class="article-title">{topic['title']}</h1>
      <div class="article-author">
        <div class="article-author-avatar">AJ</div>
        <div>
          <div class="article-author-name">Akshar Jothi</div>
          <div class="article-author-role">Product Manager | Growth Strategy</div>
        </div>
      </div>
    </div>
  </header>
  <article class="article-content">
    <div class="article-body">
      {content}
    </div>
  </article>
  <section class="section" style="background: var(--gray-10);">
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
        {"".join(f'<span class="tag">#{tag}</span>' for tag in topic['tags'])}
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <a href="/blog.html" class="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to All Articles
        </a>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">JotPM</div>
        <div class="footer-links">
          <a href="/" class="footer-link">Home</a>
          <a href="/blog.html" class="footer-link">Blog</a>
          <a href="/#about" class="footer-link">About</a>
        </div>
        <div class="footer-social">
          <a href="https://github.com/aksharjothi-max" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/aksharjothi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <div class="footer-copy">&copy; 2026 JotPM by Akshar Jothi. All rights reserved.</div>
      </div>
    </div>
  </footer>
  <script src="{js_path}"></script>
</body>
</html>'''
    return html

def generate_growth_content(topic):
    return f'''
      <p>{topic['excerpt']}</p>
      
      <p>Growth isn't about hacks or tricks. It's about building systems that compound. The best growth teams don't chase tactics — they build engines.</p>
      
      <h2>The Growth Mindset Shift</h2>
      
      <p>Most teams think about growth as a series of campaigns: a referral program here, a viral loop there. But sustainable growth comes from product mechanics that inherently drive expansion.</p>
      
      <p>Consider the difference between <strong>push growth</strong> (advertising, outbound, paid acquisition) and <strong>pull growth</strong> (product-led virality, network effects, organic discovery). Push growth stops when you stop paying. Pull growth compounds.</p>
      
      <h3>1. Find Your Growth Lever</h3>
      <p>Every product has a natural growth motion. For Slack, it's team invites. For Zoom, it's meeting links. For Notion, it's shared pages. The question isn't "how do we grow?" but "how does our product naturally spread?"</p>
      
      <h3>2. Optimize the Activation Moment</h3>
      <p>Growth doesn't start with acquisition — it starts with activation. If users don't experience value quickly, no amount of marketing will save you. Map your user's journey to their first "aha moment" and remove every friction point between them and that moment.</p>
      
      <h3>3. Build Retention Before Scale</h3>
      <p>Acquiring users who churn is just expensive churn. The best growth teams obsess over retention first. When retention is strong, every dollar of acquisition investment compounds instead of evaporating.</p>
      
      <blockquote>
        "Growth without retention is just a leaky bucket. Fill the bucket first, then turn on the faucet."
      </blockquote>
      
      <h2>The Compound Effect</h2>
      
      <p>Small improvements compound. A 1% improvement in activation, retention, and referral doesn't yield 3% growth — it yields exponential growth over time. This is why the best growth teams focus on systematic, incremental improvement rather than silver bullets.</p>
      
      <p>Track your North Star metric weekly. Run experiments relentlessly. Kill what doesn't work fast. Double down on what does. Over time, this discipline creates unassailable momentum.</p>
      
      <h2>Conclusion</h2>
      
      <p>Growth is a practice, not a project. It requires patience, rigor, and a willingness to be wrong. But when you find the right lever and pull it consistently, the results can be extraordinary.</p>
      
      <p>Start with retention. Find your natural growth motion. Optimize activation. Then scale what works.</p>
    '''

def generate_thinking_content(topic):
    return f'''
      <p>{topic['excerpt']}</p>
      
      <p>Product management is ultimately about making decisions with incomplete information. The best PMs aren't the ones with the most data — they're the ones who know what matters and move forward.</p>
      
      <h2>The Thinking Framework</h2>
      
      <p>Every product decision can be broken down into three questions: Who is this for? What problem does it solve? How will we know if it worked?</p>
      
      <p>Simple questions. Hard answers. That's what makes product management both challenging and deeply rewarding.</p>
      
      <h3>1. Problem Space vs. Solution Space</h3>
      <p>Most teams rush to solutions. They jump from "we need a feature" to "let's build X" without deeply understanding the problem. Great PMs live in the problem space longer. They ask "why" five times. They observe users. They feel the pain themselves.</p>
      
      <p>The solution space is crowded. The problem space is where real innovation lives.</p>
      
      <h3>2. The Opportunity Solution Tree</h3>
      <p>Teresa Torres taught us to think in opportunity solution trees. Start with outcomes, not outputs. Map the opportunities — the unmet needs, the pain points, the desires. Then, and only then, explore solutions.</p>
      
      <p>This prevents the most common product failure: building something nobody wants because you fell in love with your solution before understanding the problem.</p>
      
      <h3>3. Decision-Making Under Uncertainty</h3>
      <p>You'll never have enough data. The market will never give you clear signals. Competitors will surprise you. In this environment, the ability to make good decisions quickly is your superpower.</p>
      
      <p>Use frameworks like RICE (Reach, Impact, Confidence, Effort) for prioritization. Use the Eisenhower Matrix for urgency vs. importance. But ultimately, develop your judgment — that gut feeling that comes from deep user understanding and market awareness.</p>
      
      <blockquote>
        "The best product managers are comfortable being uncomfortable. They make decisions with 70% of the information and course-correct with the remaining 30%."
      </blockquote>
      
      <h2>Building Conviction</h2>
      
      <p>Conviction doesn't come from ego — it comes from evidence. Talk to users. Read support tickets. Watch session recordings. Analyze data. Then, synthesize all of that into a point of view.</p>
      
      <p>Your job isn't to have all the answers. It's to ask the right questions and build enough evidence to make informed bets.</p>
      
      <h2>Conclusion</h2>
      
      <p>Product thinking is a muscle. It gets stronger with use. Every decision you make, every user you talk to, every experiment you run — it all compounds into better judgment.</p>
      
      <p>Stay curious. Stay humble. Keep building.</p>
    '''

def generate_execution_content(topic):
    return f'''
      <p>{topic['excerpt']}</p>
      
      <p>Strategy without execution is hallucination. The best product teams aren't the ones with the most brilliant strategies — they're the ones that ship consistently and learn from what they release.</p>
      
      <h2>The Execution Gap</h2>
      
      <p>There's a gap between what teams plan and what they actually deliver. This gap isn't caused by bad engineers or unclear requirements — it's caused by a lack of ruthless prioritization and clear decision-making.</p>
      
      <p>Great execution comes down to three things: clarity, focus, and speed.</p>
      
      <h3>1. Clarity of Purpose</h3>
      <p>Every team member should be able to answer: What are we building? Why are we building it? How will we know if it worked?</p>
      
      <p>If they can't, you have a clarity problem. Clarity comes from great product briefs, clear success metrics, and a shared understanding of the user problem.</p>
      
      <h3>2. Focus Through Subtraction</h3>
      <p>The best teams say no more than they say yes. They know that every feature they don't build is time they can spend on the features that matter.</p>
      
      <p>Use the MoSCoW method: Must have, Should have, Could have, Won't have. Be ruthless about what's "Must." If everything is priority one, nothing is.</p>
      
      <h3>3. Speed Through Iteration</h3>
      <p>Don't wait for perfect. Ship the smallest version that tests your riskiest assumption. Learn from real users. Iterate based on evidence, not opinions.</p>
      
      <p>The best teams ship weekly, sometimes daily. They've built the infrastructure and culture to move fast without breaking things.</p>
      
      <blockquote>
        "Done is better than perfect. But done with evidence is better than done with hope."
      </blockquote>
      
      <h2>The PM as Conductor</h2>
      
      <p>Your job isn't to have the best ideas — it's to create the conditions for the best ideas to emerge and get executed. That means clearing roadblocks, aligning stakeholders, and protecting the team from distractions.</p>
      
      <p>Be the person who makes everyone around you more effective. That's the real PM superpower.</p>
      
      <h2>Conclusion</h2>
      
      <p>Execution is a team sport. It requires trust, communication, and a shared commitment to outcomes over outputs. Build the right team, give them clarity and focus, and get out of their way.</p>
      
      <p>Ship fast. Learn faster. Repeat.</p>
    '''

def generate_strategy_content(topic):
    return f'''
      <p>{topic['excerpt']}</p>
      
      <p>Strategy is about choosing what not to do. In a world of infinite possibilities and finite resources, the teams that win are the ones that focus relentlessly on the highest-leverage opportunities.</p>
      
      <h2>The Strategy Stack</h2>
      
      <p>Good strategy operates at three levels: Vision (where are we going?), Strategy (how will we get there?), and Tactics (what do we do this week?).</p>
      
      <p>Most teams skip straight to tactics. They're busy, but they're not effective. Step back. Think about the bigger picture. Then, align your daily work with your long-term vision.</p>
      
      <h3>1. Know Your Battle</h3>
      <p>Not all markets are created equal. Some are winner-take-all. Some are fragmented. Some are growing, some are shrinking. Your strategy should match the market reality.</p>
      
      <p>Use frameworks like Porter's Five Forces, Jobs-to-be-Done, or the Business Model Canvas to understand your competitive landscape. Then, find the angle that gives you an unfair advantage.</p>
      
      <h3>2. Build Moats</h3>
      <p>Competitive advantages are temporary unless you build moats. Network effects, brand, switching costs, economies of scale, intellectual property — these are what protect your business long-term.</p>
      
      <p>Ask yourself: What will be true in 5 years that makes it hard for competitors to copy us? If you can't answer that, you don't have a strategy — you have a feature.</p>
      
      <h3>3. Adapt or Die</h3>
      <p>The best strategies are living documents. They evolve as you learn. Build feedback loops that tell you when your assumptions are wrong, and be willing to pivot when the evidence demands it.</p>
      
      <blockquote>
        "Strategy is not a plan. It's a framework for decision-making under uncertainty."
      </blockquote>
      
      <h2>Conclusion</h2>
      
      <p>Strategy is hard because it requires saying no to good ideas so you can say yes to great ones. It requires patience when the market rewards speed. It requires conviction when others doubt.</p>
      
      <p>But when your strategy is right, everything else gets easier. Prioritization becomes obvious. Alignment happens naturally. Execution accelerates.</p>
      
      <p>Think big. Start small. Scale fast.</p>
    '''

def get_content(topic):
    """Generate article content based on topic category."""
    category = topic["category"]
    if category == "Growth Strategy":
        return generate_growth_content(topic)
    elif category == "Product Thinking":
        return generate_thinking_content(topic)
    elif category == "Execution & Delivery":
        return generate_execution_content(topic)
    else:
        return generate_strategy_content(topic)

def send_email_html(subject, html_content, to="aksharjothi@gmail.com"):
    """Send HTML email using himalaya CLI."""
    tmp_file = "/tmp/jotpm_email.html"
    with open(tmp_file, 'w') as f:
        f.write(html_content)
    
    # Build email with headers for piping
    email_content = f"""From: aksharjothi@gmail.com
To: {to}
Subject: {subject}
Content-Type: text/html; charset=utf-8

{html_content}
"""
    email_file = "/tmp/jotpm_email_full.txt"
    with open(email_file, 'w') as f:
        f.write(email_content)
    
    cmd = f'cat {email_file} | himalaya message send'
    stdout, stderr, rc = run(cmd, timeout=60)
    
    if rc == 0 and "successfully" in stdout.lower():
        print(f"HTML email sent successfully to {to}")
        return True
    else:
        print(f"Failed to send HTML email: {stderr or stdout}")
        return False

def main():
    # Load existing articles data
    data = load_articles_data()
    
    # Get today's date
    today = datetime.now()
    date_str = today.strftime("%B %d, %Y")
    
    # Pick next topic (rotate through, avoid repeats)
    last_index = data.get("last_index", -1)
    available_indices = [i for i in range(len(ARTICLE_TOPICS)) if i != last_index]
    next_index = random.choice(available_indices)
    topic = ARTICLE_TOPICS[next_index]
    
    print(f"Generating article: {topic['title']}")
    
    # Generate article ID and content
    article_id = f"daily-{today.strftime('%Y-%m-%d')}"
    content = get_content(topic)
    
    # Generate article HTML
    html = generate_article_html(topic, date_str, article_id, content)
    
    # Save article
    filepath = os.path.join(ARTICLES_DIR, f"{article_id}.html")
    with open(filepath, 'w') as f:
        f.write(html)
    
    # Update articles data
    article_entry = {
        "id": article_id,
        "title": topic["title"],
        "category": topic["category"],
        "excerpt": topic["excerpt"],
        "tags": topic["tags"],
        "date": date_str,
        "filepath": filepath,
        "status": "pending_review"
    }
    
    data["articles"].append(article_entry)
    data["last_index"] = next_index
    save_articles_data(data)
    
    # Prepare email with article content and approve button
    email_subject = f"[JotPM Review] {topic['title']} — {date_str}"
    
    # Build article content for email
    article_content = content.replace('<p>', '').replace('</p>', '\n\n').replace('<h2>', '\n## ').replace('</h2>', '\n').replace('<h3>', '\n### ').replace('</h3>', '\n').replace('<strong>', '**').replace('</strong>', '**').replace('<em>', '*').replace('</em>', '*').replace('<blockquote>', '\n> ').replace('</blockquote>', '\n').replace('<ul>', '').replace('</ul>', '').replace('<li>', '- ').replace('</li>', '\n').replace('<ol>', '').replace('</ol>', '')
    
    email_body = f"""Hi Akshar,

Your daily JotPM article is ready for review.

📄 Article: {topic['title']}
📁 Category: {topic['category']}
📅 Date: {date_str}

Preview:
{topic['excerpt']}

---

{article_content}

---

Tags: {', '.join(f'#{t}' for t in topic['tags'])}

To publish:
1. Review the article above
2. Click the "Approve & Publish" button below
3. The article will be published to jotpm.vercel.app

To edit:
- Open the file in your editor
- Make changes
- Push to GitHub to deploy

---
JotPM Daily Publisher
"""
    
    # Build HTML email with approve button
    approve_url = f"https://jotpm.vercel.app/articles/{article_id}.html"
    
    html_email = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{topic['title']} — JotPM Review</title>
  <style>
    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; margin: 0; padding: 0; background: #F5F5F7; color: #1D1D1F; }}
    .container {{ max-width: 600px; margin: 0 auto; padding: 2rem 1.5rem; }}
    .card {{ background: #FFFFFF; border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }}
    .header {{ text-align: center; margin-bottom: 2rem; }}
    .logo {{ font-size: 1.25rem; font-weight: 700; color: #1D1D1F; margin-bottom: 0.5rem; }}
    .meta {{ font-size: 0.875rem; color: #86868B; }}
    .category {{ display: inline-block; padding: 0.25rem 0.75rem; background: #E8F4FD; color: #0071E3; font-size: 0.75rem; font-weight: 600; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem; }}
    h1 {{ font-size: 1.75rem; font-weight: 700; color: #1D1D1F; line-height: 1.2; margin-bottom: 1rem; }}
    .author {{ display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem; }}
    .avatar {{ width: 2.5rem; height: 2.5rem; border-radius: 50%; background: linear-gradient(135deg, #0071E3, #0058B0); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; color: #FFFFFF; }}
    .author-name {{ font-size: 0.875rem; font-weight: 600; color: #1D1D1F; }}
    .author-role {{ font-size: 0.75rem; color: #86868B; }}
    .content {{ font-size: 1rem; line-height: 1.75; color: #424245; }}
    .content p {{ margin-bottom: 1rem; }}
    .content h2 {{ font-size: 1.25rem; font-weight: 700; color: #1D1D1F; margin: 1.5rem 0 0.75rem; }}
    .content h3 {{ font-size: 1.0625rem; font-weight: 600; color: #1D1D1F; margin: 1.25rem 0 0.5rem; }}
    .content blockquote {{ border-left: 3px solid #0071E3; padding: 0.75rem 1rem; margin: 1.5rem 0; background: #E8F4FD; border-radius: 0 0.5rem 0.5rem 0; font-style: italic; }}
    .content ul, .content ol {{ margin: 1rem 0 1rem 1.5rem; }}
    .content li {{ margin-bottom: 0.5rem; }}
    .tags {{ display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }}
    .tag {{ padding: 0.25rem 0.625rem; background: #F5F5F7; color: #424245; font-size: 0.75rem; border-radius: 9999px; }}
    .cta {{ text-align: center; margin: 2rem 0; }}
    .btn {{ display: inline-block; padding: 0.875rem 2rem; background: #0071E3; color: #FFFFFF; font-size: 1rem; font-weight: 600; border-radius: 9999px; text-decoration: none; }}
    .btn:hover {{ background: #0077ED; }}
    .footer {{ text-align: center; font-size: 0.75rem; color: #86868B; margin-top: 2rem; }}
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <div class="logo">JotPM</div>
        <div class="meta">{date_str}</div>
      </div>
      
      <span class="category">{topic['category']}</span>
      <h1>{topic['title']}</h1>
      
      <div class="author">
        <div class="avatar">AJ</div>
        <div>
          <div class="author-name">Akshar Jothi</div>
          <div class="author-role">Product Manager | Growth Strategy</div>
        </div>
      </div>
      
      <div class="content">
        {content}
      </div>
      
      <div class="tags">
        {"".join(f'<span class="tag">#{tag}</span>' for tag in topic['tags'])}
      </div>
    </div>
    
    <div class="cta">
      <a href="{approve_url}" class="btn">Approve & Publish</a>
    </div>
    
    <div class="footer">
      <p>JotPM Daily Publisher &copy; 2026</p>
    </div>
  </div>
</body>
</html>"""
    
    # Save HTML email to file
    email_html_path = f"/tmp/jotpm_email_{article_id}.html"
    with open(email_html_path, 'w') as f:
        f.write(html_email)
    
    # Send email with HTML
    send_email_html(email_subject, html_email, to)
    
    print(f"Article generated: {article_id}")
    print(f"File: {filepath}")
    print(f"Email sent to aksharjothi@gmail.com")

if __name__ == "__main__":
    main()
