//1. trim()
//2. toUppercase()
//3. toLowercase()
//4. slice

//1.
let firstName = "    Ashish         ";

console.log(firstName.length);
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

//2.

firstName = firstName.toUpperCase();
console.log(firstName);

//3.
firstName = firstName.toLowerCase();
console.log(firstName);

//4.
let newName = firstName.slice(0, 4);
console.log(newName);