// every method

// const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((number) => number % 2 === 0);
// console.log(ans);

// callback function ----> true/false (boolean)
/*   every method ----> true/false (boolean)

   every method is true when condition true for every element 
 of array */


const userCart = [
    { productId: 1, productName: "Mobile", price: 15000 },
    { productId: 2, productName: "Laptop", price: 25000 },
    { productId: 3, productName: "TV", price: 20000 }
];

const IfLess = userCart.every((cartItem) => cartItem.price < 30000);
console.log(IfLess);