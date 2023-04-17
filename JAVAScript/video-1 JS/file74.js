const user1 = {
    firstName: "Ashish",
    age: 20,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

// don't do that mistake

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();