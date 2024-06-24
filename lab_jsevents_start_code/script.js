//selectors
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector('#new-todo');
const todoList = document.querySelector('#list');


//logic
todoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newTodoItem = document.createElement('li');

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () => {
    todoList.removeChild(newTodoItem);
    todoList.removeChild(deleteButton);
    });

    newTodoItem.innerText = event.target["new-todo"].value;
    todoList.appendChild(newTodoItem);
    todoList.appendChild(deleteButton);
});



