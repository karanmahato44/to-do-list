
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
      <div class="mt-4 whitespace-normal text-center">${name}</div>
      <div class="mt-4">${dueDate}</div>
      <div class="mt-4"><button class="bg-red-400 rounded-full w-20 sm:w-36 h-full cursor:pointer" onclick="
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