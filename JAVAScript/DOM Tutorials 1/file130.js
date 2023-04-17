// synchronous programming vs asynchronous programming
// synchronous programming ( JAVAScript is synchronous and single Threaded programming )

// any part of code which is further block our code 
// console.log("Script start");

// for (let i = 1; i < 10000; i++) {
//     console.log("Inside for loop");
// }
// console.log("Script end");


// setTimeOut

console.log("Script Start");

const Id = setTimeout(() => {
    console.log("Inside setTimeOut ");
}, 1000);
/*
it will handed to browser (store inside callBack queue ) by compiler & it will execute 
( callBack queue ) after execution of complete normal code 
*/

for (let i = 0; i < 100; i++) {
    console.log(".....");
}
console.log("set time out id ", Id);
console.log("clearing time out");
clearTimeout(Id);
console.log("Script End");