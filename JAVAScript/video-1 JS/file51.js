// default parameters

// function addTwo(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }
// console.log(addTwo(4));

function addTwo(a, b = 0) {
    return a + b;
}
console.log(addTwo(4));