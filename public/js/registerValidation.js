const form = document.getElementById('register');

const showError = (input) => {
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.validity.valueMissing) {
    span.textContent = 'Campo obligatorio';
  } else if (input.validity.tooShort) {
    span.textContent = `Al menos ${input.minLength} caracteres`;
  } else if (input.validity.typeMismatch) {
    span.textContent = input.title;
  } else if (input.validity.patternMismatch) {
    span.textContent = input.title;
  } else if (input.value !== document.getElementById('password')) {
    span.textContent = input.title;
  }

  span.classList.add('invalid');
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  icon.classList.add('input-icon--error', 'fa-exclamation-circle');
  input.classList.remove('success');
  input.classList.add('invalid');

  form.addEventListener('submit', (event) => event.preventDefault());
};

const hideError = (input) => {
  const span = document.querySelector(`#${input.id} + span.error`);
  span.textContent = '';
  span.classList.remove('invalid');
  input.classList.remove('invalid');
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  icon.classList.remove('input-icon--error', 'fa-exclamation-circle');
  icon.classList.add('input-icon--success', 'fa-check-circle');
  input.classList.remove('invalid');
  input.classList.add('success');
};

form.addEventListener('input', (event) => {
  const password = document.getElementById('password');
  if (event.target.id === 'confirmar-contraseña') {
    return event.target.value === password.value
      ? hideError(event.target)
      : showError(event.target);
  }
  return event.target.validity.valid
    ? hideError(event.target)
    : showError(event.target);
});

form.addEventListener('submit', (event) => {
  const spans = document.querySelectorAll('.error');
  const inputs = document.querySelectorAll('input');
  spans.forEach((span) => {
    if (span.classList.value.includes('invalid')) {
      event.preventDefault();
    }
  });
  inputs.forEach((input) => {
    if (input.value === '') {
      showError(input);
      event.preventDefault();
    }
  });
});
