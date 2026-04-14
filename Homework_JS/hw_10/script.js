//#sH8c4er
//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//щоб при натисканні на кнопку зникав елемент з id=”text”.
// const button = document.getElementById("btn");
// button.onclick = function () {
//     document.getElementById("text").remove();
// }

//#j693ca8
//створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
// const input = document.getElementById('ageInput');
// const button = document.getElementById('checkBtn');
// button.addEventListener('click', () => {
//     const age = +input.value;
//     if (!age) {
//         alert('Please enter your age');
//         return;
//     }
//     if (age > 0 && age < 18) {
//         alert('You are under 18');
//     } else {
//         alert('You are adult');
//     }
// });

//#ymAmN2xJ
//Створити форму з трьома полями для name, surname, age та кнопкою.
//При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
//Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
// const myForm = document.forms.myForm;
// const sendBtn = myForm.sendBtn;
// const target = document.getElementById('target');
// sendBtn.addEventListener('click', () => {
//     const formName = myForm.name.value;
//     const formSurname = myForm.surname.value;
//     const formAge = myForm.age.value;
//     let obj = {formName, formSurname, formAge};
//     console.log(obj);
//
//     target.innerText = obj.formName + ' ' + obj.formSurname + ' ' + obj.formAge;
// })

//#2VaLt4vDczH
//є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде
//додавати до неї +1
// let currentNumber = +localStorage.getItem("number");
// currentNumber += 1;
// localStorage.setItem("number", currentNumber);
//
// document.getElementById("trg").innerText = currentNumber;

//#LhSfdhM3
//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається
//інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при відвідуванні
//якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
// let sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];
// sessionsList.push(new Date());
// localStorage.setItem("sessionsList", JSON.stringify(sessionsList));

//#Jg0gPO00
//створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
//При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// const input = document.getElementById("xxx");
// const resultDiv = document.getElementById("result");
// input.oninput = function () {
//     const kilos = +this.value;
//     resultDiv.innerText = kilos * 2.2;
// }

//#RbQGnH5DuC
//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає
//в нього об’єкт сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage (arrayName, objToAdd) {
//     const lsItem = localStorage.getItem("arrayName");
//     if (!lsItem) {
//         throw new Error(`There is no such array`);
//     }
//     const array = JSON.parse(lsItem);
//     if(typeof objToAdd === "object") {
//         array.push(objToAdd);
//     }
//     localStorage.setItem("arrayName", JSON.stringify(array));
// }
// addToLocalStorage("sessionsList",{});

//#kUSgFqWY
//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
// const table = document.getElementById('table');
// const tableGen = document.forms['tableGen'];
//
// tableGen.onsubmit = function (e) {
//     e.preventDefault();
//     const linesValue = +tableGen.lines.value;
//     const cellsValue = +tableGen.cells.value;
//     const dataValue = tableGen.data.value;
//
//     for(let i = 0; i < linesValue; i++) {
//         const tr = document.createElement('tr');
//         for(let j = 0; j < cellsValue; j++) {
//             const td = document.createElement('td');
//             td.innerText = dataValue;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// };

//#bq1zkx7WP
//*** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
//якого є значення “100грн” при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається
//тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього. При перезавантаженні,
//яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
// const priceDiv = document.getElementById('price');
// let price = +localStorage.getItem('price') || 100;
// let lastUpdate = +localStorage.getItem('lastUpdate') || 0;
// const now = Date.now();
// if (now - lastUpdate > 10000) {
//     price += 10;
//     localStorage.setItem('price', price);
//     localStorage.setItem('lastUpdate', now);
// }
// priceDiv.textContent = price + ' грн';

//#NKB0tgWIK1G
//***PAGINATION
//зробити масив на 100 об’єктів та дві кнопки prev next
//при завантаженні сторінки з’являються перші 10 об’єктів.
//При натисканні next виводяться наступні 10 об’єктів
//При натисканні prev виводяться попередні 10 об’єктів
const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({ id: i, name: `Item ${i}` });
}
const list = document.getElementById('list');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let page = 0;
const limit = 10;
function render() {
    list.innerHTML = '';
    const start = page * limit;
    const end = start + limit;
    const items = data.slice(start, end);
    for (const item of items) {
        const div = document.createElement('div');
        div.textContent = `${item.id} - ${item.name}`;
        list.appendChild(div);
    }
}
nextBtn.onclick = () => {
    if ((page + 1) * limit < data.length) {
        page++;
        render();
    }
};

prevBtn.onclick = () => {
    if (page > 0) {
        page--;
        render();
    }
};
render();


