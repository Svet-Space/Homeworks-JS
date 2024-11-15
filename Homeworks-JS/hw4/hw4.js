//#I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(aNum, bNum) {
//     const result = aNum * bNum;
//     console.log(result);
//     return result;
// }
/**********приклад**********/
// function square(a, b) {
//     return a * b;
// }
//
// let a = 5;
// let b = 10;
// let area = square(a, b);
// console.log(`Площа прямокутника`,area);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function roundSquareArea(r) {
//     return Math.PI * r * r;
// }
//     let r = 5;
//     let area = roundSquareArea(r);
//
//     console.log(`Площа кола`, area);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

// function squareCilinderArea(r, h) {
//     const Pi = Math.PI;
//     return 2 * Pi * r * (r + h);
// }
//
// let radius = 3;
// let height = 5;
// let area = squareCilinderArea(radius, height);
//
// console.log("Площа поверхні циліндра:", area);

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// function foobar (array){
//     for (const item of array){
//         console.log(item);
//     }
// }
// const myArray = [`Коля`, `Толя`, `Оля`, `Катя`, `Таня`];
// foobar(myArray);

// #59g0IsA
// - створити функцію яка створює параграф з текстом
// та виводить його через document.write. Текст задати через аргумент

// function foobar(text){
//     document.write(`<p>${text}</p>`)
// }
//
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)
// foobar(`Коля`)

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий


// function foobar (text){
// document.write (`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
// `)
// }
// foobar(`Коля`)

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write

// function foobar (text, counter){
//     document.write(`<ul>`);
//     for (let i = 0; i < counter; i++){
//         document.write (`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foobar(`ТОЛЯ`, 20)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write

// function foobar (ArrayOFPrimitivs){
//     document.write(`<ul>`)
//
//     for (const item of ArrayOFPrimitivs) {
// document.write (`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// foobar([123, `Коля`, true])


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

//
// function foobar(users){
//     for (const user of users){
//         document.write (`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// foobar([
//     {id:1, name:"John", age:20},
//     {id:2, name:"John", age:20},
//     {id:3, name:"John", age:20},
//     {id:4, name:"John", age:20},
//     {id:5, name:"John", age:20},
//     {id:6, name:"John", age:20},
// ])


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// function arrayMinValue (numbers){
//     let min = numbers [0];
//     for (let i = 1; i < numbers.length; i++) {
//         let number = numbers[i];
//         if (number < min){
//             min = number;
//         }
//     }
//     return min;
// }
//
// console.log(arrayMinValue([27,84.,-33,55,-100]))


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr){
//     let basket = 0;
//     for (const arrElement of arr) {
//      basket = basket + arrElement;
//     }
//     return basket;
// }
// console.log(sum([1,2,10]))

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     if (index1 < arr.length && index2 < arr.length) {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//         return arr;
//     }
//     return -Infinity;
// }
//
// console.log(swap([11, 22, 33, 44], 1, 2));
// console.log(swap([11, 22, 33, 44], 1, 5));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency = null;

    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
            break;
        }
    }

    if (!chosenCurrency) {
        throw new Error('Указанная валюта не найдена');
    }

    let result = sumUAH / chosenCurrency.value;
    return result;
}

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'EUR'));