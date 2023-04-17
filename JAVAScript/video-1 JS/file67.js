// Sets (it is iterable)
/*
they store data 
they also have our own mathods
no index-based access
order is not gauranted
unique items only (no duplicate allowed)
*/

// const numbers = new Set([1, 2, 3, 3]);
// const myArray = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
/*
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);
  // it is treated as we add two different arrays in set that's
  why they will shown in set
*/

// numbers.add(myArray);
// numbers.add(myArray);
// /*  if we define any array and when we try to push in set multiple
//  times then it will store only one time in set  */

// if (numbers.has(1)) {
//     console.log("1 is present");
// } else {
//     console.log("1 is absent")
// }

// console.log(numbers);

// console.log(numbers[1]);


// for (let number of numbers) {
//     console.log(number);
// }

const myNumbers = [1, 2, 3, 4, 2, 5, 6, 4, 2, 6, 6, 5]
const uniqueElements = new Set(myNumbers);
let length = 0;
for (let number of uniqueElements) {
    length++;
}
console.log(length);