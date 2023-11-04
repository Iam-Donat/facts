console.log('hello world! 🛬');

const openBtn = document.querySelector('#btn__open');
const form = document.querySelector('.fact-form');

openBtn.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
  } else {
    form.classList.add('hidden');
  }
});