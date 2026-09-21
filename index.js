/* 
  Silver Hoof Stables - Official JavaScript Logic
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. THEME & RTL STATE MANAGEMENT
     ========================================================================== */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const rtlToggleBtn = document.getElementById('rtl-toggle');
  const rtlLabel = rtlToggleBtn ? rtlToggleBtn.querySelector('.btn-label') : null;

  // Saved Theme Setup
  const savedTheme = localStorage.getItem('silverhoof_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('silverhoof_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  }

  // Saved RTL Setup
  const savedDir = localStorage.getItem('silverhoof_dir') || 'ltr';
  htmlEl.setAttribute('dir', savedDir);
  if (rtlLabel) rtlLabel.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = htmlEl.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      htmlEl.setAttribute('dir', newDir);
      localStorage.setItem('silverhoof_dir', newDir);
      if (rtlLabel) {
        rtlLabel.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
      } else {
        rtlToggleBtn.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  }


  /* ==========================================================================
     2. NAVIGATION & MOBILE MENU & SCROLL HIGHLIGHT
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.getElementById('header');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  const dropdownItem = document.querySelector('.nav-item.dropdown');
  const dropdownMenu = dropdownItem ? dropdownItem.querySelector('.dropdown-menu') : null;
  const dropdownLinks = document.querySelectorAll('.dropdown-item');

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (mobileMenuToggle) {
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    }
  }

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      const icon = mobileMenuToggle.querySelector('i');
      const isNowActive = navMenu.classList.contains('active');
      if (icon) {
        icon.className = isNowActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }

      // Automatically display Home 1 & Home 2 options when hamburger menu opens
      if (isNowActive && dropdownItem && dropdownMenu) {
        dropdownItem.classList.add('open');
        dropdownMenu.classList.add('show');
      }
    });
  }

  // Dropdown toggle on mobile & touch
  if (homeDropdownBtn && dropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      const isMobile = window.innerWidth <= 768 || (navMenu && navMenu.classList.contains('active'));
      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();
        dropdownItem.classList.toggle('open');
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('show');
        }
      }
    });
  }

  // Close mobile menu when clicking nav links (excluding mobile dropdown trigger)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const isMobile = window.innerWidth <= 768 || (navMenu && navMenu.classList.contains('active'));
      if (isMobile && (link.id === 'home-dropdown-btn' || link.closest('.dropdown') === dropdownItem)) {
        return; // Handled by homeDropdownBtn toggle
      }
      closeMobileMenu();
    });
  });

  // Ensure clicking dropdown items (Home 1, Home 2) closes mobile drawer and navigates cleanly
  dropdownLinks.forEach(item => {
    item.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Reset dropdown and menu states on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
      if (dropdownItem) dropdownItem.classList.remove('open');
      if (dropdownMenu) dropdownMenu.classList.remove('show');
    }
  });

  // Scroll active section highlighter
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky header shadow
    if (header) {
      if (scrollY > 50) {
        header.style.boxShadow = 'var(--shadow-sm)';
      } else {
        header.style.boxShadow = 'none';
      }
    }

    // ScrollSpy
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });


  /* ==========================================================================
     3. PRICING TOGGLE SWITCH (SINGLE VS MONTHLY)
     ========================================================================== */
  const pricingToggle = document.getElementById('pricing-toggle');
  const singleLabel = document.getElementById('single-label');
  const monthlyLabel = document.getElementById('monthly-label');
  const priceVals = document.querySelectorAll('.price-val');
  const periods = [
    document.getElementById('period-1'),
    document.getElementById('period-2'),
    document.getElementById('period-3')
  ];

  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const isMonthly = pricingToggle.checked;

      if (isMonthly) {
        singleLabel.classList.remove('active');
        monthlyLabel.classList.add('active');
      } else {
        singleLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
      }

      priceVals.forEach(valEl => {
        const targetVal = isMonthly ? valEl.getAttribute('data-monthly') : valEl.getAttribute('data-single');
        
        // Quick number transition
        valEl.style.opacity = '0';
        setTimeout(() => {
          valEl.textContent = targetVal;
          valEl.style.opacity = '1';
        }, 150);
      });

      periods.forEach(pEl => {
        if (pEl) pEl.textContent = isMonthly ? '/ month' : '/ session';
      });
    });
  }


  /* ==========================================================================
     4. GALLERY FILTERING & LIGHTBOX MODAL
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCategory === filterVal) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Trigger
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-overlay h4').textContent;
      const subtitle = item.querySelector('.gallery-overlay p').textContent;

      if (lightboxImg && lightboxModal) {
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = `<strong>${title}</strong> &bull; ${subtitle}`;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }


  /* ==========================================================================
     5. MODAL SYSTEM (BOOKING, LOGIN & RIDER DASHBOARD)
     ========================================================================== */
  const bookingModal = document.getElementById('booking-modal');
  const bookingClose = document.getElementById('booking-close');
  const openBookingBtns = [
    document.getElementById('open-booking-btn'),
    document.getElementById('hero-book-btn'),
    document.getElementById('about-learn-more-btn')
  ];

  const loginModal = document.getElementById('login-modal');
  const loginClose = document.getElementById('login-close');
  const openLoginBtn = document.getElementById('open-login-btn');

  const dashModal = document.getElementById('rider-dashboard-modal');
  const dashClose = document.getElementById('dashboard-close');

  // Open Booking
  openBookingBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        openBookingModal();
      });
    }
  });

  if (bookingClose && bookingModal) {
    bookingClose.addEventListener('click', () => {
      bookingModal.classList.remove('active');
    });

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }

  // Open Login
  if (openLoginBtn) {
    openLoginBtn.addEventListener('click', () => {
      openLoginModal();
    });
  }

  if (loginClose && loginModal) {
    loginClose.addEventListener('click', () => {
      loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove('active');
      }
    });
  }

  if (dashClose && dashModal) {
    dashClose.addEventListener('click', () => {
      dashModal.classList.remove('active');
    });

    dashModal.addEventListener('click', (e) => {
      if (e.target === dashModal) {
        dashModal.classList.remove('active');
      }
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal) lightboxModal.classList.remove('active');
      if (bookingModal) bookingModal.classList.remove('active');
      if (loginModal) loginModal.classList.remove('active');
      if (dashModal) dashModal.classList.remove('active');
    }
  });

});

