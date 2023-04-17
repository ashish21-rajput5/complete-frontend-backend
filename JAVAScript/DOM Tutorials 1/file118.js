// static list vs live list 

// querySelectorAll will give us static list
// getElementsBySomething will give us live list(HTMLCollection)

// const listItem = document.querySelectorAll(".todo-list li");
const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "Item 6";
// const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItem);