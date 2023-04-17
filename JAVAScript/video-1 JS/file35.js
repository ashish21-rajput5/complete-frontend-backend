// array destructuring

// const myArray = ["value1", "value2"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1 is", myvar1);
// console.log("value of myvar2 is", myvar2);

// same thing in shortcut way
// let [myvar1, myvar2] = myArray;
// console.log("value of myvar1 is -", myvar1);
// console.log("value of myvar2 is -", myvar2);



// it is important

// const myArray = ["value1", "value2", "value3"];
// let [myvar1, , myvar2] = myArray;
// console.log("value of myvar1 is -", myvar1);
// console.log("value of myvar2 is -", myvar2);



const myArray = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1 is -", myvar1);
console.log("value of myvar2 is -", myvar2);
console.log(myNewArray);