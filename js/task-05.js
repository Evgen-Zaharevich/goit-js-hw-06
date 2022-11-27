// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputFormRef = document.querySelector(`#name-input`);
const userNameRef = document.querySelector(`#name-output`);

inputFormRef.addEventListener(`input`, changeNameToValueEnteredInInput);

function changeNameToValueEnteredInInput(event) {
  if (!event.currentTarget.value.trim()) {
    userNameRef.textContent = `Anonymous`;
  } else {
    userNameRef.textContent = event.currentTarget.value;
  }
}
