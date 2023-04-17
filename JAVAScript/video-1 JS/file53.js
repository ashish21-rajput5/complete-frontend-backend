// param destructuring
// it is use with object
// mostly use in react

const person = {
    firstName: "Ashish",
    gender: "male",
    age: 20
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//}

function printDetails({ firstName, gender, age }) {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);