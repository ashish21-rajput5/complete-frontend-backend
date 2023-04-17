let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName) {
    console.log(arguments);
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments.length);
    let myVar = "var inside function";
    console.log(myVar);
    let fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Ashish", "Rajput");
console.log(personName);