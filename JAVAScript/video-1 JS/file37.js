// difference b|w dot and bracket notation

const key = "email";
const person = {
    name: "Ashish",
    age: 20,
    "person hobbies": ["pubg", "cricket", "football", "listing music"]
};
person[key] = "ashishrajput@gmail.com";
// by using space named variable (person hobbies) that type variable we can't 
// access by dot notation that is access by only bracket notation
console.log(person.age);
console.log(person["person hobbies"]);