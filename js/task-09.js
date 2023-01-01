function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  spanColor: document.querySelector('.color'),
  bodyChangeColor: document.querySelector('body'),
  buttonChangeColor: document.querySelector('.change-color')
}

refs.buttonChangeColor.addEventListener('click', (evt) => {
  let newColor = getRandomHexColor();
  refs.bodyChangeColor.style.backgroundColor = newColor;
  refs.spanColor.textContent = newColor;
})

console.log(document.body);