//#iz6emEsP2BA
//є масив
//за допомогою map перетворити кожен елемент на наступний тип {id, title, monthDuration}
//Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index+1})));

//#AiN5CoUQ
//Створити функцію, яка робить глибоку копію об’єкта.
//Додати перевірки на undefined, null, NaN.
//Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
function clone(obj){
    if(obj){
        let functions = [];
        for (const key in obj) {
            if(typeof obj[key] === 'function'){
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj
    }
    throw new Error(`Unable to clone obj`);
}
clone({id: 1, name: 'JavaScript', greeting(){}, foo(){}});

