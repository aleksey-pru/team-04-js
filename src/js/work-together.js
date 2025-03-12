import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('.icon-x');
const overlay = document.querySelector('.modal-overlay');
const email = document.querySelector('[name="email"]');
const comment = document.querySelector('[name="comment"]');
const submitBtn = document.querySelector('.send-btn');
const submit = document.querySelector('.letswork-form');
const modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
  overlay.classList.remove('is-open');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    overlay.classList.remove('is-open');
  }
});

overlay.addEventListener('click', e => {
  if (e.target !== modal && !modal.contains(e.target)) {
    overlay.classList.remove('is-open');
  }
});

function sendEmail() {
  document
    .querySelectorAll('.error-message, .success-message')
    .forEach(el => el.remove());
  email.classList.remove('error');
  email.classList.remove('success');

  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!email.value.match(emailPattern)) {
    email.classList.add('error');
    email.insertAdjacentHTML(
      'afterend',
      "<p class='error-message' style='color:red;'>Invalid email, try again</p>"
    );
    return false;
  }
  email.classList.add('success');
  email.insertAdjacentHTML(
    'afterend',
    "<p class='success-message' style='color:green;'>Success!</p>"
  );
  return true;
}

function sendComment() {
  comment.classList.remove('success');
  comment.classList.remove('error');
  document.querySelectorAll('.error-message').forEach(el => el.remove());

  if (comment.value.trim() === '') {
    comment.classList.add('error');
    return false;
  }
  comment.classList.add('success');
  return true;
}

email.addEventListener('blur', sendEmail);
comment.addEventListener('blur', sendComment);

async function submitForm(e) {
  e.preventDefault();

  const isEmailValid = sendEmail();
  const isCommentValid = sendComment();

  if (!isEmailValid || !isCommentValid) {
    return;
  }

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        email: email.value.trim(),
        comment: comment.value.trim(),
      }
    );

    if (response.status === 201) {
      overlay.classList.add('is-open');
      document
        .querySelectorAll('.error-message, .success-message')
        .forEach(el => el.remove());
      email.classList.remove('error');
      email.classList.remove('success');
      comment.classList.remove('success');
      comment.classList.remove('error');

      submit.reset();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  }
}

submit.addEventListener('submit', submitForm);
