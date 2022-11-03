const refInput = document.querySelector(`#name-input`)
const refName = document.querySelector(`#name-output`)

refInput.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    refName.textContent = event.currentTarget.value;
}