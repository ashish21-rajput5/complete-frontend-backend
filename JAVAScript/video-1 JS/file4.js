//let keyword
//declare variable with let keyword

//ver we use multiple declaration of same variable it is valid
var firstName = "Ashish";
console.log(firstName);
var firstName = "Rajput";
console.log(firstName);

// but in case of 
// let we can't  do this it is not valid for let
let secondName = ("Ashish2");
console.log(secondName);
secondName = ("Rajput2");
console.log(secondName);


//block scope vs function scope