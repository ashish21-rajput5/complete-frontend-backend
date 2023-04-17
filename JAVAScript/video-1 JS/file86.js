// class keyword ( class are fake)

// Class constructor (CreateUser) cannot be invoked without 'new' keyword

class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "Jay Shree Ram Jay Shree Ram Jay Shree Ram";
    }
    func(a) {
        console.log(a);
    }
}

const user1 = new CreateUser('Ashish', 'Rajput', 'ashish.rajput_me21@gal.ac.in', 20, 'my address');
const user2 = new CreateUser('Akash', 'Rajput', 'akash.rajput_cs19@gal.ac.in', 22, 'my address');
const user3 = new CreateUser('Manish', 'Rajput', 'manish.rajput_cs19@gal.ac.in', 22, 'my address');

// console.log(user1);
// console.log(user2.about());
// console.log(user1.sing());
// console.log(user2.is18());

user1.func("Ashish");



















// function CreateUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} years old`;
// }
// CreateUser.prototype.is18 = function() {
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function() {
//     return "Jay Shree Ram";
// }