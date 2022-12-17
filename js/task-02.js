const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientCreateLi = ingEl => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingEl;
  ingredientItem.classList.add('item');
  
  return ingredientItem;
};

const ingredientItems = ingredients.map(ingredientCreateLi);

ingredientsList.append(...ingredientItems);
