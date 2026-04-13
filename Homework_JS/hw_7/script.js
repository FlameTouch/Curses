//#XjJuucOMR0
//Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об’єктами new User(….)
// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const users =[
//     new User(1, 'John', 'Smith', 'john.smith@gmail.com', '+380671234567'),
//     new User(21, 'Emily', 'Johnson', 'emily.johnson@gmail.com', '+380501112233'),
//     new User(5, 'Michael', 'Brown', 'michael.brown@gmail.com', '+380931234567'),
//     new User(4, 'Sophia', 'Davis', 'sophia.davis@gmail.com', '+380661234567'),
//     new User(3, 'Daniel', 'Miller', 'daniel.miller@gmail.com', '+380991234567'),
//     new User(6, 'Olivia', 'Wilson', 'olivia.wilson@gmail.com', '+380731234567'),
//     new User(8, 'James', 'Moore', 'james.moore@gmail.com', '+380681234567'),
//     new User(7, 'Isabella', 'Taylor', 'isabella.taylor@gmail.com', '+380951234567'),
//     new User(9, 'William', 'Anderson', 'william.anderson@gmail.com', '+380971234567'),
//     new User(11, 'Ava', 'Thomas', 'ava.thomas@gmail.com', '+380631234567')
// ]

//#2ikXsE2WiKZ
//Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
// function filteredUsers (user){
//     return user.id%2 === 0;
// }
// const filter = users.filter(filteredUsers);
// console.log(filter);

//#pOeHKct
//Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function sortedUsers (user1, user2){
//     return user1.id - user2.id;
// }
// const sort = users.sort(sortedUsers);
// console.log(sort);

//#nkMXISv
//створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об’єктами Client
// function Client (id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// const clients =[
//     new Client(1, 'John', 'Smith', 'john.smith@gmail.com', '+380671234567', ['chair', 'coffee']),
//     new Client(21, 'Emily', 'Johnson', 'emily.johnson@gmail.com', '+380501112233', ['meat', 'fish']),
//     new Client(5, 'Michael', 'Brown', 'michael.brown@gmail.com', '+380931234567', ['chair']),
//     new Client(4, 'Sophia', 'Davis', 'sophia.davis@gmail.com', '+380661234567', ['tea', 'olive oil', 'bread']),
//     new Client(3, 'Daniel', 'Miller', 'daniel.miller@gmail.com', '+380991234567', ['butter', 'meat']),
//     new Client(6, 'Olivia', 'Wilson', 'olivia.wilson@gmail.com', '+380731234567', ['table', 'cards']),
//     new Client(8, 'James', 'Moore', 'james.moore@gmail.com', '+380681234567', ['sticks', 'paper']),
//     new Client(7, 'Isabella', 'Taylor', 'isabella.taylor@gmail.com', '+380951234567', ['ink', 'chilli', 'bread']),
//     new Client(9, 'William', 'Anderson', 'william.anderson@gmail.com', '+380971234567', ['apple']),
//     new Client(11, 'Ava', 'Thomas', 'ava.thomas@gmail.com', '+380631234567', ['sweets', 'watermelon'])
// ]
// console.log(clients);

//#8abtVjRv
//Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
// function sortedOrder (user1, user2){
//     return user1.order.length - user2.order.length;
// }
// const ordered = clients.sort(sortedOrder);
// console.log(ordered);

//#vV9a6584I5
//Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску,
//максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//changeYear (newValue) – змінює рік випуску на значення newValue
//addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
// function Car (model, creator, year, maxSpeed, engineVolume){
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         if(newValue > 1815) this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         if(driver) this.driver = driver;
//     }
// }
// const car1 = new Car("X5", "BMW", 2020, 250, 3.0 );
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(270);
// console.log(car1);
// car1.changeYear(2024);
// console.log(car1);
// car1.addDriver('Jonh');
// console.log(car1);

//#5kla3yMpgp
//Те саме, тільки через клас
// class Car {
//     constructor(model, creator, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.creator = creator;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     changeYear(newValue){
//         if(newValue > 1815) this.year = newValue;
//     }
//     addDriver(driver){
//         if(driver) this.driver = driver;
//     }
// }
// const car1 = new Car("A6", "Audi", 2025, 200, 5.5 );
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(30);
// console.log(car1);
// car1.changeYear(2016);
// console.log(car1);
// car1.addDriver('Marry');
// console.log(car1);

//#zg6Fifnqig
//створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
// class Cinderella{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// const cinderella = [
//     new Cinderella('Anna', 23, 34),
//     new Cinderella('Marry', 19, 37),
//     new Cinderella('Lisa', 21, 30),
//     new Cinderella('Anastasia', 20, 33.5),
//     new Cinderella('Ola', 34, 32),
//     new Cinderella('Alla', 32, 38),
//     new Cinderella('Anna', 46, 35.5),
//     new Cinderella('Ira', 17, 33),
//     new Cinderella('Sofia', 29, 39),
//     new Cinderella('Kristina', 25, 40)
// ]
// const prince = new Prince('Edward', 25, 33.5);
// for (const girl of cinderella) {
//     if(girl.footSize === prince.shoeSize) console.log('Знайдена Попелюшка:', girl);
// }
// const match = cinderella.find(girl => girl.footSize === prince.shoeSize);
// console.log('Через find:', match);

//#gsKLAsNWM
//*Через Array.prototype. створити власний foreach
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const arr = [1, 2, 3];
arr.myForEach((item, index) => {
    console.log(item, index);
});

//*Через Array.prototype. створити власний filter
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const arr1 = [1, 2, 3, 4];
const filtered = arr1.myFilter(item => item > 2);
console.log(filtered);




