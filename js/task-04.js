const refMinusButton = document.querySelector(`button[data-action="decrement"]`);
const refPlusButton = document.querySelector(`button[data-action="increment"]`)
const refNumberValue = document.querySelector(`#value`)

const counter = {
    value: 0,

    subNumber () {
        this.value -= 1;
    },

    addNumber () {
        this.value += 1;
    },

};

refMinusButton.addEventListener(`click`, () => {
    counter.subNumber();
    refNumberValue.textContent = counter.value;
})

refPlusButton.addEventListener(`click`, () => {
    counter.addNumber();
    refNumberValue.textContent = counter.value;
})