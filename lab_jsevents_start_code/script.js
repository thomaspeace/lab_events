//selectors
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector('#new-todo');
const todoList = document.querySelector('#list');
const showDateButton = document.querySelector('#show-date');
const completedList = document.querySelector('#completed-list');


//logic
todoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newTodoItem = document.createElement('li');

    const completeButton = document.createElement('button')
    completeButton.textContent = 'complete';

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete';

    deleteButton.addEventListener('click', () => {
        todoList.removeChild(newTodoItem);
        todoList.removeChild(completeButton);
        todoList.removeChild(deleteButton);
    });

    completeButton.addEventListener('click', () => {
        newTodoItem.style.color = 'gray';
        newTodoItem.style.textDecoration = 'line-through';

        completedList.appendChild(newTodoItem);
        todoList.removeChild(completeButton);
        todoList.removeChild(deleteButton);
    });


    newTodoItem.innerText = event.target["new-todo"].value;
    todoList.appendChild(newTodoItem);
    todoList.appendChild(completeButton);
    todoList.appendChild(deleteButton);
});


showDateButton.addEventListener('click', () =>{
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    
    document.getElementById("date").innerHTML = `${currentTime} , ${currentDate}`;
});


