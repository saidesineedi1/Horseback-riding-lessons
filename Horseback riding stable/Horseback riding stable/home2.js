

document.addEventListener('DOMContentLoaded', () => {

const home2Sections = document.querySelectorAll('section[id]');
  const home2NavLinks = document.querySelectorAll('.nav-menu a[href*="#"]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    home2Sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });

});

function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}
