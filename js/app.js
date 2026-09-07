// JotPM - Main Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initSmoothScroll();
  loadRecentArticles();
  initProgressBar();
});

function initProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  });
}