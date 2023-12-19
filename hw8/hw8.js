
/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)


- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}

let arr = []

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];


for (let i = 0; i < users.length; i++) {
    usersData = users[i]
    let newUser = new User(usersData.name, usersData.age, usersData.id)
    arr.push(newUser)

}

console.log(arr)


let filteredUsers = users.filter((user) => (user.id % 2 === 0));

console.log(filteredUsers);

let sortedUsers = users.sort(function (a, b) {
    return a.id - b.id;
});

console.log(sortedUsers)
*/

/*
* - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*
*
let clients = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];


class Client {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}


let arr = []


for (let i = 0; i < clients.length; i++) {
    let clientData = clients[i]
    let newClient = new Client(clientData.name, clientData.age, clientData.id)
    arr.push(newClient)

}


console.log(arr)


let sortedClients = clients.sort(function (a,b){
    return(a.age - b.age)
})

console.log(sortedClients)

 */

/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    function Car(model, brand, year, maxSpeed, engineVolume){

    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.enineVolume = engineVolume;


    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)

    }

    this.info = function(){
        console.log(`модель ${this.model}`)
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed

    }
    this.changeYear = function (newValue){
        this.year = newValue

    }

}

Car.prototype.addDriver = function(driver){
    this.driver = driver
}


let driver = {name : 'vasya', age: 45}



 */


/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    class Car {
    constructor(model, brand, year, maxSpeed, engineVolume) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume; // Исправьте здесь опечатку
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let myCar = new Car('Model S', 'Tesla', 2020, 200, 2.0);
let driver = { name: 'Vasya', age: 45 };


myCar.addDriver(driver);


console.log(myCar.driver);


 */

/*

-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */


let cindarellas = [
    {name: 'vasya', age: 31, footSize: 1},
    {name: 'petya', age: 30, footSize: 2},
    {name: 'kolya', age: 29, footSize: 3},
    {name: 'olya', age: 28, footSize: 4},
    {name: 'max', age: 30, footSize: 5},
    {name: 'anya', age: 31, footSize: 6},
    {name: 'oleg', age: 28, footSize: 7},
    {name: 'andrey', age: 29, footSize: 8},
    {name: 'masha', age: 30, footSize: 9},
    {name: 'olya', age: 31, footSize: 10},
];

class Cindarella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }

    findCindarella(cindarellas) {
        for (let i = 0; i < cindarellas.length; i++) {
            if (cindarellas[i].footSize === this.shoeFound) {
                console.log(`Cindarella's name is ${cindarellas[i].name}`);
                return cindarellas[i];
            }
        }
        console.log('Cindarella not found');
    }
}

const newPrince = new Prince('Joe', 24, 9);

newPrince.findCindarella(cindarellas);

let foundGirl = cindarellas.find(cindarella => cindarella.footSize === 9)

console.log(foundGirl)