function createRandomColor(){
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)  

  return `rgb(${red}, ${green}, ${blue})`
}

function createColorBox(color){
  const newElement = document.createElement('div');
  newElement.style.backgroundColor = color;
  newElement.classList.add('ball');
  colorBoard.appendChild(newElement);
}

function destructBoardBox (){
  const elementList = document.querySelectorAll('.ball')
  for (const iterator of elementList) {
    colorBoard.removeChild(iterator);
  }
}


function populateOptions() {
  for (let elemento = 0; elemento < 6; elemento += 1) {
    let color = createRandomColor();
    createColorBox(color);
  }
}

function createColorBoard() {
  destructBoardBox()
  populateOptions()
}

function restartGame() {
  answerText.textContent = 'Escolha uma cor'
  createColorBoard()
}

const colorBoard = document.querySelector('#color-board')
const resetGame = document.querySelector('#reset-game')
const answerText = document.querySelector('#answer')

resetGame.addEventListener('click', restartGame)