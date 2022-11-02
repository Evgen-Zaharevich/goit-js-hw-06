const refInput = document.querySelector(`#name-input`)
const refName = document.querySelector(`#name-output`)

refInput.addEventListener(`input`, (event) =>{
    console.log(event.currentTarget.value);
    refName.textContent = event.currentTarget.value;
});

// refInput.addEventListener(`input`, onInputChange);

// function onInputChange(event) {
//     // console.log(event.currentTarget.value);
//     refName.textContent = event.currentTarget.value;
// }