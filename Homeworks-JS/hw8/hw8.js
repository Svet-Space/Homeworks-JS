// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


//
//
// function deepCopy(obj) {
//     // Перевірки на `null`, `undefined`, `NaN`
//     if (obj === null) return null; // Якщо null, просто повертаємо null
//     if (obj === undefined) return undefined; // Якщо undefined, повертаємо undefined
//     if (typeof obj === 'number' && isNaN(obj)) return NaN; // Якщо NaN, повертаємо NaN
//
//     // Перевірка типу
//     if (typeof obj !== 'object' && typeof obj !== 'function') {
//         // Якщо це не об'єкт і не функція, повертаємо значення як є (примітиви)
//         return obj;
//     }
//
//     // Якщо це функція, повертаємо функцію як є
//     if (typeof obj === 'function') {
//         return obj.bind({}); // Створюємо копію функції (без прив'язки до контексту)
//     }
//
//     // Для масивів
//     if (Array.isArray(obj)) {
//         return obj.map(item => deepCopy(item)); // Рекурсивно копіюємо кожен елемент
//     }
//
//     // Для об'єктів
//     const copy = {}; // Новий об'єкт для копії
//     for (let key in obj) {
//         // Перевіряємо, чи властивість належить самому об'єкту (не з прототипа)
//         if (obj.hasOwnProperty(key)) {
//             copy[key] = deepCopy(obj[key]); // Рекурсивно копіюємо властивість
//         }
//     }
//
//     return copy;
// }
//
//
//
//
// const specialValues = {
//     value1: null,
//     value2: undefined,
//     value3: NaN,
// };
//
// const copiedSpecialValues = deepCopy(specialValues);
// console.log(copiedSpecialValues); // { value1: null, value2: undefined, value3: NaN }
//


/*******2способ***********/


// function cloner (obj){
//     if(obj){
//         let functions = [];
//         for(const key in obj){
//             if (typeof obj[key] === 'function'){
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//     for(const func of functions){
//         cloneObj[func.key] = func.functionClone;
//     }
//     console.log(cloneObj);
//         return cloneObj;
//     }
//     throw new Error('!!!!!!');
// }
//
// cloner({id: 123, name: 'tyuiop', greeting () {}, foo() {} });
/******#iz6emEsP2BA***********/

// - є масив
    // за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index +1 })));
