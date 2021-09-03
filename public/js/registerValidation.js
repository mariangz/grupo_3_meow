const form = document.getElementById('register');

const showError = (input) => {
  console.log(input);
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.validity.valueMissing) {
    span.textContent = 'Campo obligatorio';
  } else if (input.validity.tooShort) {
    span.textContent = `Al menos ${input.minLength} caracteres`;
  } else if (input.validity.typeMismatch) {
    span.textContent = input.title;
  } else if (input.validity.patternMismatch) {
    span.textContent = input.title;
  }
  span.classList.add('invalid');
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
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
};

form.addEventListener('input', (event) =>
  event.target.validity.valid
    ? hideError(event.target)
    : showError(event.target)
);
