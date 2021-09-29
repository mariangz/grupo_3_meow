const form = document.querySelector('form');
console.log(form);
const name = document.getElementById('name');
const description = document.getElementById('description');
const nutritional = document.getElementById('nutritional');

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
  }
  span.classList.add('invalid');
  input.classList.add('invalid');
  input.classList.remove('success');
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
