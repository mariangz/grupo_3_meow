const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('blur', () => {
  if (!email.value.includes('@')) {
    email.classList.add('invalid');
  }
});

email.addEventListener('focus', () => {
  if (email.classList.contains('invalid')) {
    email.classList.remove('invalid');
  }
});
