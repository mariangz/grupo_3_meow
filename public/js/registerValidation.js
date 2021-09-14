const form = document.getElementById('register');
const confirmPassword = document.getElementById('confirmar-contraseña');
// const file = document.getElementById('userAddImage');

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
  }
  span.classList.add('invalid');
  const icon = document.querySelector(`#${input.id} ~ .input-icon`);
  icon.classList.add('input-icon--error', 'fa-exclamation-circle');
  input.classList.remove('success');
  input.classList.add('invalid');
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

form.addEventListener('input', (event) =>
  event.target.validity.valid
    ? hideError(event.target)
    : showError(event.target)
);

confirmPassword.addEventListener('input', () => {
  const password = document.getElementById('password');
  const icon = document.querySelector(`#confirmPassword ~ .input-icon`);
  const span = document.querySelector(`#confirmPassword + span.error`);
  if (confirmPassword.value !== password.value) {
    span.classList.add('invalid');
    icon.classList.add('input-icon--error', 'fa-exclamation-circle');
    input.classList.remove('success');
    input.classList.add('invalid');
  } else {
    icon.classList.remove('input-icon--error', 'fa-exclamation-circle');
    icon.classList.add('input-icon--success', 'fa-check-circle');
    confirmPassword.classList.remove('invalid');
    confirmPassword.classList.add('success');
  }
});

// const imgValidation = () => {
//   const fileExt = file.value;
//   const span = document.querySelector('');
//   const allowExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

//   if (!allowExt.exec(fileExt)) {
//     span.textContent = 'Los formatos admitidos son: jpg, jpeg, png y gif.';
//     return;
//   } else {
//     span.textContent = fileExt;
//     return;
//   }
// };

// file.addEventListener('change', imgValidation);
