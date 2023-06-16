// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone)  {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// let user = new User(123,123,123,123,true);
// console.log(user);
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
let userMasyw = [];
for (let i = 0; i < 10; i++) {
    userMasyw.push(new User(i+1,'mango','orange','mangoorange@gmail.com',true));
}
console.log(userMasyw);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(userMasyw.filter((item) => { return item.id % 2 === 0 }));
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(userMasyw.sort((a,b) => { return a.id-b.id}));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
const arrauUser = [];
for (let i = 0; i < 10; i++) {
    if (i%2 === 0 ){
arrauUser.push(new Client(i+1,`Vas`,`An`,`gmail`,i+380,[123,123,123,123]));
    }
    else {
        arrauUser.push(new Client(i+1,`Pet`,`Tep`,`outlook`,i+380,[567,567,567,567,567]));
    }
}
console.log(arrauUser);
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(arrauUser.sort((a, b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model,creator,year,speed,value){
    this.model = model;
    this.creator = creator;
    this.year = year ;
    this.speed = speed;
    this.value = value;
}
let car = new Car ('Audi','German',2023,460,2);
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function (){
    return `їдемо зі швидкістю ${this.speed} на годину`;
};
console.log(car.drive())
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function (){
    return `*Infromation Of Car*
            model = ${this.model}
            creator = ${this.creator}
            year= ${this.year}
            speed = ${this.speed}
            value = ${this.value}`
}
console.log(car.info())
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed){
    this.speed = newSpeed;
}
car.increaseMaxSpeed(500)
console.log(car)
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newYear){
    this.year= newYear;
}
car.changeYear(2020)
console.log(car)
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
Car.prototype.addDriver = function (driver) {
        this.driver = {...driver}
}
let driver1 = {
    name:'mango',
    age:12
}
car.addDriver(driver1);
console.log(car)

//console.log(cars);
//
// //
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
//
// class Car {
//     constructor(model,creator,year,speed,value) {
//         this.model = model;
//         this.creator = creator;
//         this.year = year;
//         this.speed = speed;
//         this.value = value;
//     }
//         drive(){
//             return`їдемо зі швидкістю ${this.speed} на годину`
//         }
//         // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         info (){
//             console.log(` ${this.model} = model;
//     ${this.creator} = creator;
//     ${this.year} = year;
//     ${this.speed} = speed;
//     ${this.value} = value;`)
//         }
//     info2 (){
//         console.log(`info____________`)
//         for (const carKey in this) {
//             console.log(`${carKey} - ${this[carKey]}` );
//         }
//     }
//         increaseMaxSpeed (newSpeed){
//         return this.speed = newSpeed;
//         }
//         //- змінює рік випуску на значення newValue
//     changeYear (newValue){
//         return this.year = newValue;
//     }
//     //приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//         Adddrive(driver){
//        return  this.driver = driver;
//         }
//
//
// }
// const car1 = new Car(123,1,231,23,123);
// console.log(car1.drive());
// //console.log(car1.info());
// //console.log(car1.info2());
// car1.increaseMaxSpeed(654);
// car1.Adddrive(123);
//
//
// console.log(car1);
// //
// //
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку