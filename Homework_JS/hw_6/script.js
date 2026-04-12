//#dFeorS3m7u
//Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’ ‘lorem ipsum’ ‘javascript is cool’
// let p1 = 'hello world';
// console.log(p1.length);
// let p2 = 'lorem ipsum';
// console.log(p2.length);
// let p3 = 'javascript is cool';
// console.log(p3.length);

//#8lld9HMxXWB
//Перевести до великого регістру наступні стрінгові значення
//‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
// let p1 = 'hello world';
// console.log(p1.toUpperCase());
// let p2 = 'lorem ipsum';
// console.log(p2.toUpperCase());
// let p3 = 'javascript is cool';
// console.log(p3.toUpperCase());

//#ClDsAm7xba7
//Перевести до нижнього регістру наступні стрінгові значення
//‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
// let p1 = 'HELLO WORLD';
// console.log(p1.toLowerCase());
// let p2 = 'LOREM IPSUM';
// console.log(p2.toLowerCase());
// let p3 = 'JAVASCRIPT IS COOL';
// console.log(p3.toLowerCase());

//#0b89BkYZwu
//Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

//#bfoJuse4ZzP
//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// function stringToArray(str){
//     const split = str.split(' ');
//     return split;
// }
// console.log(stringToArray('Ревуть воли як ясла повні'));

//#Rbr5kEQ
//є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об’єкти в масиві на стрінгові.
// const numbers =[10,8,-7,55,987,-1011,0,1050,0];
// const string = numbers.map(number => {
//     return number + '';
// })
// console.log(string);

//#5hqyKTfmc
//створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки – залежно від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums (array, direction) {
//     if (direction === 'ascending') return array.sort((a,b) => a-b);
//     if (direction === 'descending') return array.sort((a,b) => b-a);
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

//#yo06d74c1C
//є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const result = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => {
//         value.id = index + 1;
//         return value;
// });
// console.log(result);

//#4LJn7zBx
//взяти з arrays.js масив coursesArray
//написати пошук всіх об’єктів, в яких в modules є sass
//написати пошук всіх об’єктів, в яких в modules є docker
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// const List = coursesArray.filter(course => {
//     return course.modules.includes('sass')
// });
// const List2 = coursesArray.filter(course => {
//     return course.modules.includes('docker')
// });
// console.log(List);
// console.log(List2);

//#bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
// const deck = [];
//
// for (const suit of suits) {
//     for (const value of values) {
//         deck.push({
//             cardSuit: suit,
//             value: value,
//             color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
//         });
//     }
// }
// console.log(deck);
//
// const aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'A');
// console.log(aceOfSpades);
//
// const allSix = deck.filter(card => card.value === 6);
// console.log(allSix);
//
// const allRed = deck.filter(card => card.color === 'red');
// console.log(allRed);
//
// const allDiamond = deck.filter(card => card.cardSuit === 'diamond');
// console.log(allDiamond);
//
// const clubsFromNine = deck.filter(card => {
//     if (card.cardSuit !== 'club') return false;
//
//     const order = [6,7,8,9,10,'J','Q','K','A'];
//     return order.indexOf(card.value) >= order.indexOf(9);
// });
// console.log(clubsFromNine);

//#EP5I1UUzAX
//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}

const reduce = deck.reduce((acc, card) => {
    if(card.cardSuit === 'spade') {
        acc.spade.push(card);
    }
    else if(card.cardSuit === 'diamond') {
        acc.diamond.push(card);
    }
    else if(card.cardSuit === 'heart') {
        acc.heart.push(card);
    }
    else if(card.cardSuit === 'club') {
        acc.club.push(card);
    }
    return acc;
},{spade:[],diamond:[],heart:[],club:[]});
console.log(reduce);


