// IMPORTANT

// premitive vs reference data type
/* data types ( primitive data types)
1. string = "Ashish"
2. number - 2, 4, 5.6, 12.8
3. booleans
4. undefines
5. null
6. BigInt
7. symbol
*/

// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num1++;
// console.log("After incrementing num1");
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);


// reference types
// array

let array1 = ["Ashish", "Rajput"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("Rishi");
console.log("array1", array1);
console.log("array2", array2);