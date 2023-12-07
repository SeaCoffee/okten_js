/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

squareRectangle = (a,b) => {
    return a * b
}

squareRectangle(5,5)

- створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle(r){
    return Math.PI *  r * r
}

squareCircle(5)

- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(h, r) {
    return 2 * Math.PI * r * (h + r)
}

squareCylinder(5,5)

- створити функцію яка приймає масив та виводить кожен його елемент

let arr = [2,5,'s',{}]
function printer(arr){
    for (const item of arr) {
        console.log(item)
    }
}

- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writer() {
    for (let i of arguments) {
        document.write(`<p>${i}</p>`)
    }
}

writer('text1', 'text2')

- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list() {
    let text = arguments[0]
    document.write(`<ul>`);
    for (let i = 1; i <= 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list('text')

- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2() {
    let text = arguments[0]
    let iter = arguments[1]
    document.write(`<ul>`)
    for (let i = 1; i <= iter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list2('text', 5)


- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [25, 666, 777, 'string', true]

function list3(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

list3(arr)


- створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr = [{id: 1, name: 'skb', age: 18}, {id: 24, name: 'ekd', age: 34}]

function list4(array) {
    for (const item of array) {
        document.write(`<div>${item.id},${item.name},${item.age}</div>`)
    }
}

list4(arr)

- створити функцію яка повертає найменьше число з масиву

let arr = [25, 666, 777, 4, 86]

function less(array){
    let least = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < least) {
            [i] < least) {
            least = array[i]
        }
    }

    return least
}


- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [25, 666, 777, 4, 86];

function sum(array){
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}


- створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr = [11,22,33,44]
function swap(arr,index1,index2){
    let thirdGlass = arr[0]
    arr[index1] = arr[index2]
    arr[index2] =  thirdGlass

}

swap(arr, 0, 1)

console.log(arr)



- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


function exchange(currency, sum) {
    let course = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]

    let res = 0

    if (currency === 'usd') {
        res = sum / course[0].value
    } else if (currency === 'euro') {
        res = sum / course[1].value
    }

    return `ви отримали ${res} грн`
}

console.log(exchange('usd', 10000)) */


let arr = [{id: 1, name: 'skb', age: 18}, {id: 24, name: 'ekd', age: 34}]

function list4(array) {
    for (const item of array) {
        document.write(`<div>${item.id},${item.name},${item.age}</div>`)
    }
}

list4(arr)