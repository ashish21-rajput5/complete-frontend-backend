// reduce method
// it will take callback function as a input 

// const numbers = [1, 2, 3, 4, 5, 15];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100); // it is the initial value of accumulator

// console.log(sum); // array sum + accumulator initial value == final sum

// accumulator   , currentValue ,  return 
// 1                2               3
// 3                3               6
// 6                4               10
// 10               5               15
// 15               15              30


const userCart = [
    { productId: 1, productName: "Mobile", price: 15000 },
    { productId: 2, productName: "Laptop", price: 25000 },
    { productId: 3, productName: "TV", price: 20000 }
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// totalPrice     currentProduct     return 
// 0              {product 1}        15000
// 15000          {product 2}        40000
// 40000          {product 3}        60000