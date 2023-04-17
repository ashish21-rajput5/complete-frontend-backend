// how to iterate object

const person = {
    name: "Ashish",
    age: 20,
    "person hobbies": ["pubg", "cricket", "football", "listing music"]
};

// 1. for in loop
// 2. Object.keys   that two ways by we can iterate objects


// 1.
// for (let key in person) {
//     console.log(person[key]);
//     // console.log(person.key);  it will give undefined
// }

// for (let key in person) {
//     // console.log(`${key}:${person[key]}`);
//     console.log(key, person[key]);
// }


// 2.
// console.log(typeof Object.keys(person));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

for (let key of Object.keys(person)) {
    //console.log(key);
    console.log(person[key]);
}