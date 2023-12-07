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

- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration

let sorted = (array) => {
    return array.sort(function (a, b) {
        return b.monthDuration - a.monthDuration;
    });
};

let sortedArray = sorted(coursesAndDurationArray);
console.log(sortedArray);

-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

function filtered(arr) {
    const filteredCourses = arr.filter(course => course.monthDuration > 5);
    return filteredCourses;
}

console.log(filtered(coursesAndDurationArray));

-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mappedArr = coursesAndDurationArray.map(function(value, index){
    let course = {
        title: value.title,
        monthDuration: value.monthDuration,
        id: index+1
    }
    return course
})

console.log(mappedArr)

=========================
    описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}

    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}

const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

suits.forEach(suit => {
    values.forEach(value => {
        cards.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black'
        });
    });
});

console.log(cards)


let sortedCards = cards.reduce((previousValue, currentValue) => {

    if (currentValue.cardSuit === 'spades') {
        previousValue.spades.push(currentValue)
    } else if (currentValue.cardSuit === 'diamonds') {
        previousValue.diamonds.push(currentValue)
    } else if (currentValue.cardSuit === 'hearts') {
        previousValue.hearts.push(currentValue)
    } else if (currentValue.cardSuit === 'clubs') {
        previousValue.clubs.push(currentValue)
    }

    return previousValue

}, {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(sortedCards)


=========================
    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


coursesArray.forEach(course => {

    course.modules.forEach(module => {
        if (module === 'sass' || module === 'docker') {
            console.log(course)
        }
    });
});



