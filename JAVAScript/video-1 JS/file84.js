// if we don't access prototype keys we access function then we do this

function CreateUser(firstName, lastName, email, age, address) {
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

const user1 = new CreateUser('Ashish', 'Rajput', 'ashish.rajput_me21@gal.ac.in', 20, 'my address');
const user2 = new CreateUser('Akash', 'Rajput', 'akash.rajput_cs19@gal.ac.in', 22, 'my address');
const user3 = new CreateUser('Manish', 'Rajput', 'manish.rajput_cs19@gal.ac.in', 22, 'my address');

for (let key in user1) {
    // console.log(key);
    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}