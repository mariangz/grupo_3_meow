const form = document.querySelector('form');
const form = document.querySelector('.field');
const nombre = document.getElementById('name');
const price = document.getElementById('price');
const description = document.getElementById('description');
const nutritional = document.getElementById('nutritional');
const radios = document.querySelectorAll('input[type="radio"]');
console.log(radio);
console.log(nutritional);

const showError = (input) => {
  console.log(input);
  const span = document.querySelector(`#${input.id} + span.error`);
  if (input.validity.valueMissing) {
    span.textContent = 'Campo obligatorio';
  } else if (input.validity.tooShort) {
    span.textContent = `Al menos ${input.minLength} caracteres`;
  }

  span.classList.add('invalid');
  input.classList.add('invalid');
  input.classList.remove('success');
};

const hideError = (input) => {
  const span = document.querySelector(`#${input.id} + span.error`);
  span.textContent = '';
  span.classList.remove('invalid');
  input.classList.remove('invalid');
  input.classList.add('success');
};

nutritional.addEventListener('input', (event) => console.log(event.target));

let radio = false;
for (let e of radios) {
  if (e.check === true) {
    radio = true;
  }
}

form.addEventListener('submit', (event) => {
  const image = document.getElementById('productAddImage');
  const fileExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (!nombre.validity.valid) {
    event.preventDefault();
    showError(nombre);
  }
  if (!price.value.valid) {
    event.preventDefault();
    showError(price);
  }
  if (
    description.textContent.trim() === '' ||
    nutritional.textContent.trim().length > 20
  ) {
    event.preventDefault();
    showError(nutritional);
  }

  if (
    nutritional.textContent.trim() === '' ||
    nutritional.textContent.trim().length > 20
  ) {
    event.preventDefault();
    showError(nutritional);
  }

  if (!radio) {
    event.preventDefault();
    showError(field);
  }

  if (!fileExt.exec(image.value)) {
    event.preventDefault();
    showError(image);
  }
});
