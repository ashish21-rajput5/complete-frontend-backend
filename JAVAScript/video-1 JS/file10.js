// templete string

let age = 19;
let firstName = "Ashish";

// " mya name is Ashish and my age is 19"
//without template string
// let aboutme = " my name is " + firstName + " and my age is " + age;
// console.log(aboutme);

//with template string
let aboutme = `my name is ${firstName} and my age is ${age}`;
console.log(aboutme);