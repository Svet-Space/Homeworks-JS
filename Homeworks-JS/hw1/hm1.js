let greeting = 'hello';
let school = 'owu';
let domain = 'com';
let country = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let pi = 3.14;
let euler = 2.7;
let age = 16;
let isTrue = true;
let isFalse = false;

console.log(greeting);
console.log(school);
console.log(domain);
console.log(country);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(pi);
console.log(euler);
console.log(age);
console.log(isTrue);
console.log(isFalse);

/*************************/

let firstName = 'Світлана';
let middleName = 'Володимирівна';
let lastName = 'Коноваленко';

let person = lastName + ' ' + firstName + ' ' + middleName;

console.log(person);

/**************************/

let a = 100;
let b = '100';
let c = true;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean

/**************************/

// Запитуємо у користувача призвище
firstName = prompt("Введіть ваше призвіище");

// Запитуємо у користувача ім'я
lastName = prompt("Введіть ваше ім'я:");

// Запитуємо у користувача по батькові
patronymic = prompt("Введіть ваше по батькові:");

// Запитуємо у користувача вік або роки
years = prompt("Скільки вам років?:");

// Виводимо отримані дані у консоль

console.log("Призвище:", firstName);
console.log("Ім'я:", lastName);
console.log("По батькові:", patronymic);
console.log("Роки:", years);