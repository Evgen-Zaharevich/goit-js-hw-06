const refInput = document.querySelector(`#validation-input`);
const dataLength = refInput.getAttribute(`data-length`)

refInput.addEventListener(`blur`, outOfFocusInput);

function outOfFocusInput(event) {
    if (event.currentTarget.value.length === Number(dataLength)) {
        refInput.classList.add(`valid`);
        refInput.classList.remove(`invalid`);
    } else {
        refInput.classList.add(`invalid`);
        refInput.classList.remove(`valid`);
    }
}