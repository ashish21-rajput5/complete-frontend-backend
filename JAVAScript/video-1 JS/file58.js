// filter mathod
// in filter functions function always returns boolen(true or false) 

const numbers = [3, 5, 2, 8, 6, 1, 4, 9];

// const isEvan = function(number) {
//     return number % 2 === 0;
// };

// const evenNumbers = numbers.filter(isEvan);
// console.log(evenNumbers);


//or
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers);