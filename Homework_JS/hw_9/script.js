//#8Nmt60ZT
//створити блок,
//додати йому класи wrap, collapse, alpha, beta
//додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//додати цей блок в body.
//клонувати його повністю, та додати клон в body.
// const div = document.createElement('div');
// div.classList.add ('wrap');
// div.classList.add ('collapse');
// div.classList.add ('alpha');
// div.classList.add ('beta');
//
// const cloneNode = div.cloneNode (true);
// document.body.append(div, cloneNode);

//#OPLI89c9G
//Є масив:
//[‘Main’,’Products’,’About us’,’Contacts’]
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const arr = ['Main', 'Products', 'About us', 'Contacts'];
// const ul = document.createElement('ul');
// for (const item of arr) {
//         const li = document.createElement('li');
//         li.innerText = item;
//         ul.appendChild(li);
// }
// document.body.appendChild(ul);

//#jeBqHV525U5
//Є масив
//Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const div = document.createElement('div');
// div.classList.add('courses-and-duration');
// for (const item of coursesAndDurationArray) {
//     const div2 = document.createElement('div');
//     div2.innerText = `${item.title} - ${item.monthDuration}`;
//     div.appendChild(div2);
// }
// document.body.appendChild(div);

//#Kx1xgoKy8
//Є масив
//За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
//в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const div = document.createElement('div');
// for (const item of coursesAndDurationArray) {
//     const div2 = document.createElement('div');
//     div2.classList.add('item');
//     const h2 = document.createElement('h2');
//     h2.classList.add('heading');
//     h2.innerText = item.title;
//     const p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = item.monthDuration;
//     div2.append(h2, p);
//     div.appendChild(div2);
// }
// document.body.appendChild(div);

//Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
//для властивості modules зробити список з елементами
//Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
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
const mainDiv = document.createElement('div');
for (const item of coursesArray) {
    const divTitle = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = item.title;
    const header = divTitle.appendChild(h1);

    const divDuration = document.createElement('div');
    divDuration.classList.add('duration');
    const p = document.createElement('p');
    p.classList.add('MonthDuration');
    p.textContent  = item.monthDuration;

    const ph = document.createElement('p');
    p.classList.add('HourDuration');
    ph.textContent  = item.hourDuration;
    const divMonthDuration = document.createElement('div');
    divMonthDuration.classList.add('MHDuration');
    const divHourDuration = document.createElement('div');
    divHourDuration.classList.add('MHDuration');
    divMonthDuration.appendChild(p);
    divHourDuration.appendChild(ph);
    divDuration.append(divMonthDuration, divHourDuration);

    const divList = document.createElement('div');
    const ul = document.createElement('ul');
    for (const module of item.modules) {
        const li = document.createElement('li');
        li.textContent = module;
        ul.appendChild(li);
    }
    divList.appendChild(ul);

    mainDiv.append(header,divDuration,divList)
}
document.body.appendChild(mainDiv);