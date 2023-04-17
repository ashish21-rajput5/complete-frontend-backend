// little practice with click event

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "red";
    })
})