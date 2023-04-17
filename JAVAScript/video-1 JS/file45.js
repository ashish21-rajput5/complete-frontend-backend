// function expression


/*function sayHello() {
    console.log("say hello ......");
}

we can also declere by function expression i.e*/
const sayHello = function() {
    console.log("namaste duniyaa .......");
}
sayHello();
/* .... importent .... */
/*  here name of function is nothing but by us this function is store 
in a variable that's why this function treated by that variable name  */



/*function sumOfTwo(value1, value2) {
    return value1 + value2;
}
by function expression i.e */
const sumOfTwo = function(value1, value2) {
    return value1 + value2;
}
console.log(sumOfTwo(6, 6));



/*function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
by function expression i.e */
const isEven = function(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(6));



/* function ifPresent(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
by function expression i.e */
const ifPresent = function(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(ifPresent([3, 5, 6, 7, 8, 4], 8));