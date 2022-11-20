// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementRef = document.querySelector(`button[data-action="decrement"]`);
const incrementRef = document.querySelector(`button[data-action="increment"]`);
const valueRef = document.querySelector(`#value`)

const counterValue = {
    value: 0,
    
    changeValueUp() {
    this.value += 1
    },

    changeValueDown () {
    this.value -= 1;
    },  
}

decrementRef.addEventListener(`click`, () => {
    counterValue.changeValueUp();
    valueRef.textContent = counterValue.value;
});

incrementRef.addEventListener(`click`, () => {
    counterValue.changeValueDown();
    valueRef.textContent = counterValue.value;
});
