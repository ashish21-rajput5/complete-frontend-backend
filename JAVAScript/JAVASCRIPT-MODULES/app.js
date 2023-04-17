// import { firstName as fname, lastName as lname } from './utils/Fname.js';

// console.log(fname, lname);



// import { age } from './utils/age.js';
// console.log(fname + " " + age);


// import Person from './utils/Person.js';
// import { Person2 } from './utils/Person.js'; 
//or
// import Person, { Person2 } from './utils/Person.js';  // only default class we write outSide of curlyBraises
import something, { Person, Person2 } from './utils/Person.js';

const person = new Person("Ashish", "Rajput", 20);
const person2 = new Person("Akash", "Rajput", 22);
person.info();
person2.info();
console.log(person);
console.log(person2);

console.log(something);