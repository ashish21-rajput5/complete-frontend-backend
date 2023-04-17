// Objects ( reference type)
// array are good but not sufficient
// for real world data
// Object store key value pairs
// Object don't have index

// how to create objects

const person = {
    name: "Ashish",
    age: 20,
    hobbies: ["pubg", "cricket", "listing music"]
};
console.log(person);

// // how to access data from objects 
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);


// how to add key(also called properties) value pairs to objects
// person.gender = "male";
person["gender"] = "male";
// console.log(person);