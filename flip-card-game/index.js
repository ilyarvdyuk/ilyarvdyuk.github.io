// console.log('hello world')


// let card = document.getElementById('card');

// card.addEventListener('click', handleClick)

// function handleClick(event) {
//     const card = event.currentTarget;
//     if (card.classList.contains('flip')) {
//         card.classList.remove('flip');
//     } else {
//         card.classList.add('flip');
//     }
//   }

// let gameField = document.getElementById("game-field")

// for (let i = 0; i < 63; i++) {
//     let clone = card.cloneNode(true)
//     clone.addEventListener('click', handleClick)
//     gameField.appendChild(clone)
// }





// variables

let a = 1
a = 3
let b = 2
let c = a + b
let d = 'hello world'
let e = [1, 2, 4]
let f = { name: 'Artem' }
console.log(f.name)

console.log(c) // ? 3

// arrays

let myArray = [1, 'hello', { a: 'b' }, 1, 2]
console.log(myArray)
console.log(myArray[1])
myArray[1] = 'world'
console.log(myArray[1])

// loops

console.log('')
console.log('')

// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i)
//     console.log('')
// }

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}

// functions

function add(a, b) {
    return a + b;
}

let result = add(2, 3)
let result2 = add(5, 5)

console.log(result) // 5
console.log(result2) // 10


// objects

const user = {
    name: 'Illya',
    age: 12
}

user.isStudent = false;
// Boolean - true / false
console.log(user)
user.age = 18;
user.isStudent = true;

console.log(user)
console.log(user.name)
console.log(user.age)
