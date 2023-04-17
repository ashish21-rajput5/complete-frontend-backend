// prototype



function namaste() {
    console.log("namaste duniya");
}
// namaste();

/*
// in javaScript function also treated as a method or
// javaScript function ===  function + object
// name property  --->   tells function name

console.log(namaste.name);
*/

/*
// you can add your own properties
namaste.myOwnProperties = "very unique value";
console.log(namaste.myOwnProperties);
*/

/*
function provides more useful properties
only function provide prototype properties
console.log(namaste.prototype); // {}
*/

// const namaste = ["value1"]; // it is ant a prototype

// if (namaste.prototype) {
//     console.log("prototype is present");
// } else {
//     console.log("prototype is not present");
// }



namaste.prototype.abc = "abc";
namaste.prototype.xyz = "xyz";
namaste.prototype.sing = function() {
    return "Jay Sharee Ram";
}

console.log(namaste.prototype.sing());