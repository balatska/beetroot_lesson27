// Создать массив аудиторий академии. 
// Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) 
// и названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
//     Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let cabinets = [
    {
        name: "Малевич", 
        number: 10, 
        faculty: "HTML",
    },
    {
        name: "Плацкарт", 
        number: 16, 
        faculty: "CSS",
    },
    {
        name: "Колаба", 
        number: 20, 
        faculty: "JS",
    },
];

function showAllCabinets() {
    console.log(`Все аудитории:`)
    for (let cabs of cabinets) {
        console.log(cabs.name);
    }
}

function showCabinetsForFaculty(fac) {
    let cabs = cabinets.find(item => item.faculty == fac);
    cabs == undefined 
    ? console.log(`Нет доступных аудиторий`) 
    : console.log(`Для факультета ${fac} доступна аудитория: ${cabs.name}`)   
}

function showCaninetsForGroups() {

}

function sortByNumber() {
    cabinets.sort((a, b) => a.number > b.number ? 1 : -1);
    console.log(`Аудитории по количеству мест: `);
    console.table(cabinets);
}

function sortByName() {
    cabinets.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log(`Аудитории по алфавиту: `);
    console.table(cabinets);
}


showAllCabinets();
showCabinetsForFaculty("JS");
sortByNumber();
sortByName();
