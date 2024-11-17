// Ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілкових функцій
/************#I2XsG6f*************/
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc=(a, b) => a * b;
// console.log(calc(5, 10));


/************#ETGAxbEn8l*************/
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const  roundSquareArea = (r) => Math.PI * r * r;
// let r = 5;
// let area = roundSquareArea(r);
// console.log(`Площа кола`, area);


/************#Mbiz5K4yFe7*************/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

// const squareCilinderArea = (r, h) => 2 * Math.PI * r * h * (r + h);
//
// let radius = 3;
// let height = 5;
// let area = squareCilinderArea(radius, height);
//
// console.log("Площа поверхні циліндра:", area);

/************#SIdMd0hQ*************/
// - створити функцію яка приймає масив та виводить кожен його елемент

// const foobar = (array) => {
//     array.forEach((item) => console.log(item));
// };
//
// const myArray = ['Коля', 'Толя', 'Оля', 'Катя', 'Таня'];
// foobar(myArray);


/************#59g0IsA*************/
// - створити функцію яка створює параграф з текстом
// та виводить його через document.write. Текст задати через аргумент
// const foobar = (text) => document.write(`<p>${text}</p>`);
//
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)


/************#hOL6126*************/
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий

// const foobar = (text) => {
//     document.write
//     (` <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//        </ul>
// `);
// };
// foobar(`Коля`)


 /***********#0Kxco1edSN*************/
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write

// const foobar = (text, counter) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < counter; i++){
//         document.write (`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
// foobar(`ТОЛЯ`, 20);



/***********#gEFoxMMO*************/
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
//
// const foobar = (ArrayOFPrimitivs) =>{
//     document.write(`<ul>`)
//
//     for (const item of ArrayOFPrimitivs) {
//         document.write (`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// };
//
// foobar([123, `Коля`, true]);


/***********#bovDJDTIjt*************/
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// const foobar = (users) => {
//     for (const user of users) {
//     document.write (`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// };
// foobar([
//     {id:1, name:"John", age:20},
//     {id:2, name:"John", age:20},
//     {id:3, name:"John", age:20},
//     {id:4, name:"John", age:20},
//     {id:5, name:"John", age:20},
//     {id:6, name:"John", age:20},
// ])

/***********#pghbnSB*************/
// - створити функцію яка повертає найменьше число з масиву



const arrayMinValue = (numbers) => Math.min(...numbers);

console.log(arrayMinValue([27, 84, -33, 55, -100]));

/**********#EKRNVPM*************/
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => arr.reduce((total, current) => total + current, 0);

console.log(sum([1, 2, 10]));


/**********#kpsbSQCt2Lf*************/


// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
 if (index1 < arr.length && index2 < arr.length) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; // Деструктуризація для обміну
  return arr;
 }
 return -Infinity;
};

console.log(swap([11, 22, 33, 44], 1, 2)); // Виведе: [11, 33, 22, 44]
console.log(swap([11, 22, 33, 44], 1, 5)); // Виведе: -Infinity


/**********#mkGDenYnNjn*************/

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

const exchange = (sumUAN, currencyValue, exchangeCurrency) => {
 const chosenCurrency = currencyValue.find(item => item.currency === exchangeCurrency);

 if (!chosenCurrency) {
  throw new Error (`Вказана валюта не знайдена`);
 }
 return sumUAN / chosenCurrency.value;
};

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'EUR'));

