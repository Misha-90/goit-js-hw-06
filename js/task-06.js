const inputSymbol = document.querySelector('#validation-input');

const symbolLength = Number(inputSymbol.dataset.length);

const onInputBlurAdd = event => {
    if (event.currentTarget.value.length >= symbolLength) {
        inputSymbol.classList.add('valid');
        inputSymbol.classList.remove('invalid');
    } else {
        inputSymbol.classList.add('invalid');
        inputSymbol.classList.remove('valid');
    }
};

inputSymbol.addEventListener('blur', onInputBlurAdd);