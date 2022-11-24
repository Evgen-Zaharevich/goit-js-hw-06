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

function createElementMarkup (ingredients) {
  return ingredients.map(ingredient => {
    const element = document.createElement(`li`);
    element.textContent = ingredient;
    element.classList.add(`item`)
    return element;
  })
}
const elementMarkup = createElementMarkup(ingredients)

const ingredientsRef = document.querySelector(`#ingredients`);
ingredientsRef.append(...elementMarkup);









