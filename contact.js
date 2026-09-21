/* ==========================================================================
   SILVER HOOF STABLES - CONTACT PAGE DYNAMIC SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initContactFaqs();
});

/**
 * Handle Contact Form submission
 */
function handleContactPageSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('c-name')?.value || 'Valued Guest';
  const email = document.getElementById('c-email')?.value || '';
  const category = document.getElementById('c-inquiry')?.value || 'General Inquiry';

  // Custom Toast Notification
  showContactToast(`Thank you, ${name}! Your inquiry regarding "${category}" has been sent. Our team will contact you at ${email} shortly.`);

  // Reset form
  const form = document.getElementById('contact-page-form');
  if (form) form.reset();
}

/**
 * Initialize Interactive FAQs Accordion on Contact Page
 */
function initContactFaqs() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-accordion-q');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordion items
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Toast Notification Popup
 */
function showContactToast(message) {
  let toast = document.getElementById('contact-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'contact-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #2B2118;
      color: #F5F1E8;
      border: 1.5px solid #C6A15B;
      padding: 1rem 1.5rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      z-index: 9999;
      font-size: 0.92rem;
      font-weight: 600;
      max-width: 400px;
      line-height: 1.5;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: transform 0.3s ease, opacity 0.3s ease;
      transform: translateY(100px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #C6A15B; font-size: 1.3rem;"></i> <span>${message}</span>`;
  
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 50);

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 5000);
}
