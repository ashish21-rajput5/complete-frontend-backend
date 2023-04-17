// block scope vs function scope

/*
var is function scope means
it is accessable out side the block where it is declared or 
we can access anywhere in our function
*/

// let and const are block scope
/*   or
if we declare let and const inside a block then we access that
variables inside that block only we can't access outside
*/
{
    let firstName = "Ashish";
    const secondName = "Ashish";
    var thirdName = "Ashish";
}

console.log(thirdName);
console.log(secondName);
console.log(firstName);