// this declaration by using new keyword

// const numbers = new Array(3, 6, 9); 

// const numbers = [1,2,3,4,5];
// console.log(Array.prototype);
// console.log(numbers);


function hello() {
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);