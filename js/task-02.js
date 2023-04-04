const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listitem = document.createElement('li');
  listitem.classList.add('item');
  listitem.textContent = ingredient;
  return listitem;
});
console.log(elements);

ingredientsList.append(...elements);
