// sort method 
// ASCII Table
// char : ASCII Value

// const numbers = [4, 65, 1, 45, 100, 85, 23, 56];
// // const string = ["Ashish", "Akash", "Manish", "Ghyanshyam"];
// numbers.sort((a, b) => {
//     return a - b;
// });
// console.log(numbers);


/*
100,85 
a-b ---> 15
a-b ---> positive (greater then 0)  --->  b,a
85,100

a-b ---> negative  --->  a,b
4,65   --->  -61
*/

const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 2, productName: "p2", price: 3000 },
    { productId: 3, productName: "p3", price: 200 },
    { productId: 4, productName: "p4", price: 8000 },
    { productId: 5, productName: "p5", price: 500 },
];

// products.sort((a, b) => {
//     return a.price - b.price;
// });
// console.log(products);

const LowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(LowToHigh);
const HighToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(HighToLow);
// console.log(products);