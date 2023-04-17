// map (it is iterables)
/* 
they store data in ordered fashion

stor key value pairs (like object)
duplicate keys are not allowed likes objects

different between maps and objects

object can only have strings of symbol
as key 

in maps you can use anything as key 
like array, number, string 

*/

// object literals 
// on object we can use only for in loop no for of loop
// key -> string(99%)
// key -> symbol(1%)

// const person = {
//     firstName: "Ashish",
//     age: 20,
//     1: "One"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person[1]);
// for (let key in person) {
//     console.log(typeof key);
// }


// map ----------------------------------------------


// const person = new Map();
// person.set('firstName', 'Ashish');
// person.set('age', 20);
// person.set(1, 'one');
// person.set([1, 2, 3], 'oneTwoThree');
// person.set({ 1: 'one' }, 'oneTwoThree');

// console.log(person);
// console.log(person.get('firstName'));

// for (let key of person.keys()) {
//     console.log(key, typeof key);
// }


// for (let [key, value] of person) {
//     // console.log(Array.isArray(key));  
//     console.log(key, value);
// }


// const person = new Map([
//     ['firstName', 'Ashish'],
//     ['age', 7]
// ]);
// for (let [key, value] of person) {
//     console.log(key, value);
// }


const person1 = {
    Id: 1,
    firstName: "Ashish"
}
const person2 = {
    Id: 2,
    firstName: "Akash"
}

const exterInfo = new Map();
exterInfo.set(person1, { age: 20, gender: 'male' });
exterInfo.set(person2, { age: 22, gender: 'male' });
// console.log(exterInfo);
// console.log(person1.Id);
console.log(exterInfo.get(person1).age);
console.log(exterInfo.get(person2).age);