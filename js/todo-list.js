function selectItem(item) {
  let itemList = document.querySelectorAll('li');

  for (const iterator of itemList) {
    iterator.classList.remove('selected')
  }

  item.classList.add('selected')
}

function setEventsToElement (element) {
  element.addEventListener('click', () => {selectItem(element)})
  element.addEventListener('dblclick', () => {completedItem(element)})
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
  setEventsToElement(newItemList)
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

function storageAllToDo() {
  const contentToStorage = document.querySelector('ol').innerHTML;
  localStorage.setItem('ToDoList', contentToStorage);
}

function replaceToDo() {
  const elementToStorage = document.querySelector('ol')
  elementToStorage.innerHTML = localStorage.getItem('ToDoList')
  replaceEvents()
}

function replaceEvents() {
  elementsToAddEvents= document.querySelectorAll('li')
  for (const iterator of elementsToAddEvents) {
    setEventsToElement(iterator);
  }
}

const listToDo = document.querySelector('#lista-tarefas')
const textToDo = document.querySelector('#texto-tarefa');
const btnAddToDo = document.querySelector('#criar-tarefa');
const btnRemoveAll = document.querySelector('#apaga-tudo');
const btnRemoveCompleted = document.querySelector('#remover-finalizados')
const btnSaveState = document.querySelector('#salvar-tarefas')

btnAddToDo.addEventListener('click', createToDo)
btnRemoveAll.addEventListener('click', removeAll)
btnRemoveCompleted.addEventListener('click', removeCompleted)
btnSaveState.addEventListener('click', storageAllToDo)

window.onload = replaceToDo