// const userMathods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     },
//     sing: function() {
//         return "Jay Shree Ram";
//     }
// } 
// that work done by prototype method in line(25 to 33)

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMathods.about;
    // user.is18 = userMathods.is18;
    return user;
}
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
createUser.prototype.sing = function() {
    return "Jay Shree Ram";
}

// console.log(createUser.prototype);

const user1 = createUser('Ashish', 'Rajput', 'ashish.rajput_me21@gal.ac.in', 20, 'my address');
const user2 = createUser('Akash', 'Rajput', 'akash.rajput_cs19@gal.ac.in', 22, 'my address');
const user3 = createUser('Manish', 'Rajput', 'manish.rajput_cs19@gal.ac.in', 22, 'my address');
console.log(user1);
console.log(user1.about());
console.log(user1.sing());
console.log(user1.is18());