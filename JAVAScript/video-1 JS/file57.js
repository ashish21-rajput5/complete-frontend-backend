// map method

const numbers = [2, 4, 7, 1, 9];

// const square = function(number) {
//     return number * number;
//     // console.log(number * number); // it is not good
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber = numbers.map((number, index) => {
//     return `index: ${index}->${number * number}`;
// });
// console.log(squareNumber);


const users = [
    { firstName: "Ashish", age: 20 },
    { firstName: "Akash", age: 23 },
    { firstName: "Manish", age: 23 },
    { firstName: "Ghyanshayam", age: 23 }
];

const userNames = users.map((user) => {
    return user.firstName;
});
console.log(userNames);