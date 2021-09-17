const form = document.getElementById('register');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmar-contraseña');

const showError = (input) => {
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.validity.valueMissing) {
    span.textContent = 'Campo obligatorio';
  } else if (input.validity.tooShort) {
    span.textContent = `Al menos ${input.minLength} caracteres`;
  } else if (input.validity.typeMismatch) {
    span.textContent = input.title;
  } else if (input.validity.patternMismatch) {
    span.textContent = input.title;
  } else if (input.value !== password.value) {
    span.textContent = input.title;
  }

  input.classList.remove('success');
  input.classList.add('invalid');
  span.classList.add('invalid');
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
  input.classList.remove('invalid');
  input.classList.add('success');
};

form.addEventListener('input', (event) => {
  if (event.target.validity.valid) {
    hideError(event.target);
  } else {
    showError(event.target);
  }
});

password.addEventListener('input', () => {
  if (password.value !== confirmPass.value) {
    showError(confirmPass);
  } else {
    hideError(confirmPass);
  }
});

confirmPass.addEventListener('input', () => {
  if (confirmPass.value !== password.value) {
    showError(confirmPass);
  } else {
    hideError(confirmPass);
  }
});

form.addEventListener('submit', (event) => {
  const mail = document.getElementById('email');
  const name = document.getElementById('name');
  const image = document.getElementById('userAddImage');

  if (!name.validity.valid) {
    event.preventDefault();
    showError(name);
  } else if (!mail.validity.valid) {
    event.preventDefault();
    showError(mail);
  } else if (!password.validity.valid) {
    event.preventDefault();
    showError(password);
  } else if (password.value !== confirmPass.value || confirmPass.value.trim() === '') {
    showError(confirmPass);
  } else if (!image.validity.valueMissing) {
    event.preventDefault();
    showError(image);
  }
  
});
