/**************#XjJuucOMR0*****************/
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const user = new User(1,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978');
// console.log(user);
//
//
// let users = [
//
// new User(1,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(2,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(3,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(4,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(5,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(6,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(7,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(8,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(9,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(10,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// ]
// console.log(users);

/**************#2ikXsE2WiKZ*****************/


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//
//     function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//
// new User(1,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(2,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(3,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(4,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(5,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(6,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(7,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(8,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(9,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(10,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// ];
//
//
// console.log (filterUsers = users.filter((user) => user.id % 2 === 0));


/**************#pOeHKct*****************/
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//     function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//
// new User(1,'Tomas', 'Tom', 'f.dg@gmail.com', '+380974568978'),
// new User(6,'Tomas', 'Jek', 'f.dg@gmail.com', '+380974568978'),
// new User(3,'Tomas', 'oly', 'f.dg@gmail.com', '+380974568978'),
// new User(64,'Tomas', 'Mari', 'f.dg@gmail.com', '+380974568978'),
// new User(5,'Tomas', 'Ket', 'f.dg@gmail.com', '+380974568978'),
// new User(9,'Tomas', 'An', 'f.dg@gmail.com', '+380974568978'),
// new User(11,'Tomas', 'Jor', 'f.dg@gmail.com', '+380974568978'),
// new User(8,'Tomas', 'Liza', 'f.dg@gmail.com', '+380974568978'),
// new User(44,'Tomas', 'Lili', 'f.dg@gmail.com', '+380974568978'),
// new User(10,'Tomas', 'Max', 'f.dg@gmail.com', '+380974568978'),
// ];


//     function sorter (a, b) {
//         return a.id - b.id; //природне сортування від меншого до більшого
//     }
// console.log(users.sort(sorter));


// console.log(users.sort((a, b) =>  a.id - b.id));

/**************#nkMXISv*****************/
// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


//
// function Client(id, name, surname, email, phone, order = []) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
//     const clients = [
//         new Client(1, 'Tomas', 'Smith', 'tomas.smith@gmail.com', '+380974568978', ['Laptop', 'Mouse']),
//         new Client(2, 'Anna', 'Johnson', 'anna.johnson@gmail.com', '+380976123456', ['Phone']),
//         new Client(3, 'John', 'Williams', 'john.williams@gmail.com', '+380978234567', ['Tablet', 'Case']),
//         new Client(4, 'Emily', 'Brown', 'emily.brown@gmail.com', '+380972345678', ['Headphones']),
//         new Client(5, 'Michael', 'Jones', 'michael.jones@gmail.com', '+380979876543', ['Camera']),
//         new Client(6, 'Sarah', 'Miller', 'sarah.miller@gmail.com', '+380974567891', []), // Без заказов
//         new Client(7, 'Chris', 'Davis', 'chris.davis@gmail.com', '+380974123456', ['Monitor']),
//         new Client(8, 'Sophia', 'Garcia', 'sophia.garcia@gmail.com', '+380974987654', ['Printer']),
//         new Client(9, 'David', 'Martinez', 'david.martinez@gmail.com', '+380976543210', []), // Без заказов
//         new Client(10, 'Olivia', 'Martinez', 'olivia.martinez@gmail.com', '+380974112233', ['Keyboard']),
//     ];
//         console.log(clients);
//
//
// // Вывести только имена всех клиентов:
// clients.forEach(client => {
//     console.log(client.name);
// });
//
// // Найти клиента с определённым ID:
// const clientWithId5 = clients.find(client => client.id === 5);
// console.log(clientWithId5);
//
// // Получить список клиентов с заказами:
// const clientsWithOrders = clients.filter(client => client.order.length > 0);
// console.log(clientsWithOrders);

/**************#8abtVjRv*****************/
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//
// function Client(id, name, surname, email, phone, order = []) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// const clients = [
//     new Client(1, 'Tomas', 'Smith', 'tomas.smith@gmail.com', '+380974568978', ['Laptop', 'Mouse', 'Phone']),
//     new Client(2, 'Anna', 'Johnson', 'anna.johnson@gmail.com', '+380976123456', ['Phone']),
//     new Client(3, 'John', 'Williams', 'john.williams@gmail.com', '+380978234567', ['Tablet', 'Case']),
//     new Client(4, 'Emily', 'Brown', 'emily.brown@gmail.com', '+380972345678', ['Headphones','Laptop', 'Mouse', 'Phone']),
//     new Client(5, 'Michael', 'Jones', 'michael.jones@gmail.com', '+380979876543', ['Camera']),
//     new Client(6, 'Sarah', 'Miller', 'sarah.miller@gmail.com', '+380974567891', []), // Без заказов
//     new Client(7, 'Chris', 'Davis', 'chris.davis@gmail.com', '+380974123456', ['Monitor']),
//     new Client(8, 'Sophia', 'Garcia', 'sophia.garcia@gmail.com', '+380974987654', ['Printer', 'Tablet', 'Case']),
//     new Client(9, 'David', 'Martinez', 'david.martinez@gmail.com', '+380976543210', []), // Без заказов
//     new Client(10, 'Olivia', 'Martinez', 'olivia.martinez@gmail.com', '+380974112233', ['Keyboard']),
// ];
//
// const sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);


/**************#vV9a6584I5*****************/

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(mode, producer, year, maxSpeed, engineVolume) {
//     this.mode = mode;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive =function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for(const key in this){
//             console.log(key, this[key]);
//         }
//     };
//       this.increaseMaxSpeed = function (speedToAdd) {
//           if(speedToAdd > 0){
// this.maxSpeed = this.maxSpeed + speedToAdd;
//       }
//       };
//       this.changeYear = function (year) {
//          if (year > 1985) this.year = year;
//       };
//       this.addDriver =function (driver) {
//           if(driver) this.driver = driver
//       };
//
// }
//
// const car = new Car ('BMV', 'Germany',1999, 200, 3 );
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(300);
// car.changeYear(5);
// car.addDriver({});
// console.log(car);


/*************#5kla3yMpg*****************/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(mode, producer, year, maxSpeed, engineVolume) {
//         this.mode = mode;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     info() {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//
//     increaseMaxSpeed(speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//
//     };
//
//     changeYear(year) {
//         if (year > 1985) this.year = year;
//     };
//
//     addDriver(driver) {
//         if (driver) this.driver = driver
//     };
//
// }
//
// const car = new Car('BMV', 'Germany', 1999, 200, 3);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(300);
// car.changeYear(5);
// car.addDriver({});
// console.log(car);


/*************#zg6Fifnqig*****************/
// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince{
//
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//         this.wife = null;
//     }
// }
//
// const cinderellas =[
//     new Cinderella('Ket1', 18, 34),
//     new Cinderella('Ket2', 19, 35),
//     new Cinderella('Ket3', 20, 36),
//     new Cinderella('Ket4', 21, 37),
//     new Cinderella('Ket5', 22, 38),
//     new Cinderella('Ket6', 23, 39),
//     new Cinderella('Ket7', 24, 40),
//     new Cinderella('Ket8', 25, 41),
//     new Cinderella('Ket9', 26, 42),
//     new Cinderella('Ket10', 27, 43),
// ]
//
// const prince = new Prince ('Ket', 22,38);
//
// for(const cinderella of cinderellas){
//     if (cinderella.footSize === prince.slipper) {
//         prince.wife = cinderella;
//         break;
//     }
// }
//
//
// // Вывод результата цикла
// console.log(`Через цикл: Попелюшка ${prince.wife.name}, вік ${prince.wife.age},
//  розмір ноги ${prince.wife.footSize}.`);
//
// // Решение через метод find
// const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
//
// // Привязываем найденную попелюшку к полю wife
// prince.wife = cinderellaMain;
//
// // Вывод результата метода find
// console.log(`Через find: Попелюшка ${prince.wife.name}, вік ${prince.wife.age}, розмір ноги ${prince.wife.footSize}.`);


/************#gsKLAsNWM****************/
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function(callback) {
//     const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
// [345, 345,325].myForEach((x) => console.log(x));

Array.prototype.myFilter = function(predicate) {
    const arr =[];
    for(const item of this) {
        if(predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};


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

const  result = users.myFilter((user) => user.status);
console.log(result);