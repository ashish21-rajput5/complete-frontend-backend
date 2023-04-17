// call , apply , bind

// const user1 = {
//     firstName: "Ashish",
//     age: 20,
//     about: function(hobby, fevGame) {
//         console.log(this.firstName, this.age, hobby, fevGame);
//     }
// }
// const user2 = {
//     firstName: "Akash",
//     age: 22,
// }

// user1.about.call(user2, "PUBG", "cricket");


// or

function about(hobby, fevGame) {
    console.log(this.firstName, this.age, hobby, fevGame);
}

const user1 = {
    firstName: "Ashish",
    age: 20,
}
const user2 = {
    firstName: "Akash",
    age: 22,
}

// about.call(user2, "PUBG", "cricket");

// apply 

// about.apply(user2, ["PUBG", "cricket"]);
const func = about.bind(user2, "PUBG", "cricket");
func();