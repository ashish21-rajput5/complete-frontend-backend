// hoisting

// sayHello();

// function sayHello() {
//     console.log("Namaste Duniyaa ....");
// };
// this behavior is known as hoisting



/*

we can do this only in function decleration
in function expression we can't do this 
and also arrow function we can't do this 
it very confusing

const sayHello = function() {
    console.log("Namaste Duniyaa ....");
};

const sayHello = () => console.log("Namaste Duniyaa ....");

*/

/*
console.log(Namaste);
var Namaste = "Namaste Duniyaa ... ";
console.log(Namaste);
// if we declare a variable with var then we try to access before 
// decelaration it will give undefined
 */



console.log(Namaste);
// let Namaste = "Namaste Duniyaa ... ";
const Namaste = "Namaste Duniyaa ... ";
console.log(Namaste);
// but let or const will give error