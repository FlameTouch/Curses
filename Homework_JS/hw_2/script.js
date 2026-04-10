//#67kfznmiMl
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// console.log(arr);

//#LARqoUj5I #sA3Gg1sCp
// let book1 = {
//     title: 'History of Poland',
//     pageCount: 20,
//     genre: 'history',
//     authors: [name='Vlad', age=23]
// }
// let book2 = {
//     title: 'Fantasy world',
//     pageCount: 54,
//     genre: 'fantasy',
//     authors: [name='Ola', age=34]
// }
// let book3 = {
//     title: 'Modern art',
//     pageCount: 36,
//     genre: 'art',
//     authors: [name='Ilia', age=20]
// }

//#jCHFnEbdmFd
// let users=[
//     {name: 'Vlad', username: 'vlad00', password: '1234'},
//     {name: 'Ola', username: 'ollaaa', password: 'Ola23421'},
//     {name: 'Alex', username: 'A1023', password: 'pass456'},
//     {name: 'Ilia', username: 'III_193', password: 'football7'},
//     {name: 'Heorhii', username: 'zora_fire', password: 'mypass789'},
//     {name: 'Max', username: 'Maze3', password: 'secure111'},
//     {name: 'Lena', username: 'OlenaKravc', password: 'abc12345'},
//     {name: 'Laura', username: 'LidddLa', password: 'melnyk2024'},
//     {name: 'Anna', username: 'ania_09', password: 'vally007'},
//     {name: 'Serhii', username: 'serhio', password: 'yul123456'}
// ];
// console.log(users[0]['password']);
// console.log(users[1]['password']);
// console.log(users[2]['password']);
// console.log(users[3]['password']);
// console.log(users[4]['password']);
// console.log(users[5]['password']);
// console.log(users[6]['password']);
// console.log(users[7]['password']);
// console.log(users[8]['password']);
// console.log(users[9]['password']);

//#coYydZuaeEB
// let temp= [
//     {day: 'Monday', daytemp:{
//         morning:5,
//             midday: 9,
//             evening: -1,
//         }},
//     {day: 'Tuesday', daytemp:{
//             morning:7,
//             midday: 11,
//             evening: 3,
//         }},
//     {day: 'Wednesday', daytemp:{
//             morning:6,
//             midday: 13,
//             evening: 1,
//         }},
//     {day: 'Thursday', daytemp:{
//             morning:8,
//             midday: 14,
//             evening: 2,
//         }},
//     {day: 'Friday', daytemp:{
//         morning:10,
//             midday: 16,
//             evening: 6,
//         }},
//     {day: 'Saturday', daytemp:{
//         morning:5,
//             midday: 12,
//             evening: 7,
//         }},
//     {day: 'Sunday', daytemp:{
//         morning:3,
//             midday: 12,
//             evening: 9,
//         }}
// ]

//#bAUsaq6LI
// let x = -3;
//
// if(x !== 0){
//     console.log('Вірно');
// }else{
//     console.log('Невірно')
// }

//#3ckURgvs
// let time = 16;
// if(time>=0 && time<15){
//     console.log('1 quarter');
// }else if(time>=15 && time<30){
//     console.log('2 quarter');
// }else if(time>=30 && time<45){
//     console.log('3 quarter');
// }else if(time>=45 && time<59){
//     console.log('4 quarter');
// }

//#UMoNq4biWGe
// let day = 1;
// if(day>=1 && day<=10){
//     console.log('1 decade');
// }else if(day>10 && day<=20){
//     console.log('2 decade');
// }else if(day>20 && day<=31){
//     console.log('3 decade');
// }

//#KzrtqyQ
// let day = prompt('Enter number of day week');
//
// switch(day){
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Invalid date');
// }

//#uwsz1RnTQJ1
// let numb1= prompt("Enter first number");
// let numb2= prompt("Enter second number");
//
// if(numb1 > numb2){
//     console.log(numb1);
// }else if(numb1 === numb2){
//     console.log('Numbers are similar');
// }else if(numb1 < numb2){
//     console.log(numb2);
// }

//#iBvqtjEm
//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x=0 ;
// if (x === 0 || x === '' || x === null || x === undefined || x === NaN) {
//     x = 'default';
// }

//example 2
// let x=0;
// if (!x){
//     x = 'default';
// }

//#awLXL6TBzg
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration >= 5){
    console.log('Super');
}else{
    console.log('Bad');
}
if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log('Super');
}else{
    console.log('Bad');
}
if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log('Super');
}else{
    console.log('Bad');
}
if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log('Super');
}else{
    console.log('Bad');
}
if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log('Super');
}else{
    console.log('Bad');
}
if (coursesAndDurationArray[5].monthDuration >= 5){
    console.log('Super');
}else{
    console.log('Bad');
}
