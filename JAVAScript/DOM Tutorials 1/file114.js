// document.createElement()
// append (add in last)
// prepend (add in start)
// remove
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");

// append
// // newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem); // in place of append we also use appendChild

// prepend
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);


// remove
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);


// before
// after
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);