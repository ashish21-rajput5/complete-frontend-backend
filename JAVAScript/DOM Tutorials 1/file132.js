// understand callBack

// function myFunc(callback) {
//     console.log("My function doing task 1");
//     callback();
// }
// myFunc(() => {
//     console.log("my func doing task 2");
// })



function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    } else {
        onFailure();
    }
}

getTwoNumbersAndAdd("4", 5, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong data type");
    console.log("please pass numbers only");
})