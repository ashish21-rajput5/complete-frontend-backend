// add new HTML Element to page


// innerHTML to add HTML Element 
const todoList = document.querySelector(".todo-list");
// console.log(todoList);
// console.log(todoList.innerHTML);
todoList.innerHTML += "<li>New Todo</li>";


// when you should use it (you should use for changing innerHTML) ,
// when you should not(because of rendering problem)(don't use for add elements)