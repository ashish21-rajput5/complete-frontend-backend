// proto , prottype, class

// const user = {
//     firstName: "Ashish",
//     lastName: "Rajput",
//     email: "ashish.rajput_me21@gal.ac.in",
//     age: 20,
//     address: "house number, colony, city, pincode, state",
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     }
// }


// 1.) function (that function create object)
// 2.) add key value pair
// 3.) it will return object

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function() {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('Ashish', 'Rajput', 'ashish.rajput_me21@gal.ac.in', 20, 'my address');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
// there is some problems
// those fixed in next file