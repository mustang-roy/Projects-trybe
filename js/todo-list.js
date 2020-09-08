function selectItem(item) {
  let itemList = document.querySelectorAll('li');

  for (const iterator of itemList) {
    iterator.classList.remove('selected')
  }

  item.classList.add('selected')
}

function addToDo() {
  let newItemList = document.createElement('li')
  newItemList.textContent = textToDo.value;
  newItemList.addEventListener('click', () => {selectItem(newItemList)})
  listToDo.appendChild(newItemList)
}

const listToDo = document.querySelector('#list-todo')
const textToDo = document.querySelector('#texto-tarefa');
const btnAddToDo = document.querySelector('#criar-tarefa');

btnAddToDo.addEventListener('click', addToDo)