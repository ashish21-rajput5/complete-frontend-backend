//for in loop in array

const fruits = ["mango", "apple", "grapes"];
const fruits2 = [];

// for (let index in fruits) {
//     console.log(fruits[index]);
// }


// it will print indexes
// for (let fruit in fruits) {
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

for (let index in fruits) {
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);