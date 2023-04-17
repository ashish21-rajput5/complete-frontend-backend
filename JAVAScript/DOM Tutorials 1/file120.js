// intro to events
// click
// there are three main methods to add event

// 1.)
const btn = document.querySelector(".btn-headline");
// console.log(btn);
// console.dir(btn);
// btn.onclick = function() {
//     console.log("You Clicked Me !!!!!!");
// }

// method ----- addEventListener
// function clickMe() {
//     console.log("You clicked me !!!!!");
// }
// btn.addEventListener("click", clickMe);

// or same thing

btn.addEventListener("click", () => {
    console.log("you clicked me !!!!");
});