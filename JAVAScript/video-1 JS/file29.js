// how to clone array

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; it not a cloning way
// let array2 = array1.slice(0); //it is fast
// let array2 = [].concat(array1); 



// new way

// spread operator(...)
// let array2 = [...array1];

// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);



// how to concatenate two arrays

// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1, ["item3", "item4"]);

// let array2 = [...array1, "item3", "item4"];
let newArray = ["item3", "item4"];
let array2 = [...array1, ...newArray];

console.log(array1 === array2);
console.log(array1);
console.log(array2);