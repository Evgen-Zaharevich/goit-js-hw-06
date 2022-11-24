// Напиши скрипт, который изменяет цвета фона элемента < body >
//     через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */}

const buttonRef = document.querySelector(`.change-color`);
const textValueRef = document.querySelector(`.color`);
const bodyRef = document.body;

buttonRef.addEventListener(`click`, onChangeColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBody(event) {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  textValueRef.textContent = color;
   
}