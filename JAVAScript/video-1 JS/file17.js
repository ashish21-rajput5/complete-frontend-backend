// nested if else

// winning number 19
// 19 guess is right
// 18 too low
// 20 too high

let winningNumber = 19;
let userGuess = prompt("Guess a number");

console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber) {
    console.log("your guess is right");
} else {
    if (userGuess > winningNumber) {
        console.log("too high");
    } else {
        console.log("too low");
    }
}