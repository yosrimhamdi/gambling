const popUpCloseIcon = document.querySelector('.pop-up .fa-xmark');
const registerButton = document.querySelector('.register');

const registerBox = document.querySelector('.hero-section');
const popUpBox = document.querySelector('.pop-up');

registerButton.addEventListener('click', () => {
  popUpBox.style.display = 'block';
  registerBox.style.display = 'none';
});

popUpCloseIcon.addEventListener('click', () => {
  registerBox.style.display = 'block';
  popUpBox.style.display = 'none';
});
