// importent array methods

// forEach 
// map 
// filter
// reduce

const array = [4, 2, 6, 8];
/*
function multipaly(number, index) {
    console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
}
by forEach 
array.forEach(multipaly);

or 
array.forEach(function(number, index) {
    console.log(`index is ${index} and number is ${number}`);
});
*/


const users = [
    { firstName: "Ashish", age: 20 },
    { firstName: "Akash", age: 23 },
    { firstName: "Manish", age: 23 },
    { firstName: "Ghyanshayam", age: 23 }
];
// users.forEach(function(user) {
//     console.log(user.firstName);
//     console.log(user.age);
// }) 
// or arrow function
users.forEach((user) => {
    console.log(user.firstName);
    console.log(user.age);
})