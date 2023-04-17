// objects inside array
// very useful in real world application

const users = [
    { userId: 1, firstname: "Ashish", gender: "male" },
    { userId: 2, firstname: "Akash", gender: "male" },
    { userId: 3, firstname: "Manish", gender: "male" },
]

for (let user of users) {
    console.log(user.firstname);
}