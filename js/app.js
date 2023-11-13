const openBtn = document.querySelector('#btn__open');
const form = document.querySelector('.fact-form');

openBtn.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    openBtn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    openBtn.textContent = 'Share a Fact';
  }
});