// buttons
const todoModalBtn = document.querySelector('.add-todo');
const closeTodoModal = document.querySelector('.close-todo-modal');
const createTodoBtn = document.querySelector('.create-todo');
const openTodo = document.querySelector('.open-todo-btn');
const closeInfoModal = document.querySelector('.close-info-modal');
const deleteTodoBtn = document.querySelector('.delete-todo');
const completeTodoBtn = document.querySelector('.complete-todo');
const completeBtn = document.querySelector('.complete-btn');
const activeTodoBtn = document.querySelector('.active-todo-btn');

// divs
const todoModal = document.querySelector('.todo-modal');
const todoContainer = document.querySelector('.todo-card-container'); // holds the todo card
const openTodoModal = document.querySelector('.open-todo-modal');
const completedTodosContainer = document.querySelector('.completed-todo-container');

const todoHeading = document.querySelector('.todo-heading');
const todoDesc = document.querySelector('.todo-desc');

// form and inputs
const todoForm = document.querySelector('.todo-form');

const createCard = (todoHeading, todoDescription) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoCard.innerHTML = `<h3>${todoHeading}</h3>
    <p>${todoDescription}</p>
    <button class="open-todo-btn">Open Todo</button>
    `;

    return todoCard;
}

const generateTodoCard = (todoHeading, todoDescription) => {
    const todoCard = createCard(todoHeading, todoDescription);
    todoContainer.append(todoCard);
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let todoTitle = e.target[0].value;
    let todoDescription = e.target[1].value;

    if (todoTitle === "" || todoDescription === "") {
        return alert("Please provide both title and description");
    }

    let existingTodos = JSON.parse(localStorage.getItem('todo')) || [];
    const newTodo = { title: todoTitle, description: todoDescription };
    existingTodos.push(newTodo);

    localStorage.setItem('todo', JSON.stringify(existingTodos));

    generateTodoCard(todoTitle, todoDescription);
    todoModal.classList.remove('visible');
    e.target[0].value = "";
    e.target[1].value = "";
})

todoModalBtn.addEventListener('click', () => {
    todoModal.classList.add('visible');
});

closeTodoModal.addEventListener('click', () => {
    todoModal.classList.remove('visible');
})

closeInfoModal.addEventListener('click', () => {
    openTodoModal.classList.remove('visible');
})

const generateExistingTodoCards = () => {
    const existingTodos = JSON.parse(localStorage.getItem('todo')) || [];
    existingTodos.forEach(todo => {
        generateTodoCard(todo.title, todo.description);
    });
};

document.addEventListener('DOMContentLoaded', generateExistingTodoCards);

todoContainer.addEventListener('click', (e) => {
    const openTodoButton = e.target.closest('.open-todo-btn');
    if (openTodoButton) {
        openTodoModal.classList.add('visible');
    }
    const heading = e.target.closest('.todo-card').children[0].innerText;
    const description = e.target.closest('.todo-card').children[1].innerText;
    todoHeading.innerText = heading;
    todoDesc.innerText = description;

});

deleteTodoBtn.addEventListener('click', () => {
    const heading = todoHeading.innerText;
    let todos = JSON.parse(localStorage.getItem('todo')) || [];
    const updatedTodos = todos.filter(todo => todo.title !== heading);
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
    openTodoModal.classList.remove('visible');
    location.reload();
});

completeTodoBtn.addEventListener('click' , () => {
    const heading = todoHeading.innerText;
    let todos = JSON.parse(localStorage.getItem('todo')) || [];
    const updatedTodos = todos.filter(todo => todo.title !== heading);
    localStorage.setItem('todo', JSON.stringify(updatedTodos));

    let existingTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    const newTodo = { title: heading, description: todoDesc.innerText };
    existingTodos.push(newTodo);

    localStorage.setItem('completedTodos', JSON.stringify(existingTodos));

    openTodoModal.classList.remove('visible');
    location.reload();
})

completeBtn.addEventListener('click' , () => {
    todoContainer.classList.remove('todo-card-container');
    todoContainer.style.display = "none";
    completedTodosContainer.classList.add('visible');
})

activeTodoBtn.addEventListener('click' , () => {
    todoContainer.classList.add('todo-card-container');
    todoContainer.style.display = "flex";
    completedTodosContainer.classList.remove('visible');
})

const generateCompletedTasks = () => {
    const existingTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    console.log(existingTodos);
    existingTodos.forEach(todo => {
        console.log(todo.description);
        const card = createCard(todo.title, todo.description);
        completedTodosContainer.append(card);
    });
}

document.addEventListener('DOMContentLoaded', generateCompletedTasks);