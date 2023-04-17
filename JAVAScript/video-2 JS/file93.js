console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);


// // function decelaration
// function myFunction() {
//     console.log("this is my function");
// }


// function experession  
var myFunction = function() {
    console.log("this is my function");
}

var firstName = "Ashish";
var lastName = "Rajput";
var fullName = firstName + " " + lastName;
console.log(fullName);