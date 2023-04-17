// inside object funation also called as method


// const user1 = {
//     firstName: "Ashish",
//     age: 20,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }
// }

// or

const user1 = {
    firstName: "Ashish",
    age: 20,
    about() {
        console.log(this.firstName, this.age);
    }
}
user1.about();