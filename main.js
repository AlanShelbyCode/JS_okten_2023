// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h1> Task 1</h1>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor.</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h1> Task 2</h1>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i+1} Lorem ipsum dolor.</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h1> Task 3</h1>`);
let i = 0
while(i<20){
    document.write(`<h1> blocks</h1>`);
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
document.write(`<h1> Task 4</h1>`);
let j = 0
while(j<20){
    document.write(`<h1>${j+1} blocks</h1>`);
    j++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// //
// -----------------------------------------------
document.write(`<h1> Task 5</h1>`);
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//

for (const listOfItem of listOfItems) {
    document.write(`<ul>
                        <li>${listOfItem}</li>
                    </ul>`)
}


//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
document.write(`<h1> Task 6</h1>`);
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
for (const product of products) {
    document.write(`
 <div class="product-card">
     <h3 class="product-title">${product.title} Price - ${product.price}</h3>
 <img src="${product.image}" alt="" class="product-image">
</div>`)
}
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//

//
//
// --------------------
//     є масив
document.write(`<h1> Task 7 Console </h1>`);
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
console.log(`status is true`);
for (const user of users) {
    if (user.status === true){
        console.log(user);
    }
}
// - користувачів зі статусом false
console.log(`status is false`);
for (const user of users) {
    if (user.status !== true){
        console.log(user);
    }
}
// - користувачів які старші за 30 років
console.log(`older than 30`);
for (const user of users) {
    if (user.age >= 30){
        console.log(user)
    }
}