import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector(`[name="email"]`);
const formMessage = document.querySelector(`[name="message"]`);
const savedInputs = JSON.parse(localStorage.getItem('feedback-form-state'));

function checkStorage() {
  if (localStorage.getItem('feedback-form-state') == null) {
    formEmail.value = '';
    formMessage.value = '';
    return;
  }
  formEmail.value = savedInputs.email;
  formMessage.value = savedInputs.message;
}

function saveInputsValue() {
  const inputsValue = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputsValue));
}

function logAndClear(event) {
  event.preventDefault();

  console.log({ email: formEmail.value, message: formMessage.value });
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

checkStorage();

form.addEventListener('input', throttle(saveInputsValue, 500));
form.addEventListener('submit', logAndClear);
