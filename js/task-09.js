function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const clrButton = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;

clrButton.addEventListener('click', () => {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});
