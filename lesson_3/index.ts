// 1. Створити пустий масив та :

const arrEvenlyNumber:number[] = [];
const arrOddNumber:number[] = [];
const arrRandomNumber :number[] = [];

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

while (arrRandomNumber.length <= 20){
    let randomNumber: number = Math.floor(Math.random() * 100) + 8;
        arrRandomNumber.push(randomNumber);
}

//     a. заповнити його 50 парними числами за допомоги циклу.

while (arrEvenlyNumber.length <= 50){
    let randomNumber: number = Math.floor(Math.random() * 100) + 8;
    if (randomNumber % 2 === 0){
        arrEvenlyNumber.push(randomNumber);
    }
}
console.log(arrEvenlyNumber)
//     b. заповнити його 50 непарними числами за допомоги циклу.
while (arrOddNumber.length <= 50){
    let randomNumber: number = Math.floor(Math.random() * 100) + 8;
    if (randomNumber % 2 !==0){
        arrOddNumber.push(randomNumber)
    }
}
console.log(arrOddNumber)

const newArrRandomNumber :number[] = [];

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

while (arrRandomNumber.length <= 20){
    const randomNumber: number = Math.floor(Math.random() * 100) + 8;
    arrRandomNumber.push(randomNumber);
}

// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

for (let i = 0; i < arrRandomNumber.length; i += 3) {
    if (arrRandomNumber[i] % 2 === 0){
        console.log(arrRandomNumber[i])
        newArrRandomNumber.push(arrRandomNumber[i])
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

const arr: number[] = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

for (let i = 0; i < arr.length; i++) {
    if ( arr[i] % 2 === 0 && i !== 0 ){
        console.log(arr[i - 1])
    }
}

let middleCheck: number = 0
const check: number[] = [100,250,50,168,120,345,188]
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

for (const item of check) {
    middleCheck += item
}

console.log(middleCheck);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
interface IUsersWithId<T> {
    id: number,
    name: string,
    age: number,
    status: boolean,
    address?: T
}

interface ICitiesWithId {
    user_id: number,
    country: string,
    city: string,
}

const usersWithId: IUsersWithId<ICitiesWithId>[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

const citiesWithId:ICitiesWithId[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
const usersWithCities:IUsersWithId<ICitiesWithId>[] = []

// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

for (const item of usersWithId) {
    for (const itemElement of citiesWithId) {
        if (item.id === itemElement.user_id){
            const obj = item.address = itemElement
            usersWithCities.push({...item,address:{...itemElement}})
        }
    }
}
console.log(usersWithCities)

const letter: string[] = [ 'a', 'b', 'c'];
let string: string = '';
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
for (const item of letter) {
    string += item
}
console.log(string)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
while (i < letter.length){
    string += letter[i]
    i++
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (let j = 0; j < letter.length; j++) {
    string += letter[j]
}