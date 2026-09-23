

document.addEventListener('DOMContentLoaded', () => {
  console.log('Silver Hoof Stables - About Page Loaded');
  initFaqAccordion();
  initStatsCounters();
});

function initStatsCounters() {
  const counters = document.querySelectorAll('.abh-stat-num[data-target], .ahn-stat-num[data-target]');
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;

    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(easeOut(progress) * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    }
    requestAnimationFrame(step);
  }

if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(c => io.observe(c));
  } else {
    
    counters.forEach(c => animateCounter(c));
  }
}

function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach((header) => {
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFaq(header);
      }
    });
  });
}

function toggleFaq(headerEl) {
  const currentCard = headerEl.closest('.faq-card');
  if (!currentCard) return;

  const accordionContainer = currentCard.closest('.faq-accordion-wrap');
  if (accordionContainer) {
    const allCards = accordionContainer.querySelectorAll('.faq-card');
    allCards.forEach((card) => {
      if (card !== currentCard) {
        card.classList.remove('active');
      }
    });
  }

  currentCard.classList.toggle('active');
}
