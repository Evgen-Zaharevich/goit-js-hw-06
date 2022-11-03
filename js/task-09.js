const refButton = document.querySelector(".change-color");
const refText = document.querySelector(".color");
const refBody = document.body;


refButton.addEventListener(`click`, changeBackgroundColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor(event) {
  refBody.style.backgroundColor = getRandomHexColor();
  refText.textContent = getRandomHexColor();
}
