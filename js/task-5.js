const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});