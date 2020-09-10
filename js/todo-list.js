function selectItem(item) {
  let itemList = document.querySelectorAll('li');

  for (const iterator of itemList) {
    iterator.classList.remove('selected')
  }

  item.classList.add('selected')
}

function completedItem(item) {
  item.classList.remove('selected')
  item.classList.toggle('completed')
}

function createToDo() {
  if (textToDo.value != ''){
    return addToDo()
  }  
    return alert('Input Vazio')
}

function addToDo() {
  let newItemList = document.createElement('li')
  newItemList.textContent = textToDo.value;
  newItemList.addEventListener('click', () => {selectItem(newItemList)})
  newItemList.addEventListener('dblclick', () => {completedItem(newItemList)})
  listToDo.appendChild(newItemList)

  textToDo.value = ''
}

function removeAll (){
  elementsToRemove = document.querySelectorAll('li')

  for (const element of elementsToRemove) {
    listToDo.removeChild(element)
  }
}

function removeCompleted (){
  elementsToRemove = document.querySelectorAll('.completed')

  for (const element of elementsToRemove) {
    listToDo.removeChild(element)
  }
}


const listToDo = document.querySelector('#lista-tarefas')
const textToDo = document.querySelector('#texto-tarefa');
const btnAddToDo = document.querySelector('#criar-tarefa');
const btnRemoveAll = document.querySelector('#apaga-tudo');
const btnRemoveCompleted = document.querySelector('#remover-finalizados')

btnAddToDo.addEventListener('click', createToDo)
btnRemoveAll.addEventListener('click', removeAll)
btnRemoveCompleted.addEventListener('click', removeCompleted)