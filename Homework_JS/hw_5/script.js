//#I2XsG6f
//створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calcSquare = (a,b) => a*b;
// console.log(calcSquare(5,10));

//#ETGAxbEn8l
//створити функцію, яка обчислює та повертає площу кола з радіусом r
// let calcCircle = (radius) => Math.PI*radius*radius;
// console.log(calcCircle(14 ));

//#Mbiz5K4yFe7
//створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// let calcCylinder = (h, r) => 2 * Math.PI * r * (r + h);
// console.log(calcCylinder(10, 18));

//#SIdMd0hQ
//створити функцію, яка приймає масив та виводить кожен його елемент
// let printArr = (arr) =>{
//     for (const item of arr) {
//         console.log(item);
//     }
// }

//#59g0IsA
//створити функцію, яка створює параграф з текстом. Текст задати через аргумент
// let printText = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// printText('Hello');

//#hOL6126
//створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const printList = (text) => {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`);
// }
// printList('Hello World!');

//#0Kxco1edSN
//створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const printList = (count) => {
//     document.write(`<ul>`);
//     for(let i=0; i<count; i++){
//         document.write(`<li>Hello World!</li>`);
//     }
//     document.write(`</ul>`);
// }
// printList(5);

//#gEFoxMMO
//створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список
// const arrList = (array) => {
//     for (const item of array) {
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// }
// arrList([121, 'Hello', false]);

//#bovDJDTIjt
//створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об’єкту окремий блок.
// const userList = (Array) => {
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
//створити функцію, яка повертає найменше число з масиву
// const minNumb = (numbers) => {
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
// const sum = (arr) => {
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
// const swap = (arr, index1, index2) => {
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

//#mkGDenYnNjn
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyObj of currencyValues) {
        if (currencyObj.currency === exchangeCurrency) {
            return sumUAH / currencyObj.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));