const refs = {
    textEl: document.querySelector('#text'),
    inputEl: document.querySelector('#font-size-control'),
}

refs.inputEl.addEventListener('input', changeFontsize);
function changeFontsize(event) {
    refs.textEl.style.fontSize = event.currentTarget.value + 'px';
}

console.log()