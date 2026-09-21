

function handleSignupPageSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('signup-name');
  const emailInput = document.getElementById('signup-email');
  const passInput = document.getElementById('signup-password');
  const confirmInput = document.getElementById('signup-confirm');
  const levelSelect = document.getElementById('signup-level');
  const termsCheckbox = document.getElementById('terms-checkbox');
  const submitBtn = document.querySelector('#signup-page-form .auth-submit-btn');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const pass = passInput ? passInput.value.trim() : '';
  const confirmPass = confirmInput ? confirmInput.value.trim() : '';
  const level = levelSelect ? levelSelect.value : '';

  
  if (!name || !email || !pass || !confirmPass) {
    showAuthToast('Please fill out all required fields.', 'error');
    return;
  }

  if (pass !== confirmPass) {
    showAuthToast('Passwords do not match. Please verify and try again.', 'error');
    if (confirmInput) confirmInput.focus();
    return;
  }

  if (pass.length < 6) {
    showAuthToast('Password must be at least 6 characters long.', 'error');
    return;
  }

  if (termsCheckbox && !termsCheckbox.checked) {
    showAuthToast('Please accept the Terms of Service & Privacy Policy.', 'error');
    return;
  }

  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...`;
  }

  setTimeout(() => {
    
    localStorage.setItem('sh_is_logged_in', 'true');
    localStorage.setItem('sh_user_name', name);
    localStorage.setItem('sh_user_email', email);
    localStorage.setItem('sh_user_level', level || 'beginner');

    showAuthToast(`Registration successful! Welcome to Silver Hoof Stables, ${name}.`, 'success');

    setTimeout(() => {
      window.location.href = 'dash.html';
    }, 1100);
  }, 950);
}
