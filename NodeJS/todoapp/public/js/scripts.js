/* public/js/scirpts.js */

document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const todoinput = document.getElementById("todoInput").value;

    fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({todos: todoinput}),
    })
    .then(response => response.json())
    .then(data => {
        updateTodoList(data.todos);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    document.getElementById("todoInput").value = "";
});

function updateTodoList(todos) {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function(){
    fetch('/todos')
    .then(response => response.json())
    .then(data => {
        updateTodoList(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});