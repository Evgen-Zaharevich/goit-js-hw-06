const refInputControl = document.querySelector(`#font-size-control`)
const refText = document.querySelector(`#text`)

refInputControl.addEventListener(`input`, (event) => {
    refText.style.fontSize = `${Number(refInputControl.value)}px`;
})
