/* ==========================================================================
   SILVER HOOF STABLES - RIDER DASHBOARD SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardTabs();
  initSkillFilters();
  initSidebarToggle();
  syncUserProfileFromStorage();
  initPortalToggles();
});

/**
 * Synchronize user profile info from localStorage (from Login/Signup)
 */
function syncUserProfileFromStorage() {
  const savedName = localStorage.getItem('sh_user_name');
  const welcomeHeading = document.getElementById('dash-user-welcome');
  const pillName = document.getElementById('pill-user-name');

  if (savedName) {
    if (welcomeHeading) {
      welcomeHeading.textContent = `Welcome back, ${savedName}`;
    }
    if (pillName) {
      pillName.textContent = savedName;
    }
  }
}

/**
 * Mobile Sidebar Drawer Toggle
 */
function initSidebarToggle() {
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebar = document.getElementById('dash-sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }
}

/**
 * Portal Theme & RTL Toggles
 */
function initPortalToggles() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const rtlToggle = document.getElementById('rtl-toggle');

  // Unified theme setter helper
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('silverhoof_theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
    if (themeToggle) {
      themeToggle.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  }

  // Unified RTL setter helper
  function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('silverhoof_dir', dir);
    localStorage.setItem('dir', dir);
    if (rtlToggle) {
      rtlToggle.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      rtlToggle.setAttribute('title', dir === 'rtl' ? 'Switch to Left-to-Right' : 'Switch to Right-to-Left');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  if (rtlToggle) {
    rtlToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDir(newDir);
    });
  }

  // Restore preferences on load
  const savedTheme = localStorage.getItem('silverhoof_theme') || localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  const savedDir = localStorage.getItem('silverhoof_dir') || localStorage.getItem('dir') || 'ltr';
  applyDir(savedDir);
}

/**
 * Tab Switching Logic for Portal Sidebar
 */
function initDashboardTabs() {
  const tabItems = document.querySelectorAll('.dash-tab-item');
  const panels = document.querySelectorAll('.dash-panel');

  if (!tabItems.length) return;

  tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchDashTab(targetTab);
    });
  });
}

/**
 * Programmatic tab switcher helper
 */
function switchDashTab(tabName) {
  const tabItems = document.querySelectorAll('.dash-tab-item');
  const panels = document.querySelectorAll('.dash-panel');
  const sidebar = document.getElementById('dash-sidebar');

  if (sidebar) sidebar.classList.remove('open');

  tabItems.forEach(t => {
    if (t.getAttribute('data-tab') === tabName) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  panels.forEach(p => {
    if (p.id === `panel-${tabName}`) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Toggle Line Chart 6 Months vs 1 Year
 */
function toggleLineChartSpan(span, btnEl) {
  const filterBtns = document.querySelectorAll('.time-filter-btn');
  filterBtns.forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  const revVal = document.querySelector('.kpi-value');

  if (span === '1y') {
    showDashToast('Loaded 1 Year historical analytics: $524,000 Total Annual Revenue.');
  } else {
    showDashToast('Showing 6 Months trend: $48,250 Current Monthly Revenue.');
  }
}

/**
 * Live Dashboard Search Filter
 */
function handleDashSearch(query) {
  const term = query.toLowerCase().trim();
  const tableRows = document.querySelectorAll('.dash-table tbody tr');
  const slotCards = document.querySelectorAll('.slot-card');

  tableRows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(term) ? '' : 'none';
  });

  slotCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? 'flex' : 'none';
  });
}

/**
 * Skill Level Filter Buttons for Slot Booking Tab
 */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-btn');
  const slotCards = document.querySelectorAll('.slot-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      slotCards.forEach(card => {
        const level = card.getAttribute('data-level');
        if (filter === 'all' || level === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Confirm Slot Booking Action
 */
function confirmSlotBooking(slotTitle, timeSlot) {
  showDashToast(`Successfully reserved slot for "${slotTitle}" (${timeSlot}). Confirmation details sent to your registered email!`);
}

/**
 * Trail Registration Action
 */
function registerForTrail(trailTitle) {
  showDashToast(`Registered for "${trailTitle}"! Our trail guide will contact you 24h prior to confirm horse assignment.`);
}

/**
 * Custom Dashboard Toast Alert
 */
function showDashToast(message) {
  let toast = document.getElementById('dash-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dash-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #2B2118;
      color: #F5F1E8;
      border: 1.5px solid #C6A15B;
      padding: 1rem 1.4rem;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      z-index: 9999;
      font-size: 0.9rem;
      font-weight: 600;
      max-width: 420px;
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

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #C6A15B; font-size: 1.2rem;"></i> <span>${message}</span>`;

  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 50);

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 4500);
}
