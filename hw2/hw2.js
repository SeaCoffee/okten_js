/*Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/


let arr1 = [1,2,3,4,5,6,7,8,9,10]

console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6], arr1[7], arr1[8], arr1[9]);


let book = {
    title: 'Necronomicon',
    pageCount: '666',
    genre: 'horror'
}

let book1 = {
    title: 'The Lord of the Rings',
    pageCount: '777',
    genre: 'fantasy'
}

let book2 = {
    title: 'Dandelion wine',
    pageCount: '555',
    genre: 'science fiction'
}



let book3 = {
    title: 'Before They Are Hanged',
    pageCount: '666',
    genre: 'military fantasy',
    authors: [
        {name: 'Joe Abercrombie', age: 48}
    ]
}

let book4 = {
    title: 'Volunteers of Eternity',
    pageCount: '777',
    genre: 'fantasy',
    authors: [
        {name: "Max Frei", age: 64},
    ]
}


let book5 = {
    title: 'Reaper Man',
    pageCount: '555',
    genre: 'fantasy',
    authors: [
        {name: 'Terry Pratchett', age: 75}
    ]
}


let users = [
    { name: 'user1', username: 'user1', password: 'hfkcyk788' },
    { name: 'user2', username: 'user2', password: '9pybhc' },
    { name: 'user3', username: 'user3', password: '436u5746' },
    { name: 'user4', username: 'user4', password: 'agnbofvnsJl' },
    { name: 'user5', username: 'user5', password: '9vasgdnfmg' },
    { name: 'user6', username: 'user6', password: '4e657mr,tiy' },
    { name: 'user7', username: 'user7', password: 'SDzFDXGC' },
    { name: 'user8', username: 'user8', password: 'faedsfcgvhbj' },
    { name: 'user9', username: 'user9', password: '9999999999999' },
    { name: 'user10', username: 'user10', password: 'sdfrtgyh' },
];

console.log(
    users[0].password,
    users[1].password,
    users[2].password,
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password
);

/*Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/


let x = +prompt('enter eny number');

if ( x !=0 ) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}


let time = +prompt('enter minute count (from 0 to 60)');

if (time >= 0 && time <= 15) {
    console.log('1/4');
} else if (time > 15 && time <= 30) {
    console.log('2/4');
} else if (time > 30 && time <= 45) {
    console.log('3/4');
} else if (time > 45 && time <= 60) {
    console.log('4/4');
} else {
    console.log('enter num from 0 to 60 only');
}

let date = +prompt('enter date count (from 0 to 31)');

if (date >= 1 && date <= 10) {
    console.log('1/3');
} else if (date > 10 && date <= 20) {
    console.log('2/3');
} else if (date > 20 && date <= 31) {
    console.log('3/3');
} else {
    console.log('enter num from 0 to 31 only');
}

let day = prompt('Enter a day of the week');

switch(day){
    case '1':
        console.log("Monday");
        break;

    case '2':
        console.log("Tuesday");
        break;

    case '3':
        console.log("Wednesday");
        break;

    case '4':
        console.log("Thursday");
        break;

    case '5':
        console.log("Friday");
        break;

    case '6':
        console.log("Saturday");
        break;

    case '7':
        console.log("Sunday");
        break;

    default:
        console.log("from 1 to 7 only");
}


let x = +promt('enter first nimber')

let y = +promt('enter second number')

if (x > y){
    console.log('x')
}

else if (x < y) {
    console.log('y')
}

else if ( x === y){
    console.log ('equal')
}

else {
    console.log('error')
}
