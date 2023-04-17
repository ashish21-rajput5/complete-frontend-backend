// nested destructring

const users = [
    { userId: 1, firstname: 'Ashish', gender: 'male' },
    { userId: 2, firstname: 'Akash', gender: 'male' },
    { userId: 3, firstname: 'Manish', gender: 'male' },
];

// const [user1, user2, user3] = users;
// console.log(user1.firstname, " ", user3.gender);

const [{ firstname: user1FirstName }, , { gender: user3gender }] = users;
console.log(user1FirstName);
console.log(user3gender);