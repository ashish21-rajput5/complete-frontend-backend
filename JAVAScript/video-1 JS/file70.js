// optional chaining

const user = {
    firstName: "Ashish",
    address: { houseNumber: 'A-15' }
}

// this is wrong
// console.log(user.firstName);
// console.log(user.address.houseNumber);


// this is right
// console.log(user ? .firstName);
// console.log(user ? .address ? .houseNumber);