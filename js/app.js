// JotPM - Main Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initSmoothScroll();
  loadRecentArticles();
  initMobileNav();
});

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

// ===== ARTICLE MANAGEMENT =====
const articles = [
  {
    id: 'first-article',
    title: 'The North Star Metric: Why Every Growth Team Needs One',
    excerpt: 'A single metric that best captures the core value your product delivers. How to define it, measure it, and align your entire organization around it.',
    category: 'Growth Strategy',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #173B57 0%, #0f2a3f 100%)',
    tags: ['growth', 'metrics', 'strategy']
  },
  {
    id: 'antilibrary-of-pm',
    title: 'The Antilibrary of Product Management: Why You Should Collect More Ideas Than You Can Ever Use',
    excerpt: "Nassim Taleb's antilibrary concept reveals why the best PMs build vast collections of unbuilt ideas — and how this paradox makes them smarter.",
    category: 'Product Thinking',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #E87532 0%, #c55e23 100%)',
    tags: ['antilibrary', 'creativity', 'decision-making', 'product-thinking']
  },
  {
    id: 'lighthouse-effect',
    title: 'The Lighthouse Effect: Why Product Teams Get Stuck Maintaining Instead of Building',
    excerpt: "How maintenance quietly consumes your team's capacity — and the playbook for breaking free and getting back to building.",
    category: 'Execution & Delivery',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #1e4d6e 0%, #173B57 100%)',
    tags: ['lighthouse-effect', 'team-capacity', 'maintenance', 'execution']
  },
  {
    id: 'shadow-roadmap',
    title: 'The Shadow Roadmap: Building the Strategy No One Sees',
    excerpt: 'Why the most important roadmap you maintain is the one nobody sees — and how it becomes your competitive advantage.',
    category: 'Strategy',
    date: 'September 7, 2026',
    image: 'linear-gradient(135deg, #0f2a3f 0%, #173B57 100%)',
    tags: ['shadow-roadmap', 'strategy', 'planning', 'leadership']
  }
];

function loadRecentArticles() {
  const container = document.getElementById('recent-articles');
  if (!container) return;
  
  // Show latest 3 articles
  const recent = articles.slice(0, 3);
  
  container.innerHTML = recent.map((article, index) => `
    <article class="blog-card animate-fade-in-up animate-delay-${(index + 1) * 100}" onclick="window.location.href='/articles/${article.id}.html'">
      <div class="blog-card-image" style="background: ${article.image}">
        <span class="blog-card-category">${article.category}</span>
      </div>
      <div class="blog-card-content">
        <div class="blog-card-date">${article.date}</div>
        <h3 class="blog-card-title">${article.title}</h3>
        <p class="blog-card-excerpt">${article.excerpt}</p>
        <span class="blog-card-link">
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </article>
  `).join('');
}

// ===== BLOG LISTING FUNCTIONS =====
function getArticleById(id) {
  return articles.find(a => a.id === id);
}

function getAllArticles() {
  return articles;
}

// ===== UTILITY =====
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
