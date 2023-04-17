// arrow function


// const sayHello = function() {
//     console.log("namaste duniyaa .......");
// }
const sayHello = () => console.log("Namaste Duniyaa ....");
sayHello();



// if we write only one statament inside the function then by
// arrow function we can also do this 

// const sumOfTwo = (value1, value2) => {
//     return value1 + value2;
// }

const sumOfTwo = (value1, value2) => value1 + value2; // it's also mean return something 
console.log(sumOfTwo(6, 6));


const firstChar = anyString => anyString[0];
console.log(firstChar("Ashish"));

// if we pass only one parameter then there is no required of paranthsis
// const isEven = (number) => {
const isEven = number => {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(6));




const ifPresent = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(ifPresent([3, 5, 6, 7, 8, 4], 8));