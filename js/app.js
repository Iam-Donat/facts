
// Selecting DOM elements
const openBtn = document.querySelector('#btn__open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM Element: Render facts in the list
factsList.innerHTML = '';

// Toggle form visibility
openBtn.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    openBtn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    openBtn.textContent = 'Share a Fact';
  }
});