//selectors
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector('#list');

//logic
todoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newTodoItem = document.createElement('li');
    newTodoItem.innerText = event.target["new-todo"].value
    todoList.appendChild(newTodoItem);
})