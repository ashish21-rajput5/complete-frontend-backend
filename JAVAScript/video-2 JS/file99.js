// colsures
// closures : 30-40%
//  analyse : 70-80%
// real example : 100%

// function can return function

// function outerFunction() {
//     function innerFunction() {
//         console.log("Namaste Duniya");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();




// function printFullName(firstName, lastName) {
//     function printName() {
//         console.log(firstName, lastName);
//     }
//     return printName;
// }

// const ans = printFullName("Ashish", "Rajput");
// // console.log(ans);
// ans();



function hello(x) {
    const a = "varA";
    const b = "varB";
    return function() {
        console.log(a, b, x);
    }
}

const ans = hello("arg");
ans();