/***************#8Nmt60ZT*************/
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Styled Blocks</title>
// <style>
//     /* Стилі для блоку */
//     .wrap {
//     background-color: #f0f0f0; /* Колір фону */
//     color: #333;              /* Колір тексту */
//     font-size: 20px;          /* Розмір тексту */
//     padding: 10px;            /* Відступи */
// }
//     .collapse {
//     border: 2px solid #333;   /* Додатковий стиль (необов'язково) */
// }
//     .alpha {
//     border-radius: 10px;      /* Закруглені кути */
// }
//     .beta {
//     box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Тінь */
// }
// </style>
// </head>
// <body>
// <script>
//     // Створюємо новий блок
//     const block = document.createElement('div');
//
//     // Додаємо текст до блоку
//     block.textContent = "Це основний блок";
//
//     // Додаємо класи
//     block.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
//     // Додаємо блок у body
//     document.body.appendChild(block);
//
//     // Клонуємо блок
//     const clonedBlock = block.cloneNode(true);
//
//     // Змінюємо текст у клону для наочності (не обов'язково)
//     clonedBlock.textContent = "Це клонований блок";
//
//     // Додаємо клонований блок у body
//     document.body.appendChild(clonedBlock);
// </script>
// </body>
// </html>


/************#OPLI89c9G************/


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let arr = ['Main','Products','About us','Contacts']
// const menu = document.createElement('ul');
// menu.classList.add('menu');
//
// for (const item of arr) {
//     const li = document.createElement('li');
//     li.innerText = item;
//     menu.appendChild(li);
// }
// document.body.appendChild(menu);

/*********** #jeBqHV525U5************/
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `${course.title} ${course.monthDuration}`
//     document.body.appendChild(div);
// }


/*********** #Kx1xgoKy8**********/

//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     h2.innerText = course.title;
//     const p = document.createElement('p');
//     p.innerText = course.monthDuration;
//     div.append(h2, p);
//     document.body.appendChild(div);
// }

// ==========================