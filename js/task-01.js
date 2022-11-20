// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories,
// 2.1 найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// 2.2 и количество элементов в категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// =================================================================================================================
// part 1

// const categoriesRef = document.querySelectorAll(`.item`)
// console.log(`Number of categories: ${categoriesRef.length}`);
// console.log(` `);

// const categoryAnimalRef = categoriesRef[0].firstElementChild;
// console.log(`Category: ${categoryAnimalRef.textContent}`)
// console.log(`Elements: ${categoryAnimalRef.nextElementSibling.children.length}`)
// console.log(` `);

// const categoryProductsRef = categoriesRef[1].firstElementChild;
// console.log(`Category: ${categoryProductsRef.textContent}`)
// console.log(`Elements: ${categoryProductsRef.nextElementSibling.children.length}`)
// console.log(` `);

// const categoryTechnologiesRef = categoriesRef[2].firstElementChild;
// console.log(`Category: ${categoryTechnologiesRef.textContent}`)
// console.log(`Elements: ${categoryTechnologiesRef.nextElementSibling.children.length}`)
// console.log(` `);


// ===================================================================================
// part 2

const categoriesRef = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesRef.length}`)
console.log(` `);

categoriesRef.forEach(category => {
    let categoryGroup = [...category.children];

    categoryGroup.forEach(element => {
        if (element.tagName === `H2`) {
            console.log(` `);
            console.log(`Category: ${element.textContent}`);
        }
    })

    categoryGroup.forEach(element => {
        if (element.tagName === `UL`) {
            console.log(`Elements: ${element.children.length}`);
        }
    })
})