/* ==========================================================================
   GLOBAL HELPER FUNCTIONS FOR BUTTON ACTIONS & RIDER DASHBOARD
   ========================================================================== */

let currentRiderBalance = 65.00;

function openBookingModal() {
  const bookingModal = document.getElementById('booking-modal');
  if (bookingModal) {
    bookingModal.classList.add('active');
  }
}

function openLoginModal() {
  window.location.href = 'login.html';
}

function openSignupPage() {
  window.location.href = 'signup.html';
}

function openRiderDashboard() {
  window.location.href = 'dash.html';
}

function closeRiderDashboard() {
  const dashModal = document.getElementById('rider-dashboard-modal');
  if (dashModal) dashModal.classList.remove('active');
}

function openRiderDashboardWithTab(tabId) {
  openRiderDashboard();
  const targetTabBtn = document.querySelector(`.dash-tab-btn[onclick*="${tabId}"]`);
  if (targetTabBtn) {
    switchDashTab(tabId, targetTabBtn);
  }
}

function quickDemoLogin() {
  const emailInput = document.getElementById('l-email');
  if (emailInput) emailInput.value = 'sarah.j@silverhoof.com';
  openRiderDashboard();
}

function switchDashTab(tabId, el) {
  const allTabs = document.querySelectorAll('.dash-tab-btn');
  const allPanes = document.querySelectorAll('.dash-pane');
  
  allTabs.forEach(tab => tab.classList.remove('active'));
  allPanes.forEach(pane => pane.classList.remove('active'));

  if (el) el.classList.add('active');
  const targetPane = document.getElementById(`pane-${tabId}`);
  if (targetPane) targetPane.classList.add('active');
}

