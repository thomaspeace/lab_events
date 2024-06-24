//selectors
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector('#list');
// const deleteButon = document.createElement('button');

//logic
todoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newTodoItem = document.createElement('li');
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete';
    newTodoItem.innerText = event.target["new-todo"].value;
    todoList.appendChild(newTodoItem);
    todoList.appendChild(deleteButton);
})

const deleteButton = document.createElement('button')
todoList.addEventListener('click', () => {
    todoList.removeChild(this.todoList);
});
