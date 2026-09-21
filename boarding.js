/* ==========================================================================
   SILVER HOOF STABLES - BOARDING PAGE DYNAMIC SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Check URL params for pre-selected package
  const urlParams = new URLSearchParams(window.location.search);
  const pkgParam = urlParams.get('package');
  if (pkgParam) {
    openBoardingModal(pkgParam);
  }
});

/**
 * Open Booking / Boarding Modal with pre-selected package
 */
function openBoardingModal(packageName) {
  const modal = document.getElementById('booking-modal');
  const programSelect = document.getElementById('b-program');

  if (programSelect && packageName) {
    let matched = false;
    for (let i = 0; i < programSelect.options.length; i++) {
      if (programSelect.options[i].value.toLowerCase().includes(packageName.toLowerCase())) {
        programSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const newOption = new Option(packageName, packageName, true, true);
      programSelect.add(newOption);
    }
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
