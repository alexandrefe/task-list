// Storing Elements 

const inputTask = document.querySelector('.inputTask')

const buttonTask = document.querySelector('.buttonTask')

const taskList = document.querySelector('.tasklist')

// Adding Event Listeners to elements

buttonTask.addEventListener('click', addTask)

// Adding a Task with check button and delete button

function addTask(event) {

  event.preventDefault()

  // task Div

  const taskDiv = document.createElement('div')

  taskDiv.classList.add('tasklist')

  // task LI

  const newTask = document.createElement('li')

  newTask.innerText = inputTask.value

  newTask.classList.add('task_item')

  taskDiv.appendChild(newTask)


}

