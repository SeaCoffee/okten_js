/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

str = ['hello world', 'lorem ipsum', 'javascript is cool']

upStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']

console.log(str[0].length, str[1].length, str[2].length)

console.log(str[0].toUpperCase(), str[1].toUpperCase(), str[2].toUpperCase())

console.log(upStr[0].toLowerCase(), upStr[1].toLowerCase(), upStr[2].toLowerCase())

- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '

let trimmedStr = str.trim()

let replacedStr = str.replaceAll(' ', '')

console.log(trimmedStr)
console.log(replacedStr)


- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';


function stringToarray(str){
    let splited = str.split(' ')
    console.log(splited)
}

stringToarray(str);



- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let arrToStr = arr.map(function(number) {
    return number.toString();
});


let res = arrToStr.join(' ');
console.log(res);


- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
 або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/

let nums = [11, 21, 3];

function sortNums(arr, direction) {
    if (direction === 'ascending') {
        arr.sort(function (a, b) {
            return a - b;
        });
    } else if (direction === 'descending') {
        arr.sort(function (a, b) {
            return b - a;
        });
    }
}

sortNums(nums, 'ascending')
sortNums(nums,'descending')




