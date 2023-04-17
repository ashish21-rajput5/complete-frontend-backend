// functions

// function sayHello() {
//     console.log("say hello ......");
// }


// call / run / invoke all have same meaning

// function sayHello(value1, value2) {
//     // console.log(value1 + value2);
//     return value1 + value2;
// }

// const addedvalue = sayHello(6, 6);
// console.log(addedvalue);

// console.log(undefined + undefined);

// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(6));


// function for finding target in array
// input : array , target 
// output : index of target if target is present in array

function ifPresent(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const array = [3, 5, 6, 7, 8, 4];
console.log(ifPresent(array, 8));