// 1. Создать массив «Список покупок». 
// Каждый элемент массива является объектом, который содержит название продукта, 
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let shoppingList = [
    {
        name: "lemon", 
        amount: 2, 
        bought: "no",
    },
    {
        name: "salad", 
        amount: 1, 
        bought: "yes",
    },
    {
        name: "cheese", 
        amount: 1, 
        bought: "yes",
    },
    {
        name: "tomatoes", 
        amount: 5, 
        bought: "yes",
    },
    {
        name: "mussels", 
        amount: 20, 
        bought: "yes",
    },
    {
        name: "wine", 
        amount: 1, 
        bought: "no",
    }, 
]

function sortByBought() {
    shoppingList.sort((a, b) => a.bought > b.bought ? 1 : -1);
    console.table(shoppingList);
}

function addToList(product) {
    let newProduct = shoppingList.find(item => item.name == product);
    newProduct == undefined 
    ? shoppingList.push({name: product, amount: 1, bought: "no"}) 
    : newProduct.amount +=1;
    console.table(shoppingList);
}

function checkBought (product) {
    let boughtProduct = shoppingList.find(item => item.name == product);
    boughtProduct == undefined
    ? console.log("Такого продукта нет в списке")
    : boughtProduct.bought = "yes"; 
    console.table(shoppingList);
}

console.table(shoppingList);

sortByBought();
addToList("bread");
checkBought("wine");
