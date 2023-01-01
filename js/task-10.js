function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxesCreate: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  buttonCreatr: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
}

