//for loop in arrays

let fruits = ["banana", "apple", "mango", "grapes"];
// let length = fruits.length;
// console.log(length);

// for (let i = 0; i < length; i++) {
//     console.log(fruits[i]);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length - 2]);

let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toLocaleUpperCase());
}

console.log(fruits2);