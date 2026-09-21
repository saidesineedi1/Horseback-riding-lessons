

document.addEventListener('DOMContentLoaded', () => {
  console.log('Silver Hoof Stables - About Page Loaded');
  initFaqAccordion();
});

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
