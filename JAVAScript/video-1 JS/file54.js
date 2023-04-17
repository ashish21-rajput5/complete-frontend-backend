// callback function 

// they functions also called higher order functions
function myFunction2(name) {
    console.log("inside myFunction 2 ....");
    console.log(`your name is ${name}`);
}

function myFunction(callback) {
    console.log("Namaste Duniyaa ....");
    callback("Ashish");
}

myFunction(myFunction2);