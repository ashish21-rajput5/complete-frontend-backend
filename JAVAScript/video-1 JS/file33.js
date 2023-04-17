// for of loop(iterate) in arrays

const fruits = ["mango", "apple", "grapes"];
const fruits2 = [];

for (let fruit of fruits) {
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);