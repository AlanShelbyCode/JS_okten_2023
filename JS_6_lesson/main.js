// push - додати в кінець масиву
// substring - вирізає з по
// split - розділяє по елементах масиву за вказаним символос ('/')
// pop - усуває з кнця
// unshit - додає на початок
// shift - усуває з початку
// splice - видалити (з якого місця(1),скільки елементів(2))
//slice - скопіювати (з, до(невключно))


// - Знайти та вивести довижину настипних стрінгових значень
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let masyw = ['hello world', 'lorem ipsum', 'javascript is cool']
for (const string of masyw) {
    console.log(string.length);
    console.log(string.toUpperCase())
}
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let masyw2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
for (const string of masyw2) {
    console.log(string.toLowerCase())
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str2 = ' dirty string   '
console.log(str2.substring(1,13))
console.log(str2.trim());
console.log(str2.split(' ').filter((item) => item.length).join(' '));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let stringToarray = (arr) =>{
    return arr.split(' ');
}
let arr = stringToarray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let masywNumbers  = [10,8,-7,55,987,-1011,0,1050,0];
let map = masywNumbers.map((value) => {return value.toString()});
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (num, direction) =>{
    if (direction === "ascending"){
        return num.sort((a,b) => a-b);
    }
    else if (direction === 'descending'){
        return num.sort((a,b) => b-a);
    }
    else {
        console.log('ne wirne znaczennja');
    }
}
let sortNums2 = (num, direction) =>{
    switch (direction) {
        case 'ascending':
            return num.sort((a,b) => a-b);
        case 'descending' :
            return num.sort((a,b) => b-a);
        default:
        console.log('ne wirne znaczennja');
        break;
    }
}
let nums =  [3,11,21];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums2(nums, 'ascending'));
//
//==========================
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort  = coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration;
})
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map2 = coursesAndDurationArray.map((value) => {
    return {id : value.index+1, title : value.title, moumthDuration : value.monthDuration}
} )
console.log(map2);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let koloda = [
    {title:6,index:'serce'},
    {title:7,index:'serce'},
    {title:8,index:'serce'},
    {title:9,index:'serce'},
    {title:10,index:'serce'},
    {title:'valet',index:'serce'},
    {title:'dama',index:'serce'},
    {title:'korol',index:'serce'},
    {title:'tuz',index:'serce'},

    {title:6,index:'buba'},
    {title:7,index:'buba'},
    {title:8,index:'buba'},
    {title:9,index:'buba'},
    {title:10,index:'buba'},
    {title:'valet',index:'buba'},
    {title:'dama',index:'buba'},
    {title:'korol',index:'buba'},
    {title:'tuz',index:'buba'},

    {title:6,index:'pika'},
    {title:7,index:'pika'},
    {title:8,index:'pika'},
    {title:9,index:'pika'},
    {title:10,index:'pika'},
    {title:'valet',index:'pika'},
    {title:'dama',index:'pika'},
    {title:'korol',index:'pika'},
    {title:'tuz',index:'pika'},

    {title:6,index:'chresta'},
    {title:7,index:'chresta'},
    {title:8,index:'chresta'},
    {title:9,index:'chresta'},
    {title:10,index:'chresta'},
    {title:'valet',index:'chresta'},
    {title:'dama',index:'chresta'},
    {title:'korol',index:'chresta'},
    {title:'tuz',index:'chresta'},

]
// - знайти піковий туз
console.log(koloda.find((item) => item.title ==='tuz'&& item.index === 'pika'));
// - всі шістки
console.log(koloda.filter((card) => card.title === 6));
// - всі червоні карти
console.log(koloda.filter((card) => card.index === 'serce' || card.index === 'buba'));

// - всі буби
console.log(koloda.filter((card) =>  card.index === 'buba'));

// - всі трефи від 9 та більше
console.log(koloda.filter((card) => card.index === 'chresta' && [9,10,'valet','dama','korol','tuz'].includes(card.title)));

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

console.log(koloda.reduce((accumulator, item) => {
    switch (item.index) {

        case 'pika' :
            accumulator.clubs.push(item);
            return accumulator;
        case 'buba' :
            accumulator.diamonds.push(item);
            return accumulator;
        case 'chresta' :
            accumulator.spades.push(item);
            return accumulator;
        case 'serce' :
            accumulator.hearts.push(item);
            return accumulator;
    }
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes('sass') ));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes('docker')));