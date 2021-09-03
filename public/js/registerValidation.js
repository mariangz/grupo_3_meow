const form = document.getElementById('register');

const showError = (input) => {
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.validity.valueMissing) {
    span.textContent = 'Campo obligatorio';
  } else if (input.validity.tooShort) {
    span.textContent = `Al menos ${input.minLength} caracteres.`;
  } else if (input.validity.typeMismatch) {
    span.textContent = input.title;
  } else if (input.validity.patternMismatch) {
    span.textContent = input.title;
  }
  span.classList.add = 'active';
};

form.addEventListener('input', (event) => {
  const input = event.target;
  if (input.validity.valid) {
    input.classList.remove('invalid');
    input.textContent = '';
    input.className = 'error';
  } else {
    showError(input);
  }
});

console.log(form);
