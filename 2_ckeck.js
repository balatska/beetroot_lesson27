// Создать массив, описывающий чек в магазине. 
// Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
// Написать следующие функции:

//     Распечатка чека на экран;
//     Подсчет общей суммы покупки;
//     Получение самой дорогой покупки в чеке;
//     Подсчет средней стоимости одного товара в чеке.

let check = [
    {
        name: "lemon", 
        amount: 2, 
        price: 25,
    },
    {
        name: "salad", 
        amount: 1, 
        price: 47,
    },
    {
        name: "cheese", 
        amount: 1, 
        price: 100,
    },
    {
        name: "tomatoes", 
        amount: 5, 
        price: 14,
    },
    {
        name: "mussels", 
        amount: 20, 
        price: 12,
    },
    {
        name: "wine", 
        amount: 1, 
        price: 200,
    }, 
];

//     Распечатка чека на экран;
function showCheck() {
    for (let product of check) {
        let cost = product.amount * product.price;
        console.log(`${product.name}: ${cost} грн`);
    }
};

//     Подсчет общей суммы покупки;
function findTotal() {
    let total = 0;
    for (let product of check) {
        let cost = product.amount * product.price;
        total +=cost;
    };

    console.log(`Total: ${total} грн`);
    return total;
};

//     Получение самой дорогой покупки в чеке;
function findTheMostExpensive() {
    check.sort((a, b) => (a.amount * a.price) < (b.amount * b.price) ? 1 : -1);
    console.log(`Самая дорогая покупка: ${check[0].name} - ${check[0].amount * check[0].price} грн`)
}

//     Подсчет средней стоимости одного товара в чеке.
function findAveragePrice() {
    let total = findTotal();
    let sumAmount = 0;
    for (let product of check) {
        sumAmount += product.amount;
    };

    console.log(`Средняя стоимость: ${(total/sumAmount).toFixed(2)} грн`);
}

showCheck();
console.log("-----------");
findTotal();
findTheMostExpensive();
findAveragePrice();
