/**************#dFeorS3m7u***************/
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let s1 = `hello world`;
// console.log(s1.length);
// let s2 = `lorem ipsum`;
// console.log(s2.length);
// let s3 = `javascript is cool`;
// console.log(s3.length);
//
// const strings = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (const string of strings) {
//     console.log(string.length);
// }

/**************#8lld9HMxXWB***************/
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// const  s1 = str1.toUpperCase();
// console.log(s1);
//
// let str2 = 'lorem ipsum';
// const  s2 = str2.toUpperCase();
// console.log(s2);
//
// let str3 = 'javascript is cool';
// const  s3 = str3.toUpperCase();
// console.log(s3);

// ['hello world', 'lorem ipsum', 'javascript is cool']
// .map(str => str.toUpperCase())
// .forEach (uppepStr => console.log(uppepStr));


/**************#ClDsAm7xba7**************/

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// const  s1 = str1.toLowerCase();
// console.log(s1);
//
// let str2 = 'LOREM IPSUM';
// const  s2 = str2.toLowerCase();
// console.log(s2);
//
// let str3 = 'JAVASCRIPT IS COOL';
// const  s3 = str3.toLowerCase();
// console.log(s3);

// ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// .map(str => str.toLowerCase())
// .forEach (lowerStr => console.log(lowerStr));


/**************#0b89BkYZwu**************/
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str= ' dirty string   '
// const s = str.trim();
// console.log(s);


/*************#bfoJuse4ZzP**************/
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToArray(str){
//     const split = str.split(' ');
//     return split;
// }
// console.log(stringToArray(`Ревуть воли як ясла повні`));
//


// function stringToArray(str) {
//     return str.split(' ');
// }
//
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str);
//
// console.log(arr);

/************#Rbr5kEQ*************/

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// const numbers = [10,8,-7,55,987,-1011,0,1050,0];
// const  strings = numbers.map(number =>{
//     return number + ``
// });
// console.log(strings);


/************#5hqyKTfmc*************/

// - створити функцію sortNums(array,direction),
// яка приймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(arrayOfNums, direction) {
//     if(direction === `ascending`) return arrayOfNums.sort((a, b) => a - b);
//     if(direction === `descending`) return arrayOfNums.sort((a, b) => b - a);
// }
// let nums = [11,21,3];
// console.log(sortNums(nums, 'ascending'));  // [3, 11, 21]
// console.log(sortNums(nums, 'descending')); // [21, 11, 3]


/***********#yo06d74c1C*************/

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// const sort = coursesAndDurationArray
//     .sort ((a, b) => b.monthDuration - a.monthDuration);
// const  filter = sort.filter((value, index) =>{
//     value.id = index + 1;
//     return value;
// });
// console.log(filter);

// const sort = coursesAndDurationArray
//     .sort ((a, b) => b.monthDuration - a.monthDuration);
// const  filter = sort.filter(value => value.monthDuration > 5);
// const map = filter.map((value, index) => {
//     value.id = index + 1;
//     return value;
// });
//
// console.log(map);

// const map1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => {
//     value.id = index + 1;
//     return value;
// });
// console.log(map1);


// const map1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({...value, id: index + 1}));
// console.log(map1);

/***********#bolvdlhP*************/

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз Spades
// - всі шістки
// - всі червоні карти Hearts
// - всі буби Diamonds
// - всі трефи від 9 та більше Clubs
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

//
// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

//
// const cards = []
// for (const suit of suits) {
//     for (const value of values) {
//         cards.push({cardSuit: suit, value: value});
//     }
// }
// console.log(cards);


// const cards = []
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if(suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         }else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
//
// console.log(cards);
//
//
// // - знайти піковий туз Spades
// console.log (cards.find(card => card.value === 'ace' && card.cardSuit ==='spade'));
//
// // - всі шістки
// console.log(cards.filter(card => card.value === '6'));
// // - всі червоні карти Hearts
// console.log(cards.filter(card => card.color === 'red'));
// // - всі буби Diamonds
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// // - всі трефи від 9 та більше Clubs
// console.log( cards.filter(card => card.cardSuit === 'clubs' &&
//     ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));




/***********#EP5I1UUzAX*************/

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards = []
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if(suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         }else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
//
// console.log(cards);
//
//
// const sortedCards = cards.reduce((accum, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//         case 'clubs':
//             accum.clubs.push(card);
//             break;
//     }
//     return accum;
// },
//     {
//
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
//
// console.log(sortedCards);


/***********#4LJn7zBx*************/
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

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

console.log(coursesArray.filter (course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter (course => {
    return course.modules.includes('docker');
}));