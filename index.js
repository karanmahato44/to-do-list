
const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListsHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
      <div class="mt-2 border border-red-400 whitespace-wrap overflow-hidden">${name}</div>
      <div class="mt-2 border border-blue-400 items-center">${dueDate}</div>
      <div class="mt-2 border border-green-400"><button class="bg-red-400 rounded-full w-20 h-full cursor:pointer items-center" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();">delete</button></div>
    `;
    
    todoListsHTML += html;
  }
  document.querySelector('.js-show-todolist').innerHTML = todoListsHTML;
}

function addTodo() {
  const inputElm = document.querySelector('.js-text-input');
  const ipFieldText = inputElm.value;

  const dateinputElm = document.querySelector('.js-due-date-input');
  const dueDateInputTxt = dateinputElm.value;

  todoList.push({
    name: ipFieldText,
    dueDate: dueDateInputTxt
  });

  inputElm.value = '';
  // dueDateInputTxt.value = '';
  renderTodoList();
}



function foo(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}