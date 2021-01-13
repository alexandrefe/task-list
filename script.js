// Salvando os elementos

const inputTask = document.querySelector('.inputTask')

const buttonTask = document.querySelector('.buttonTask')

const taskList = document.querySelector('.tasklist')

// Adicionando Event Listeners aos elementos

buttonTask.addEventListener('click', addTask)

// Adicionando Task com check button and delete button

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

  if(inputTask.value === "") {
    return null
  }

  // Append para atual LIST
  taskList.appendChild(taskDiv);

}


