// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = ingredients.map(name => {
  const Item = document.createElement(`li`);
  Item.textContent = name;
  Item.classList.add(`item`);
  // console.log(ItemRef);
  return Item;
});

const refIngredientsContainer = document.querySelector(`#ingredients`);
refIngredientsContainer.append(...ingredientsItem);












