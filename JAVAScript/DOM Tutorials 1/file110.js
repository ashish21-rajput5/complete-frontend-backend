// innerHTML

const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML);
headLine.innerHTML = "<h1> Inner HTML Changed </h1>";
headLine.innerHTML += "<button class=\"btn\">Learn More</button>"; //   ( \" --- mean --->  "  )
console.log(headLine.innerHTML);