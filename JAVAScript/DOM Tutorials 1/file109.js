// loops 

// get multiple elements using getElementByClassName
// get multiple elements using getElementByTagName
// get multiple elements using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollector
// const navItems = document.getElementsByTagName("a");

// console.log(navItems);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));

/*
1. simple for loop 
2. for of loop
3. forEach
Note 1 - we can't use forEach method to iterate through HTMLCollection
     2 - array like object ---> indexing, length properties
*/

// for (let i = 0; i < navItems.length; i++) {
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// let navItems = document.getElementsByTagName("a");
// navItems = Array.from(navItems);
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);


// NodeList  method -------------------------------------------------------------------------------------------

let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
// 1. simple for loop 
// 2. for of loop
// 3. forEach
// for (let i = 0; i < navItems.length; i++) {
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"; 
//     navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })