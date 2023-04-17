// splice method 
// start,  delete, insert

const myArray = ["item1", "item2", "item3"];

// delete 
// myArray.splice(1, 1); 
// const deleted = myArray.splice(1, 1);
// console.log(deleted);
/* first value shows index and second value shows how many values do 
 you want to delete */


// insert
// myArray.splice(1, 0, "inserted item");


// insert and delete togeather or simaltainiasly
myArray.splice(2, 1, "inserted item");

console.log(myArray);