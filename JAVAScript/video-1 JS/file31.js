// use const for creating array


const fruits = ["mango", "apple"];
fruits = ["pineapple", "banana"]; //directly we can't change the value


// const is not behaving like const because arrays are reference variables
// they store in heap mamory so, by pushing we can change array 
// mostly we use const for array creation
fruits.push("banana");
console.log(fruits);