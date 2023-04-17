// find method 

/*
const myArray = ["Namaste", "Cat", "Dog", "Lion"];

// function isLength3(string) {
//     return string.length === 3;
// }
// const ans = myArray.find(isLength3);
 
const ans = myArray.find((string) => string.length === 3);
console.log(ans);
*/


const users = [
    { userId: 1, userNmae: "Ashish" },
    { userId: 2, userNmae: "Akash" },
    { userId: 3, userNmae: "Ghayanshyam" },
    { userId: 4, userNmae: "Manish" },
];

const Id = users.find((user) => user.userId === 4);
console.log(Id);