// methods
// function inside object

// const person = {
//     firstName: "Ashish",
//     age: 20,
//     about: function() {
//             console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//         } // this means our object
// }
// person.about();


function PersonInfo() {
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person1 = {
    firstName: "Ashish",
    age: 20,
    about: PersonInfo
}
const person2 = {
    firstName: "Akash",
    age: 22,
    about: PersonInfo
}
const person3 = {
    firstName: "Manish",
    age: 22,
    about: PersonInfo
}

person1.about();
person2.about();
person3.about();