// Part 1: Event Listener for alert button
document.getElementById('alertButton').addEventListener('click', function () {
  alert('Button clicked!');
});

// Part 2: Light/Dark mode toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', function () {
  const body = document.body;
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    modeToggle.textContent = 'Switch to Light Mode';
  } else {
    body.classList.replace('dark', 'light');
    modeToggle.textContent = 'Switch to Dark Mode';
  }
});

// Part 2: Collapsible FAQ
const faq = document.getElementById('faq');
const faqContent = document.getElementById('faq-content');
faq.addEventListener('click', function () {
  faqContent.classList.toggle('hidden');
});

// Part 3: Form validation
const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  formMessage.textContent = '';
  formMessage.className = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (name === '') {
    showMessage('Name is required', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showMessage('Please enter a valid email', 'error');
    return;
  }

  if (password.length < 6) {
    showMessage('Password must be at least 6 characters', 'error');
    return;
  }

  showMessage('Form submitted successfully!', 'success');
  form.reset();
});

function showMessage(msg, type) {
  formMessage.textContent = msg;
  formMessage.className = type;
}

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
