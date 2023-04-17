// lexical environment , scope chain

const lastName = "Rajput";

const printName = function() {
    const firstName = "Ashish";
    console.log(firstName);
    console.log(lastName);
}

printName();