const addBtn = document.getElementById("add-btn");
const todoUl = document.getElementById("todos");
addBtn.addEventListener("click", () => {
    let todoValue = document.getElementById("todo-input").value;
    const todoLi = document.createElement("li");
    todoLi.textContent = todoValue;
    todoLi.classList.add("todo");
    todoUl.appendChild(todoLi);
    todoLi.addEventListener("click", () => {
        todoLi.classList.add("done");
    })
});

document.getElementById("submit-btn").addEventListener("click", function() {
    let inputValue = document.getElementById("name-input").value;
    alert("Hello, " + inputValue);
});