const email = document.getElementById('email');
const form = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const showError = () => {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Ingresá un email';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'El email tiene que tener un formato válido.';
  }
  email.classList.add('invalid');
  emailError.className = 'error active';
};

form.addEventListener('input', (event) => {
  const input = event.target;
  if (input.validity.valid) {
    input.classList.remove('invalid');
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

// email.addEventListener('focus', () => {
//   if (email.classList.contains('invalid')) {
//     email.classList.remove('invalid');
//   }
// });

// const password = document.getElementById('password');
// const inputs = document.querySelectorAll('#register [required]');

// inputs.forEach((input) => {
//   const small = document.createElement('small');
//   small.id = input.name;
//   small.textContent = input.title;
//   small.classList.add('text-danger', 'hidden');
//   input.insertAdjacentElement('afterend', small);
// });

// form.addEventListener('keyup', (event) => {
//   if (event.target.matches('#register [required]')) {
//     const e = event.target;
//     const { pattern } = event.target;
//     const regex = new RegExp(pattern);
//     if (regex.exec(e.value)) {
//       console.log(regex.exec(e.value));
//       return document.getElementById(e.name).classList.add('hidden');
//     }
//     return document.getElementById(e.name).classList.remove('hidden');
//   }
// });
