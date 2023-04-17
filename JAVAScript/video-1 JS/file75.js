// this in arrow functions
// it will take this by our surrondings

const user1 = {
    firstName: "Ashish",
    age: 20,
    about: () => {
        // console.log(this);
        console.log(this.firstName, this.age);
    }
}

// user1.about();
user1.about.call(user1);