function openBookingWithProgram(programName) {
  const bookingModal = document.getElementById('booking-modal');
  const bProgramSelect = document.getElementById('b-program');
  
  if (bProgramSelect) {
    for (let i = 0; i < bProgramSelect.options.length; i++) {
      if (bProgramSelect.options[i].text.toLowerCase().includes(programName.toLowerCase())) {
        bProgramSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (bookingModal) {
    bookingModal.classList.add('active');
  }
}

function openBookingWithPlan(planName) {
  openBookingWithProgram(planName);
}

/* Form Submit Handlers */
function handleBookingSubmit(event) {
  event.preventDefault();
  const program = document.getElementById('b-program').value;
  const name = document.getElementById('b-name').value;
  const date = document.getElementById('b-date').value;
  const time = document.getElementById('b-time').value;

  alert(`Thank you, ${name}!\nYour booking request for "${program}" on ${date} at ${time} has been received. Our team will contact you shortly to confirm your reservation.`);
  
  document.getElementById('booking-form').reset();
  document.getElementById('booking-modal').classList.remove('active');
}

function handleLoginSubmit(event) {
  event.preventDefault();
  openRiderDashboard();
}

function handleDashBooking(event) {
  event.preventDefault();
  const skill = document.getElementById('dash-skill-level').value;
  const program = document.getElementById('dash-program-select').value;
  const date = document.getElementById('dash-book-date').value || 'Sep 25, 2026';
  const time = document.getElementById('dash-book-time').value;
  const instructor = document.getElementById('dash-instructor-select').value;
  const horse = document.getElementById('dash-horse-select').value;

  const tbody = document.getElementById('schedule-tbody');
  if (tbody) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${date}, ${time}</strong></td>
      <td>${program} (${skill})</td>
      <td>${instructor}</td>
      <td>${horse}</td>
      <td><span class="status-badge confirmed">Confirmed</span></td>
      <td><button class="btn-text-danger" onclick="cancelScheduleItem(this)">Cancel</button></td>
    `;
    tbody.prepend(tr);
  }

  alert(`Lesson Slot Confirmed!\nLevel: ${skill}\nProgram: ${program}\nInstructor: ${instructor}\nHorse: ${horse}\nDate & Time: ${date} at ${time}`);
  switchDashTab('schedule', document.querySelectorAll('.dash-tab-btn')[4]);
}

function registerTrailRide(trailName, cost) {
  currentRiderBalance += cost;
  updateBalanceDisplay();

  const tbody = document.getElementById('schedule-tbody');
  if (tbody) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>Upcoming Weekend</strong></td>
      <td>Guided Trail: ${trailName}</td>
      <td>Sophia Chen</td>
      <td>Apollo (Trail Leader)</td>
      <td><span class="status-badge confirmed">Registered</span></td>
      <td><button class="btn-text-danger" onclick="cancelScheduleItem(this)">Cancel</button></td>
    `;
    tbody.prepend(tr);
  }

  alert(`Trail Ride Registered Successfully!\nTrail: ${trailName}\nRegistration Fee: $${cost}.00 added to account balance.`);
  switchDashTab('schedule', document.querySelectorAll('.dash-tab-btn')[4]);
}

function cancelScheduleItem(btn) {
  if (confirm('Are you sure you want to cancel this scheduled lesson slot / trail ride?')) {
    const tr = btn.closest('tr');
    if (tr) tr.remove();
    alert('Session successfully cancelled.');
  }
}

function processAccountPayment() {
  if (currentRiderBalance <= 0) {
    alert('Your balance is currently $0.00. No payment is required at this time.');
    return;
  }

  const amountPaid = currentRiderBalance;
  currentRiderBalance = 0.00;
  updateBalanceDisplay();

  const payTbody = document.getElementById('payment-tbody');
  if (payTbody) {
    const tr = document.createElement('tr');
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    tr.innerHTML = `
      <td>${today}</td>
      <td>Online Account Balance Payment</td>
      <td>$${amountPaid.toFixed(2)}</td>
      <td><span class="status-badge confirmed">Paid</span></td>
    `;
    payTbody.prepend(tr);
  }

  alert(`Payment Successful!\nReceived payment of $${amountPaid.toFixed(2)} via Visa ending in 4242.\nYour new balance is $0.00.`);
}

function updateBalanceDisplay() {
  const overviewBal = document.getElementById('dash-overview-balance');
  const payAmt = document.getElementById('dash-payment-amt');
  const btnPay = document.getElementById('btn-pay-balance');
  
  if (overviewBal) overviewBal.textContent = `$${currentRiderBalance.toFixed(2)}`;
  if (payAmt) payAmt.textContent = `$${currentRiderBalance.toFixed(2)}`;
  if (btnPay) {
    if (currentRiderBalance <= 0) {
      btnPay.textContent = 'Balance Paid ($0.00)';
      btnPay.classList.add('disabled');
    } else {
      btnPay.textContent = `Pay Balance Now ($${currentRiderBalance.toFixed(2)})`;
      btnPay.classList.remove('disabled');
    }
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('c-name').value;
  const feedback = document.getElementById('form-feedback');

  if (feedback) {
    feedback.className = 'form-feedback success';
    feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you ${name}, your message has been sent successfully! We will get back to you within 24 hours.`;
    document.getElementById('contact-form').reset();
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 6000);
  }
}

/* Home 1 vs Home 2 Version Switcher */
function selectHomeVersion(version, event) {
  if (event) event.preventDefault();
  
  const htmlEl = document.documentElement;
  const home1Link = document.getElementById('home-1-link');
  const home2Link = document.getElementById('home-2-link');
  const heroWelcome = document.querySelector('.hero-welcome');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroDesc = document.querySelector('.hero-description');

  if (version === 2) {
    htmlEl.setAttribute('data-home-version', '2');
    if (home1Link) home1Link.classList.remove('active');
    if (home2Link) home2Link.classList.add('active');

    if (heroWelcome) heroWelcome.textContent = "WELCOME TO THE RESORT";
    if (heroTitle) heroTitle.innerHTML = 'SILVER HOOF <br><span class="highlight-text">LUXURY RANCH</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Exclusive Equestrian Estate & Private Club';
    if (heroDesc) heroDesc.textContent = 'Immerse yourself in 150 acres of private estate trails, world-class dressage arenas, and five-star equestrian hospitality.';
  } else {
    htmlEl.setAttribute('data-home-version', '1');
    if (home2Link) home2Link.classList.remove('active');
    if (home1Link) home1Link.classList.add('active');

    if (heroWelcome) heroWelcome.textContent = "WELCOME TO";
    if (heroTitle) heroTitle.innerHTML = 'SILVER HOOF <br><span class="highlight-text">STABLES</span>';
    if (heroSubtitle) heroSubtitle.textContent = 'Horseback Riding Stable & Lessons';
    if (heroDesc) heroDesc.textContent = 'Experience the freedom, build your skills, and create a deeper bond with horses amidst our breathtaking countryside sanctuary.';
  }

  const homeSec = document.getElementById('home');
  if (homeSec) {
    homeSec.scrollIntoView({ behavior: 'smooth' });
  }
}
