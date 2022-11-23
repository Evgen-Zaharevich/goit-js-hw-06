// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.

const inputRef = document.querySelector(`#validation-input`);
const valueAtribute = inputRef.getAttribute(`data-length`);

checkingEnteredValue = (event) => {
    if (event.currentTarget.value.length !== Number(valueAtribute)) {
        inputRef.classList.add(`invalid`);
    } else {
        inputRef.classList.remove(`invalid`);
        inputRef.classList.add(`valid`);
    }
}   

inputRef.addEventListener(`blur`, checkingEnteredValue);
