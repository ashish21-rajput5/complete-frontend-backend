// some function 

/*   some method ----> true/false (boolean)

   some method is true when condition true for any one  element 
 of array */

// const numbers = [3, 4, 5, 7, 9];

// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);


const userCart = [
    { productId: 1, productName: "Mobile", price: 15000 },
    { productId: 2, productName: "Laptop", price: 25000 },
    { productId: 3, productName: "TV", price: 20000 },
    { productId: 4, productName: "surface studio", price: 200000 },
];

const ifHigh = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ifHigh);