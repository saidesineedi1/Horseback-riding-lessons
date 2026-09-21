

document.addEventListener('DOMContentLoaded', function () {
  
  syncAuthThemeAndRtl();
});

function syncAuthThemeAndRtl() {
  const htmlEl = document.documentElement;
  const themeIcon = document.getElementById('theme-icon');
  const rtlToggleBtn = document.getElementById('rtl-toggle');

  const savedTheme = localStorage.getItem('silverhoof_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  if (themeIcon) {
    themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }

  const savedDir = localStorage.getItem('silverhoof_dir') || 'ltr';
  htmlEl.setAttribute('dir', savedDir);
  if (rtlToggleBtn) {
    rtlToggleBtn.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
  }
}

function togglePasswordVisibility(fieldId, iconEl) {
  const inputEl = document.getElementById(fieldId);
  if (!inputEl) return;

  if (inputEl.type === 'password') {
    inputEl.type = 'text';
    iconEl.classList.remove('fa-eye');
    iconEl.classList.add('fa-eye-slash');
  } else {
    inputEl.type = 'password';
    iconEl.classList.remove('fa-eye-slash');
    iconEl.classList.add('fa-eye');
  }
}

function handleSocialAuth(provider) {
  showAuthToast(`Connecting with ${provider}... Please wait.`);

  setTimeout(() => {
    localStorage.setItem('sh_is_logged_in', 'true');
    localStorage.setItem('sh_user_name', `${provider} Rider User`);
    showAuthToast(`Success! Authenticated via ${provider}. Directing to dashboard...`, 'success');

    setTimeout(() => {
      window.location.href = 'dash.html';
    }, 1100);
  }, 900);
}

function handleLoginPageSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const submitBtn = document.querySelector('.auth-submit-btn');

  if (!emailInput || !passwordInput) return;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showAuthToast('Please enter both your email address and password.', 'error');
    return;
  }

  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...`;
  }

  setTimeout(() => {
    
    const username = email.split('@')[0].replace(/[\._]/g, ' ');
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

    localStorage.setItem('sh_is_logged_in', 'true');
    localStorage.setItem('sh_user_email', email);
    localStorage.setItem('sh_user_name', formattedName || 'Sarah Vance');

    showAuthToast(`Welcome back, ${formattedName}! Loading your portal...`, 'success');

    setTimeout(() => {
      window.location.href = 'dash.html';
    }, 1100);
  }, 900);
}

function showAuthToast(message, type = 'info') {
  let toastContainer = document.getElementById('auth-toast');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'auth-toast';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      padding: 14px 22px;
      border-radius: 14px;
      font-size: 0.92rem;
      font-weight: 600;
      color: #FFFFFF;
      background: #2B2118;
      border: 1.5px solid #C6A15B;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
    `;
    document.body.appendChild(toastContainer);
  }

  let icon = '<i class="fa-solid fa-circle-info" style="color:#C6A15B;"></i>';
  if (type === 'success') {
    icon = '<i class="fa-solid fa-circle-check" style="color:#10B981;"></i>';
  } else if (type === 'error') {
    icon = '<i class="fa-solid fa-circle-exclamation" style="color:#EF4444;"></i>';
  }

  toastContainer.innerHTML = `${icon} <span>${message}</span>`;
  toastContainer.style.opacity = '1';
  toastContainer.style.transform = 'translateY(0)';

  setTimeout(() => {
    toastContainer.style.opacity = '0';
    toastContainer.style.transform = 'translateY(20px)';
  }, 4000);
}
