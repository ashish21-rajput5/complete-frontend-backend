// some old methods to support poor IE
// appendChild
//  insertBefore
// removeChild
// replaceChild

const ul = document.querySelector(".todo-list");
//new element
const li = document.createElement("li");
li.textContent = "Namaste Duniya";


const referenceNode = document.querySelector(".first-todo");

// ul.appendChild(li);
// ul.insertBefore(li, referenceNode);
// ul.removeChild(referenceNode);