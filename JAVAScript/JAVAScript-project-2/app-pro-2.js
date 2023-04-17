const myInput = document.getElementById("input-event");


// keyup
// input(prefer input then keyup)
// change

// myInput.addEventListener("keyup", () => {
//     console.log(myInput.value);
// });
// myInput.addEventListener("input", () => {
//     console.log(myInput.value);
// });
myInput.addEventListener("change", () => {
    console.log(myInput.value);
});