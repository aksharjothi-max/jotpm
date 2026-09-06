// JotPM - Main Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initSmoothScroll();
  loadRecentArticles();
});

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

const articles = [
  {
    id: 'first-article',
    title: 'The North Star Metric: Why Every Growth Team Needs One',
    excerpt: 'A single metric that best captures the core value your product delivers. How to define it, measure it, and align your entire organization around it.',
    category: 'Growth Strategy',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #0071E3 0%, #0058B0 100%)',
    tags: ['growth', 'metrics', 'strategy']
  },
  {
    id: 'antilibrary-of-pm',
    title: 'The Antilibrary of Product Management',
    excerpt: 'Why the best PMs build vast collections of unbuilt ideas — and how this paradox makes them smarter.',
    category: 'Product Thinking',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #424245 0%, #1D1D1F 100%)',
    tags: ['antilibrary', 'creativity', 'decision-making']
  },
  {
    id: 'lighthouse-effect',
    title: 'The Lighthouse Effect',
    excerpt: 'How maintenance quietly consumes your team\'s capacity — and the playbook for breaking free.',
    category: 'Execution',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #0071E3 0%, #424245 100%)',
    tags: ['maintenance', 'team-capacity', 'execution']
  },
  {
    id: 'shadow-roadmap',
    title: 'The Shadow Roadmap',
    excerpt: 'Why the most important roadmap you maintain is the one nobody sees — and how it becomes your competitive advantage.',
    category: 'Strategy',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #1D1D1F 0%, #0071E3 100%)',
    tags: ['roadmap', 'strategy', 'planning']
  }
];

function loadRecentArticles() {
  const container = document.getElementById('recent-articles');
  if (!container) return;
  
  container.innerHTML = articles.slice(0, 3).map((article, i) => `
    <article class="blog-card" onclick="window.location.href='/articles/${article.id}.html'">
      <div class="blog-card-image" style="background: ${article.image}">
        <div class="blog-card-image-placeholder">${article.category.charAt(0)}</div>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-category">${article.category}</div>
        <h3 class="blog-card-title">${article.title}</h3>
        <p class="blog-card-excerpt">${article.excerpt}</p>
      </div>
    </article>
  `).join('');
}

function getAllArticles() {
  return articles;
}
