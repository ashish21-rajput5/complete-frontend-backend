const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']")
console.log(todoInput);

todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHTML;
    // console.log(newLi);
    todoList.append(newLi);
    // console.log(todoInput.value);
    todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
    // console.log(e.target);
    // check if user clicked on done button
    // if (e.target.classList.contains("remove")) {
    //     console.log("you want to remove something");
    // }

    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        // console.log("great");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
})