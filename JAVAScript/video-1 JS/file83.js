/*
//  new keyword

function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function() {
    console.log(this.firstName, this.age);
}
const user1 = new createUser("Ashish", 20);

// // new keyword
// 1.) empty object this = {}
// 2.) return this

user1.about();
*/


// constructor function
// if we create function  in future it call only by using new 
// then we create that function with first capital letter 

function CreateUser(firstName, lastName, email, age, address) {
    // const user = Object.create(createUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}
CreateUser.prototype.is18 = function() {
    return this.age >= 18;
}
CreateUser.prototype.sing = function() {
    return "Jay Shree Ram";
}

// console.log(createUser.prototype);

const user1 = new CreateUser('Ashish', 'Rajput', 'ashish.rajput_me21@gal.ac.in', 20, 'my address');
const user2 = new CreateUser('Akash', 'Rajput', 'akash.rajput_cs19@gal.ac.in', 22, 'my address');
const user3 = new CreateUser('Manish', 'Rajput', 'manish.rajput_cs19@gal.ac.in', 22, 'my address');
console.log(user1);
console.log(user1.about());
console.log(user1.sing());
console.log(user1.is18());