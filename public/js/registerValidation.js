const form = document.getElementById('register');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmar-contraseña');

const showError = (input) => {
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  const span = document.querySelector(`#${input.id} + span.error`);

  if (input.validity.valueMissing) {
    span.textContent = 'Obligatory field';
  } else if (input.validity.tooShort) {
    span.textContent = `At least ${input.minLength} characters`;
  } else if (input.validity.typeMismatch) {
    span.textContent = input.title;
  } else if (input.validity.patternMismatch) {
    span.textContent = input.title;
  } else if (input.value !== password.value || password.value.trim() === '') {
    span.textContent = input.title;
  }

  input.classList.remove('success');
  input.classList.add('invalid');
  span.classList.add('invalid');
  icon.classList.add('input-icon--error', 'fa-exclamation-circle');
};

const hideError = (input) => {
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.name === 'image') {
    span.textContent = '';
    span.classList.remove('invalid');
    input.classList.remove('invalid');
    input.classList.add('success');
  } else {
    span.textContent = '';
    span.classList.remove('invalid');
    input.classList.remove('invalid');
    const icon = document.querySelector(`#${input.id} ~ .input-icon`);
    icon.classList.remove('input-icon--error', 'fa-exclamation-circle');
    icon.classList.add('input-icon--success', 'fa-check-circle');
    input.classList.add('success');
  }
};

form.addEventListener('input', (event) => {
  if (event.target.validity.valid) {
    hideError(event.target);
  } else {
    showError(event.target);
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
  const fileExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (!name.validity.valid) {
    event.preventDefault();
    showError(name);
  }
  if (!mail.validity.valid) {
    event.preventDefault();
    showError(mail);
  }
  if (!password.validity.valid) {
    event.preventDefault();
    showError(password);
  }
  if (password.value !== confirmPass.value || password.value.trim() === '') {
    event.preventDefault();
    showError(confirmPass);
  }
  if (!fileExt.exec(image.value)) {
    event.preventDefault();
    showError(image);
  }
});
