//  elem.insertAdjacentHTML(where, HTML)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("afterend", "<li>Teach Students</li>");