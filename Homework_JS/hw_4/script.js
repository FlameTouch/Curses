//#I2XsG6f
//створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
// function calcSquare(a, b) {
//     return a*b;
// }
// console.log(calcSquare(5,10));

//#ETGAxbEn8l
//створити функцію, яка обчислює та повертає площу кола з радіусом r
// function calcCircle( radius) {
//     return Math.PI * radius * radius;
// }
// console.log(calcCircle(14 ));

//#Mbiz5K4yFe7
//створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// function calcCylinder(h, r) {
//     return 2 * Math.PI * r * (r + h);
// }
// console.log(calcCylinder(10, 18));

//#SIdMd0hQ
//створити функцію, яка приймає масив та виводить кожен його елемент
// function userList(array) {
//     for (const userList of array) {
//         console.log(userList);
//     }
// }

//#59g0IsA
//створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function writer(text){
//     document.write(`<div><p>${text}</p></div>`);
// }
// writer('Functions');

//#hOL6126
//створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
// function list(text){
//     document.write(`
//         <div>
//             <ul>
//                 <li>${text}</li>
//                 <li>${text}</li>
//                 <li>${text}</li>
//             </ul>
//         </div>
//     `);
// }
// list('List');

//#0Kxco1edSN
//створити функцію, яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function List(count){
//     document.write(`<ul>`);
//     for (let i=0; i<count; i++) {
//         document.write(`<li>!!!!!</li>`);
//     }
//     document.write(`</ul>`);
// }
// List(3);

//#gEFoxMMO
//створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві),
// та будує для них список (ul li) та виводить його через document.write
// function arr(array){
//     for (const arrayElement of array) {
//         document.write(`<ul><li>${arrayElement}</li></ul>`);
//     }
// }
// arr([1243, 'Arrays', true]);

//#bovDJDTIjt
//cтворити функцію, яка приймає масив об’єктів з наступними полями id, name, age,
//та виводить їх в документ. Для кожного об’єкту окремий блок.
// function userList(Array){
//     for (const user of Array) {
//         document.write(`
//             <div>${user.id} ${user.name} ${user.age}</div>
//         `);
//     }
// }
// userList([
//     {id: 1, name: 'Vlad', age: 34},
//     {id: 2, name: 'Maria', age: 21},
//     {id: 3, name: 'Igor', age: 44}
// ]);

//#pghbnSB
//створити функцію яка повертає найменьше число з масиву
// function minNumb(numbers){
//     let min = numbers[0];
//     for (const number of numbers) {
//         if(min > number){
//             min = number;
//         }
//     }return min;
// }
// console.log(minNumb([9,2,4,7]));

//#EKRNVPM
//створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// function sum(arr){
//     let numb = 0;
//     for (const item of arr) {
//         numb = numb + item;
//     }
//     return numb;
// }
// console.log(sum([1,2,10]));

//#kpsbSQCt2Lf
//створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2){
//     if(index1 < arr.length && index2 < arr.length){
//         let cell = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = cell;
//
//         return arr;
//     }
//     return -Infinity;
// }
// console.log(swap([11,22,33,44], 0, 1));

//#mkGDenYnNjn.html
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currencyObj of currencyValues) {
        if (currencyObj.currency === exchangeCurrency) {
            return sumUAH / currencyObj.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));