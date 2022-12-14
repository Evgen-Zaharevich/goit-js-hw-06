// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должны иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const inputRef = document.querySelector(`input`);
const createButtonRef = document.querySelector(`[data-create]`);
const destroyButtonRef = document.querySelector(`[data-destroy]`);
const boxesRef = document.querySelector(`#boxes`);

createButtonRef.addEventListener(`click`, getInputValue);
destroyButtonRef.addEventListener(`click`, destroyBoxes);

function getInputValue(event) {
  const amount = inputRef.valueAsNumber;
  if (!amount) return;
  createBoxes(amount);
}

function createBoxes(amount) {
  destroyBoxes();
  const markup = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement(`div`);
    const size = 30 + 10 * i;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    markup.push(box);
  }
  boxesRef.append(...markup);
}

function destroyBoxes() {
  boxesRef.innerHTML = ``;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
