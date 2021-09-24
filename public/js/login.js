const form = document.getElementById('login-form');
const password = document.getElementById('password');
const mail = document.getElementById('email');

const showError = (input) => {
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.validity.valueMissing) {
    span.textContent = 'Campo obligatorio';
  } else if (input.validity.typeMismatch) {
    span.textContent = input.title;
  }
  span.classList.add('invalid');
  input.classList.add('invalid');
  input.classList.remove('success');
  icon.classList.add('input-icon--error', 'fa-exclamation-circle');
};

const hideError = (input) => {
  const span = document.querySelector(`#${input.id} + span.error`);
  span.textContent = '';
  span.classList.remove('invalid');
  input.classList.remove('invalid');
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  icon.classList.remove('input-icon--error', 'fa-exclamation-circle');
  icon.classList.add('input-icon--success', 'fa-check-circle');
  input.classList.add('success');
};

mail.addEventListener('input', () => {
  if (mail.validity.valid) {
    hideError(mail);
  } else {
    showError(mail);
  }
});

password.addEventListener('input', () => {
  if (password.validity.valid) {
    hideError(password);
  } else {
    showError(password);
  }
});

form.addEventListener('submit', (event) => {
  if (!mail.validity.valid) {
    event.preventDefault();
    showError(mail);
  }

  if (!password.validity.valid) {
    event.preventDefault();
    showError(password);
  }
});
