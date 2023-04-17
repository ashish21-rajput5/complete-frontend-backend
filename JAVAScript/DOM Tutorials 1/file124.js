const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let num = 0;
        for (let i = 0; i <= 1000000000; i++) {
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})
let outerloop = 0;
for (let i = 0; i <= 1000000000; i++) {
    outerloop += i;
}
console.log("value of outer var is ", outerloop);