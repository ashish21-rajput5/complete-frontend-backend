// array push or pop

/*
push and pop is fast then shift and unshift because shift & unshift will
 shift other index variable forward then store another variables value 
*/


// array shift or unshift


let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// // push
// fruits.push("Grapes");
// console.log(fruits);

// //pop
// let poppedFruit = fruits.pop();
// console.log(fruits);

// console.log("Popped fruit is", poppedFruit);

// unshift -----  it will behave like push but at start of array
fruits.unshift("garpes");
fruits.unshift("pineapple");
console.log(fruits);


// shift -----  it will behave like pop but at start of array
// fruits.shift();
let removedFruit = fruits.shift();
console.log("removed fruit is", removedFruit);
console.log(fruits);